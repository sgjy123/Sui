import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Select from '../Select';
import Input from '../Input';
import './style.less';

const Pagination = ({
  total = 0,
  current = 1,
  pageSize = 10,
  onChange,
  showTotal = (total, range) => `共 ${total} 条`,
  showSizeChanger = false,
  pageSizeOptions = ['10', '20', '30', '40'],
  showQuickJumper = false,
  disabled = false,
  simple = false,
  className,
  style,
}) => {
  const [currentPage, setCurrentPage] = useState(current);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  useEffect(() => {
    setCurrentPageSize(pageSize);
  }, [pageSize]);

  const totalPages = Math.ceil(total / currentPageSize);

  const goToPage = useCallback((page) => {
    let newPage = Math.max(1, Math.min(page, totalPages));
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      onChange?.(newPage, currentPageSize);
    }
  }, [currentPage, currentPageSize, onChange, totalPages]);

  const onPrev = useCallback(() => {
    if (currentPage > 1 && !disabled) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, disabled, goToPage]);

  const onNext = useCallback(() => {
    if (currentPage < totalPages && !disabled) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, disabled, goToPage, totalPages]);

  const renderPageNumbers = useCallback(() => {
    const pages = [];
    const delta = 2; // number of pages around current page

    if (simple) {
      return null;
    }

    let left = currentPage - delta;
    let right = currentPage + delta;

    const range = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    let last = 0;
    range.forEach((i) => {
      if (i - last === delta + 1) {
        pages.push(
          <li key={`left-ellipsis-${i}`} className="sui-pagination-item sui-pagination-item-ellipsis">
            ...
          </li>
        );
      } else if (i - last !== 1) {
        pages.push(
          <li key={`right-ellipsis-${i}`} className="sui-pagination-item sui-pagination-item-ellipsis">
            ...
          </li>
        );
      }
      pages.push(
        <li
          key={i}
          className={classNames('sui-pagination-item', {
            'sui-pagination-item-active': i === currentPage,
            'sui-pagination-disabled': disabled,
          })}
          onClick={disabled ? undefined : () => goToPage(i)}
        >
          {i}
        </li>
      );
      last = i;
    });

    return pages;
  }, [currentPage, disabled, goToPage, simple, totalPages]);

  const handlePageSizeChange = useCallback((value) => {
    if (disabled) return;
    const newSize = Number(value);
    if (newSize !== currentPageSize) {
      setCurrentPageSize(newSize);
      // When page size changes, jump to the first page
      onChange?.(1, newSize);
      setCurrentPage(1);
    }
  }, [currentPageSize, disabled, onChange]);

  const [jumpValue, setJumpValue] = useState('');

  const handleQuickJumper = useCallback((e) => {
    if (disabled) return;
    if (e.key === 'Enter') {
      let jumpPage = Number(jumpValue);
      if (!isNaN(jumpPage) && jumpPage > 0) {
        goToPage(jumpPage);
        setJumpValue(''); // Clear input after jump
      }
    }
  }, [disabled, goToPage, jumpValue]);

  const renderSimplePagination = () => (
    <ul className="sui-pagination sui-pagination-simple">
      <li
        className={classNames('sui-pagination-prev', {
          'sui-pagination-disabled': currentPage === 1 || disabled,
        })}
        onClick={currentPage === 1 || disabled ? undefined : onPrev}
      >
        <Icon name="Left" theme="outline" size={14} />
      </li>
      <li className="sui-pagination-simple-pager">
        <input
          type="text"
          value={currentPage}
          onChange={(e) => !disabled && setCurrentPage(Number(e.target.value) || 1)}
          onBlur={(e) => !disabled && goToPage(Number(e.target.value) || 1)}
          onKeyDown={handleQuickJumper}
          disabled={disabled}
        />
        <span className="sui-pagination-slash">/</span>
        <span className="sui-pagination-total">{totalPages}</span>
      </li>
      <li
        className={classNames('sui-pagination-next', {
          'sui-pagination-disabled': currentPage === totalPages || disabled,
        })}
        onClick={currentPage === totalPages || disabled ? undefined : onNext}
      >
        <Icon name="Right" size={14} />
      </li>
    </ul>
  );

  if (simple) {
    return renderSimplePagination();
  }

  const startIndex = (currentPage - 1) * currentPageSize + 1;
  const endIndex = Math.min(currentPage * currentPageSize, total);

  return (
    <ul className={classNames('sui-pagination', className, { 'sui-pagination-disabled': disabled })} style={style}>
      {showTotal && (
        <li className="sui-pagination-total-text">
          {showTotal(total, [startIndex, endIndex])}
        </li>
      )}
      <li
        className={classNames('sui-pagination-prev', {
          'sui-pagination-disabled': currentPage === 1 || disabled,
        })}
        onClick={currentPage === 1 || disabled ? undefined : onPrev}
      >
        <Icon name="Left" theme="outline" size={14} />
      </li>
      {renderPageNumbers()}
      <li
        className={classNames('sui-pagination-next', {
          'sui-pagination-disabled': currentPage === totalPages || disabled,
        })}
        onClick={currentPage === totalPages || disabled ? undefined : onNext}
      >
        <Icon name="Right" size={14} />
      </li>
      {showSizeChanger && (
        <li className="sui-pagination-options">
          <Select
            value={currentPageSize.toString()}
            onChange={handlePageSizeChange}
            disabled={disabled}
            options={pageSizeOptions.map((option) => ({
              label: `${option} 条/页`,
              value: option,
            }))}
            style={{ width: 120 }}
          />
        </li>
      )}
      {showQuickJumper && (
        <li className="sui-pagination-options sui-pagination-options-quick-jumper">
          跳转至
          <Input
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            onKeyDown={handleQuickJumper}
            disabled={disabled}
            style={{ width: 50, margin: '0 8px' }}
          />
          页
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  showTotal: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
  showQuickJumper: PropTypes.bool,
  disabled: PropTypes.bool,
  simple: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Pagination; 