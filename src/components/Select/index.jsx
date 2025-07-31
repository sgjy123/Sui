import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Input from '../Input';

function isGroup(option) {
  return option && Array.isArray(option.options);
}

const defaultIcon = <Icon name="Down" />;

const Select = ({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = '请选择',
  disabled = false,
  mode = 'single',
  allowClear = false,
  getPopupContainer,
  dropdownWidth,
  renderOption,
  className = '',
  style = {},
  size = 'middle',
  showSearch = false,
  filterOption,
  onSearch,
}) => {
  // 受控/非受控
  const isMultiple = mode === 'multiple';
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    value !== undefined ? value : (defaultValue !== undefined ? defaultValue : (isMultiple ? [] : undefined))
  );
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [direction, setDirection] = useState('down');
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [inputing, setInputing] = useState(false);

  // 受控同步
  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  // 下拉方向
  useEffect(() => {
    if (open) {
      const rect = triggerRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setDirection(rect && rect.bottom + 200 > windowHeight ? 'up' : 'down');
    }
  }, [open]);

  // 外部点击关闭
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

  // 键盘交互
  const flatOptions = options.flatMap(opt => isGroup(opt) ? opt.options : [opt]);
  const handleKeyDown = useCallback(
    (e) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setOpen(true);
          setHoverIndex(0);
        }
        return;
      }
      if (e.key === 'ArrowDown') {
        let next = hoverIndex;
        do {
          next = (next + 1) % flatOptions.length;
        } while (flatOptions[next].disabled && next !== hoverIndex);
        setHoverIndex(next);
      } else if (e.key === 'ArrowUp') {
        let prev = hoverIndex;
        do {
          prev = (prev - 1 + flatOptions.length) % flatOptions.length;
        } while (flatOptions[prev].disabled && prev !== hoverIndex);
        setHoverIndex(prev);
      } else if (e.key === 'Enter') {
        const option = flatOptions[hoverIndex];
        if (option && !option.disabled) {
          handleSelect(option);
        }
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        setOpen(false);
      } else if (isMultiple && (e.key === 'Backspace' || e.key === 'Delete')) {
        if (searchValue === '' && Array.isArray(selected) && selected.length > 0) {
          const newValue = selected.slice(0, -1);
          triggerChange(newValue);
        }
      }
    },
    [open, hoverIndex, flatOptions, selected, isMultiple]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);

  // 选中/取消选中
  const triggerChange = (val) => {
    if (val === undefined || (Array.isArray(val) && val.length === 0)) setSelected(undefined);
    onChange && onChange(val, options);
  };

  const handleSelect = (option) => {
    if (disabled || option.disabled) return;
    if (isMultiple) {
      if (Array.isArray(selected) && selected.includes(option.value)) {
        triggerChange(selected.filter(v => v !== option.value));
      } else {
        triggerChange([...(selected || []), option.value]);
      }
      setSearchValue('');
    } else {
      triggerChange(option.value);
      setOpen(false);
      setSearchValue('');
      setInputing(false);
    }
  };

  const handleRemoveTag = (val) => {
    if (!isMultiple) return;
    triggerChange(selected.filter(v => v !== val));
  };

  const handleClear = (e) => {
    e.stopPropagation();
    triggerChange(isMultiple ? [] : undefined);
    setOpen(false);
  };

  // 渲染选项
  const renderOptions = (opts, groupLabel) => (
    <>
      {groupLabel && <div className="sui-select-group-label">{groupLabel}</div>}
      {opts.map((option, idx) => (
        <li
          key={option.value}
          className={`sui-select-option${option.disabled ? ' sui-select-option-disabled' : ''}${isMultiple && Array.isArray(selected) && selected.includes(option.value) ? ' sui-select-option-selected' : ''}${!isMultiple && selected === option.value ? ' sui-select-option-selected' : ''}`}
          onClick={e => {
            e.stopPropagation();
            handleSelect(option);
          }}
          tabIndex={-1}
        >
          {renderOption ? renderOption(option, isMultiple ? selected?.includes(option.value) : selected === option.value) : option.label}
        </li>
      ))}
    </>
  );

  // 处理搜索输入
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    onSearch && onSearch(val);
  };

  // 过滤选项
  const filterFn = filterOption || ((input, option) => {
    if (!input) return true;
    return String(option.label).toLowerCase().includes(input.toLowerCase());
  });

  // 过滤后的 options
  const getFilteredOptions = (opts) => {
    if (!showSearch || !searchValue) return opts;
    return opts
      .map(opt => isGroup(opt)
        ? { ...opt, options: opt.options.filter(o => filterFn(searchValue, o)) }
        : opt
      )
      .filter(opt => isGroup(opt) ? opt.options.length > 0 : filterFn(searchValue, opt));
  };

  const filteredOptions = getFilteredOptions(options);
  const filteredFlatOptions = filteredOptions.flatMap(opt => isGroup(opt) ? opt.options : [opt]);

  // 新增：所有选项的扁平化
  const flatAllOptions = options.flatMap(opt => isGroup(opt) ? opt.options : [opt]);

  // 选中项展示（始终用所有选项）
  const selectedOptions = isMultiple
    ? flatAllOptions.filter(opt => Array.isArray(selected) && selected.includes(opt.value))
    : flatAllOptions.find(opt => opt.value === selected);

  // 渲染下拉内容（恢复dropdownContent定义）
  const dropdownContent = (
    <div className="sui-select-dropdown-wrap">
      <ul
        className={`sui-select-dropdown sui-select-dropdown-${direction}`}
        ref={dropdownRef}
        style={dropdownWidth ? { width: dropdownWidth } : {}}
      >
        {filteredOptions.length === 0 || filteredFlatOptions.length === 0 ? (
          <li className="sui-select-empty">无数据</li>
        ) : (
          filteredOptions.map((opt, idx) =>
            isGroup(opt)
              ? (
                  <React.Fragment key={opt.label}>
                    {renderOptions(opt.options, opt.label)}
                  </React.Fragment>
                )
              : renderOptions([opt])
          )
        )}
      </ul>
    </div>
  );

  // 弹层挂载节点
  const popupContainer = getPopupContainer ? getPopupContainer(triggerRef.current) : undefined;

  // 判断是否显示清空按钮
  const showClear = allowClear && ((isMultiple && Array.isArray(selected) && selected.length > 0) || (!isMultiple && selected !== undefined));

  // 选择框内容渲染
  const renderSelection = () => {
    if (isMultiple) {
      console.log(selectedOptions,'selectedOptions');
      return (
        <div className="sui-select-tags" onClick={e => {
          if (showSearch && !disabled) setInputing(true);
        }}>
          {Array.isArray(selectedOptions) && selectedOptions.length > 0 &&
            selectedOptions.map(opt => (
              <span className="sui-select-tag" key={opt.value}>
                {opt.label}
                <span className="sui-select-tag-close" onClick={ee => { ee.stopPropagation(); handleRemoveTag(opt.value); }}>×</span>
              </span>
            ))
          }
          <input
            className="sui-select-search-input"
            value={showSearch ? searchValue : ''}
            onChange={showSearch ? handleSearchChange : undefined}
            onBlur={() => setInputing(false)}
            autoFocus={showSearch && open}
            placeholder={(!selectedOptions || selectedOptions.length === 0) && !searchValue ? placeholder : ''}
            style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontSize: 'inherit' }}
            readOnly={!(showSearch && open)}
          />
        </div>
      );
    }
    // 单选：始终用input展示，showSearch+open时可编辑，否则只读
    return (
      <input
        className="sui-select-search-input"
        value={showSearch && open ? searchValue : (selectedOptions ? selectedOptions.label : '')}
        onChange={showSearch && open ? handleSearchChange : undefined}
        onBlur={() => {
          setInputing(false);
          setSearchValue('');
        }}
        autoFocus={showSearch && open}
        placeholder={!selectedOptions && !searchValue ? placeholder : ''}
        style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontSize: 'inherit', cursor: 'pointer' }}
        readOnly={!(showSearch && open)}
      />
    );
  };

  // 主体
  const selectNode = (
    <div
      className={`sui-select${disabled ? ' sui-select-disabled' : ''} ${className} sui-select-${size}${showClear ? ' sui-select-has-clear' : ''}`}
      style={style}
      ref={triggerRef}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (!disabled) {
          setOpen(v => !v);
          if (showSearch) setInputing(true);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={`sui-select-selection${open ? ' sui-select-open' : ''}`}> 
        {renderSelection()}
        <span className="sui-select-clear" style={{ display: showClear ? 'flex' : 'none' }} onClick={handleClear}>
          <Icon name="CloseOne" theme="filled" size={16} />
        </span>
        <span className="sui-select-arrow">
          <Icon name="Down" size={16} />
        </span>
      </div>
      {open && (popupContainer ?
        ReactDOM.createPortal(dropdownContent, popupContainer)
        : dropdownContent
      )}
    </div>
  );

  return selectNode;
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool,
      }),
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        options: PropTypes.array.isRequired,
      })
    ])
  ),
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  mode: PropTypes.oneOf(['single', 'multiple']),
  allowClear: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  icon: PropTypes.node,
  dropdownWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  renderOption: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  showSearch: PropTypes.bool,
  filterOption: PropTypes.func,
  onSearch: PropTypes.func,
};

export default Select; 