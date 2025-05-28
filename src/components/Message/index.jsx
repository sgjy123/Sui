import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/client';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

let messageContainer = null;
let root = null;

const Message = ({ content, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Icon name="CheckOne" theme="filled" />;
      case 'error':
        return <Icon name="CloseOne" theme="filled" />;
      case 'warning':
        return <Icon name="Info" theme="filled" fill="#FAAD14" />;
      case 'loading':
        return <Icon name="Loading" theme="outline" className="sui-message-loading" />;
      default:
        return <Icon name="Info" theme="filled" />;
    }
  };

  if (!visible) return null;

  return (
    <div className={classNames('sui-message', `sui-message-${type}`)}>
      <span className="sui-message-icon">{getIcon()}</span>
      <span className="sui-message-content">{content}</span>
    </div>
  );
};

Message.propTypes = {
  content: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning', 'loading']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

const MessageContainer = ({ messages, onClose }) => {
  return (
    <div className="sui-message-container">
      {messages.map((message, index) => (
        <Message key={index} {...message} onClose={() => onClose(index)} />
      ))}
    </div>
  );
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      type: PropTypes.oneOf(['info', 'success', 'error', 'warning', 'loading']),
      duration: PropTypes.number,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

const createMessageContainer = () => {
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.className = 'sui-message-wrapper';
    document.body.appendChild(messageContainer);
    root = ReactDOM.createRoot(messageContainer);
  }
  return messageContainer;
};

let messageCount = 0;
const messageList = [];

const showMessage = (config) => {
  const container = createMessageContainer();
  const id = messageCount++;

  const message = {
    ...config,
    id,
  };

  messageList.push(message);

  const render = () => {
    root.render(
      <MessageContainer
        messages={messageList}
        onClose={(index) => {
          messageList.splice(index, 1);
          render();
        }}
      />,
    );
  };

  render();

  return {
    close: () => {
      const index = messageList.findIndex((msg) => msg.id === id);
      if (index > -1) {
        messageList.splice(index, 1);
        render();
      }
    },
  };
};

const message = {
  info: (content, duration) => showMessage({ content, type: 'info', duration }),
  success: (content, duration) => showMessage({ content, type: 'success', duration }),
  error: (content, duration) => showMessage({ content, type: 'error', duration }),
  warning: (content, duration) => showMessage({ content, type: 'warning', duration }),
  loading: (content, duration) => showMessage({ content, type: 'loading', duration }),
};

export default message;
