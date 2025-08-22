import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Checkbox from '../Checkbox';

// 判断节点是否有子节点
const hasChildren = (node) => {
  return node && Array.isArray(node.children) && node.children.length > 0;
};

// 扁平化树结构，用于搜索和选择
const flattenTree = (treeData, parentKey = null) => {
  return treeData.flatMap((node) => {
    const nodeInfo = {
      ...node,
      parentKey,
      isLeaf: !hasChildren(node),
    };
    
    if (hasChildren(node)) {
      return [nodeInfo, ...flattenTree(node.children, node.key)];
    }
    
    return [nodeInfo];
  });
};

// 获取所有子节点的key
const getAllChildrenKeys = (node, treeData) => {
  const flatNodes = flattenTree(treeData);
  const childrenKeys = [];
  
  const getChildren = (key) => {
    const children = flatNodes.filter(item => item.parentKey === key);
    children.forEach(child => {
      childrenKeys.push(child.key);
      if (!child.isLeaf) {
        getChildren(child.key);
      }
    });
  };
  
  getChildren(node.key);
  return childrenKeys;
};

// 获取所有父节点的key
const getAllParentKeys = (key, treeData) => {
  const flatNodes = flattenTree(treeData);
  const parentKeys = [];
  
  let currentNode = flatNodes.find(node => node.key === key);
  while (currentNode && currentNode.parentKey) {
    parentKeys.push(currentNode.parentKey);
    currentNode = flatNodes.find(node => node.key === currentNode.parentKey);
  }
  
  return parentKeys;
};

// 自定义hook：管理展开的节点
const useTreeExpanded = (defaultExpandedKeys = [], treeDefaultExpandAll = false, treeData = []) => {
  const [expandedKeys, setExpandedKeys] = useState(() => {
    if (treeDefaultExpandAll) {
      return flattenTree(treeData).filter(node => !node.isLeaf).map(node => node.key);
    }
    return defaultExpandedKeys;
  });
  
  const toggleExpand = (key, expanded) => {
    if (expanded) {
      setExpandedKeys(prev => [...prev, key]);
    } else {
      setExpandedKeys(prev => prev.filter(k => k !== key));
    }
  };
  
  return [expandedKeys, setExpandedKeys, toggleExpand];
};

