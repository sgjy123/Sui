import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

const STATUS_COLORS = {
  normal: '#1890ff',
  success: '#52c41a',
  exception: '#ff4d4f',
  active: '#1890ff',
};

const Progress = ({
  percent = 0,
  status,
  showInfo = true,
  size = 'default',
  successPercent,
  strokeColor,
  trailColor = '#f5f5f5',
  strokeWidth = 8,
  width = 120,
  type = 'line',
  format,
  className,
  style,
}) => {
  // 处理状态
  let mergedStatus = status;
  if (!mergedStatus) {
    if (percent >= 100) mergedStatus = 'success';
    else mergedStatus = 'normal';
  }
  const color = strokeColor || STATUS_COLORS[mergedStatus] || STATUS_COLORS.normal;

  // 进度文本
  const renderInfo = () => {
    if (!showInfo) return null;
    const text = format ? format(percent) : `${Math.round(percent)}%`;
    return <span className="sui-progress-text">{mergedStatus === 'success' ? '100%' : text}</span>;
  };

  // 线型进度条
  const renderLine = () => (
    <div className="sui-progress-outer" style={{ height: size === 'small' ? 6 : strokeWidth }}>
      <div className="sui-progress-inner" style={{ background: trailColor }}>
        <div
          className={classNames('sui-progress-bg', {
            [`sui-progress-bg-${mergedStatus}`]: mergedStatus,
          })}
          style={{ width: `${percent}%`, background: color, height: size === 'small' ? 6 : strokeWidth }}
        />
        {successPercent !== undefined && (
          <div
            className="sui-progress-success-bg"
            style={{ width: `${successPercent}%`, background: STATUS_COLORS.success, height: size === 'small' ? 6 : strokeWidth }}
          />
        )}
      </div>
      {renderInfo()}
    </div>
  );

  // 环形进度条
  const renderCircle = () => {
    const radius = (width - strokeWidth) / 2;
    const perimeter = 2 * Math.PI * radius;
    const dashoffset = perimeter * (1 - percent / 100);
    const successDashoffset = successPercent !== undefined ? perimeter * (1 - successPercent / 100) : undefined;
    return (
      <div className="sui-progress-circle" style={{ width, height: width }}>
        <svg viewBox={`0 0 ${width} ${width}`}> 
          <circle
            className="sui-progress-circle-trail"
            cx={width / 2}
            cy={width / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            style={{ stroke: trailColor }}
          />
          <circle
            className={classNames('sui-progress-circle-path', {
              [`sui-progress-circle-path-${mergedStatus}`]: mergedStatus,
            })}
            cx={width / 2}
            cy={width / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{
              stroke: color,
              strokeDasharray: perimeter,
              strokeDashoffset: dashoffset,
              transition: 'stroke-dashoffset 0.3s ease',
            }}
          />
          {successPercent !== undefined && (
            <circle
              className="sui-progress-circle-success-path"
              cx={width / 2}
              cy={width / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              style={{
                stroke: STATUS_COLORS.success,
                strokeDasharray: perimeter,
                strokeDashoffset: successDashoffset,
              }}
            />
          )}
        </svg>
        {renderInfo()}
      </div>
    );
  };

  return (
    <div
      className={classNames('sui-progress', className, `sui-progress-${type}`, `sui-progress-${size}`, {
        [`sui-progress-status-${mergedStatus}`]: mergedStatus,
      })}
      style={style}
    >
      {type === 'circle' ? renderCircle() : renderLine()}
    </div>
  );
};

Progress.propTypes = {
  percent: PropTypes.number,
  status: PropTypes.oneOf(['normal', 'success', 'exception', 'active']),
  showInfo: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  successPercent: PropTypes.number,
  strokeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  trailColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.oneOf(['line', 'circle']),
  format: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Progress; 