import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Breadcrumb = ({ items, separator, className, style, onClick, direction = 'horizontal' }) => {
  const handleClick = (item, index) => {
    if (onClick) {
      onClick(item, index);
    }
  };

  const renderItemContent = (item) => {
    if (item.icon && direction === 'vertical') {
      return (
        <span className="sui-breadcrumb-item-inner">
          <span className="sui-breadcrumb-icon">{item.icon}</span>
          <span className="sui-breadcrumb-title">{item.title}</span>
        </span>
      );
    }
    
    return (
      <>
        {item.icon && <span className="sui-breadcrumb-icon">{item.icon}</span>}
        <span className="sui-breadcrumb-title">{item.title}</span>
      </>
    );
  };

  return (
    <nav 
      className={`sui-breadcrumb ${direction === 'vertical' ? 'sui-breadcrumb-vertical' : ''} ${className || ''}`} 
      style={style}
    >
      <ol className="sui-breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="sui-breadcrumb-item">
            {index > 0 && (
              <span className="sui-breadcrumb-separator">
                {separator || '/'}
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="sui-breadcrumb-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item, index);
                }}
              >
                {renderItemContent(item)}
              </a>
            ) : (
              <span className="sui-breadcrumb-text">
                {renderItemContent(item)}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      href: PropTypes.string,
      icon: PropTypes.node,
    })
  ).isRequired,
  separator: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Breadcrumb; 