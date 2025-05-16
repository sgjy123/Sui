import React, { useState, useContext, createContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import './style.less';

// 创建菜单上下文
const MenuContext = createContext({
  mode: 'vertical',
  theme: 'light',
  selectedKeys: [],
  openKeys: [],
  inlineIndent: 24,
  inlineCollapsed: false,
  onSelect: () => {},
  onOpenChange: () => {},
});

// MenuItem 组件
const MenuItem = ({ children, icon, disabled = false, danger = false, className = '', index, onClick, ...props }) => {
  const { mode, theme, selectedKeys, onSelect, inlineCollapsed } = useContext(MenuContext);
  const [visible, setVisible] = useState(false);
  const itemRef = useRef(null);
  const isSelected = selectedKeys.includes(index);

  const handleClick = (e) => {
    if (disabled) return;
    onClick && onClick(e);
    onSelect && onSelect(index);
  };

  const handleMouseEnter = () => {
    if (inlineCollapsed) {
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (inlineCollapsed) {
      setVisible(false);
    }
  };

  const itemClassName = [
    'sui-menu-item',
    isSelected ? 'sui-menu-item-selected' : '',
    disabled ? 'sui-menu-item-disabled' : '',
    danger ? 'sui-menu-item-danger' : '',
    inlineCollapsed ? 'sui-menu-item-collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  let menuItemContent = (
    <li
      ref={itemRef}
      className={itemClassName}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      aria-disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="sui-menu-item-icon">
          <Icon name={icon} />
        </span>
      )}
      <span className="sui-menu-item-content">{children}</span>
    </li>
  );

  // 当菜单折叠时，使用Tooltip包装菜单项
  if (inlineCollapsed && icon) {
    console.log(itemRef, 'itemRef');
    menuItemContent = (
      <Tooltip
        title={children}
        placement="right"
        visible={visible}
        getPopupContainer={() => {
          return itemRef.current;
        }}
        overlayClassName="sui-menu-tooltip-collapsed"
      >
        {menuItemContent}
      </Tooltip>
    );
  }

  return menuItemContent;
};

