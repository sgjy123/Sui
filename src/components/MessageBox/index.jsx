import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';
import Space from '../Space';
import './style.less';

const MessageBox = ({
  visible,
  type = 'info',
  title,
  content,
  okText = '确定',
  cancelText = '取消',
  showCancel = false,
  onOk,
  onCancel,
  maskClosable = false,
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onCancel && onCancel();
    };
    if (visible) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [visible, onCancel]);

  if (!visible) return null;

  const icons = {
    info: <Icon name="Info" theme="filled" fill="#1890FF" />,
    success: <Icon name="CheckOne" theme="filled" fill="#52C41A" />,
    error: <Icon name="CloseOne" theme="filled" fill="#FF4D4F" />,
    warning: <Icon name="Info" theme="filled" fill="#FAAD14" />,
    confirm: <Icon name="Help" theme="filled" fill="#FAAD14" />,
  };

  return (
    <div className="sui-messagebox-root">
      <div className="sui-messagebox-mask" onClick={maskClosable ? onCancel : undefined} />
      <div className="sui-messagebox-wrap">
        <div className="sui-messagebox">
          <div className="sui-messagebox-header">
            <span className="sui-messagebox-icon">{icons[type]}</span>
            {title && <span className="sui-messagebox-title">{title}</span>}
          </div>
          <div className="sui-messagebox-content">{content}</div>
          <div className="sui-messagebox-footer">
            <Space>
              {showCancel && (
                <Button onClick={onCancel}>{cancelText}</Button>
              )}
              <Button type="primary" onClick={onOk}>{okText}</Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning', 'confirm']),
  title: PropTypes.node,
  content: PropTypes.node,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  showCancel: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
};

// 静态方法实现（React 18+ createRoot）
function showMessageBox(options) {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const root = createRoot(div);

    const close = () => {
      root.unmount();
      div.remove();
      options.onClose && options.onClose();
    };

    const handleOk = () => {
      close();
      resolve(true);
      options.onOk && options.onOk();
    };

    const handleCancel = () => {
      close();
      resolve(false);
      options.onCancel && options.onCancel();
    };

    root.render(
      <MessageBox
        {...options}
        visible={true}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    );
  });
}

MessageBox.info = (opts) => showMessageBox({ ...opts, type: 'info', showCancel: false });
MessageBox.success = (opts) => showMessageBox({ ...opts, type: 'success', showCancel: false });
MessageBox.error = (opts) => showMessageBox({ ...opts, type: 'error', showCancel: false });
MessageBox.warning = (opts) => showMessageBox({ ...opts, type: 'warning', showCancel: false });
MessageBox.confirm = (opts) => showMessageBox({ ...opts, type: 'confirm', showCancel: true });

export default MessageBox; 