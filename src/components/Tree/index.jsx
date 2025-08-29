import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import './style.less';

const toKeySet = (arr) => new Set(Array.isArray(arr) ? arr : []);

const Tree = ({
  treeData = [],
  defaultExpandAll = false,
  defaultExpandedKeys,
  expandedKeys,
  onExpand,
  selectable = false,
  selectedKeys,
  defaultSelectedKeys,
  onSelect,
  checkable = false,
  checkedKeys,
  defaultCheckedKeys,
  onCheck,
  checkStrictly = false,
  multiple = false,
  showLine = false,
  showIcon = false,
  blockNode = false,
  titleRender,
  highlightAncestorsOnHover = false,
  className,
  style,
}) => {
  const collectAllKeys = useCallback((nodes) => {
    const all = [];
    const walk = (ns) => ns.forEach(n => { all.push(n.key); if (n.children) walk(n.children); });
    walk(nodes);
    return all;
  }, []);

  const allKeysMemo = useMemo(() => collectAllKeys(treeData), [collectAllKeys, treeData]);

  // Build maps for cascade operations
  const { keyToNode, keyToParent, keyToChildren } = useMemo(() => {
    const k2n = new Map();
    const k2p = new Map();
    const k2c = new Map();
    const walk = (nodes, parent = null) => {
      nodes.forEach(n => {
        k2n.set(n.key, n);
        if (parent !== null) k2p.set(n.key, parent);
        if (Array.isArray(n.children) && n.children.length) {
          k2c.set(n.key, n.children.map(c => c.key));
          walk(n.children, n.key);
        } else {
          k2c.set(n.key, []);
        }
      });
    };
    walk(treeData);
    return { keyToNode: k2n, keyToParent: k2p, keyToChildren: k2c };
  }, [treeData]);

  // optional: highlight ancestor nodes when hovering a child
  const [hoverKey, setHoverKey] = useState(null);
  const hoverAncestorKeys = useMemo(() => {
    if (!highlightAncestorsOnHover || !hoverKey) return new Set();
    const set = new Set();
    let p = keyToParent.get(hoverKey);
    while (p !== undefined) { set.add(p); p = keyToParent.get(p); }
    return set;
  }, [highlightAncestorsOnHover, hoverKey, keyToParent]);

  // expanded
  const [innerExpandedKeys, setInnerExpandedKeys] = useState(() => {
    if (expandedKeys) return expandedKeys;
    if (defaultExpandAll) return allKeysMemo;
    return defaultExpandedKeys || [];
  });
  const mergedExpandedKeys = expandedKeys !== undefined ? expandedKeys : innerExpandedKeys;

  const setExpanded = (keys) => {
    if (expandedKeys === undefined) setInnerExpandedKeys(keys);
    onExpand && onExpand(keys);
  };

  // selected
  const [innerSelectedKeys, setInnerSelectedKeys] = useState(() => defaultSelectedKeys || []);
  const mergedSelectedKeys = selectedKeys !== undefined ? selectedKeys : innerSelectedKeys;

  const setSelected = (keys) => {
    if (selectedKeys === undefined) setInnerSelectedKeys(keys);
    onSelect && onSelect(keys);
  };

  // checked (support half-checked when cascade)
  const normalizeControlledChecked = useCallback((ck) => {
    if (!ck) return { checked: [], halfChecked: [] };
    if (Array.isArray(ck)) return { checked: ck, halfChecked: [] };
    if (typeof ck === 'object') return { checked: ck.checkedKeys || [], halfChecked: ck.halfCheckedKeys || [] };
    return { checked: [], halfChecked: [] };
  }, []);

  const [innerChecked, setInnerChecked] = useState(() => normalizeControlledChecked(defaultCheckedKeys));
  const mergedChecked = checkedKeys !== undefined ? normalizeControlledChecked(checkedKeys) : innerChecked;

  const setCheckedState = (next) => {
    if (checkedKeys === undefined) setInnerChecked(next);
    onCheck && onCheck(checkStrictly ? next.checked : { checkedKeys: next.checked, halfCheckedKeys: next.halfChecked });
  };

  const getDescendantKeys = useCallback((key) => {
    const res = [];
    const dfs = (k) => {
      const children = keyToChildren.get(k) || [];
      children.forEach(child => { res.push(child); dfs(child); });
    };
    dfs(key);
    return res;
  }, [keyToChildren]);

  const getAncestorKeys = useCallback((key) => {
    const res = [];
    let p = keyToParent.get(key);
    while (p !== undefined) { res.push(p); p = keyToParent.get(p); }
    return res;
  }, [keyToParent]);

  const isExpanded = useCallback((key) => toKeySet(mergedExpandedKeys).has(key), [mergedExpandedKeys]);
  const isSelected = useCallback((key) => toKeySet(mergedSelectedKeys).has(key), [mergedSelectedKeys]);
  const isChecked = useCallback((key) => Array.isArray(mergedChecked.checked) ? toKeySet(mergedChecked.checked).has(key) : false, [mergedChecked]);

  const toggleExpand = (key) => {
    const set = new Set(mergedExpandedKeys);
    if (set.has(key)) set.delete(key); else set.add(key);
    setExpanded(Array.from(set));
  };

  const toggleSelect = (key) => {
    if (!selectable) return;
    if (multiple) {
      const set = new Set(mergedSelectedKeys);
      if (set.has(key)) set.delete(key); else set.add(key);
      setSelected(Array.from(set));
    } else {
      setSelected(isSelected(key) ? [] : [key]);
    }
  };

  const toggleCheck = (key) => {
    if (!checkable) return;
    const node = keyToNode.get(key);
    if (node && (node.disableCheckbox || node.disabled)) return;

    if (checkStrictly) {
      const set = new Set(mergedChecked.checked);
      if (set.has(key)) set.delete(key); else set.add(key);
      setCheckedState({ checked: Array.from(set), halfChecked: mergedChecked.halfChecked });
      return;
    }

    // cascade
    const nextChecked = new Set(mergedChecked.checked);
    const nextHalf = new Set(mergedChecked.halfChecked);
    const willCheck = !nextChecked.has(key);

    const affectKeys = [key, ...getDescendantKeys(key)];
    affectKeys.forEach(k => {
      const n = keyToNode.get(k);
      if (n && n.disableCheckbox) return;
      if (willCheck) { nextChecked.add(k); nextHalf.delete(k); } else { nextChecked.delete(k); nextHalf.delete(k); }
    });

    // update ancestors
    getAncestorKeys(key).forEach(ancestor => {
      const children = keyToChildren.get(ancestor) || [];
      const enabledChildren = children.filter(c => {
        const cn = keyToNode.get(c);
        return !(cn && cn.disableCheckbox);
      });
      const checkedCount = enabledChildren.filter(c => nextChecked.has(c)).length;
      if (checkedCount === 0) {
        nextChecked.delete(ancestor);
        nextHalf.delete(ancestor);
      } else if (checkedCount === enabledChildren.length) {
        nextChecked.add(ancestor);
        nextHalf.delete(ancestor);
      } else {
        nextChecked.delete(ancestor);
        nextHalf.add(ancestor);
      }
    });

    setCheckedState({ checked: Array.from(nextChecked), halfChecked: Array.from(nextHalf) });
  };

  const renderNode = (node, level = 0) => {
    const expanded = isExpanded(node.key);
    const selected = isSelected(node.key);
    const checked = isChecked(node.key);
    const halfChecked = !checkStrictly && Array.isArray(mergedChecked.halfChecked) && mergedChecked.halfChecked.includes(node.key);
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    const disabled = !!node.disabled;
    const disableCheckbox = !!node.disableCheckbox;
    return (
      <div
        key={node.key}
        className={classNames(
          'sui-tree-node',
          {
            'sui-tree-node-expanded': expanded,
            'sui-tree-node-selected': selected,
            'sui-tree-node-disabled': disabled,
            'sui-tree-node-block': blockNode,
            'sui-tree-node-ancestor-hover': highlightAncestorsOnHover && hoverAncestorKeys.has(node.key),
          }
        )}
      >
        <div
          className="sui-tree-node-inner"
          style={{ paddingLeft: level * 18 }}
          onClick={() => !disabled && toggleSelect(node.key)}
          onMouseEnter={() => { if (highlightAncestorsOnHover) setHoverKey(node.key); }}
          onMouseLeave={() => { if (highlightAncestorsOnHover) setHoverKey(null); }}
        >
          <span
            className={classNames('sui-tree-switcher', { 'sui-tree-switcher-noop': !hasChildren, 'sui-tree-show-line': showLine })}
            onClick={(e) => { e.stopPropagation(); if (hasChildren && !disabled) toggleExpand(node.key); }}
          >
            {hasChildren ? (
              <Icon name={expanded ? 'Down' : 'Right'} theme="outline" size={14} />
            ) : (
              showLine ? <span className="sui-tree-switcher-line" /> : <span className="sui-tree-switcher-placeholder" />
            )}
          </span>
          {showIcon && (
            <span className="sui-tree-icon">
              {node.icon || (hasChildren ? <Icon name={expanded ? 'FolderOpen' : 'FolderClose'} theme="outline" size={16} /> : <Icon name="FileText" theme="outline" size={16} />)}
            </span>
          )}
          {checkable && (
            <span className={classNames('sui-tree-checkbox', { 'sui-tree-checkbox-disabled': disableCheckbox || disabled })}>
              <Checkbox
                checked={checked}
                indeterminate={!!halfChecked}
                disabled={disableCheckbox || disabled}
                onChange={(e) => { e?.nativeEvent?.stopPropagation?.(); toggleCheck(node.key); }}
              />
            </span>
          )}
          <span className="sui-tree-title">{titleRender ? titleRender(node) : node.title}</span>
        </div>
        {hasChildren && expanded && (
          <div className={classNames('sui-tree-children', { 'sui-tree-children-lined': showLine })}>
            {node.children.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={classNames('sui-tree', { 'sui-tree-block': blockNode }, className)} style={style}>
      {treeData.map((n) => renderNode(n, 0))}
    </div>
  );
};

Tree.propTypes = {
  treeData: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, title: PropTypes.node, children: PropTypes.array })),
  defaultExpandAll: PropTypes.bool,
  defaultExpandedKeys: PropTypes.array,
  expandedKeys: PropTypes.array,
  onExpand: PropTypes.func,
  selectable: PropTypes.bool,
  selectedKeys: PropTypes.array,
  defaultSelectedKeys: PropTypes.array,
  onSelect: PropTypes.func,
  checkable: PropTypes.bool,
  checkedKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({ checkedKeys: PropTypes.array, halfCheckedKeys: PropTypes.array })]),
  defaultCheckedKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({ checkedKeys: PropTypes.array, halfCheckedKeys: PropTypes.array })]),
  onCheck: PropTypes.func,
  checkStrictly: PropTypes.bool,
  multiple: PropTypes.bool,
  showLine: PropTypes.bool,
  showIcon: PropTypes.bool,
  blockNode: PropTypes.bool,
  titleRender: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Tree;


