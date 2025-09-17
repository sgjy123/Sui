import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import ButtonGroup from './ButtonGroup';
import './style.less';

const Button = ({
  children,
  type = 'default',
  size = 'middle',
  disabled = false,
  loading = false,
  icon = '',
  iconTheme = 'outline',
  iconPosition = 'start',
  className = '',
  ghost = false,
  danger = false,
  block = false,
  shape = 'default',
  rippleEffect = true,
  onClick,
  htmlType = 'button',
  ...props
}) => {
  // 按钮引用
  const buttonRef = useRef(null);
  
  // 处理点击事件和波纹效果
  const handleClick = (e) => {
    if (disabled || loading) return;
    
    // 创建波纹效果
    if (rippleEffect) {
      const button = buttonRef.current;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      button.appendChild(ripple);
      // 动画结束后移除波纹元素
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
    
    onClick && onClick(e);
  };

  // 构建按钮类名
  const buttonClassName = [
    'sui-button',
    `sui-button-${type}`,
    `sui-button-${size}`,
    `sui-button-shape-${shape}`,
    disabled ? 'sui-button-disabled' : '',
    loading ? 'sui-button-loading' : '',
    ghost ? 'sui-button-ghost' : '',
    danger ? 'sui-button-danger' : '',
    block ? 'sui-button-block' : '',
    className
  ].filter(Boolean).join(' ');

  // 渲染图标
  const renderIcon = () => {
    if (loading) {
      return <Icon name="Loading" theme={iconTheme} className="sui-button-loading-icon" />;
    }
    if (icon) {
      return <Icon name={icon} theme={iconTheme} className="sui-button-icon" />;
    }
    return null;
  };

  // 添加键盘可访问性支持
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };
  
  // 清理波纹效果
  useEffect(() => {
    return () => {
      if (buttonRef.current) {
        const ripples = buttonRef.current.querySelectorAll('.ripple');
        ripples.forEach(ripple => ripple.remove());
      }
    };
  }, []);

  // 判断是否只有图标没有文本
  const hasOnlyIcon = (icon || loading) && !children;

  return (
    <button
      ref={buttonRef}
      className={`${buttonClassName} ${hasOnlyIcon ? 'sui-button-icon-only' : ''}`}
      disabled={disabled}
      type={htmlType}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      aria-busy={loading}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <div className="sui-button-inner">
        {iconPosition === 'start' && renderIcon()}
        {children && <span className="sui-button-content">{children}</span>}
        {iconPosition === 'end' && renderIcon()}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'primary', 'dashed', 'text', 'link']),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.string,
  iconTheme: PropTypes.oneOf(['outline', 'filled']),
  iconPosition: PropTypes.oneOf(['start', 'end']),
  className: PropTypes.string,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  rippleEffect: PropTypes.bool,
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'default',
  size: 'middle',
  disabled: false,
  loading: false,
  icon: '',
  iconTheme: 'outline',
  iconPosition: 'start',
  className: '',
  ghost: false,
  danger: false,
  block: false,
  shape: 'default',
  rippleEffect: true,
  htmlType: 'button',
};

// 将ButtonGroup作为Button的静态属性导出
Button.Group = ButtonGroup;

export default Button;