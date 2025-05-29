import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

const Anchor = ({
  items = [],
  offsetTop = 0,
  bounds = 5,
  onClick,
  className,
  style,
  getContainer,
  affix = true,
  showInkInFixed = false,
  targetOffset,
}) => {
  const [activeLink, setActiveLink] = useState('');
  const containerRef = useRef(null);
  const inkRef = useRef(null);

  // 获取容器元素
  const getContainerElement = () => {
    if (getContainer) {
      return getContainer();
    }
    return window;
  };

  // 获取元素
  const getElement = (href) => {
    const container = getContainerElement();
    if (container === window) {
      return document.querySelector(href);
    }
    return container.querySelector(href);
  };

  // 获取元素相对于视口的位置
  const getElementPosition = (element) => {
    const container = getContainerElement();
    const containerRect = container === window ? { top: 0 } : container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.top - containerRect.top;
  };

  // 更新活动链接
  const updateActiveLink = () => {
    const container = getContainerElement();
    const scrollTop = container === window ? window.pageYOffset : container.scrollTop;
    const offset = targetOffset !== undefined ? targetOffset : offsetTop;

    // 找到当前滚动位置对应的锚点
    let currentLink = '';
    let minDistance = Infinity;

    items.forEach(item => {
      const element = getElement(item.href);
      if (element) {
        const position = getElementPosition(element);
        const distance = Math.abs(position - offset);
        if (distance < minDistance) {
          minDistance = distance;
          currentLink = item.href;
        }
      }
    });

    if (currentLink !== activeLink) {
      setActiveLink(currentLink);
      if (onClick) {
        onClick(currentLink);
      }
    }
  };

  // 处理点击事件
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = getElement(href);
    if (element) {
      const container = getContainerElement();
      const elementPosition = getElementPosition(element);
      const offset = targetOffset !== undefined ? targetOffset : offsetTop;
      const targetPosition = elementPosition - offset;

      if (container === window) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      } else {
        container.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  // 更新墨点位置
  const updateInkPosition = () => {
    const activeElement = containerRef.current?.querySelector('.sui-anchor-link-active');
    if (activeElement && inkRef.current) {
      const { top, height } = activeElement.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      inkRef.current.style.top = `${top - containerRect.top + height / 2 - 4}px`;
      inkRef.current.style.height = `8px`;
      inkRef.current.style.opacity = '1';
    }
  };

  // 监听滚动事件
  useEffect(() => {
    const container = getContainerElement();
    container.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink();

    return () => {
      container.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
    };
  }, [items, offsetTop, bounds, targetOffset]);

  // 监听活动链接变化
  useEffect(() => {
    updateInkPosition();
  }, [activeLink]);

  // 渲染锚点链接
  const renderAnchorLink = (item) => {
    const { href, title, children } = item;
    const isActive = activeLink === href;
    const linkClass = classNames('sui-anchor-link', {
      'sui-anchor-link-active': isActive,
    });

    return (
      <div key={href} className="sui-anchor-link-wrapper">
        <a
          href={href}
          className={linkClass}
          onClick={(e) => handleClick(e, href)}
        >
          {title}
        </a>
        {children && (
          <div className="sui-anchor-link-children">
            {children.map(child => renderAnchorLink(child))}
          </div>
        )}
      </div>
    );
  };

  const anchorClass = classNames('sui-anchor', {
    'sui-anchor-fixed': affix,
    'sui-anchor-ink-visible': showInkInFixed,
    [className]: className,
  });

  return (
    <div className={anchorClass} ref={containerRef} style={style}>
      <div className="sui-anchor-ink">
        <span className="sui-anchor-ink-ball" ref={inkRef} />
      </div>
      <div className="sui-anchor-content">
        {items.map(item => renderAnchorLink(item))}
      </div>
    </div>
  );
};

Anchor.propTypes = {
  /** 锚点数据 */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** 锚点链接 */
      href: PropTypes.string.isRequired,
      /** 锚点标题 */
      title: PropTypes.node.isRequired,
      /** 子锚点 */
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop: PropTypes.number,
  /** 锚点区域边界 */
  bounds: PropTypes.number,
  /** 点击锚点时触发 */
  onClick: PropTypes.func,
  /** 自定义类名 */
  className: PropTypes.string,
  /** 自定义样式 */
  style: PropTypes.object,
  /** 指定滚动的容器 */
  getContainer: PropTypes.func,
  /** 固定模式 */
  affix: PropTypes.bool,
  /** 固定模式下是否显示小圆点 */
  showInkInFixed: PropTypes.bool,
  /** 锚点滚动偏移量 */
  targetOffset: PropTypes.number,
};

Anchor.defaultProps = {
  items: [],
  offsetTop: 0,
  bounds: 5,
  affix: true,
  showInkInFixed: false,
};

export default Anchor; 