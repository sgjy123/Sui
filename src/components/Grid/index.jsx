import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

const Row = ({ 
  gutter, 
  justify, 
  align, 
  wrap,
  className, 
  children, 
  ...props 
}) => {
  const classes = classNames(
    'sui-row',
    {
      [`sui-row-justify-${justify}`]: justify,
      [`sui-row-align-${align}`]: align,
      'sui-row-nowrap': wrap === false,
    },
    className
  );

  const rowStyle = {};
  if (gutter > 0) {
    rowStyle.marginLeft = gutter / -2;
    rowStyle.marginRight = gutter / -2;
  }

  const cols = React.Children.map(children, (col) => {
    if (!col) return null;
    return React.cloneElement(col, {
      gutter,
    });
  });

  return (
    <div className={classes} style={rowStyle} {...props}>
      {cols}
    </div>
  );
};

const Col = ({ 
  span, 
  offset, 
  order,
  push,
  pull,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  gutter, 
  className, 
  children, 
  ...props 
}) => {
  const classes = classNames(
    'sui-col',
    {
      [`sui-col-${span}`]: span !== undefined,
      [`sui-col-offset-${offset}`]: offset,
      [`sui-col-order-${order}`]: order,
      [`sui-col-push-${push}`]: push,
      [`sui-col-pull-${pull}`]: pull,
      [`sui-col-xs-${xs}`]: xs,
      [`sui-col-sm-${sm}`]: sm,
      [`sui-col-md-${md}`]: md,
      [`sui-col-lg-${lg}`]: lg,
      [`sui-col-xl-${xl}`]: xl,
      [`sui-col-xxl-${xxl}`]: xxl,
    },
    className
  );

  const colStyle = {};
  if (gutter > 0) {
    colStyle.paddingLeft = gutter / 2;
    colStyle.paddingRight = gutter / 2;
  }

  return (
    <div className={classes} style={colStyle} {...props}>
      {children}
    </div>
  );
};

Row.propTypes = {
  gutter: PropTypes.number,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  wrap: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Col.propTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  order: PropTypes.number,
  push: PropTypes.number,
  pull: PropTypes.number,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  gutter: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

const Grid = {
  Row,
  Col,
};

export default Grid;