import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.less';

const Tooltip = (props) => {
  const {
    children,
    title,
    placement = 'top',
    trigger = 'hover',
    color,
    overlayClassName = '',
    overlayStyle = {},
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    arrow = true,
    visible: propsVisible,
    onVisibleChange,
    defaultVisible = false,
    destroyTooltipOnHide = false,
    getPopupContainer,
  } = props;

  const [visible, setVisible] = useState(propsVisible !== undefined ? propsVisible : defaultVisible);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const childRef = useRef(null);
  const tooltipRef = useRef(null);
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);
  const popupRef = useRef(null);

  // 处理受控模式下的visible变化
  useEffect(() => {
    if (propsVisible !== undefined) {
      setVisible(propsVisible);
    }
  }, [propsVisible]);

  // 处理tooltip显示状态变化
  useLayoutEffect(() => {
    if (onVisibleChange) {
      onVisibleChange(visible);
    }

    if (visible) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    }

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      if (popupRef.current && popupRef.current.parentNode) {
        popupRef.current.parentNode.removeChild(popupRef.current);
      }
    };
  }, []);

  // Helper function to check if an element is a scroll container
  const isScrollContainer = (ele) => {
    const style = getComputedStyle(ele);
    return (
      ['scroll', 'auto', 'hidden'].includes(style.overflowY) || ['scroll', 'auto', 'hidden'].includes(style.overflowX)
    );
  };

  // Helper function to collect scrolling parent elements
  const collectScrollParents = (ele) => {
    const scrollList = [];
    let current = ele?.parentElement;

    while (current && current !== document.body) {
      if (isScrollContainer(current)) {
        scrollList.push(current);
      }
      current = current.parentElement;
    }
    return scrollList;
  };

  // 计算tooltip位置
  const updatePosition = () => {
    console.log(childRef.current, 'childRef.current');
    if (!childRef.current || !tooltipRef.current) return;

    const childRect = childRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    // Get scroll offsets from window and all scrollable parents
    let totalScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let totalScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollParents = collectScrollParents(childRef.current);
    scrollParents.forEach((parent) => {
      totalScrollLeft += parent.scrollLeft;
      totalScrollTop += parent.scrollTop;
    });

    let left = 0;
    let top = 0;
    const gap = 8; // 箭头和元素之间的间隙

    switch (placement) {
      case 'top':
        left = childRect.left + (childRect.width - tooltipRect.width) / 2 + totalScrollLeft;
        top = childRect.top - tooltipRect.height - gap + totalScrollTop;
        break;
      case 'bottom':
        left = childRect.left + (childRect.width - tooltipRect.width) / 2 + totalScrollLeft;
        top = childRect.top + childRect.height + gap + totalScrollTop;
        break;
      case 'left':
        left = childRect.left - tooltipRect.width - gap + totalScrollLeft;
        top = childRect.top + (childRect.height - tooltipRect.height) / 2 + totalScrollTop;
        break;
      case 'right':
        left = childRect.left + childRect.width + gap + totalScrollLeft;
        top = childRect.top + (childRect.height - tooltipRect.height) / 2 + totalScrollTop;
        break;
      default:
        break;
    }

    // Prevent tooltip from going out of viewport (basic check, can be improved for scroll containers)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Horizontal adjustment
    if (left < totalScrollLeft) {
      left = totalScrollLeft;
    } else if (left + tooltipRect.width > viewportWidth + totalScrollLeft) {
      left = viewportWidth + totalScrollLeft - tooltipRect.width;
    }

    // Vertical adjustment
    if (top < totalScrollTop) {
      top = totalScrollTop;
    } else if (top + tooltipRect.height > viewportHeight + totalScrollTop) {
      top = viewportHeight + totalScrollTop - tooltipRect.height;
    }

    setPosition({ left, top });
  };

  // 处理鼠标进入事件
  const handleMouseEnter = () => {
    if (trigger !== 'hover') return;
    clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => {
      setVisible(true);
    }, mouseEnterDelay * 1000);
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (trigger !== 'hover') return;
    clearTimeout(enterTimer.current);
    leaveTimer.current = setTimeout(() => {
      setVisible(false);
    }, mouseLeaveDelay * 1000);
  };

  // 处理点击事件
  const handleClick = () => {
    if (trigger !== 'click') return;
    setVisible(!visible);
  };

  // 处理tooltip内部鼠标事件
  const handleTooltipMouseEnter = () => {
    if (trigger !== 'hover') return;
    clearTimeout(leaveTimer.current);
  };

  const handleTooltipMouseLeave = () => {
    if (trigger !== 'hover') return;
    leaveTimer.current = setTimeout(() => {
      setVisible(false);
    }, mouseLeaveDelay * 1000);
  };

  // 处理点击外部关闭tooltip
  useEffect(() => {
    if (trigger === 'click' && visible) {
      const handleOutsideClick = (e) => {
        if (
          childRef.current &&
          !childRef.current.contains(e.target) &&
          tooltipRef.current &&
          !tooltipRef.current.contains(e.target)
        ) {
          setVisible(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [trigger, visible]);

  // 渲染tooltip内容
  const renderTooltip = () => {
    // 如果不可见且设置了destroyTooltipOnHide，则不渲染
    if (!visible && destroyTooltipOnHide) return null;

    // 如果不可见，不渲染内容，提高性能
    if (!visible) return null;

    const tooltipClass = `sui-tooltip-content sui-tooltip-${placement} ${visible ? 'visible' : ''} ${overlayClassName}`;
    const tooltipStyle = {
      ...overlayStyle,
      position: 'absolute',
      left: `${position.left}px`,
      top: `${position.top}px`,
      backgroundColor: color,
    };

    // 箭头样式 - 确保箭头样式能正确继承背景色
    const arrowStyle = color ? { backgroundColor: color } : {};

    const tooltipContent = (
      <div
        className={tooltipClass}
        style={tooltipStyle}
        ref={tooltipRef}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
      >
        <div className="sui-tooltip-inner">{typeof title === 'function' ? title() : title}</div>
        {arrow && <div className={`sui-tooltip-arrow sui-tooltip-arrow-${placement}`} style={arrowStyle} />}
      </div>
    );

    // 使用 Portal 渲染到指定容器或 body
    const container = getPopupContainer ? getPopupContainer(childRef.current) : document.body;
    return ReactDOM.createPortal(tooltipContent, container);
  };
  // 克隆子元素并添加事件处理
  const child = React.Children.only(children);
  const childProps = {
    ref: childRef,
    ...child.props,
  };

  if (trigger === 'hover') {
    childProps.onMouseEnter = (e) => {
      handleMouseEnter();
      child.props.onMouseEnter && child.props.onMouseEnter(e);
    };
    childProps.onMouseLeave = (e) => {
      handleMouseLeave();
      child.props.onMouseLeave && child.props.onMouseLeave(e);
    };
  } else if (trigger === 'click') {
    childProps.onClick = (e) => {
      handleClick();
      child.props.onClick && child.props.onClick(e);
    };
  }

  return (
    <>
      {React.cloneElement(child, childProps)}
      {renderTooltip()}
    </>
  );
};
export default Tooltip;
