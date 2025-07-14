import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import './style.less';

const Rate = ({
  value,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  allowClear = true,
  disabled = false,
  onChange,
  onHoverChange,
  character = <Icon name="Star" theme="filled" />,
  characterClassName,
  className,
  style,
  tooltips = [],
  size = 'middle',
  ...restProps
}) => {
  // 组件使用简单的受控/非受控模式
  const [localValue, setLocalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(undefined);
  
  // 当前值：优先使用悬停值 > 受控值 > 内部值
  const currentValue = hoverValue !== undefined 
    ? hoverValue 
    : (value !== undefined ? value : localValue);

  // 处理点击事件
  const handleClick = (index) => {
    if (disabled) return;
    
    let nextValue;
    
    // 计算点击的星星值
    if (allowHalf && lastHoverHalf) {
      nextValue = index + 0.5;
    } else {
      nextValue = index + 1;
    }
    
    // 处理清除逻辑
    if (allowClear) {
      const oldValue = value !== undefined ? value : localValue;
      if (nextValue === oldValue) {
        nextValue = 0;
      }
    }
    
    // 非受控模式下更新内部状态
    if (value === undefined) {
      setLocalValue(nextValue);
    }
    
    // 调用外部回调
    if (onChange) {
      onChange(nextValue);
    }
  };

  // 用于跟踪鼠标是否在星星左半部分（用于半星）
  let lastHoverHalf = false;
  
  // 处理鼠标移动事件
  const handleMouseMove = (event, index) => {
    if (disabled) return;
    
    // 处理半星
    let nextValue;
    if (allowHalf) {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - left;
      lastHoverHalf = offsetX < width / 2;
      nextValue = lastHoverHalf ? index + 0.5 : index + 1;
    } else {
      nextValue = index + 1;
      lastHoverHalf = false;
    }
    
    setHoverValue(nextValue);
    
    if (onHoverChange) {
      onHoverChange(nextValue);
    }
  };
  
  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (disabled) return;
    
    setHoverValue(undefined);
    
    if (onHoverChange) {
      onHoverChange(undefined);
    }
  };

  // 渲染单个星星
  const renderStar = (index) => {
    // 计算星星状态
    let starValue = index + 1;
    let isActive = currentValue >= starValue;
    let isHalf = false;
    
    if (allowHalf) {
      const hasHalf = currentValue - Math.floor(currentValue) === 0.5;
      isHalf = hasHalf && Math.ceil(currentValue) === starValue;
      isActive = currentValue >= starValue;
    }
    
    // 星星样式类
    const starClassName = classNames('sui-rate-star', {
      'sui-rate-star-active': isActive && !isHalf,
      'sui-rate-star-half': isHalf,
    });
    
    // 字符样式类
    const charClassName = classNames('sui-rate-star-character', characterClassName);
    
    // 星星内容
    const starContent = (
      <li
        key={index}
        className={starClassName}
        onClick={() => handleClick(index)}
        onMouseMove={(e) => handleMouseMove(e, index)}
      >
        {/* 背景星星（灰色） */}
        <div className="sui-rate-star-bg">
          <span className={charClassName}>{character}</span>
        </div>
        
        {/* 前景星星（黄色） */}
        <div className="sui-rate-star-fg">
          <span className={charClassName}>{character}</span>
        </div>
      </li>
    );
    
    // 如果有提示文字，使用Tooltip包装
    const hasTooltip = tooltips.length > index && tooltips[index];
    if (hasTooltip) {
      return (
        <Tooltip key={index} title={tooltips[index]} placement="top">
          {starContent}
        </Tooltip>
      );
    }
    
    return starContent;
  };

  // 渲染星星列表
  const renderStars = () => {
    const stars = [];
    
    for (let i = 0; i < count; i++) {
      stars.push(renderStar(i));
    }
    
    return stars;
  };

  // 组件主样式
  const rateClassName = classNames(
    'sui-rate',
    {
      'sui-rate-disabled': disabled,
      'sui-rate-lg': size === 'large',
      'sui-rate-sm': size === 'small',
    },
    className
  );

  return (
    <ul
      className={rateClassName}
      style={style}
      onMouseLeave={handleMouseLeave}
      tabIndex={disabled ? -1 : 0}
      {...restProps}
    >
      {renderStars()}
    </ul>
  );
};

Rate.propTypes = {
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  count: PropTypes.number,
  allowHalf: PropTypes.bool,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onHoverChange: PropTypes.func,
  character: PropTypes.node,
  characterClassName: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  tooltips: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
};

export default Rate; 