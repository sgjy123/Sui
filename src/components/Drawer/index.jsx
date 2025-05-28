import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const Drawer = ({
  visible = false,
  title,
  placement = 'right',
  width = 456,
  height = 456,
  closable = true,
  mask = true,
  maskClosable = true,
  onClose,
  children,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      // 延迟添加动画类，确保过渡效果生效
      setTimeout(() => {
        setIsOpen(true);
      }, 0);
    } else {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const handleMaskClick = () => {
    if (maskClosable) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // 等待动画结束后再触发 onClose
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const drawerStyle = {
    ...style,
    [placement === 'left' || placement === 'right' ? 'width' : 'height']: 
      placement === 'left' || placement === 'right' ? width : height,
  };

  if (!visible && !isOpen) return null;

  return (
    <div className="sui-drawer-wrapper">
      {mask && (
        <div 
          className={classNames(
            'sui-drawer-mask',
            { 'sui-drawer-mask-open': isOpen }
          )}
          onClick={handleMaskClick}
        />
      )}
      <div
        className={classNames(
          'sui-drawer',
          `sui-drawer-${placement}`,
          { 'sui-drawer-open': isOpen },
          className
        )}
        style={drawerStyle}
      >
        <div className="sui-drawer-header">
          <div className="sui-drawer-title">{title}</div>
          {closable && (
            <button
              className="sui-drawer-close"
              onClick={handleClose}
            >
              <Icon name="CloseOne" theme="filled" />
            </button>
          )}
        </div>
        <div className="sui-drawer-body">
          {children}
        </div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.node,
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  closable: PropTypes.bool,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Drawer; 