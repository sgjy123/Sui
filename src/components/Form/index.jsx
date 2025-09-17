import React, { createContext, useContext, useMemo, useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../Input/style.less';
import './style.less';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

const FormContext = createContext(null);

const useForm = (form) => {
  const storeRef = useRef({});
  const callbacksRef = useRef({});
  const errorsRef = useRef({});
  const touchedRef = useRef({});
  const subscribersRef = useRef(new Set());
  const itemRegistryRef = useRef({});

  const setInitialValues = (initialValues = {}, overwrite = false) => {
    if (overwrite) {
      storeRef.current = { ...initialValues };
    } else {
      storeRef.current = { ...initialValues, ...storeRef.current };
    }
  };

  const setCallbacks = (callbacks) => {
    callbacksRef.current = callbacks;
  };

  const getFieldValue = (name) => storeRef.current[name];
  const getFieldsValue = () => ({ ...storeRef.current });

  const setFieldsValue = (values = {}) => {
    const prev = { ...storeRef.current };
    storeRef.current = { ...storeRef.current, ...values };
    Object.keys(values).forEach((n) => { touchedRef.current[n] = true; });
    callbacksRef.current?.onValuesChange?.(values, { ...storeRef.current }, prev);
    notifyDependencies(Object.keys(values));
  };

  const resetFields = (names) => {
    if (!names) {
      storeRef.current = {};
      errorsRef.current = {};
    } else {
      names.forEach((n) => {
        delete storeRef.current[n];
        delete errorsRef.current[n];
      });
    }
    notifyDependencies([]);
  };

  const validateRules = async (name, value, rules = []) => {
    if (!rules || rules.length === 0) return [];
    const fieldErrors = [];
    for (const rule of rules) {
      if (rule.required && (value === undefined || value === '' || (Array.isArray(value) && value.length === 0))) {
        fieldErrors.push(rule.message || '该字段是必填项');
        if (rule.validateFirst) break;
        continue;
      }
      if (rule.pattern && value !== undefined && value !== '' && !rule.pattern.test(String(value))) {
        fieldErrors.push(rule.message || '格式不正确');
        if (rule.validateFirst) break;
        continue;
      }
      if (typeof rule.min === 'number' && typeof value === 'string' && value.length < rule.min) {
        fieldErrors.push(rule.message || `至少 ${rule.min} 个字符`);
        if (rule.validateFirst) break;
        continue;
      }
      if (typeof rule.max === 'number' && typeof value === 'string' && value.length > rule.max) {
        fieldErrors.push(rule.message || `至多 ${rule.max} 个字符`);
        if (rule.validateFirst) break;
        continue;
      }
      if (typeof rule.validator === 'function') {
        try {
          await rule.validator({
            field: name,
            value,
            getFieldValue,
            getFieldsValue,
          });
        } catch (e) {
          fieldErrors.push(e?.message || rule.message || '校验失败');
          if (rule.validateFirst) break;
        }
      }
    }
    return fieldErrors;
  };

  const validateFields = async (names) => {
    const fields = names || Object.keys(storeRef.current);
    const allErrors = {};
    for (const name of fields) {
      const fieldValue = storeRef.current[name];
      const item = itemRegistryRef.current[name];
      const rules = item?.rules || [];
      const errs = await validateRules(name, fieldValue, rules);
      if (errs.length) allErrors[name] = errs;
    }
    errorsRef.current = allErrors;
    notifyDependencies([]);
    if (Object.keys(allErrors).length) {
      const err = { values: { ...storeRef.current }, errorFields: Object.entries(allErrors).map(([name, errors]) => ({ name, errors })) };
      throw err;
    }
    return { values: { ...storeRef.current } };
  };

  const registerItem = (name, meta) => {
    itemRegistryRef.current[name] = { ...meta };
    return () => {
      delete itemRegistryRef.current[name];
    };
  };

  const notifyDependencies = (changedNames) => {
    subscribersRef.current.forEach((fn) => fn(changedNames));
  };

  const subscribe = (fn) => {
    subscribersRef.current.add(fn);
    return () => subscribersRef.current.delete(fn);
  };

  const submit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const { values } = await validateFields();
      callbacksRef.current?.onFinish?.(values);
    } catch (err) {
      callbacksRef.current?.onFinishFailed?.(err);
    }
  };

  const formApi = form || {
    setInitialValues,
    setCallbacks,
    getFieldValue,
    getFieldsValue,
    setFieldsValue,
    resetFields,
    validateFields,
    registerItem,
    subscribe,
    submit,
    getInternalErrors: () => errorsRef.current,
    getFieldError: (name) => errorsRef.current?.[name] || [],
    isFieldsTouched: (names) => {
      const list = names || Object.keys(touchedRef.current);
      return list.some((n) => !!touchedRef.current[n]);
    },
  };

  return [formApi];
};

