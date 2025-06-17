import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const Collapse = ({
  accordion = false,
  activeKey: propActiveKey,
  defaultActiveKey,
  onChange,
  children,
  className,
  style,
  gap = true,
}) => {
  const [activeKey, setActiveKey] = useState(
    propActiveKey !== undefined ? propActiveKey : defaultActiveKey || []
  );

  const isActive = (key) =>
    accordion
      ? activeKey === key
      : Array.isArray(activeKey) && activeKey.includes(key);

  const handleItemClick = (key, disabled) => {
    if (disabled) return;
    let newActiveKey;
    if (accordion) {
      newActiveKey = activeKey === key ? null : key;
    } else {
      newActiveKey = isActive(key)
        ? activeKey.filter((k) => k !== key)
        : [...activeKey, key];
    }
    setActiveKey(newActiveKey);
    onChange && onChange(newActiveKey);
  };

  useEffect(() => {
    if (propActiveKey !== undefined) setActiveKey(propActiveKey);
  }, [propActiveKey]);

  return (
    <div className={classNames('sui-collapse', className)} style={style}>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          isActive: isActive(child.key ?? idx),
          onClick: () => handleItemClick(child.key ?? idx, child.props.disabled),
          gap,
        })
      )}
    </div>
  );
};

const CollapsePanel = ({
  header,
  children,
  isActive,
  onClick,
  disabled,
  className,
  style,
  gap,
}) => (
  <div
    className={classNames('sui-collapse-panel', className, {
      'sui-collapse-panel-active': isActive,
      'sui-collapse-panel-disabled': disabled,
      'sui-collapse-panel-no-gap': gap === false,
    })}
    style={style}
  >
    <div
      className="sui-collapse-header"
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={0}
    >
      <span className="sui-collapse-arrow">
        <Icon name="Right" style={{ transform: isActive ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
      </span>
      {header}
    </div>
    <div
      className="sui-collapse-content"
      style={{ display: isActive ? 'block' : 'none' }}
    >
      {children}
    </div>
  </div>
);

Collapse.propTypes = {
  accordion: PropTypes.bool,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  gap: PropTypes.bool,
};

CollapsePanel.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Collapse.Panel = CollapsePanel;
export default Collapse; 