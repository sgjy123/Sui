import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.less';

function getTarget(target) {
  if (!target) return window;
  if (typeof target === 'function') return target();
  if (typeof target === 'string') return document.querySelector(target);
  return target;
}

const Affix = ({
  offsetTop = 0,
  offsetBottom,
  target,
  onChange,
  children,
  className = '',
  style = {},
  zIndex = 10,
}) => {
  const placeholderRef = useRef(null);
  const fixedRef = useRef(null);
  const [affixed, setAffixed] = useState(false);
  const [affixStyle, setAffixStyle] = useState({});
  const [placeholderStyle, setPlaceholderStyle] = useState({});

  useEffect(() => {
    const scrollTarget = getTarget(target);
    if (!placeholderRef.current) return;

    const handleScroll = () => {
      const placeholder = placeholderRef.current;
      const fixed = fixedRef.current;
      if (!placeholder || !fixed) return;
      const placeholderRect = placeholder.getBoundingClientRect();
      const scrollTop = scrollTarget === window ? window.pageYOffset : scrollTarget.scrollTop;
      const targetRect = scrollTarget === window ? { top: 0, bottom: window.innerHeight } : scrollTarget.getBoundingClientRect();
      let shouldAffix = false;
      let newAffixStyle = {};
      let newPlaceholderStyle = {};

      if (offsetTop !== undefined && offsetTop !== null) {
        const offset = placeholderRect.top - (scrollTarget === window ? 0 : targetRect.top);
        if (offset <= offsetTop) {
          shouldAffix = true;
          newAffixStyle = {
            position: 'fixed',
            top: offsetTop + (scrollTarget === window ? 0 : targetRect.top),
            left: placeholderRect.left,
            width: placeholderRect.width,
            zIndex,
          };
          newPlaceholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height,
          };
        }
      }
      if (offsetBottom !== undefined && offsetBottom !== null) {
        const offset = (scrollTarget === window ? window.innerHeight : targetRect.bottom) - placeholderRect.bottom;
        if (offset <= offsetBottom) {
          shouldAffix = true;
          newAffixStyle = {
            position: 'fixed',
            bottom: offsetBottom + (scrollTarget === window ? 0 : window.innerHeight - targetRect.bottom),
            left: placeholderRect.left,
            width: placeholderRect.width,
            zIndex,
          };
          newPlaceholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height,
          };
        }
      }
      setAffixStyle(newAffixStyle);
      setPlaceholderStyle(newPlaceholderStyle);
      if (affixed !== shouldAffix) {
        setAffixed(shouldAffix);
        onChange && onChange(shouldAffix);
      }
    };

    handleScroll();
    scrollTarget.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
    // eslint-disable-next-line
  }, [offsetTop, offsetBottom, target]);

  return (
    <div className={`sui-affix ${className}`} style={style}>
      <div ref={placeholderRef} style={affixed ? placeholderStyle : {}} />
      <div ref={fixedRef} style={affixed ? affixStyle : {}}>{children}</div>
    </div>
  );
};

Affix.propTypes = {
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number,
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  zIndex: PropTypes.number,
};

export default Affix; 