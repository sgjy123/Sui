import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const Switch = ({
  checked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = 'middle',
  onChange,
  checkedChildren,
  unCheckedChildren,
  className,
  style,
  ...restProps
}) => {
  // 设置内部状态
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  
  // 判断是否为受控组件
  const isControlled = checked !== undefined;
  
  // 合并状态值：优先使用外部传入的checked，否则使用内部状态
  const mergedChecked = isControlled ? checked : innerChecked;
  
  // 监听外部checked变化
  useEffect(() => {
    if (isControlled) {
      setInnerChecked(checked);
    }
  }, [isControlled, checked]);
  
  // 处理点击事件
  const handleClick = (e) => {
    e.preventDefault();
    
    if (disabled || loading) {
      return;
    }
    
    // 计算新的状态值
    const newChecked = !mergedChecked;
    
    // 非受控模式下，更新内部状态
    if (!isControlled) {
      setInnerChecked(newChecked);
    }
    
    // 触发外部onChange事件
    if (onChange) {
      onChange(newChecked, e);
    }
  };
  
  // 构建样式类名
  const switchClassName = classNames(
    'sui-switch',
    {
      'sui-switch-checked': mergedChecked,
      'sui-switch-disabled': disabled,
      'sui-switch-loading': loading,
      'sui-switch-small': size === 'small',
      'sui-switch-large': size === 'large',
    },
    className
  );
  
  // 渲染内部文本
  const innerNode = mergedChecked ? checkedChildren : unCheckedChildren;
  
  return (
    <button
      type="button"
      role="switch"
      aria-checked={mergedChecked}
      disabled={disabled}
      className={switchClassName}
      style={style}
      onClick={handleClick}
      {...restProps}
    >
      {/* 开关轨道 */}
      <div className="sui-switch-handle">
        {loading && <Icon name="LoadingFour" className="sui-switch-loading-icon" />}
      </div>
      
      {/* 开关内容 */}
      {innerNode && <span className="sui-switch-inner">{innerNode}</span>}
    </button>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  onChange: PropTypes.func,
  checkedChildren: PropTypes.node,
  unCheckedChildren: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Switch; 