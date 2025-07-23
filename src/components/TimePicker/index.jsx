import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Input from '../Input';
import './style.less';

// 时间格式化函数
const formatTime = (date, format = 'HH:mm:ss') => {
  if (!date) return '';
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

// 解析时间字符串
const parseTime = (timeString, format = 'HH:mm:ss') => {
  if (!timeString) return null;
  
  // 默认时间值
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  
  // 处理时间部分
  const timeParts = timeString.split(':').map(Number);
  if (timeParts.length >= 2) {
    [hours, minutes] = timeParts;
    if (timeParts.length >= 3) {
      seconds = timeParts[2];
    }
  }
  
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
};

// 生成时间选择器的选项
const generateTimeOptions = (start, end, step = 1, disabledFn = null) => {
  const options = [];
  for (let i = start; i <= end; i += step) {
    const value = i < 10 ? `0${i}` : `${i}`;
    const disabled = disabledFn ? disabledFn(i) : false;
    options.push({ value: i, label: value, disabled });
  }
  return options;
};

const TimePicker = ({
  value,
  defaultValue,
  onChange,
  placeholder = '请选择时间',
  disabled = false,
  size = 'middle',
  format = 'HH:mm:ss',
  allowClear = true,
  className,
  style,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  use12Hours = false,
  hideDisabledOptions = false,
}) => {
  // 当前选中的时间
  const [selectedTime, setSelectedTime] = useState(value || defaultValue || null);
  // 时间面板是否显示
  const [open, setOpen] = useState(false);
  // 时间选择相关状态
  const [hours, setHours] = useState(selectedTime ? selectedTime.getHours() : 0);
  const [minutes, setMinutes] = useState(selectedTime ? selectedTime.getMinutes() : 0);
  const [seconds, setSeconds] = useState(selectedTime ? selectedTime.getSeconds() : 0);
  // 12小时制相关状态
  const [period, setPeriod] = useState(hours >= 12 ? 'pm' : 'am');
  
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  
  // 受控组件同步
  useEffect(() => {
    if (value !== undefined) {
      setSelectedTime(value);
      if (value) {
        setHours(value.getHours());
        setMinutes(value.getMinutes());
        setSeconds(value.getSeconds());
        setPeriod(value.getHours() >= 12 ? 'pm' : 'am');
      }
    }
  }, [value]);

  // 计算弹层位置
  useEffect(() => {
    if (open && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        minWidth: rect.width,
        zIndex: 1050,
      });
    }
  }, [open]);
  
  // 点击外部关闭
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (
        inputRef.current && !inputRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);
  
  // 清除选择
  const handleClear = (e) => {
    e.stopPropagation();
    setSelectedTime(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setPeriod('am');
    onChange && onChange(null, '');
  };
  
  // 处理时间变化
  const handleTimeChange = (type, value) => {
    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds;
    let newPeriod = period;
    
    if (type === 'hour') {
      newHours = value;
      if (use12Hours) {
        // 12小时制下，调整小时值
        if (period === 'pm' && value < 12) {
          newHours = value + 12;
        } else if (period === 'am' && value === 12) {
          newHours = 0;
        }
      }
      setHours(newHours);
    } else if (type === 'minute') {
      newMinutes = value;
      setMinutes(newMinutes);
    } else if (type === 'second') {
      newSeconds = value;
      setSeconds(newSeconds);
    } else if (type === 'period') {
      newPeriod = value;
      setPeriod(newPeriod);
      // 切换上午/下午时调整小时值
      if (value === 'pm' && hours < 12) {
        newHours = hours + 12;
        setHours(newHours);
      } else if (value === 'am' && hours >= 12) {
        newHours = hours - 12;
        setHours(newHours);
      }
    }
    
    const newDate = new Date();
    newDate.setHours(newHours, newMinutes, newSeconds, 0);
    setSelectedTime(newDate);
    onChange && onChange(newDate, formatTime(newDate, format));
  };
  
  // 渲染时间选择面板
  const renderTimePanel = () => {
    // 获取禁用的小时、分钟和秒
    const disabledHoursFn = disabledHours || (() => []);
    const disabledMinutesFn = disabledMinutes || (() => []);
    const disabledSecondsFn = disabledSeconds || (() => []);
    
    // 12小时制下的小时范围
    const hourRange = use12Hours ? { start: 1, end: 12 } : { start: 0, end: 23 };
    
    // 生成小时选项
    const hourOptions = generateTimeOptions(
      hourRange.start,
      hourRange.end,
      hourStep,
      (hour) => {
        // 12小时制下需要转换小时值进行禁用判断
        let checkHour = hour;
        if (use12Hours) {
          if (period === 'pm' && hour < 12) {
            checkHour = hour + 12;
          } else if (period === 'am' && hour === 12) {
            checkHour = 0;
          }
        }
        return disabledHoursFn().includes(checkHour);
      }
    );
    
    // 生成分钟选项
    const minuteOptions = generateTimeOptions(
      0,
      59,
      minuteStep,
      (minute) => disabledMinutesFn(hours).includes(minute)
    );
    
    // 生成秒选项
    const secondOptions = generateTimeOptions(
      0,
      59,
      secondStep,
      (second) => disabledSecondsFn(hours, minutes).includes(second)
    );
    
    // 如果设置了隐藏禁用选项，则过滤掉禁用的选项
    const filteredHourOptions = hideDisabledOptions 
      ? hourOptions.filter(option => !option.disabled)
      : hourOptions;
      
    const filteredMinuteOptions = hideDisabledOptions 
      ? minuteOptions.filter(option => !option.disabled)
      : minuteOptions;
      
    const filteredSecondOptions = hideDisabledOptions 
      ? secondOptions.filter(option => !option.disabled)
      : secondOptions;
    
    // 显示的小时值（12小时制下需要转换）
    const displayHour = use12Hours 
      ? (hours % 12 === 0 ? 12 : hours % 12)
      : hours;
    
    return (
      <div className="sui-timepicker-panel">
        <div className="sui-timepicker-time-columns">
          <div className="sui-timepicker-time-column">
            {filteredHourOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-timepicker-time-cell', {
                  'is-selected': displayHour === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('hour', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          <div className="sui-timepicker-time-column">
            {filteredMinuteOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-timepicker-time-cell', {
                  'is-selected': minutes === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('minute', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          <div className="sui-timepicker-time-column">
            {filteredSecondOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-timepicker-time-cell', {
                  'is-selected': seconds === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('second', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          {use12Hours && (
            <div className="sui-timepicker-time-column sui-timepicker-time-period">
              <div
                className={classNames('sui-timepicker-time-cell', {
                  'is-selected': period === 'am',
                })}
                onClick={() => handleTimeChange('period', 'am')}
              >
                AM
              </div>
              <div
                className={classNames('sui-timepicker-time-cell', {
                  'is-selected': period === 'pm',
                })}
                onClick={() => handleTimeChange('period', 'pm')}
              >
                PM
              </div>
            </div>
          )}
        </div>
        <div className="sui-timepicker-footer">
          <span 
            className="sui-timepicker-now-btn"
            onClick={() => {
              const now = new Date();
              setHours(now.getHours());
              setMinutes(now.getMinutes());
              setSeconds(now.getSeconds());
              setPeriod(now.getHours() >= 12 ? 'pm' : 'am');
              setSelectedTime(now);
              onChange && onChange(now, formatTime(now, format));
            }}
          >
            此刻
          </span>
          <span 
            className="sui-timepicker-ok-btn"
            onClick={() => setOpen(false)}
          >
            确定
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <div
        className={classNames(
          'sui-timepicker',
          {
            'sui-timepicker-lg': size === 'large',
            'sui-timepicker-sm': size === 'small',
            'sui-timepicker-disabled': disabled,
          },
          className
        )}
        style={style}
        ref={inputRef}
        onClick={() => !disabled && setOpen(true)}
      >
        <Input
          value={selectedTime ? formatTime(selectedTime, format) : ''}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          size={size}
          prefix={<Icon name="Time" theme="outline" size={16} />}
          suffix={
            allowClear && selectedTime && !disabled ? (
              <span className="sui-timepicker-clear" onClick={handleClear}>
                <Icon name="CloseOne" theme="filled" size={14} />
              </span>
            ) : (
              <Icon name="Down" theme="outline" size={14} />
            )
          }
        />
      </div>
      {open && ReactDOM.createPortal(
        <div
          className="sui-timepicker-dropdown"
          ref={dropdownRef}
          style={dropdownStyle}
        >
          {renderTimePanel()}
        </div>,
        document.body
      )}
    </>
  );
};

TimePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  format: PropTypes.string,
  allowClear: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  hourStep: PropTypes.number,
  minuteStep: PropTypes.number,
  secondStep: PropTypes.number,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  use12Hours: PropTypes.bool,
  hideDisabledOptions: PropTypes.bool,
};

export default TimePicker;