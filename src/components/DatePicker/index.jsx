import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Input from '../Input';
import './style.less';

// 日期格式化函数
const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

// 解析日期字符串
const parseDate = (dateString, format = 'YYYY-MM-DD') => {
  if (!dateString) return null;
  
  // 默认时间值
  let year = new Date().getFullYear();
  let month = 0;
  let day = 1;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  
  // 检查格式中包含的部分
  const hasDate = format.includes('YYYY') || format.includes('MM') || format.includes('DD');
  const hasTime = format.includes('HH') || format.includes('mm') || format.includes('ss');
  
  if (hasDate) {
    // 处理日期部分
    if (format.includes('-')) {
      const dateParts = dateString.split(' ')[0].split('-').map(Number);
      if (dateParts.length >= 3) {
        [year, month, day] = dateParts;
        month = month - 1; // 月份从0开始
      }
    } else if (format.includes('年')) {
      const dateStr = dateString.split(' ')[0];
      year = parseInt(dateStr.match(/\d+(?=年)/) || year);
      month = parseInt(dateStr.match(/\d+(?=月)/) || 1) - 1;
      day = parseInt(dateStr.match(/\d+(?=日)/) || 1);
    }
  }
  
  if (hasTime) {
    // 处理时间部分
    const timeStr = dateString.split(' ')[1] || '';
    if (timeStr) {
      const timeParts = timeStr.split(':').map(Number);
      if (timeParts.length >= 2) {
        [hours, minutes] = timeParts;
        if (timeParts.length >= 3) {
          seconds = timeParts[2];
        }
      }
    }
  }
  
  return new Date(year, month, day, hours, minutes, seconds);
};

// 获取某月的天数
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// 获取某月第一天是星期几 (0-6, 0是星期日)
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// 生成日历数据
const generateCalendarDays = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  // 上个月的天数
  const prevMonthDays = month === 0 ? getDaysInMonth(year - 1, 11) : getDaysInMonth(year, month - 1);
  
  const days = [];
  
  // 上个月的日期
  for (let i = 0; i < firstDayOfMonth; i++) {
    const day = prevMonthDays - firstDayOfMonth + i + 1;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    days.push({
      day,
      month: prevMonth,
      year: prevYear,
      isCurrentMonth: false,
    });
  }
  
  // 当前月的日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      month,
      year,
      isCurrentMonth: true,
    });
  }
  
  // 下个月的日期
  const remainingDays = 42 - days.length; // 6行7列 = 42
  for (let i = 1; i <= remainingDays; i++) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    days.push({
      day: i,
      month: nextMonth,
      year: nextYear,
      isCurrentMonth: false,
    });
  }
  
  return days;
};

