import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';
import './style.less';

const Notification = ({
  type = 'info',
  title,
  content,
  duration = 4.5,
  icon,
  closeable = true,
  onClose,
  btn,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose && onClose();
  };

  if (!visible) return null;

  const icons = {
    info: <Icon name="Info" theme="filled" fill="#1890FF" />,
    success: <Icon name="CheckOne" theme="filled" fill="#52C41A" />,
    error: <Icon name="CloseOne" theme="filled" fill="#FF4D4F" />,
    warning: <Icon name="Info" theme="filled" fill="#FAAD14" />,
  };

  return (
    <div className="sui-notification">
      <div className="sui-notification-icon">{icon || icons[type]}</div>
      <div className="sui-notification-content">
        {title && <div className="sui-notification-title">{title}</div>}
        <div className="sui-notification-message">{content}</div>
        {btn && <div className="sui-notification-btn">{btn}</div>}
      </div>
      {closeable && (
        <div className="sui-notification-close" onClick={handleClose}>
          <Icon name="Close" />
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  title: PropTypes.node,
  content: PropTypes.node,
  duration: PropTypes.number,
  icon: PropTypes.node,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  btn: PropTypes.node,
};

// 静态方法实现（React 18+ createRoot）
function showNotification(options) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);

  const close = () => {
    root.unmount();
    div.remove();
    options.onClose && options.onClose();
  };

  root.render(
    <Notification
      {...options}
      onClose={close}
    />
  );
}

Notification.info = (opts) => showNotification({ ...opts, type: 'info' });
Notification.success = (opts) => showNotification({ ...opts, type: 'success' });
Notification.error = (opts) => showNotification({ ...opts, type: 'error' });
Notification.warning = (opts) => showNotification({ ...opts, type: 'warning' });

export default Notification; 