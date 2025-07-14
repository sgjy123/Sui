import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import '../Tooltip/style.less';
import './style.less';

// 工具函数
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const getPercent = (val, min, max) => ((val - min) / (max - min)) * 100;
const getClosest = (val, step, min) => Math.round((val - min) / step) * step + min;

const Slider = ({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  marks = {},
  vertical = false,
  disabled = false,
  range = false,
  tooltipVisible,
  tipFormatter = v => v,
  onChange,
  onAfterChange,
  className,
  style,
  ...rest
}) => {
  // 受控/非受控
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(() => {
    if (isControlled) return value;
    if (defaultValue !== undefined) return defaultValue;
    return range ? [min, min] : min;
  });
  const mergedValue = isControlled ? value : innerValue;

  // 拖拽状态
  const [dragging, setDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const sliderRef = useRef();

  // 计算滑块位置
  const getPosition = useCallback((e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let pos, size;
    if (vertical) {
      pos = rect.bottom - (e.touches ? e.touches[0].clientY : e.clientY);
      size = rect.height;
    } else {
      pos = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      size = rect.width;
    }
    return clamp(pos / size, 0, 1);
  }, [vertical]);

  // 位置转值
  const getValueFromPos = useCallback((percent) => {
    let val = min + percent * (max - min);
    val = getClosest(val, step, min);
    return clamp(val, min, max);
  }, [min, max, step]);

  // 更新值
  const updateValue = (val, idx = 0, trigger = true) => {
    let newValue;
    if (range) {
      const arr = Array.isArray(mergedValue) ? [...mergedValue] : [min, min];
      if (idx === 0) val = Math.min(val, arr[1]);
      else val = Math.max(val, arr[0]);
      arr[idx] = val;
      newValue = arr;
    } else {
      newValue = val;
    }
    if (!isControlled) setInnerValue(newValue);
    if (trigger && onChange) onChange(newValue);
    return newValue;
  };

  // 拖拽事件处理
  const handleDragStart = useCallback((e, idx) => {
    if (disabled) return;
    
    // 阻止默认行为和冒泡
    e.preventDefault();
    e.stopPropagation();
    
    // 获取初始位置并更新值
    const eventObj = e.touches?.[0] || e;
    const percent = getPosition(eventObj);
    const val = getValueFromPos(percent);
    updateValue(val, idx);
    
    // 更新拖拽状态
    setActiveIndex(idx);
    setDragging(true);
    
    const handleDragMove = (moveEvent) => {
      // 防止页面滚动
      moveEvent.preventDefault?.();
      
      // 获取位置并更新值
      const moveEventObj = moveEvent.touches?.[0] || moveEvent;
      const movePercent = getPosition(moveEventObj);
      const moveVal = getValueFromPos(movePercent);
      updateValue(moveVal, idx);
    };
    
    const handleDragEnd = (endEvent) => {
      // 最后一次更新值（如果有事件对象）
      if (endEvent) {
        const endEventObj = endEvent.changedTouches?.[0] || endEvent;
        if (endEventObj) {
          const endPercent = getPosition(endEventObj);
          const endVal = getValueFromPos(endPercent);
          updateValue(endVal, idx, false);
        }
      }
      
      // 更新状态
      setDragging(false);
      setActiveIndex(null);
      
      // 回调
      if (onAfterChange) onAfterChange(mergedValue);
      
      // 解绑事件
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('touchcancel', handleDragEnd);
    };
    
    // 绑定事件到document
    document.addEventListener('mousemove', handleDragMove, { passive: false });
    document.addEventListener('touchmove', handleDragMove, { passive: false });
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  }, [disabled, getPosition, getValueFromPos, mergedValue, onAfterChange, updateValue]);
  
  // 轨道点击处理
  const handleRailClick = useCallback((e) => {
    if (disabled || dragging) return;
    
    // 如果点击的是滑块，不处理
    if (e.target.closest('.sui-slider-thumb')) return;
    
    // 计算位置和值
    const percent = getPosition(e);
    const val = getValueFromPos(percent);
    
    // 对于范围滑块，确定哪个滑块应该移动
    let idx = 0;
    if (range) {
      const values = Array.isArray(mergedValue) ? mergedValue : [min, min];
      idx = Math.abs(val - values[0]) <= Math.abs(val - values[1]) ? 0 : 1;
    }
    
    // 更新值
    const newValue = updateValue(val, idx);
    
    if (onAfterChange) onAfterChange(newValue);
  }, [disabled, dragging, getPosition, getValueFromPos, mergedValue, min, onAfterChange, range, updateValue]);

  // 渲染 marks
  const renderMarks = () => {
    if (!marks || Object.keys(marks).length === 0) return null;
    
    return (
      <div className="sui-slider-marks">
        {Object.entries(marks).map(([k, v]) => {
          // 确保标记值在有效范围内
          const markValue = Number(k);
          if (markValue < min || markValue > max) return null;
          
          // 计算百分比位置
          const percent = getPercent(markValue, min, max);
          const style = vertical ? { bottom: `${percent}%` } : { left: `${percent}%` };
          
          return (
            <div key={k} className="sui-slider-mark" style={style}>
              <span className="sui-slider-mark-dot" />
              <span className="sui-slider-mark-text">{v}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // 渲染滑块
  const renderThumb = (idx, val) => {
    const percent = getPercent(val, min, max);
    const posStyle = vertical ? { bottom: `${percent}%` } : { left: `${percent}%` };
    const showTip = tooltipVisible !== undefined ? tooltipVisible : dragging || hoverIndex === idx;
    return (
      <div
        key={idx}
        className={classNames('sui-slider-thumb', { 'sui-slider-thumb-active': dragging && activeIndex === idx })}
        style={posStyle}
        onMouseDown={(e) => handleDragStart(e, idx)}
        onTouchStart={(e) => handleDragStart(e, idx)}
        onMouseEnter={() => setHoverIndex(idx)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {showTip && (
          <div className={classNames('sui-slider-tooltip', vertical ? 'sui-slider-tooltip-right' : 'sui-slider-tooltip-top')}>
            {tipFormatter(val)}
          </div>
        )}
      </div>
    );
  };

  // 渲染轨道
  const renderTrack = () => {
    let start, end;
    if (range) {
      const arr = Array.isArray(mergedValue) ? mergedValue : [min, min];
      start = getPercent(Math.min(...arr), min, max);
      end = getPercent(Math.max(...arr), min, max);
    } else {
      start = 0;
      end = getPercent(mergedValue, min, max);
    }
    const style = vertical
      ? { bottom: `${start}%`, height: `${end - start}%` }
      : { left: `${start}%`, width: `${end - start}%` };
    return <div className="sui-slider-track" style={style} />;
  };

  // 受控同步
  useEffect(() => {
    if (isControlled) setInnerValue(value);
    // eslint-disable-next-line
  }, [value]);

  // 类名
  const sliderCls = classNames(
    'sui-slider',
    {
      'sui-slider-vertical': vertical,
      'sui-slider-disabled': disabled,
      'sui-slider-range': range,
      'sui-slider-dragging': dragging,
      'sui-slider-with-marks': marks && Object.keys(marks).length > 0,
    },
    className
  );

  // 渲染
  return (
    <div
      ref={sliderRef}
      className={sliderCls}
      style={style}
      onClick={handleRailClick}
      {...rest}
    >
      <div className="sui-slider-rail" />
      {renderTrack()}
      {renderMarks()}
      {range
        ? [0, 1].map(i => renderThumb(i, Array.isArray(mergedValue) ? mergedValue[i] : min))
        : renderThumb(0, typeof mergedValue === 'number' ? mergedValue : min)
      }
    </div>
  );
};

export default Slider;
