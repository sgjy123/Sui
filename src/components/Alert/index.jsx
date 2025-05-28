import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const iconMap = {
  info: <Icon name="Info" theme="filled" />,
  success: <Icon name="CheckOne" theme="filled" />,
  warning: <Icon name="Info" theme="filled" fill="#FAAD14" />,
  error: <Icon name="CloseOne" theme="filled" />,
};

const Alert = ({
  type = 'info',
  message,
  description,
  closable = false,
  onClose,
  showIcon = true,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div className={classNames('sui-alert', `sui-alert-${type}`, className)} style={style}>
      {showIcon && <span className="sui-alert-icon">{iconMap[type]}</span>}
      <div className="sui-alert-content">
        <div className="sui-alert-message">{message}</div>
        {description && <div className="sui-alert-description">{description}</div>}
      </div>
      {closable && (
        <span className="sui-alert-close" onClick={handleClose}>
          <Icon name="CloseOne" theme="filled" />
        </span>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  message: PropTypes.node.isRequired,
  description: PropTypes.node,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Alert;
