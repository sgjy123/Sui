import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.less';

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Carousel = ({
  children,
  autoplay = true,
  autoplaySpeed = 3000,
  dots = true,
  dotsType = 'dot', // 'dot' | 'bar'
  dotsPosition = 'bottom', // 'bottom' | 'top' | 'left' | 'right'
  arrows = true,
  showPrevArrow = true,
  showNextArrow = true,
  infinite = true,
  initialSlide = 0,
  effect = 'slide', // 'slide' | 'fade'
  pauseOnHover = true,
  beforeChange,
  afterChange,
  className,
  style,
  ...rest
}) => {
  const slides = useMemo(() => React.Children.toArray(children).filter(Boolean), [children]);
  const slideCount = slides.length;
  const [current, setCurrent] = useState(() => clamp(initialSlide, 0, Math.max(0, slideCount - 1)));
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef();
  const hoveringRef = useRef(false);

  const goTo = useCallback((nextIdx) => {
    if (slideCount === 0) return;
    const normalized = infinite
      ? (nextIdx + slideCount) % slideCount
      : clamp(nextIdx, 0, slideCount - 1);
    if (normalized === current) return;
    beforeChange && beforeChange(current, normalized);
    setIsAnimating(true);
    setCurrent(normalized);
  }, [beforeChange, current, infinite, slideCount]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // autoplay
  useEffect(() => {
    if (!autoplay || slideCount <= 1) return;
    if (pauseOnHover && hoveringRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      next();
    }, autoplaySpeed);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplaySpeed, slideCount, next, pauseOnHover]);

  // animation end (for slide we rely on transitionend; for fade we can end immediately per change)
  useEffect(() => {
    if (effect === 'fade') {
      const id = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(id);
    }
    setIsAnimating(true);
    const id = setTimeout(() => setIsAnimating(false), 350);
    return () => clearTimeout(id);
  }, [current, effect]);

  useEffect(() => {
    afterChange && afterChange(current);
  }, [current, afterChange]);

  const onMouseEnter = () => { hoveringRef.current = true; };
  const onMouseLeave = () => { hoveringRef.current = false; };

  const carouselCls = classNames(
    'sui-carousel',
    `sui-carousel-${effect}`,
    { 'sui-carousel-animating': isAnimating },
    className,
  );

  return (
    <div
      className={carouselCls}
      style={style}
      onMouseEnter={pauseOnHover ? onMouseEnter : undefined}
      onMouseLeave={pauseOnHover ? onMouseLeave : undefined}
      {...rest}
    >
      {arrows && slideCount > 1 && (
        <>
          {showPrevArrow && (
            <Button
              type="default"
              size="small"
              className="sui-carousel-arrow sui-carousel-prev"
              onClick={prev}
              aria-label="Previous"
              icon="Left"
            />
          )}
          {showNextArrow && (
            <Button
              type="default"
              size="small"
              className="sui-carousel-arrow sui-carousel-next"
              onClick={next}
              aria-label="Next"
              icon="Right"
            />
          )}
        </>
      )}

      {/* Slides */}
      <div className="sui-carousel-list">
        <div
          className={classNames('sui-carousel-track')}
          style={effect === 'slide' ? { transform: `translateX(-${current * 100}%)` } : undefined}
        >
          {slides.map((slide, idx) => (
            <div
              className={classNames('sui-carousel-slide', { 'sui-carousel-slide-active': idx === current })}
              key={idx}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {dots && slideCount > 1 && (
        <ul className={classNames(
          'sui-carousel-dots',
          `sui-carousel-dots-${dotsPosition}`,
          `sui-carousel-dots-${dotsType}`
        )}
        >
          {slides.map((_, idx) => (
            <li key={idx} className={classNames({ active: idx === current })}>
              <button onClick={() => goTo(idx)} aria-label={`Go to slide ${idx + 1}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  dots: PropTypes.bool,
  dotsType: PropTypes.oneOf(['dot', 'bar']),
  dotsPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  arrows: PropTypes.bool,
  showPrevArrow: PropTypes.bool,
  showNextArrow: PropTypes.bool,
  infinite: PropTypes.bool,
  initialSlide: PropTypes.number,
  effect: PropTypes.oneOf(['slide', 'fade']),
  pauseOnHover: PropTypes.bool,
  beforeChange: PropTypes.func,
  afterChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Carousel;