const TreeSelect = ({
  treeData = [],
  value,
  defaultValue,
  onChange,
  placeholder = '请选择',
  disabled = false,
  multiple = false,
  allowClear = false,
  getPopupContainer,
  dropdownStyle,
  className = '',
  style = {},
  size = 'middle',
  showSearch = false,
  filterTreeNode,
  onSearch,
  treeCheckable = false,
  treeDefaultExpandAll = false,
  treeDefaultExpandedKeys = [],
  treeExpandedKeys,
  onTreeExpand,
  showCheckedStrategy = 'SHOW_CHILD',
  maxTagCount = 2,
  maxTagPlaceholder,
}) => {
  // 受控/非受控
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    value !== undefined ? value : (defaultValue !== undefined ? defaultValue : (multiple ? [] : undefined))
  );
  const [direction, setDirection] = useState('down');
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  
  // 树节点展开状态管理
  const [expandedKeys, setExpandedKeys, toggleExpand] = useTreeExpanded(
    treeDefaultExpandedKeys,
    treeDefaultExpandAll,
    treeData
  );
  
  // 受控展开状态
  useEffect(() => {
    if (treeExpandedKeys !== undefined) {
      setExpandedKeys(treeExpandedKeys);
    }
  }, [treeExpandedKeys]);
  
  // 受控选中状态
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
  
  // 扁平化树节点，用于搜索和选择
  const flatNodes = flattenTree(treeData);
  
  // 键盘交互
  const handleKeyDown = useCallback(
    (e) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setOpen(true);
        }
        return;
      }
      
      if (e.key === 'Escape' || e.key === 'Tab') {
        setOpen(false);
      } else if (multiple && (e.key === 'Backspace' || e.key === 'Delete')) {
        if (searchValue === '' && Array.isArray(selected) && selected.length > 0) {
          const newValue = selected.slice(0, -1);
          triggerChange(newValue);
        }
      }
    },
    [open, selected, multiple, searchValue]
  );
  
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);
  
  // 选中/取消选中
  const triggerChange = (val) => {
    if (val === undefined || (Array.isArray(val) && val.length === 0)) {
      setSelected(multiple ? [] : undefined);
    } else {
      setSelected(val);
    }
    onChange && onChange(val, getSelectedNodes(val));
  };
  
  // 获取选中的节点
  const getSelectedNodes = (selectedKeys) => {
    if (!selectedKeys) return [];
    const keys = Array.isArray(selectedKeys) ? selectedKeys : [selectedKeys];
    return flatNodes.filter(node => keys.includes(node.key));
  };
  
  // 处理节点选择
  const handleSelect = (node) => {
    if (disabled || node.disabled) return;
    
    if (multiple || treeCheckable) {
      let newSelected = [...(selected || [])];
      
      if (newSelected.includes(node.key)) {
        // 取消选中
        newSelected = newSelected.filter(k => k !== node.key);
        
        // 如果是复选框模式，同时取消子节点
        if (treeCheckable && !node.isLeaf) {
          const childKeys = getAllChildrenKeys(node, treeData);
          newSelected = newSelected.filter(k => !childKeys.includes(k));
        }
      } else {
        // 选中
        newSelected.push(node.key);
        
        // 如果是复选框模式，同时选中子节点
        if (treeCheckable && !node.isLeaf) {
          const childKeys = getAllChildrenKeys(node, treeData);
          childKeys.forEach(key => {
            if (!newSelected.includes(key)) {
              newSelected.push(key);
            }
          });
        }
      }
      
      triggerChange(newSelected);
    } else {
      // 单选模式
      triggerChange(node.key);
      setOpen(false);
    }
    
    setSearchValue('');
  };
  
  // 处理标签移除
  const handleRemoveTag = (key) => {
    if (!multiple && !treeCheckable) return;
    
    let newSelected = selected.filter(k => k !== key);
    
    // 如果是复选框模式，同时取消子节点
    if (treeCheckable) {
      const node = flatNodes.find(n => n.key === key);
      if (node && !node.isLeaf) {
        const childKeys = getAllChildrenKeys(node, treeData);
        newSelected = newSelected.filter(k => !childKeys.includes(k));
      }
    }
    
    triggerChange(newSelected);
  };
  
  // 清空选择
  const handleClear = (e) => {
    e.stopPropagation();
    triggerChange(multiple || treeCheckable ? [] : undefined);
    setOpen(false);
  };
  
  // 处理搜索
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    onSearch && onSearch(val);
  };
  
  // 过滤节点
  const filterFn = filterTreeNode || ((input, node) => {
    if (!input) return true;
    return String(node.title).toLowerCase().includes(input.toLowerCase());
  });
  
  // 过滤后的节点
  const getFilteredTreeData = (data, searchText) => {
    if (!showSearch || !searchText) return data;
    
    // 先找到所有匹配的节点
    const matchedKeys = flatNodes
      .filter(node => filterFn(searchText, node))
      .map(node => node.key);
    
    // 再找到所有匹配节点的父节点
    const parentKeys = matchedKeys.flatMap(key => getAllParentKeys(key, treeData));
    
    // 合并所有需要显示的节点key
    const keysToShow = [...new Set([...matchedKeys, ...parentKeys])];
    
    // 过滤树数据
    const filterData = (nodes) => {
      return nodes
        .filter(node => keysToShow.includes(node.key))
        .map(node => ({
          ...node,
          children: node.children ? filterData(node.children) : undefined,
        }));
    };
    
    return filterData(data);
  };
  
  // 过滤后的树数据
  const filteredTreeData = getFilteredTreeData(treeData, searchValue);
  
  // 渲染树节点
  const renderTreeNode = (node, level = 0) => {
    const isExpanded = expandedKeys.includes(node.key);
    const isSelected = multiple || treeCheckable
      ? Array.isArray(selected) && selected.includes(node.key)
      : selected === node.key;
    
    // 处理展开/收起
    const handleExpand = (e) => {
      e.stopPropagation();
      // 修复：禁用节点不应能展开/收起
      if (node.disabled) return;
      const expanded = !isExpanded;
      toggleExpand(node.key, expanded);
      onTreeExpand && onTreeExpand(
        expanded 
          ? [...expandedKeys, node.key]
          : expandedKeys.filter(k => k !== node.key),
        { expanded, node }
      );
    };
    
    return (
      <div 
        key={node.key} 
        className="sui-tree-select-node"
        style={{ paddingLeft: `${level * 16}px` }}
      >
        <div 
          className={`sui-tree-select-node-content ${
            isSelected ? 'sui-tree-select-node-selected' : ''
          } ${node.disabled ? 'sui-tree-select-node-disabled' : ''}`}
          onClick={() => {
            // 修复：确保禁用节点无法被选择
            if (node.disabled) return;
            handleSelect(node);
          }}
        >
          {/* 展开/收起按钮 */}
          {hasChildren(node) ? (
            <span 
              className={`sui-tree-select-switcher ${
                isExpanded ? 'sui-tree-select-switcher-open' : ''
              } ${node.disabled ? 'sui-tree-select-switcher-disabled' : ''}`}
              onClick={handleExpand}
            >
              <Icon name="Right" size={12} />
            </span>
          ) : (
            <span className="sui-tree-select-switcher-noop"></span>
          )}
          
          {/* 复选框 */}
          {treeCheckable && (
            (() => {
              let indeterminate = false;
              if (!node.isLeaf) {
                const childKeys = getAllChildrenKeys(node, treeData);
                const selectedKeys = Array.isArray(selected) ? selected : [];
                const selectedChildCount = childKeys.filter(k => selectedKeys.includes(k)).length;
                indeterminate = !isSelected && selectedChildCount > 0 && selectedChildCount < childKeys.length;
              }
              return (
                <span className="sui-tree-select-checkbox" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={isSelected}
                    indeterminate={indeterminate}
                    disabled={node.disabled}
                    onChange={() => {
                      if (node.disabled) return;
                      handleSelect(node);
                    }}
                  />
                </span>
              );
            })()
          )}
          
          {/* 节点标题 */}
          <span className="sui-tree-select-node-title">{node.title}</span>
        </div>
        
        {/* 子节点 */}
        {hasChildren(node) && isExpanded && (
          <div className="sui-tree-select-node-children">
            {node.children.map(child => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  // 渲染下拉内容
  const dropdownContent = (
    <div className="sui-tree-select-dropdown-wrap">
      <div
        className={`sui-tree-select-dropdown sui-tree-select-dropdown-${direction}`}
        ref={dropdownRef}
        style={dropdownStyle}
      >
        {filteredTreeData.length === 0 ? (
          <div className="sui-tree-select-empty">无数据</div>
        ) : (
          <div className="sui-tree-select-tree">
            {filteredTreeData.map(node => renderTreeNode(node))}
          </div>
        )}
      </div>
    </div>
  );
  
  // 弹层挂载节点
  const popupContainer = getPopupContainer ? getPopupContainer(triggerRef.current) : undefined;
  
  // 判断是否显示清空按钮
  const showClear = allowClear && (
    (multiple && Array.isArray(selected) && selected.length > 0) || 
    (!multiple && selected !== undefined)
  );
  
  // 获取选中项的展示
  const getSelectedLabels = () => {
    if (!selected) return [];
    
    const selectedKeys = Array.isArray(selected) ? selected : [selected];
    let selectedNodes = flatNodes.filter(node => selectedKeys.includes(node.key));
    
    // 根据显示策略过滤节点
    if (treeCheckable && showCheckedStrategy !== 'SHOW_ALL') {
      if (showCheckedStrategy === 'SHOW_PARENT') {
        // 只显示父节点，过滤掉所有有选中父节点的子节点
        selectedNodes = selectedNodes.filter(node => {
          const parentKeys = getAllParentKeys(node.key, treeData);
          return !parentKeys.some(pk => selectedKeys.includes(pk));
        });
      } else if (showCheckedStrategy === 'SHOW_CHILD') {
        // 只显示子节点，过滤掉所有有选中子节点的父节点
        selectedNodes = selectedNodes.filter(node => {
          if (node.isLeaf) return true;
          const childKeys = getAllChildrenKeys(node, treeData);
          // 如果所有子节点都被选中，则不显示父节点
          return !childKeys.every(ck => selectedKeys.includes(ck));
        });
      }
    }
    
    return selectedNodes.map(node => ({
      key: node.key,
      label: node.title,
    }));
  };
  
  // 选中项展示
  const selectedLabels = getSelectedLabels();
  
  // 处理标签数量限制
  const getDisplayTags = () => {
    if (!maxTagCount || selectedLabels.length <= maxTagCount) {
      return selectedLabels;
    }
    
    const displayTags = selectedLabels.slice(0, maxTagCount);
    const omittedValues = selectedLabels.slice(maxTagCount);
    
    const ellipsisTag = {
      key: '__sui_ellipsis__',
      label: maxTagPlaceholder 
        ? maxTagPlaceholder(omittedValues.map(tag => tag.key))
        : `+${omittedValues.length}...`,
    };
    
    return [...displayTags, ellipsisTag];
  };
  
  // 选择框内容渲染
  const renderSelection = () => {
    if (multiple || treeCheckable) {
      const displayTags = getDisplayTags();
      
      return (
        <div className="sui-tree-select-tags">
          {displayTags.length > 0 ?
            displayTags.map(tag => 
              tag.key === '__sui_ellipsis__' ? (
                <span className="sui-tree-select-tag-rest" key={tag.key}>
                  {tag.label}
                </span>
              ) : (
                <span className="sui-tree-select-tag" key={tag.key}>
                  <span className="sui-tree-select-tag-content">{tag.label}</span>
                  <span 
                    className="sui-tree-select-tag-close" 
                    onClick={e => { 
                      e.stopPropagation(); 
                      handleRemoveTag(tag.key); 
                    }}
                  >
                    <Icon name="CloseOne" theme="filled" size={14} />
                  </span>
                </span>
              )
            )
            : null
          }
          {showSearch && (
            <input
              className="sui-tree-select-search-input"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder={displayTags.length === 0 ? placeholder : ''}
              style={{ flex: 1, minWidth: 0 }}
              readOnly={!open}
              autoFocus={open}
            />
          )}
        </div>
      );
    }
    
    // 单选
    return (
      <div className="sui-tree-select-selection-item">
        {selectedLabels.length > 0 ? selectedLabels[0].label : ''}
        {showSearch && open && (
          <input
            className="sui-tree-select-search-input"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={selectedLabels.length === 0 ? placeholder : ''}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              padding: 'inherit',
              border: 'none',
              background: 'transparent',
              outline: 'none',
            }}
            autoFocus
          />
        )}
      </div>
    );
  };
  
  // 主体
  return (
    <div
      className={`sui-tree-select${disabled ? ' sui-tree-select-disabled' : ''} ${className} sui-tree-select-${size}${showClear ? ' sui-tree-select-has-clear' : ''}`}
      style={style}
      ref={triggerRef}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (!disabled) {
          setOpen(v => !v);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={`sui-tree-select-selection${open ? ' sui-tree-select-open' : ''}`}>
        {renderSelection()}
        {!selectedLabels.length && !searchValue && (
          <span className="sui-tree-select-placeholder">{placeholder}</span>
        )}
        {showClear && (
          <span className="sui-tree-select-clear" onClick={handleClear}>
            <Icon name="CloseOne" theme="filled" size={14} />
          </span>
        )}
        <span className="sui-tree-select-arrow">
          <Icon name="Down" size={16} />
        </span>
      </div>
      {open && (popupContainer ?
        ReactDOM.createPortal(dropdownContent, popupContainer)
        : dropdownContent
      )}
    </div>
  );
};

TreeSelect.propTypes = {
  treeData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.node.isRequired,
      value: PropTypes.any,
      disabled: PropTypes.bool,
      children: PropTypes.array,
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  allowClear: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  dropdownStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  showSearch: PropTypes.bool,
  filterTreeNode: PropTypes.func,
  onSearch: PropTypes.func,
  treeCheckable: PropTypes.bool,
  treeDefaultExpandAll: PropTypes.bool,
  treeDefaultExpandedKeys: PropTypes.array,
  treeExpandedKeys: PropTypes.array,
  onTreeExpand: PropTypes.func,
  showCheckedStrategy: PropTypes.oneOf(['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']),
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.func,
};

export default TreeSelect;