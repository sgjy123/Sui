import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import './style.less';

const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);
const formatDate = (date) => {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}-${m}-${d}`;
};

const Calendar = ({
  value,
  defaultValue,
  onChange,
  headerRender,
  dateCellRender,
  fullscreen = true,
  className,
  style,
}) => {
  const today = useMemo(() => new Date(), []);
  const initialDate = useMemo(() => value || defaultValue || today, [value, defaultValue, today]);
  const [panelDate, setPanelDate] = useState(new Date(initialDate));

  const year = panelDate.getFullYear();
  const month = panelDate.getMonth();
  const firstWeekday = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);

  const handleSelect = (date) => {
    onChange && onChange(date, formatDate(date));
  };

  const goPrevMonth = () => setPanelDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setPanelDate(new Date(year, month + 1, 1));
  const goToday = () => setPanelDate(new Date(today.getFullYear(), today.getMonth(), 1));

  const renderHeader = () => {
    if (headerRender) return headerRender({ value: panelDate, onChange: setPanelDate, onToday: goToday });
    return (
      <div className="sui-calendar-header">
        <div className="sui-calendar-header-left">
          <Button size="small" onClick={goPrevMonth} icon="Left" />
          <Button size="small" onClick={goNextMonth} icon="Right" />
        </div>
        <div className="sui-calendar-header-center">{year}年 {month + 1}月</div>
        <div className="sui-calendar-header-right">
          <Button size="small" type="default" onClick={goToday}>今天</Button>
        </div>
      </div>
    );
  };

  const cells = [];
  // fill prev month blanks
  for (let i = 0; i < firstWeekday; i++) {
    cells.push(null);
  }
  // current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  // ensure 6 rows (6 * 7 = 42 cells)
  while (cells.length < 42) {
    cells.push(null);
  }

  const selectedKey = value ? formatDate(new Date(value)) : null;
  const todayKey = formatDate(today);

  return (
    <div className={classNames('sui-calendar', { 'sui-calendar-fullscreen': fullscreen }, className)} style={style}>
      {renderHeader()}
      <div className="sui-calendar-table">
        <div className="sui-calendar-weekdays">
          {['日','一','二','三','四','五','六'].map((w) => (
            <div key={w} className="sui-calendar-weekday">{w}</div>
          ))}
        </div>
        <div className="sui-calendar-cells">
          {cells.map((cell, idx) => {
            const isCurrentMonth = cell && cell.getMonth() === month;
            const key = cell ? formatDate(cell) : `blank-${idx}`;
            const isToday = cell && formatDate(cell) === todayKey;
            const isSelected = cell && selectedKey && formatDate(cell) === selectedKey;
            return (
              <div
                key={key}
                className={classNames(
                  'sui-calendar-cell',
                  { 'sui-calendar-cell-out': !isCurrentMonth },
                  { 'sui-calendar-cell-today': isToday },
                  { 'sui-calendar-cell-selected': isSelected },
                )}
                onClick={cell ? () => handleSelect(cell) : undefined}
              >
                {cell ? (
                  <div className="sui-calendar-date">
                    <div className="sui-calendar-date-value">{cell.getDate()}</div>
                    <div className="sui-calendar-date-content">
                      {dateCellRender ? dateCellRender(cell) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  value: PropTypes.instanceOf(Date),
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  headerRender: PropTypes.func,
  dateCellRender: PropTypes.func,
  fullscreen: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Calendar;


