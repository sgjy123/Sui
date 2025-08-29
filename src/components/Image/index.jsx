import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const Image = ({
  src,
  alt,
  width,
  height,
  fit = 'cover', // contain | cover | fill | none | scale-down
  placeholder,
  fallback,
  lazy = false,
  preview = true,
  onLoad,
  onError,
  className,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const imgRef = useRef(null);
  const ioRef = useRef(null);

  // reset states when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
    setUsingFallback(false);
  }, [src, fallback]);

  useEffect(() => {
    if (!lazy || !imgRef.current) return;
    if (!('IntersectionObserver' in window)) return; // fallback: load immediately

    ioRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el && el.dataset && el.dataset.src) {
            el.src = el.dataset.src;
            ioRef.current && ioRef.current.unobserve(el);
          }
        }
      });
    }, { rootMargin: '100px' });

    if (imgRef.current) ioRef.current.observe(imgRef.current);
    return () => ioRef.current && ioRef.current.disconnect();
  }, [lazy]);

  const handleLoad = (e) => {
    setLoaded(true);
    onLoad && onLoad(e);
  };

  const handleError = (e) => {
    // if primary failed and we have fallback, switch to fallback once
    if (!usingFallback && fallback) {
      setUsingFallback(true);
      setLoaded(false);
      setError(false);
      if (imgRef.current && lazy) {
        imgRef.current.removeAttribute('data-src');
        imgRef.current.src = fallback;
      }
    } else {
      setLoaded(true);
      setError(true);
      onError && onError(e);
    }
  };

  const wrapperCls = classNames('sui-image', className);
  const imgStyle = { objectFit: fit, width, height, ...style };

  const currentSrc = usingFallback ? fallback : src;
  const dataSrc = lazy ? currentSrc : undefined;

  return (
    <div className={wrapperCls} style={{ width, height }} {...rest}>
      {!loaded && (
        <div className="sui-image-placeholder">
          {placeholder || <Icon name="LoadingTwo" theme="outline" className="sui-image-loading" />}
        </div>
      )}

      <img
        ref={imgRef}
        className="sui-image-img"
        alt={alt}
        src={lazy ? undefined : currentSrc}
        data-src={dataSrc}
        style={imgStyle}
        onLoad={handleLoad}
        onError={handleError}
        onClick={preview && !error ? () => setShowPreview(true) : undefined}
      />

      {preview && !error && (
        <div className="sui-image-mask" onClick={() => setShowPreview(true)}>
          <Icon name="ZoomIn" theme="outline" />
        </div>
      )}

      {preview && showPreview && !error && (
        <div className="sui-image-preview" onClick={() => setShowPreview(false)}>
          <div className="sui-image-preview-inner" onClick={(e) => e.stopPropagation()}>
            <img src={currentSrc} alt={alt} />
            <button className="sui-image-preview-close" onClick={() => setShowPreview(false)}>
              <Icon name="Close" theme="outline" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
  placeholder: PropTypes.node,
  fallback: PropTypes.string,
  lazy: PropTypes.bool,
  preview: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Image;


