import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './style.less';

const Loading = ({ 
  size = 'default',
  text = '加载中...',
  spinning = true,
  className = '',
  style = {},
  children,
  delay = 0,
  fullscreen = false,
}) => {
  const [showLoading, setShowLoading] = React.useState(!delay);

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!spinning) {
    return children;
  }

  const renderLoading = () => (
    <div className={`sui-loading ${size} ${className} ${fullscreen ? 'sui-loading-fullscreen' : ''}`} style={style}>
      <div className={`sui-loading-spin ${size}`}>
        <Icon name="Loading" theme="outline" size={size === 'small' ? 24 : size === 'large' ? 40 : 32} />
      </div>
      {text && <div className="sui-loading-text">{text}</div>}
    </div>
  );

  if (fullscreen) {
    return (
      <>
        {children}
        {showLoading && (
          <div className="sui-loading-fullscreen">
            {renderLoading()}
          </div>
        )}
      </>
    );
  }

  return (
    <div className={`sui-loading-container ${children ? 'sui-loading-has-children' : ''}`}>
      {children}
      {showLoading && renderLoading()}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  text: PropTypes.node,
  spinning: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  delay: PropTypes.number,
  fullscreen: PropTypes.bool,
};

export default Loading; 