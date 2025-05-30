import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Space from '../Space';
import Icon from '../Icon';
import './style.less';

const ANIMATION_DURATION = 300;

const Modal = ({
  visible,
  title,
  icon,
  children,
  onOk,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  footer,
  maskClosable = true,
  className = '',
  style = {},
  width = 520,
  showClose = true,
  keyboard = true,
  confirmLoading = false,
  destroyOnClose = false,
  afterClose,
  maskStyle = {},
  bodyStyle = {},
  forceRender = false,
}) => {
  const [rendered, setRendered] = useState(visible);
  const closeTimer = useRef();

  // ESC关闭
  useEffect(() => {
    if (!visible || keyboard === false) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onCancel && onCancel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, keyboard, onCancel]);

  // destroyOnClose
  useEffect(() => {
    if (visible) setRendered(true);
    else if (destroyOnClose) {
      closeTimer.current = setTimeout(() => setRendered(false), ANIMATION_DURATION);
    }
    return () => clearTimeout(closeTimer.current);
  }, [visible, destroyOnClose]);

  // afterClose
  useEffect(() => {
    if (!visible && afterClose) {
      const timer = setTimeout(afterClose, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [visible, afterClose]);

  if ((!rendered && destroyOnClose) && !forceRender) return null;
  if (!visible && !forceRender) return null;

  const handleMaskClick = (e) => {
    if (e.target === e.currentTarget && maskClosable) {
      onCancel && onCancel();
    }
  };

  return (
    <div className={`sui-modal-root ${className}`} style={{ display: visible ? 'block' : 'none', ...style }}>
      <div className="sui-modal-mask" style={maskStyle} onClick={handleMaskClick} />
      <div className="sui-modal-wrap" style={{ width }}>
        <div className="sui-modal">
          {(title || showClose || icon) && (
            <div className="sui-modal-header">
              {icon && <span className="sui-modal-icon">{icon}</span>}
              {title && <div className="sui-modal-title">{title}</div>}
              {showClose && (
                <span
                  className="sui-modal-close"
                  aria-label="关闭"
                  onClick={onCancel}
                  type="button"
                >
                  <Icon name="Close" />
                </span>
              )}
            </div>
          )}
          <div className="sui-modal-body" style={bodyStyle}>{children}</div>
          <div className="sui-modal-footer">
            {footer !== undefined ? (
              footer
            ) : (
              <Space>
                <Button onClick={onCancel}>{cancelText}</Button>
                <Button type="primary" onClick={onOk} loading={confirmLoading}>{okText}</Button>
              </Space>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.node,
  icon: PropTypes.node,
  children: PropTypes.node,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  footer: PropTypes.node,
  maskClosable: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showClose: PropTypes.bool,
  keyboard: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
  afterClose: PropTypes.func,
  maskStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  forceRender: PropTypes.bool,
};

Modal.defaultProps = {
  showClose: true,
  keyboard: true,
  confirmLoading: false,
  destroyOnClose: false,
  forceRender: false,
};

export default Modal; 