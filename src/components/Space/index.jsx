import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
const Space = ({
  children,
  direction = 'horizontal',
  size = 'small',
  align,
  wrap = false,
  split,
  className,
  style,
}) => {
  const getSize = (size) => {
    if (typeof size === 'number') {
      return size;
    }
    const sizeMap = {
      small: 8,
      middle: 16,
      large: 24,
    };
    return sizeMap[size] || sizeMap.small;
  };

  const spaceSize = getSize(size);
  const items = React.Children.toArray(children);

  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;

  const classes = classNames(
    'sui-space',
    `sui-space-${direction}`,
    {
      [`sui-space-align-${mergedAlign}`]: mergedAlign,
      'sui-space-wrap': wrap,
    },
    className,
  );

  const itemStyle = {
    marginRight: direction === 'horizontal' ? spaceSize : undefined,
    marginBottom: direction === 'vertical' || wrap ? spaceSize : undefined,
  };

  return (
    <div className={classes} style={style}>
      {items.map((child, i) => {
        const key = child && child.key ? child.key : i;
        return (
          <React.Fragment key={key}>
            <div className="sui-space-item" style={itemStyle}>
              {child}
            </div>
            {split && i < items.length - 1 && (
              <span className="sui-space-split" style={itemStyle}>
                {split}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

Space.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'middle    ', 'large']), PropTypes.number]),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
  wrap: PropTypes.bool,
  split: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Space;