const DatePicker = ({
  value,
  defaultValue,
  onChange,
  placeholder = '请选择日期',
  disabled = false,
  size = 'middle',
  format = 'YYYY-MM-DD',
  allowClear = true,
  className,
  style,
  disabledDate,
  showTime = false,
  disabledTime,
}) => {
  // 当前选中的日期
  const [selectedDate, setSelectedDate] = useState(value || defaultValue || null);
  // 日历面板显示的年月
  const [currentYear, setCurrentYear] = useState(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(selectedDate ? selectedDate.getMonth() : new Date().getMonth());
  // 日历面板是否显示
  const [open, setOpen] = useState(false);
  // 时间选择相关状态
  const [hours, setHours] = useState(selectedDate ? selectedDate.getHours() : 0);
  const [minutes, setMinutes] = useState(selectedDate ? selectedDate.getMinutes() : 0);
  const [seconds, setSeconds] = useState(selectedDate ? selectedDate.getSeconds() : 0);
  // 是否显示时间选择面板
  const [showTimePanel, setShowTimePanel] = useState(false);
  
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  
  // 受控组件同步
  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
      if (value) {
        setCurrentYear(value.getFullYear());
        setCurrentMonth(value.getMonth());
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
  
  // 切换到上个月
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  // 切换到下个月
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // 切换到上一年
  const goToPrevYear = () => {
    setCurrentYear(currentYear - 1);
  };
  
  // 切换到下一年
  const goToNextYear = () => {
    setCurrentYear(currentYear + 1);
  };
  
  // 选择日期
  const handleSelectDate = (day) => {
    let newDate;
    
    if (selectedDate && showTime) {
      // 如果启用了时间选择，保留之前的时间部分
      newDate = new Date(day.year, day.month, day.day, hours, minutes, seconds);
    } else {
      newDate = new Date(day.year, day.month, day.day);
    }
    
    // 检查是否禁用
    if (disabledDate && disabledDate(newDate)) {
      return;
    }
    
    // 检查时间是否禁用
    if (showTime && disabledTime) {
      const { disabledHours, disabledMinutes, disabledSeconds } = disabledTime();
      if (
        (disabledHours && disabledHours().includes(newDate.getHours())) ||
        (disabledMinutes && disabledMinutes(newDate.getHours()).includes(newDate.getMinutes())) ||
        (disabledSeconds && disabledSeconds(newDate.getHours(), newDate.getMinutes()).includes(newDate.getSeconds()))
      ) {
        return;
      }
    }
    
    setSelectedDate(newDate);
    setHours(newDate.getHours());
    setMinutes(newDate.getMinutes());
    setSeconds(newDate.getSeconds());
    
    if (!showTime) {
      onChange && onChange(newDate, formatDate(newDate, format));
      setOpen(false);
    } else {
      // 如果启用了时间选择，选择日期后不关闭面板，而是切换到时间选择
      setShowTimePanel(true);
      onChange && onChange(newDate, formatDate(newDate, format));
    }
  };
  
  // 清空选择
  const handleClear = (e) => {
    e.stopPropagation();
    setSelectedDate(null);
    onChange && onChange(null, '');
  };
  
  // 渲染日历头部
  const renderHeader = () => {
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    
    return (
      <div className="sui-datepicker-header">
        <div className="sui-datepicker-header-btns">
          <span className="sui-datepicker-btn" onClick={goToPrevYear}>
            <Icon name="DoubleLeft" theme="outline" size={16} />
          </span>
          <span className="sui-datepicker-btn" onClick={goToPrevMonth}>
            <Icon name="Left" theme="outline" size={16} />
          </span>
        </div>
        <div className="sui-datepicker-header-view">
          {currentYear}年 {monthNames[currentMonth]}
        </div>
        <div className="sui-datepicker-header-btns">
          <span className="sui-datepicker-btn" onClick={goToNextMonth}>
            <Icon name="Right" theme="outline" size={16} />
          </span>
          <span className="sui-datepicker-btn" onClick={goToNextYear}>
            <Icon name="DoubleRight" theme="outline" size={16} />
          </span>
        </div>
      </div>
    );
  };
  
  // 渲染日历主体
  const renderBody = () => {
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const days = generateCalendarDays(currentYear, currentMonth);
    
    return (
      <div className="sui-datepicker-body">
        <div className="sui-datepicker-weekdays">
          {weekDays.map((day, index) => (
            <div key={index} className="sui-datepicker-weekday">{day}</div>
          ))}
        </div>
        <div className="sui-datepicker-days">
          {days.map((day, index) => {
            const isToday = (
              day.year === new Date().getFullYear() &&
              day.month === new Date().getMonth() &&
              day.day === new Date().getDate()
            );
            
            const isSelected = selectedDate && (
              day.year === selectedDate.getFullYear() &&
              day.month === selectedDate.getMonth() &&
              day.day === selectedDate.getDate()
            );
            
            const isDisabled = disabledDate && disabledDate(new Date(day.year, day.month, day.day));
            
            return (
              <div
                key={index}
                className={classNames('sui-datepicker-day', {
                  'is-today': isToday,
                  'is-selected': isSelected,
                  'is-disabled': isDisabled,
                  'not-current-month': !day.isCurrentMonth,
                })}
                onClick={() => !isDisabled && handleSelectDate(day)}
              >
                {day.day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  // 处理时间变化
  const handleTimeChange = (type, value) => {
    let newDate = selectedDate ? new Date(selectedDate) : new Date();
    
    if (type === 'hour') {
      setHours(value);
      newDate.setHours(value);
    } else if (type === 'minute') {
      setMinutes(value);
      newDate.setMinutes(value);
    } else if (type === 'second') {
      setSeconds(value);
      newDate.setSeconds(value);
    }
    
    // 检查时间是否禁用
    if (disabledTime) {
      const { disabledHours, disabledMinutes, disabledSeconds } = disabledTime();
      if (
        (disabledHours && disabledHours().includes(newDate.getHours())) ||
        (disabledMinutes && disabledMinutes(newDate.getHours()).includes(newDate.getMinutes())) ||
        (disabledSeconds && disabledSeconds(newDate.getHours(), newDate.getMinutes()).includes(newDate.getSeconds()))
      ) {
        return;
      }
    }
    
    setSelectedDate(newDate);
    onChange && onChange(newDate, formatDate(newDate, format));
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
  
  // 渲染时间选择面板
  const renderTimePanel = () => {
    // 获取禁用的小时、分钟和秒
    let disabledHoursFn = () => [];
    let disabledMinutesFn = () => [];
    let disabledSecondsFn = () => [];
    
    if (disabledTime) {
      const { disabledHours, disabledMinutes, disabledSeconds } = disabledTime();
      disabledHoursFn = disabledHours || disabledHoursFn;
      disabledMinutesFn = (hour) => (disabledMinutes ? disabledMinutes(hour) : []);
      disabledSecondsFn = (hour, minute) => (disabledSeconds ? disabledSeconds(hour, minute) : []);
    }
    
    const hourOptions = generateTimeOptions(0, 23, 1, (hour) => disabledHoursFn().includes(hour));
    const minuteOptions = generateTimeOptions(0, 59, 1, (minute) => disabledMinutesFn(hours).includes(minute));
    const secondOptions = generateTimeOptions(0, 59, 1, (second) => disabledSecondsFn(hours, minutes).includes(second));
    
    return (
      <div className="sui-datepicker-time-panel">
        <div className="sui-datepicker-time-columns">
          <div className="sui-datepicker-time-column">
            {hourOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-datepicker-time-cell', {
                  'is-selected': hours === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('hour', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          <div className="sui-datepicker-time-column">
            {minuteOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-datepicker-time-cell', {
                  'is-selected': minutes === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('minute', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          <div className="sui-datepicker-time-column">
            {secondOptions.map((option) => (
              <div
                key={option.value}
                className={classNames('sui-datepicker-time-cell', {
                  'is-selected': seconds === option.value,
                  'is-disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleTimeChange('second', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // 渲染日历底部
  const renderFooter = () => {
    return (
      <div className="sui-datepicker-footer">
        {showTime && (
          <div className="sui-datepicker-footer-time">
            <span 
              className="sui-datepicker-time-btn"
              onClick={() => setShowTimePanel(!showTimePanel)}
            >
              {showTimePanel ? '选择日期' : '选择时间'}
            </span>
            <span className="sui-datepicker-time-value">
              {selectedDate ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` : '--:--:--'}
            </span>
          </div>
        )}
        <div className="sui-datepicker-footer-btns">
          <span 
            className="sui-datepicker-today-btn"
            onClick={() => {
              const today = new Date();
              if (disabledDate && disabledDate(today)) return;
              handleSelectDate({
                year: today.getFullYear(),
                month: today.getMonth(),
                day: today.getDate(),
              });
            }}
          >
            今天
          </span>
          {showTime && (
            <span 
              className="sui-datepicker-ok-btn"
              onClick={() => setOpen(false)}
            >
              确定
            </span>
          )}
        </div>
      </div>
    );
  };
  
  // 渲染日历面板
  const renderCalendar = () => {
    return (
      <div className="sui-datepicker-panel">
        {!showTimePanel ? (
          <>
            {renderHeader()}
            {renderBody()}
          </>
        ) : (
          renderTimePanel()
        )}
        {renderFooter()}
      </div>
    );
  };
  
  return (
    <>
      <div
        className={classNames(
          'sui-datepicker',
          {
            'sui-datepicker-lg': size === 'large',
            'sui-datepicker-sm': size === 'small',
            'sui-datepicker-disabled': disabled,
          },
          className
        )}
        style={style}
        ref={inputRef}
        onClick={() => !disabled && setOpen(true)}
      >
        <Input
          value={selectedDate ? formatDate(selectedDate, format) : ''}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          size={size}
          prefix={<Icon name="Calendar" theme="outline" size={16} />}
          suffix={
            allowClear && selectedDate && !disabled ? (
              <span className="sui-datepicker-clear" onClick={handleClear}>
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
          className="sui-datepicker-dropdown"
          ref={dropdownRef}
          style={dropdownStyle}
        >
          {renderCalendar()}
        </div>,
        document.body
      )}
    </>
  );
};

DatePicker.propTypes = {
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
  disabledDate: PropTypes.func,
  showTime: PropTypes.bool,
  disabledTime: PropTypes.func,
};

export default DatePicker;