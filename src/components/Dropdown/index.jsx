import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.less';

const Dropdown = ({
  children,
  overlay,
  trigger = 'hover',
  placement = 'bottomLeft',
  disabled = false,
  visible,
  onVisibleChange,
  className,
  style,
  arrow = false,
}) => {
  const [isVisible, setIsVisible] = useState(visible || false);
  const [menuPosition, setMenuPosition] = useState({});
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const triggerArray = Array.isArray(trigger) ? trigger : [trigger];
  const timeoutRef = useRef(null);

  // 更新可见状态
  const handleVisibleChange = (newVisible) => {
    if (disabled) return;
    if (visible === undefined) {
      setIsVisible(newVisible);
    }
    if (onVisibleChange) {
      onVisibleChange(newVisible);
    }
  };

  // 处理点击事件
  const handleClick = (e) => {
    if (triggerArray.includes('click')) {
      handleVisibleChange(!isVisible);
      e.stopPropagation();
    }
  };

  // 处理鼠标进入事件
  const handleMouseEnter = () => {
    if (triggerArray.includes('hover')) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        handleVisibleChange(true);
      }, 100);
    }
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (triggerArray.includes('hover')) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        handleVisibleChange(false);
      }, 100);
    }
  };

  // 点击外部关闭菜单
  const handleOutsideClick = (e) => {
    if (
      isVisible &&
      triggerRef.current &&
      !triggerRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      handleVisibleChange(false);
    }
  };

  // 监听外部点击
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible]);

  // 响应visible属性变化
  useEffect(() => {
    if (visible !== undefined) {
      setIsVisible(visible);
    }
  }, [visible]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // 动态计算菜单位置，修复 bottomCenter、bottomRight、topCenter、topRight 偏差
  useLayoutEffect(() => {
    if (!isVisible || !triggerRef.current || !menuRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const gap = 8;
    let position = { position: 'fixed', zIndex: 1050, minWidth: rect.width };
    switch (placement) {
      case 'bottomLeft':
        position.top = rect.bottom + gap;
        position.left = rect.left;
        break;
      case 'bottomCenter':
        position.top = rect.bottom + gap;
        position.left = rect.left + (rect.width - menuRect.width) / 2;
        break;
      case 'bottomRight':
        position.top = rect.bottom + gap;
        position.left = rect.right - menuRect.width;
        break;
      case 'topLeft':
        position.bottom = window.innerHeight - rect.top + gap;
        position.left = rect.left;
        break;
      case 'topCenter':
        position.bottom = window.innerHeight - rect.top + gap;
        position.left = rect.left + (rect.width - menuRect.width) / 2;
        break;
      case 'topRight':
        position.bottom = window.innerHeight - rect.top + gap;
        position.left = rect.right - menuRect.width;
        break;
      default:
        position.top = rect.bottom + gap;
        position.left = rect.left;
    }
    setMenuPosition(position);
  }, [isVisible, placement]);

  // 渲染菜单
  const renderMenu = () => {
    if (!isVisible) return null;
    // 箭头样式
    const getArrowStyle = () => {
      if (!arrow) return null;
      const arrowStyle = {
        position: 'absolute',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 6px 6px',
        borderColor: 'transparent transparent #fff',
      };
      if (placement.startsWith('top')) {
        arrowStyle.borderWidth = '6px 6px 0';
        arrowStyle.borderColor = '#fff transparent transparent';
        arrowStyle.bottom = '-6px';
      } else {
        arrowStyle.top = '-6px';
      }
      if (placement.endsWith('Left')) {
        arrowStyle.left = '16px';
      } else if (placement.endsWith('Right')) {
        arrowStyle.right = '16px';
      } else if (placement.endsWith('Center')) {
        arrowStyle.left = '50%';
        arrowStyle.transform = 'translateX(-50%)';
      }
      return arrowStyle;
    };
    const arrowStyle = getArrowStyle();
    return ReactDOM.createPortal(
      <div
        className="sui-dropdown-menu"
        style={menuPosition}
        ref={menuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {arrow && <div className="sui-dropdown-arrow" style={arrowStyle} />}
        {overlay}
      </div>,
      document.body,
    );
  };

  // 触发器属性
  const triggerProps = {};
  if (triggerArray.includes('hover')) {
    triggerProps.onMouseEnter = handleMouseEnter;
    triggerProps.onMouseLeave = handleMouseLeave;
  }
  if (triggerArray.includes('click')) {
    triggerProps.onClick = handleClick;
  }
  const cls = ['sui-dropdown'];
  if (className) cls.push(className);
  if (disabled) cls.push('sui-dropdown-disabled');

  return (
    <div className={cls.join(' ')} style={style}>
      <div ref={triggerRef} {...triggerProps} className="sui-dropdown-trigger">
        {children}
      </div>
      {renderMenu()}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.node.isRequired,
  trigger: PropTypes.oneOfType([
    PropTypes.oneOf(['hover', 'click']),
    PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click'])),
  ]),
  placement: PropTypes.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']),
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  arrow: PropTypes.bool,
};

export default Dropdown;
