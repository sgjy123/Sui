import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './style.less';

const BackTop = ({
  visibilityHeight = 400,
  className = '',
  style = {},
  onClick,
  children,
  text = '回到顶部',
  showIcon = true,
  iconOnly = false,
  icon = 'ToTop',
  iconTheme = 'filled',
  iconSize,
  target = () => window,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targetNode = target();
    const handleScroll = () => {
      const scrollTop = targetNode === window
        ? document.documentElement.scrollTop || document.body.scrollTop
        : targetNode.scrollTop;
      setVisible(scrollTop > visibilityHeight);
    };

    targetNode.addEventListener('scroll', handleScroll);
    // 初始化时检查一次
    handleScroll();

    return () => {
      targetNode.removeEventListener('scroll', handleScroll);
    };
  }, [visibilityHeight, target]);

  const scrollToTop = () => {
    const targetNode = target();
    if (targetNode === window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      targetNode.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    onClick?.();
  };

  if (!visible) {
    return null;
  }

  const renderContent = () => {
    if (children) {
      return children;
    }

    if (iconOnly) {
      return (
        <div className="sui-backtop-icon-only">
          <Icon name={icon} theme={iconTheme} size={iconSize || 24} />
        </div>
      );
    }

    return (
      <div className="sui-backtop-content">
        {showIcon && <Icon name={icon} theme={iconTheme} size={iconSize || 20} />}
        {text && <span className="sui-backtop-text">{text}</span>}
      </div>
    );
  };

  return (
    <div
      className={`sui-backtop ${className} ${iconOnly ? 'sui-backtop-icon-only' : ''}`}
      style={style}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
    >
      {renderContent()}
    </div>
  );
};

BackTop.propTypes = {
  visibilityHeight: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
  text: PropTypes.node,
  showIcon: PropTypes.bool,
  iconOnly: PropTypes.bool,
  icon: PropTypes.string,
  iconTheme: PropTypes.string,
  iconSize: PropTypes.number,
  target: PropTypes.func,
};

export default BackTop; 