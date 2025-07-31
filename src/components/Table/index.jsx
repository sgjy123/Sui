import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Pagination from '../Pagination';
import Empty from '../Empty';

const Table = ({
  columns = [],
  dataSource = [],
  rowKey = 'id',
  pagination = false,
  loading = false,
  bordered = false,
  size = 'middle',
  rowSelection,
  expandable,
  scroll = {},
  className = '',
  style = {},
  onChange,
  striped = false,
  stripeColor = '#fafafa',
  align = 'left',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortState, setSortState] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  // 分页配置
  const paginationConfig = typeof pagination === 'object' ? pagination : (pagination ? { current: currentPage, pageSize } : false);

  // 处理排序
  const handleSort = (column) => {
    if (!column.sorter) return;
    const newSortState = { ...sortState };
    if (newSortState[column.key] === 'ascend') {
      newSortState[column.key] = 'descend';
    } else if (newSortState[column.key] === 'descend') {
      delete newSortState[column.key];
    } else {
      newSortState[column.key] = 'ascend';
    }
    setSortState(newSortState);
    onChange && onChange({ sortState: newSortState });
  };

  // 处理选择
  const handleSelect = (record, selected) => {
    let newSelectedRowKeys = [...selectedRowKeys];
    if (selected) {
      newSelectedRowKeys.push(record[rowKey]);
    } else {
      newSelectedRowKeys = newSelectedRowKeys.filter(key => key !== record[rowKey]);
    }
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection?.onChange && rowSelection.onChange(newSelectedRowKeys, [record]);
  };

  const handleSelectAll = (selected) => {
    const newSelectedRowKeys = selected ? dataSource.map(item => item[rowKey]) : [];
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection?.onChange && rowSelection.onChange(newSelectedRowKeys, dataSource);
  };

  // 处理展开
  const handleExpand = (record, expanded) => {
    let newExpandedRowKeys = [...expandedRowKeys];
    if (expanded) {
      newExpandedRowKeys.push(record[rowKey]);
    } else {
      newExpandedRowKeys = newExpandedRowKeys.filter(key => key !== record[rowKey]);
    }
    setExpandedRowKeys(newExpandedRowKeys);
    expandable?.onExpand && expandable.onExpand(expanded, record);
  };

  // 排序数据
  const sortedData = useMemo(() => {
    let result = [...dataSource];
    Object.entries(sortState).forEach(([key, order]) => {
      const column = columns.find(col => col.key === key);
      if (column?.sorter) {
        result.sort((a, b) => {
          const aValue = column.dataIndex ? a[column.dataIndex] : a[key];
          const bValue = column.dataIndex ? b[column.dataIndex] : b[key];
          if (typeof column.sorter === 'function') {
            return column.sorter(aValue, bValue, order);
          }
          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return order === 'ascend' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
          }
          return order === 'ascend' ? aValue - bValue : bValue - aValue;
        });
      }
    });
    return result;
  }, [dataSource, sortState, columns]);

  // 分页数据
  const paginatedData = useMemo(() => {
    if (!paginationConfig) return sortedData;
    const { current = currentPage, pageSize: size = pageSize } = paginationConfig;
    const start = (current - 1) * size;
    return sortedData.slice(start, start + size);
  }, [sortedData, paginationConfig, currentPage, pageSize]);

  // 渲染单元格内容
  const renderCell = (column, record, index) => {
    if (column.render) {
      return column.render(column.dataIndex ? record[column.dataIndex] : record[column.key], record, index);
    }
    return column.dataIndex ? record[column.dataIndex] : record[column.key];
  };

  // 计算单元格合并
  const getCellSpan = (column, record, index) => {
    if (column.onCell) {
      const cellProps = column.onCell(record, index);
      return {
        rowSpan: cellProps?.rowSpan || 1,
        colSpan: cellProps?.colSpan || 1,
      };
    }
    return { rowSpan: 1, colSpan: 1 };
  };

  // 渲染表头
  const renderHeader = () => (
    <thead className="sui-table-thead">
      <tr>
        {rowSelection && (
          <th className="sui-table-selection-column">
            <Checkbox
              checked={selectedRowKeys.length === dataSource.length && dataSource.length > 0}
              indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < dataSource.length}
              onChange={e => handleSelectAll(e.target.checked)}
            />
          </th>
        )}
        {expandable && <th className="sui-table-expand-icon-column" />}
        {columns.map((column, colIndex) => {
          const columnAlign = column.align || align;
          const cellSpan = column.onHeaderCell ? column.onHeaderCell(colIndex) : { rowSpan: 1, colSpan: 1 };
          
          // 如果被其他单元格合并，则不渲染
          if (cellSpan.rowSpan === 0 || cellSpan.colSpan === 0) {
            return null;
          }
          
          return (
            <th
              key={column.key}
              className={`sui-table-cell${column.sorter ? ' sui-table-column-sorter' : ''}${column.fixed ? ` sui-table-cell-fixed-${column.fixed}` : ''}`}
              style={{ width: column.width, textAlign: columnAlign }}
              rowSpan={cellSpan.rowSpan}
              colSpan={cellSpan.colSpan}
            >
              <div className="sui-table-column-title" style={{ textAlign: columnAlign }}>
                {column.title}
                {column.sorter && (
                  <span className="sui-table-column-sorter-inner" onClick={() => handleSort(column)}>
                    <Icon name="Up" className={`sui-table-column-sorter-up${sortState[column.key] === 'ascend' ? ' active' : ''}`} />
                    <Icon name="Down" className={`sui-table-column-sorter-down${sortState[column.key] === 'descend' ? ' active' : ''}`} />
                  </span>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );

  // 渲染表格行
  const renderRow = (record, index) => {
    const isSelected = selectedRowKeys.includes(record[rowKey]);
    const isExpanded = expandedRowKeys.includes(record[rowKey]);
    const hasChildren = expandable?.rowExpandable ? expandable.rowExpandable(record) : false;
    const isEvenRow = striped && index % 2 === 1;

    return (
      <React.Fragment key={record[rowKey]}>
        <tr 
          className={`sui-table-row${isSelected ? ' sui-table-row-selected' : ''}${isEvenRow ? ' sui-table-row-striped' : ''}`}
          style={isEvenRow ? { backgroundColor: stripeColor } : {}}
        >
          {rowSelection && (
            <td className="sui-table-selection-column">
              <Checkbox
                checked={isSelected}
                onChange={e => handleSelect(record, e.target.checked)}
              />
            </td>
          )}
          {expandable && (
            <td className="sui-table-expand-icon-column">
              {hasChildren && (
                <span
                  className={`sui-table-row-expand-icon${isExpanded ? ' expanded' : ''}`}
                  onClick={() => handleExpand(record, !isExpanded)}
                >
                  <Icon name="Right" />
                </span>
              )}
            </td>
          )}
          {columns.map(column => {
            const columnAlign = column.align || align;
            const cellSpan = getCellSpan(column, record, index);
            
            // 如果被其他单元格合并，则不渲染
            if (cellSpan.rowSpan === 0 || cellSpan.colSpan === 0) {
              return null;
            }
            
            return (
              <td
                key={column.key}
                className={`sui-table-cell${column.fixed ? ` sui-table-cell-fixed-${column.fixed}` : ''}`}
                style={{ width: column.width, textAlign: columnAlign }}
                rowSpan={cellSpan.rowSpan}
                colSpan={cellSpan.colSpan}
              >
                {renderCell(column, record, index)}
              </td>
            );
          })}
        </tr>
        {expandable && isExpanded && hasChildren && (
          <tr className="sui-table-expanded-row">
            <td colSpan={columns.length + (rowSelection ? 1 : 0) + (expandable ? 1 : 0)}>
              {expandable.expandedRowRender(record, index, isExpanded)}
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={`sui-table-wrapper ${className}`} style={style}>
      <div className={`sui-table${bordered ? ' sui-table-bordered' : ''} sui-table-${size}`}>
        <div className="sui-table-container">
          <table className="sui-table">
            {renderHeader()}
            <tbody className="sui-table-tbody">
              {loading ? (
                <tr>
                  <td colSpan={columns.length + (rowSelection ? 1 : 0) + (expandable ? 1 : 0)} className="sui-table-loading">
                    <div className="sui-table-loading-content">
                      <Icon name="Loading" className="sui-table-loading-icon" />
                      <span>加载中...</span>
                    </div>
                  </td>
                </tr>
              ) : paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (rowSelection ? 1 : 0) + (expandable ? 1 : 0)} className="sui-table-empty">
                    <Empty description="暂无数据" />
                  </td>
                </tr>
              ) : (
                paginatedData.map(renderRow)
              )}
            </tbody>
          </table>
        </div>
      </div>
      {paginationConfig && (
        <div className="sui-table-pagination">
          <Pagination
            current={paginationConfig.current || currentPage}
            pageSize={paginationConfig.pageSize || pageSize}
            total={dataSource.length}
            onChange={(page, size) => {
              setCurrentPage(page);
              setPageSize(size);
              paginationConfig.onChange && paginationConfig.onChange(page, size);
            }}
            showSizeChanger={paginationConfig.showSizeChanger !== false}
            showQuickJumper={paginationConfig.showQuickJumper}
            showTotal={paginationConfig.showTotal}
          />
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  rowKey: PropTypes.string,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  rowSelection: PropTypes.object,
  expandable: PropTypes.object,
  scroll: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  striped: PropTypes.bool,
  stripeColor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Table; 