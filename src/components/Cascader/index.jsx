import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Input from '../Input';
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import './style.less';

function getField(obj, fieldNames, key) {
  return obj[fieldNames[key] || key];
}

// 递归收集所有叶子节点路径
function getAllLeafPaths(option, path, fieldNames) {
  const children = getField(option, fieldNames, 'children');
  if (!children || children.length === 0) {
    return [path];
  }
  return children.flatMap(child =>
    getAllLeafPaths(child, [...path, getField(child, fieldNames, 'value')], fieldNames)
  );
}

// 判断 checked/indeterminate
function getCheckStatus(option, path, selectedPaths, fieldNames) {
  const leafPaths = getAllLeafPaths(option, path, fieldNames);
  const checkedCount = leafPaths.filter(lp =>
    selectedPaths.some(sel => JSON.stringify(sel) === JSON.stringify(lp))
  ).length;
  if (checkedCount === 0) return { checked: false, indeterminate: false };
  if (checkedCount === leafPaths.length) return { checked: true, indeterminate: false };
  return { checked: false, indeterminate: true };
}

// 判断是否叶子节点
function isLeaf(option, fieldNames) {
  const children = getField(option, fieldNames, 'children');
  return !children || children.length === 0;
}

// 只展示已选叶子节点路径
function getSelectedLeafPaths(selected, options, fieldNames) {
  const allLeafPaths = [];
  function dfs(opts, path) {
    for (const opt of opts) {
      const curPath = [...path, getField(opt, fieldNames, 'value')];
      const children = getField(opt, fieldNames, 'children');
      if (children && children.length) {
        dfs(children, curPath);
      } else {
        allLeafPaths.push(curPath);
      }
    }
  }
  dfs(options, []);
  return selected.filter(sel =>
    allLeafPaths.some(lp => JSON.stringify(lp) === JSON.stringify(sel))
  );
}

function getActiveOptions(options, value, fieldNames) {
  const result = [];
  let currentOptions = options;
  for (let i = 0; i < value.length; i++) {
    const option = currentOptions.find(
      (item) => getField(item, fieldNames, 'value') === value[i]
    );
    if (!option) break;
    result.push(option);
    currentOptions = getField(option, fieldNames, 'children') || [];
  }
  return result;
}

