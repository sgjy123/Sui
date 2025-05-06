import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Timeline = ({
  children,
  mode = 'left',
  reverse = false,
  pending = null,
  pendingDot,
  className = '',
  style = {},
  ...props
}) => {
  // 处理子元素
  const items = React.Children.toArray(children);
  const pendingNode = typeof pending === 'boolean' ? null : pending;
  
  // 如果有待处理节点，添加到列表中
  const pendingItem = pending ? (
    <TimelineItem 
      className="sui-timeline-item-pending" 
      dot={pendingDot || <span className="sui-timeline-item-pending-dot" />}
    >
      {pendingNode}
    </TimelineItem>
  ) : null;

  // 根据reverse属性决定元素顺序
  const timelineItems = reverse ? [...items.reverse(), pendingItem].filter(Boolean) : [...items, pendingItem].filter(Boolean);
  
  // 构建时间轴类名
  const timelineClassName = [
    'sui-timeline',
    mode === 'alternate' ? 'sui-timeline-alternate' : '',
    mode === 'right' ? 'sui-timeline-right' : '',
    pending ? 'sui-timeline-pending' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <ul className={timelineClassName} style={style} {...props}>
      {timelineItems.map((item, index) => {
        if (!item) return null;
        
        // 为交替模式设置位置
        return React.cloneElement(item, {
          position: mode === 'alternate' ? (index % 2 === 0 ? 'left' : 'right') : mode,
          key: item.key || index,
          last: index === timelineItems.length - 1
        });
      })}
    </ul>
  );
};

Timeline.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['left', 'alternate', 'right']),
  reverse: PropTypes.bool,
  pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  pendingDot: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

// TimelineItem 子组件
const TimelineItem = ({
  children,
  dot,
  position,
  color = 'blue',
  label,
  className = '',
  style = {},
  tailStyle = {},
  last = false,
  ...props
}) => {
  // 构建时间轴项类名
  const itemClassName = [
    'sui-timeline-item',
    last ? 'sui-timeline-item-last' : '',
    position === 'right' ? 'sui-timeline-item-right' : '',
    position === 'left' ? 'sui-timeline-item-left' : '',
    className
  ].filter(Boolean).join(' ');

  // 自定义颜色样式
  const dotStyle = {
    borderColor: /^(blue|red|green|gray)$/.test(color) ? undefined : color,
    ...style
  };

  // 构建时间轴点类名
  const dotClassName = [
    'sui-timeline-item-head',
    `sui-timeline-item-head-${/^(blue|red|green|gray)$/.test(color) ? color : 'blue'}`,
    dot ? 'sui-timeline-item-head-custom' : ''
  ].filter(Boolean).join(' ');

  return (
    <li className={itemClassName} {...props}>
      {label && <div className="sui-timeline-item-label">{label}</div>}
      <div className="sui-timeline-item-tail" style={tailStyle} />
      <div className={dotClassName} style={dotStyle}>
        {dot}
      </div>
      <div className="sui-timeline-item-content">
        {children}
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  children: PropTypes.node,
  dot: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.string,
  label: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  tailStyle: PropTypes.object,
  last: PropTypes.bool,
};

Timeline.Item = TimelineItem;

export default Timeline;