const Form = ({
  form,
  initialValues,
  onFinish,
  onFinishFailed,
  onValuesChange,
  layout = 'horizontal',
  size = 'middle',
  className,
  style,
  children,
  labelCol,
  wrapperCol,
  colon = true,
  labelAlign = 'right',
  requiredMark = true,
  disabled = false,
  scrollToFirstError = false,
  ...rest
}) => {
  const [formInstance] = useForm(form);

  useEffect(() => {
    formInstance.setCallbacks({ onFinish, onFinishFailed, onValuesChange });
  }, [formInstance, onFinish, onFinishFailed, onValuesChange]);

  useEffect(() => {
    if (initialValues) formInstance.setInitialValues(initialValues, true);
  }, [formInstance, initialValues]);

  const ctx = useMemo(() => ({
    form: formInstance,
    size,
    labelCol,
    wrapperCol,
    layout,
    colon,
    labelAlign,
    requiredMark,
    disabled,
  }), [formInstance, size, labelCol, wrapperCol, layout, colon, labelAlign, requiredMark, disabled]);

  const classes = classNames(
    'sui-form',
    {
      'sui-form-horizontal': layout === 'horizontal',
      'sui-form-vertical': layout === 'vertical',
      'sui-form-inline': layout === 'inline',
      'sui-form-lg': size === 'large',
      'sui-form-sm': size === 'small',
      'sui-form-disabled': disabled,
    },
    className
  );

  const handleSubmit = async (e) => {
    if (!scrollToFirstError) return formInstance.submit(e);
    try {
      await formInstance.validateFields();
      formInstance.submit(e);
    } catch (err) {
      if (err?.errorFields?.length) {
        const first = err.errorFields[0];
        const name = first.name;
        const reg = document.querySelector(`[data-form-name="${name}"]`);
        if (reg && typeof reg.scrollIntoView === 'function') reg.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      formInstance.submit(e);
    }
  };

  return (
    <form className={classes} style={style} onSubmit={handleSubmit} {...rest}>
      <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.object,
  initialValues: PropTypes.object,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  className: PropTypes.string,
  style: PropTypes.object,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  colon: PropTypes.bool,
  onValuesChange: PropTypes.func,
  labelAlign: PropTypes.oneOf(['left', 'right']),
  requiredMark: PropTypes.bool,
  disabled: PropTypes.bool,
  scrollToFirstError: PropTypes.bool,
};

const FormItem = ({
  name,
  label,
  rules,
  children,
  extra,
  help,
  tooltip,
  hasFeedback = false,
  validateTrigger = 'onChange',
  valuePropName = 'value',
  getValueFromEvent,
  normalize,
  shouldUpdate,
  dependencies,
  noStyle = false,
  className,
  style,
  required,
  ...rest
}) => {
  const { form, size, labelCol, wrapperCol, layout, colon, labelAlign, requiredMark, disabled } = useContext(FormContext) || {};
  const [_, forceUpdate] = useState(0);

  const prevValuesRef = useRef({});
  
  useEffect(() => {
    if (!form) return;
    
    // 初始化 prevValuesRef
    if (Object.keys(prevValuesRef.current).length === 0) {
      prevValuesRef.current = { ...form.getFieldsValue() };
    }
    
    const unsubscribe = form.subscribe((changed) => {
      const currentValues = form.getFieldsValue();
      
      // shouldUpdate 优先级最高
      if (shouldUpdate) {
        if (typeof shouldUpdate === 'function') {
          const shouldRender = shouldUpdate(prevValuesRef.current, currentValues);
          if (shouldRender) {
            prevValuesRef.current = { ...currentValues };
            return forceUpdate((s) => s + 1);
          }
          return;
        } else if (shouldUpdate === true) {
          return forceUpdate((s) => s + 1);
        }
      }
      
      // dependencies 次优先级
      if (Array.isArray(dependencies) && dependencies.length > 0) {
        if (!changed || changed.length === 0) return;
        if (changed.some((n) => dependencies.includes(n))) return forceUpdate((s) => s + 1);
        return;
      }
      
      // 默认：任意变化都刷新
      forceUpdate((s) => s + 1);
    });
    let unregister;
    if (name) unregister = form.registerItem(name, { rules, required: required || rules?.some((r) => r.required) });
    return () => {
      unsubscribe?.();
      unregister?.();
    };
  }, [form, name, rules, required, shouldUpdate]);

  const errors = name ? form?.getInternalErrors?.()[name] || [] : [];
  const mergedRequired = required || rules?.some((r) => r.required);

  const value = name ? form?.getFieldValue?.(name) : undefined;

  const triggerValidate = useCallback(async (val) => {
    if (!name) return;
    const fieldErrors = await (form?.validateFields?.([name]).catch((e) => e?.errorFields?.find((f) => f.name === name)?.errors || []));
    // re-render handled by subscriber
    return fieldErrors;
  }, [form, name]);

  const getChild = () => {
    if (!children) return null;

    // 如果是函数，直接调用它（无论是否有 name）
    if (typeof children === 'function') {
      return children();
    }

    // 无 name 的场景（纯展示/布局），允许多个子节点，直接返回
    if (!name) {
      return children;
    }

    const childArray = React.Children.toArray(children);
    const controlChild = childArray.find((c) => React.isValidElement(c));
    if (!controlChild) return children;

    const childProps = { ...controlChild.props };
    if (size && childProps.size === undefined) childProps.size = size;
    if (disabled && childProps.disabled === undefined) childProps.disabled = disabled;

    childProps[valuePropName] = value;
    const originTrigger = controlChild.props?.[validateTrigger];
    childProps[validateTrigger] = async (...args) => {
      const event = args[0];
      let newValue = getValueFromEvent ? getValueFromEvent(...args) : (event && event.target ? event.target[valuePropName] : args[0]);
      if (normalize) newValue = normalize(newValue, value, form?.getFieldsValue?.());
      form?.setFieldsValue?.({ [name]: newValue });
      await triggerValidate(newValue);
      originTrigger?.(...args);
    };

    const cloned = React.cloneElement(controlChild, { ...childProps, key: name || 'form-item-control' });
    if (childArray.length === 1) return cloned;
    const rest = childArray.filter((c) => c !== controlChild);
    return (<>{cloned}{rest}</>);
  };

  const itemCls = classNames(
    'sui-form-item',
    {
      'sui-form-item-has-error': errors.length > 0,
      'sui-form-item-has-feedback': hasFeedback,
    },
    className
  );

  const labelCls = classNames('sui-form-item-label', {
    'sui-form-item-required': mergedRequired && requiredMark !== false,
    'sui-form-item-label-left': labelAlign === 'left',
    'sui-form-item-label-right': labelAlign !== 'left',
  });

  const renderTooltipIcon = () => {
    if (!tooltip) return null;
    const tipContent = typeof tooltip === 'object' && tooltip?.title !== undefined ? tooltip.title : tooltip;
    const tipIcon = typeof tooltip === 'object' && tooltip?.icon !== undefined
      ? tooltip.icon
      : (<Icon name="Help" theme="outline" size={14} />);
    return (
      <Tooltip title={tipContent}>
        <span className="sui-form-item-tooltip" aria-label="tooltip">{tipIcon}</span>
      </Tooltip>
    );
  };

  const labelNode = label !== undefined ? (
    <div className={labelCls} style={labelCol}>
      {label ? (
        <label>
          {label} {renderTooltipIcon()}
          {colon && layout !== 'vertical' ? ':' : null}
        </label>
      ) : null}
    </div>
  ) : null;

  const control = (
    <div className="sui-form-item-control" style={wrapperCol}>
      <div className="sui-form-item-control-input">
        <div className="sui-form-item-control-input-content">
          {getChild()}
        </div>
      </div>
      {help !== undefined ? (
        <div className={classNames('sui-form-item-explain', { 'sui-form-item-explain-error': errors.length })}>
          {help}
        </div>
      ) : errors.length ? (
        <div className="sui-form-item-explain sui-form-item-explain-error">{errors[0]}</div>
      ) : null}
      {extra ? <div className="sui-form-item-extra">{extra}</div> : null}
    </div>
  );

  if (noStyle) return control;

  return (
    <div className={itemCls} style={style} data-form-name={name} {...rest}>
      {layout === 'inline' ? null : labelNode}
      {control}
    </div>
  );
};

FormItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.node,
  rules: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  extra: PropTypes.node,
  help: PropTypes.node,
  hasFeedback: PropTypes.bool,
  validateTrigger: PropTypes.string,
  valuePropName: PropTypes.string,
  getValueFromEvent: PropTypes.func,
  normalize: PropTypes.func,
  shouldUpdate: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  noStyle: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
};

Form.Item = FormItem;
Form.useForm = useForm;

export default Form;