const Cascader = ({
  options = [],
  value,
  defaultValue = [],
  onChange,
  placeholder = '请选择',
  disabled = false,
  multiple = false,
  clearable = false,
  fieldNames = { label: 'label', value: 'value', children: 'children' },
  size = 'middle',
  style = {},
  className = '',
  loadData,
  changeOnSelect = false,
  maxTagCount = 2, // 新增属性，默认2
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value !== undefined ? value : defaultValue);
  const [activeValue, setActiveValue] = useState(value !== undefined ? (Array.isArray(value) && !multiple ? value : []) : (Array.isArray(defaultValue) ? defaultValue : []));
  const [menus, setMenus] = useState([options]);
  const [loadingIndexes, setLoadingIndexes] = useState([]);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  // 受控同步
  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
      if (!multiple) {
        setActiveValue(Array.isArray(value) ? value : []);
      }
    }
  }, [value, multiple]);

  // 计算菜单层级
  useEffect(() => {
    let curOptions = options;
    const nextMenus = [curOptions];
    for (let i = 0; i < activeValue.length; i++) {
      const option = curOptions.find(
        (item) => getField(item, fieldNames, 'value') === activeValue[i]
      );
      if (option && getField(option, fieldNames, 'children')) {
        curOptions = getField(option, fieldNames, 'children');
        nextMenus.push(curOptions);
      } else {
        break;
      }
    }
    if (JSON.stringify(nextMenus) !== JSON.stringify(menus)) {
      setMenus(nextMenus);
    }
  }, [activeValue, options, fieldNames]);

  // 选中回调
  const triggerChange = (val, selectedOptions) => {
    setSelected(val);
    onChange && onChange(val, selectedOptions);
  };

  // 复选框切换
  const handleCheckboxChange = (option, path, checked) => {
    const leafPaths = getAllLeafPaths(option, path, fieldNames);
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    if (checked) {
      // 添加所有叶子路径
      leafPaths.forEach(lp => {
        if (!newSelected.some(sel => JSON.stringify(sel) === JSON.stringify(lp))) {
          newSelected.push(lp);
        }
      });
    } else {
      // 移除所有叶子路径
      newSelected = newSelected.filter(sel =>
        !leafPaths.some(lp => JSON.stringify(sel) === JSON.stringify(lp))
      );
    }
    triggerChange(newSelected, getActiveOptions(options, path, fieldNames));
  };

  // 清空
  const handleClear = (e) => {
    e.stopPropagation();
    triggerChange(multiple ? [] : [], []);
    setActiveValue([]);
    setOpen(false);
  };

  // 展示内容
  const renderLabel = () => {
    if (multiple) {
      const leafSelected = getSelectedLeafPaths(selected, options, fieldNames);
      if (!leafSelected || leafSelected.length === 0) return <span className="sui-cascader-placeholder">{placeholder}</span>;
      const displayTags = leafSelected.slice(0, maxTagCount); // 只显示前maxTagCount个
      const restCount = leafSelected.length - maxTagCount;
      return (
        <span className="sui-cascader-tags">
          {displayTags.map((path) => {
            const opts = getActiveOptions(options, path, fieldNames);
            return (
              <span className="sui-cascader-tag" key={path.join('-')}>
                <span className="sui-cascader-tag-content">
                  {opts.map((o) => getField(o, fieldNames, 'label')).join(' / ')}
                </span>
                <span
                  className="sui-cascader-tag-close"
                  onClick={e => {
                    e.stopPropagation();
                    const val = leafSelected.filter(item => JSON.stringify(item) !== JSON.stringify(path));
                    triggerChange(val, opts);
                  }}
                >
                  <Icon name="CloseOne" theme="filled" size={14} />
                </span>
              </span>
            );
          })}
          {restCount > 0 && (
            <span className="sui-cascader-tag sui-cascader-tag-rest">+{restCount}...</span>
          )}
        </span>
      );
    } else {
      if (!selected || selected.length === 0) return <span className="sui-cascader-placeholder">{placeholder}</span>;
      const opts = getActiveOptions(options, selected, fieldNames);
      return <span>{opts.map((o) => getField(o, fieldNames, 'label')).join(' / ')}</span>;
    }
  };

  // 菜单渲染
  const renderMenus = () => {
    return (
      <div className="sui-cascader-dropdown">
        {menus.map((menu, level) => (
          <ul className="sui-cascader-menu" key={level}>
            {menu.map((option) => {
              const path = [...activeValue.slice(0, level), getField(option, fieldNames, 'value')];
              const { checked, indeterminate } = multiple
                ? getCheckStatus(option, path, selected, fieldNames)
                : { checked: false, indeterminate: false };
              const isActive = activeValue[level] === getField(option, fieldNames, 'value');
              const isLoading = loadingIndexes.includes(level) && isActive;
              return (
                <li
                  key={getField(option, fieldNames, 'value')}
                  className={`sui-cascader-menu-item${option.disabled ? ' is-disabled' : ''}${isActive ? ' is-active' : ''}`}
                  onClick={e => {
                    if (option.disabled) return;
                    if (multiple) {
                      if (!isLeaf(option, fieldNames)) {
                        setActiveValue(path); // 多选时，点击整行展开
                      }
                      // 叶子节点整行点击不做选中，只有复选框选中
                    } else {
                      handleOptionClick(option, level, e); // 单选时，整行点击选中/展开
                    }
                  }}
                >
                  {multiple && (
                    <Checkbox
                      checked={checked}
                      indeterminate={indeterminate}
                      disabled={option.disabled}
                      onClick={e => e.stopPropagation()} // 阻止 li 的 onClick
                      onChange={e => {
                        handleCheckboxChange(option, path, e.target.checked);
                      }}
                      className="sui-cascader-checkbox"
                    />
                  )}
                  <span className="sui-cascader-label-content">
                    {getField(option, fieldNames, 'label')}
                  </span>
                  {isLoading && <Icon name="Loading" theme="filled" size={14} className="sui-cascader-loading" />}
                  {getField(option, fieldNames, 'children') && <Icon name="Right" theme="outline" size={14} className="sui-cascader-arrow" />}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    );
  };

  // 计算弹层位置
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        minWidth: rect.width,
        zIndex: 1050,
      });
    }
  }, [open]);

  // 点击外部关闭
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // 输入框尺寸
  const sizeCls = size === 'large' ? 'sui-cascader-lg' : size === 'small' ? 'sui-cascader-sm' : '';

  // 单选点击逻辑
  const handleOptionClick = async (option, level, e) => {
    e && e.stopPropagation();
    if (option.disabled) return;
    const nextActive = activeValue.slice(0, level);
    nextActive[level] = getField(option, fieldNames, 'value');
    setActiveValue(nextActive);
    // 动态加载
    if (loadData && !getField(option, fieldNames, 'children') && !option.isLeaf) {
      setLoadingIndexes([...loadingIndexes, level]);
      await loadData(getActiveOptions(options, nextActive, fieldNames));
      setLoadingIndexes((idxs) => idxs.filter((i) => i !== level));
      return;
    }
    if (getField(option, fieldNames, 'children') && !changeOnSelect) return;
    triggerChange(nextActive, getActiveOptions(options, nextActive, fieldNames));
    setOpen(false);
  };

  return (
    <>
      <div
        className={`sui-cascader ${sizeCls} ${className} ${disabled ? 'is-disabled' : ''}`}
        style={style}
        ref={triggerRef}
        tabIndex={0}
        onClick={() => !disabled && setOpen(true)}
      >
        <div className="sui-cascader-label">{renderLabel()}</div>
        {clearable && ((multiple && selected.length > 0) || (!multiple && selected && selected.length > 0)) && !disabled && (
          <span className="sui-cascader-clear" onClick={handleClear}>
            <Icon name="CloseOne" theme="filled" size={14} />
          </span>
        )}
        <span className="sui-cascader-arrow">
          <Icon name="Down" theme="outline" size={16} />
        </span>
      </div>
      {open && ReactDOM.createPortal(
        <div
          className="sui-cascader-dropdown-wrap"
          ref={dropdownRef}
          style={dropdownStyle}
        >
          {renderMenus()}
        </div>,
        document.body
      )}
    </>
  );
};

Cascader.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  clearable: PropTypes.bool,
  fieldNames: PropTypes.object,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  style: PropTypes.object,
  className: PropTypes.string,
  loadData: PropTypes.func,
  changeOnSelect: PropTypes.bool,
  maxTagCount: PropTypes.number, // 新增
};

export default Cascader;