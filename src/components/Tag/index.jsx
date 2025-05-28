import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Tag = ({
  color,
  closable,
  onClose,
  children,
  className,
  style,
  bordered = true,
  icon,
}) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose?.(e);
  };

  const tagStyle = {
    ...style,
    ...(color && !color.startsWith('#') ? {} : { backgroundColor: color, borderColor: color }),
  };

  return (
    <span
      className={`sui-tag ${color && !color.startsWith('#') ? `sui-tag-${color}` : ''} ${
        bordered ? 'sui-tag-bordered' : ''
      } ${className || ''}`}
      style={tagStyle}
    >
      {icon && <span className="sui-tag-icon">{icon}</span>}
      <span className="sui-tag-content">{children}</span>
      {closable && (
        <span className="sui-tag-close-icon" onClick={handleClose}>
          ×
        </span>
      )}
    </span>
  );
};

Tag.propTypes = {
  /** 标签颜色，支持预设颜色或自定义颜色 */
  color: PropTypes.string,
  /** 是否可关闭 */
  closable: PropTypes.bool,
  /** 关闭时的回调 */
  onClose: PropTypes.func,
  /** 标签内容 */
  children: PropTypes.node,
  /** 自定义类名 */
  className: PropTypes.string,
  /** 自定义样式 */
  style: PropTypes.object,
  /** 是否有边框 */
  bordered: PropTypes.bool,
  /** 设置图标 */
  icon: PropTypes.node,
};

export default Tag; 