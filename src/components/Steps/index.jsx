import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

const Steps = ({
  steps = [],
  current = 0,
  direction = 'horizontal',
  size = 'default',
  status = 'process',
  progressDot = false,
  className,
  style,
  onChange,
}) => {
  const prefixCls = 'sui-steps';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-dot`]: progressDot,
    },
    className,
  );

  const handleStepClick = (index) => {
    if (onChange && index !== current) {
      onChange(index);
    }
  };

  const renderStepIcon = (step, index) => {
    const { icon, status: stepStatus } = step;
    const currentStatus = index === current ? status : 
      index < current ? 'finish' : 'wait';
    const finalStatus = stepStatus || currentStatus;

    if (icon) {
      return <span className={`${prefixCls}-icon`}>{icon}</span>;
    }

    if (progressDot) {
      return (
        <span className={`${prefixCls}-dot`}>
          <span className={`${prefixCls}-dot-inner`} />
        </span>
      );
    }

    return (
      <span className={`${prefixCls}-icon`}>
        {finalStatus === 'finish' ? (
          <span className={`${prefixCls}-icon-check`}>✓</span>
        ) : finalStatus === 'error' ? (
          <span className={`${prefixCls}-icon-error`}>✕</span>
        ) : (
          <span className={`${prefixCls}-icon-number`}>{index + 1}</span>
        )}
      </span>
    );
  };

  return (
    <div className={classes} style={style}>
      {steps.map((step, index) => {
        const { title, description, status: stepStatus } = step;
        const currentStatus = index === current ? status : 
          index < current ? 'finish' : 'wait';
        const finalStatus = stepStatus || currentStatus;
        const isClickable = onChange && index !== current;

        return (
          <div
            key={index}
            className={classNames(`${prefixCls}-item`, {
              [`${prefixCls}-item-${finalStatus}`]: true,
              [`${prefixCls}-item-clickable`]: isClickable,
            })}
            onClick={() => handleStepClick(index)}
          >
            {
              direction === 'vertical' && (
                <div className={`${prefixCls}-item-tail`} />
              )
            }
            <div className={`${prefixCls}-item-icon`}>
              {renderStepIcon(step, index)}
            </div>
            <div className={`${prefixCls}-item-content`}>
              <div className={`${prefixCls}-item-title`}>{title}</div>
              {description && (
                <div className={`${prefixCls}-item-description`}>
                  {description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      icon: PropTypes.node,
      status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
    })
  ).isRequired,
  current: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['default', 'small', 'large']),
  status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
  progressDot: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

Steps.defaultProps = {
  current: 0,
  direction: 'horizontal',
  size: 'default',
  status: 'process',
  progressDot: false,
};

export default Steps; 