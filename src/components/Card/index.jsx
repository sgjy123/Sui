import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const CardMeta = ({ title, description, avatar, className = '', style = {} }) => {
  return (
    <div className={`sui-card-meta ${className}`} style={style}>
      {avatar && <div className="sui-card-meta-avatar">{avatar}</div>}
      <div className="sui-card-meta-content">
        {title && <div className="sui-card-meta-title">{title}</div>}
        {description && <div className="sui-card-meta-description">{description}</div>}
      </div>
    </div>
  );
};

CardMeta.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  avatar: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Card = ({
  title,
  extra,
  bordered = true,
  hoverable = false,
  loading = false,
  children,
  className = '',
  style = {},
  cover,
  actions,
  size = 'default',
}) => {
  const renderLoading = () => (
    <div className="sui-card-loading">
      <div className="sui-card-loading-block" style={{ width: '100%' }} />
      <div className="sui-card-loading-block" style={{ width: '100%' }} />
      <div className="sui-card-loading-block" style={{ width: '100%' }} />
      <div className="sui-card-loading-block" style={{ width: '100%' }} />
    </div>
  );

  return (
    <div
      className={`sui-card ${bordered ? 'sui-card-bordered' : ''} ${hoverable ? 'sui-card-hoverable' : ''} ${
        size === 'small' ? 'sui-card-small' : ''
      } ${className}`}
      style={style}
    >
      {(title || extra) && (
        <div className="sui-card-head">
          {title && <div className="sui-card-head-title">{title}</div>}
          {extra && <div className="sui-card-extra">{extra}</div>}
        </div>
      )}
      {cover && <div className="sui-card-cover">{cover}</div>}
      <div className="sui-card-body">
        {loading ? renderLoading() : children}
      </div>
      {actions && actions.length > 0 && (
        <ul className="sui-card-actions">
          {actions.map((action, index) => (
            <li key={index} className="sui-card-action">
              {action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  cover: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
  size: PropTypes.oneOf(['default', 'small']),
};

// 将 CardMeta 作为 Card 的静态属性
Card.Meta = CardMeta;

export default Card; 