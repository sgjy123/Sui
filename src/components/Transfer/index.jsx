import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Empty from '../Empty';

const Transfer = ({
  dataSource = [],
  targetKeys = [],
  selectedKeys: propSelectedKeys,
  onChange,
  onSelectChange,
  render = item => item.title,
  titles = ['源列表', '目标列表'],
  operations = ['>', '<'],
  showSearch = false,
  disabled = false,
  listStyle = {},
  className = '',
  style = {},
}) => {
  // 受控/非受控
  const [selectedKeys, setSelectedKeys] = useState(propSelectedKeys || []);
  const [leftFilter, setLeftFilter] = useState('');
  const [rightFilter, setRightFilter] = useState('');

  // 左右数据
  const leftData = dataSource.filter(item => !targetKeys.includes(item.key));
  const rightData = dataSource.filter(item => targetKeys.includes(item.key));

  // 选中项
  const leftSelected = selectedKeys.filter(key => leftData.some(item => item.key === key));
  const rightSelected = selectedKeys.filter(key => rightData.some(item => item.key === key));

  // 过滤
  const filteredLeftData = showSearch && leftFilter
    ? leftData.filter(item => render(item).toString().toLowerCase().includes(leftFilter.toLowerCase()))
    : leftData;
  const filteredRightData = showSearch && rightFilter
    ? rightData.filter(item => render(item).toString().toLowerCase().includes(rightFilter.toLowerCase()))
    : rightData;

  // 选中变化
  const handleSelect = (key, listType) => {
    let newSelectedKeys;
    if (selectedKeys.includes(key)) {
      newSelectedKeys = selectedKeys.filter(k => k !== key);
    } else {
      newSelectedKeys = [...selectedKeys, key];
    }
    setSelectedKeys(newSelectedKeys);
    onSelectChange && onSelectChange(
      newSelectedKeys.filter(k => leftData.some(item => item.key === k)),
      newSelectedKeys.filter(k => rightData.some(item => item.key === k))
    );
  };

  // 全选
  const handleSelectAll = (checked, listType) => {
    let keys = listType === 'left' ? filteredLeftData.map(item => item.key) : filteredRightData.map(item => item.key);
    let newSelectedKeys;
    if (checked) {
      newSelectedKeys = Array.from(new Set([...selectedKeys, ...keys]));
    } else {
      newSelectedKeys = selectedKeys.filter(k => !keys.includes(k));
    }
    setSelectedKeys(newSelectedKeys);
    onSelectChange && onSelectChange(
      newSelectedKeys.filter(k => leftData.some(item => item.key === k)),
      newSelectedKeys.filter(k => rightData.some(item => item.key === k))
    );
  };

  // 穿梭
  const moveTo = (direction) => {
    let moveKeys = direction === 'right' ? leftSelected : rightSelected;
    let newTargetKeys;
    if (direction === 'right') {
      newTargetKeys = [...targetKeys, ...moveKeys];
    } else {
      newTargetKeys = targetKeys.filter(key => !moveKeys.includes(key));
    }
    setSelectedKeys(selectedKeys.filter(k => !moveKeys.includes(k)));
    onChange && onChange(newTargetKeys, direction, moveKeys);
    onSelectChange && onSelectChange(
      selectedKeys.filter(k => leftData.some(item => item.key === k)),
      selectedKeys.filter(k => rightData.some(item => item.key === k))
    );
  };

  // 列表渲染
  const renderList = (data, selected, filter, setFilter, listType) => (
    <div className={`sui-transfer-list${disabled ? ' is-disabled' : ''}`}
      style={listStyle}
    >
      <div className="sui-transfer-list-header">
        <Checkbox
          checked={selected.length === data.length && data.length > 0}
          indeterminate={selected.length > 0 && selected.length < data.length}
          disabled={disabled || data.length === 0}
          onChange={e => handleSelectAll(e.target.checked, listType)}
        />
        <span className="sui-transfer-list-title">{titles[listType === 'left' ? 0 : 1]}</span>
        <span className="sui-transfer-list-count">{selected.length}/{data.length}</span>
      </div>
      {showSearch && (
        <div className="sui-transfer-list-search">
          <Input
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="搜索"
            disabled={disabled}
          />
        </div>
      )}
      <ul className="sui-transfer-list-content">
        {data.length === 0 ? (
          <Empty description="暂无数据" />
        ) : data.map(item => (
          <li
            key={item.key}
            className={`sui-transfer-list-item${selected.includes(item.key) ? ' is-selected' : ''}${item.disabled ? ' is-disabled' : ''}`}
            onClick={() => !item.disabled && !disabled && handleSelect(item.key, listType)}
          >
            <Checkbox
              checked={selected.includes(item.key)}
              disabled={item.disabled || disabled}
              onChange={e => handleSelect(item.key, listType)}
              onClick={e => e.stopPropagation()}
            />
            <span className="sui-transfer-list-item-label">{render(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`sui-transfer ${className}`} style={style}>
      {renderList(filteredLeftData, leftSelected, leftFilter, setLeftFilter, 'left')}
      <div className="sui-transfer-operations">
        <Button
          type="primary"
          size="small"
          disabled={disabled || leftSelected.length === 0}
          onClick={() => moveTo('right')}
        >{operations[0]}</Button>
        <Button
          type="primary"
          size="small"
          disabled={disabled || rightSelected.length === 0}
          onClick={() => moveTo('left')}
        >{operations[1]}</Button>
      </div>
      {renderList(filteredRightData, rightSelected, rightFilter, setRightFilter, 'right')}
    </div>
  );
};

Transfer.propTypes = {
  dataSource: PropTypes.array.isRequired,
  targetKeys: PropTypes.array,
  selectedKeys: PropTypes.array,
  onChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  render: PropTypes.func,
  titles: PropTypes.array,
  operations: PropTypes.array,
  showSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  listStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Transfer; 