// SubMenu 组件
const SubMenu = ({ children, title, icon, disabled = false, index, className = '', ...props }) => {
  const { mode, theme, openKeys, onOpenChange, inlineIndent, inlineCollapsed } = useContext(MenuContext);
  const [visible, setVisible] = useState(false);
  const subMenuRef = useRef(null);

  const isOpen = openKeys.includes(index);

  /*const handleTitleClick = (e) => {
    if (disabled) return;
    onOpenChange && onOpenChange(index, !isOpen);
  };

  const handleMouseEnter = () => {
    if (inlineCollapsed) {
      setVisible(true);
    }
  };*/

  const [closeTimer, setCloseTimer] = useState(null);

  const handleTitleClick = (e) => {
    if (disabled) return;
    clearTimeout(closeTimer);
    onOpenChange && onOpenChange(index, !isOpen);
  };

  const handleMouseEnter = () => {
    if (inlineCollapsed) {
      clearTimeout(closeTimer);
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (inlineCollapsed) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      setCloseTimer(timer);
    }
  };

  const handleSubMenuContentMouseEnter = () => {
    if (inlineCollapsed) {
      clearTimeout(closeTimer);
    }
  };

  const subMenuClassName = [
    'sui-submenu',
    `sui-submenu-${mode}`,
    isOpen ? 'sui-submenu-open' : '',
    disabled ? 'sui-submenu-disabled' : '',
    inlineCollapsed && !visible ? 'sui-submenu-collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const subMenuTitle = (
    <div
      className="sui-submenu-title"
      onClick={handleTitleClick}
      onMouseEnter={inlineCollapsed ? undefined : handleMouseEnter}
      onMouseLeave={inlineCollapsed ? undefined : handleMouseLeave}
      role="menuitem"
      aria-expanded={isOpen}
      aria-disabled={disabled}
    >
      {icon && (
        <span className="sui-menu-item-icon">
          <Icon name={icon} />
        </span>
      )}
      <span className="sui-menu-item-content">{title}</span>
      <span className="sui-submenu-arrow">
        <Icon name={mode === 'inline' ? (isOpen ? 'Down' : 'Right') : 'Down'} />
      </span>
    </div>
  );

  // 折叠状态下的子菜单内容
  const collapsedSubMenuContent = (
    <ul className="sui-submenu-popup" style={{ minWidth: '120px' }}>
      {React.Children.map(children, (child) => {
        // 如果是折叠状态，为所有子菜单传递inlineCollapsed属性
        if (child && child.type === SubMenu) {
          return React.cloneElement(child, {
            ...child.props,
            // 确保子菜单也知道当前是折叠状态
            inlineCollapsed: inlineCollapsed,
          });
        }
        return child;
      })}
    </ul>
  );

  // 正常状态下的子菜单内容
  const normalSubMenuContent = isOpen && (
    <ul className="sui-submenu-content">
      {React.Children.map(children, (child) => {
        // 如果是折叠状态，为所有子菜单传递inlineCollapsed属性
        if (inlineCollapsed && child && child.type === SubMenu) {
          return React.cloneElement(child, {
            ...child.props,
            inlineCollapsed: inlineCollapsed,
          });
        }
        return child;
      })}
    </ul>
  );

  // 当菜单折叠时，使用悬浮弹出子菜单
  if (inlineCollapsed && (mode === 'inline' || mode === 'vertical')) {
    return (
      <li
        className={subMenuClassName}
        ref={subMenuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className="sui-submenu-title-collapsed"
        >
          {icon && (
            <span className="sui-menu-item-icon">
              <Icon name={icon} />
            </span>
          )}
          {!icon && subMenuTitle}
        </div>
        {visible && (
          <div
            className="sui-submenu-popup-wrapper"
            style={{ position: 'absolute', left: '100%', top: 0, zIndex: 1050 }}
          >
            {collapsedSubMenuContent}
          </div>
        )}
      </li>
    );
  }

  return (
    <li className={subMenuClassName} {...props}>
      {subMenuTitle}
      {normalSubMenuContent}
    </li>
  );
};
// ItemGroup 组件
const ItemGroup = ({ children, title, className = '', ...props }) => {
  const groupClassName = ['sui-menu-item-group', className].filter(Boolean).join(' ');

  return (
    <li className={groupClassName} {...props}>
      <div className="sui-menu-item-group-title">{title}</div>
      <ul className="sui-menu-item-group-list">{children}</ul>
    </li>
  );
};

// 主菜单组件
const Menu = ({
  children,
  mode = 'vertical',
  theme = 'light',
  defaultSelectedKeys = [],
  selectedKeys: propSelectedKeys,
  defaultOpenKeys = [],
  openKeys: propOpenKeys,
  inlineIndent = 24,
  inlineCollapsed = false,
  multiple = false,
  className = '',
  onSelect,
  onOpenChange,
  ...props
}) => {
  // 受控与非受控状态管理
  const [selectedKeysState, setSelectedKeysState] = useState(defaultSelectedKeys);
  const [openKeysState, setOpenKeysState] = useState(defaultOpenKeys);

  // 确定实际使用的值（受控或非受控）
  const selectedKeys = propSelectedKeys !== undefined ? propSelectedKeys : selectedKeysState;
  const openKeys = propOpenKeys !== undefined ? propOpenKeys : openKeysState;

  // 如果是折叠模式，强制使用垂直模式，并且在折叠状态下不展开子菜单
  const actualMode = inlineCollapsed ? 'vertical' : mode;
  // 在折叠状态下，不使用默认展开的子菜单
  const actualOpenKeys = inlineCollapsed ? [] : openKeys;

  // 处理选择事件
  const handleSelect = (key) => {
    if (!multiple) {
      setSelectedKeysState([key]);
    } else {
      const newSelectedKeys = [...selectedKeysState];
      const index = newSelectedKeys.indexOf(key);
      if (index > -1) {
        newSelectedKeys.splice(index, 1);
      } else {
        newSelectedKeys.push(key);
      }
      setSelectedKeysState(newSelectedKeys);
    }
    onSelect && onSelect(key);
  };

  // 处理子菜单展开/折叠事件
  const handleOpenChange = (key, open) => {
    const newOpenKeys = [...openKeysState];
    const index = newOpenKeys.indexOf(key);

    if (open && index === -1) {
      newOpenKeys.push(key);
    } else if (!open && index > -1) {
      newOpenKeys.splice(index, 1);
    }

    setOpenKeysState(newOpenKeys);
    onOpenChange && onOpenChange(newOpenKeys);
  };

  const menuClassName = [
    'sui-menu',
    `sui-menu-${actualMode}`,
    `sui-menu-${theme}`,
    inlineCollapsed ? 'sui-menu-inline-collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MenuContext.Provider
      value={{
        mode: actualMode,
        theme,
        selectedKeys,
        openKeys,
        inlineIndent,
        inlineCollapsed,
        onSelect: handleSelect,
        onOpenChange: handleOpenChange,
      }}
    >
      <ul className={menuClassName} role="menu" {...props}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

// 属性类型定义
Menu.propTypes = {
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  theme: PropTypes.oneOf(['light', 'dark']),
  defaultSelectedKeys: PropTypes.array,
  selectedKeys: PropTypes.array,
  defaultOpenKeys: PropTypes.array,
  openKeys: PropTypes.array,
  inlineIndent: PropTypes.number,
  inlineCollapsed: PropTypes.bool,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  onOpenChange: PropTypes.func,
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  className: PropTypes.string,
  index: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SubMenu.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  index: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ItemGroup.propTypes = {
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// 导出组件
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

export default Menu;
