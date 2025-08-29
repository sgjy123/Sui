import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const FormDescriptions = ({
  title,
  extra,
  layout = 'horizontal', // 'horizontal' | 'vertical'
  bordered = false,
  column = 3,
  size = 'middle',
  children,
  className,
  style,
}) => {
  const cls = classNames(
    'sui-form-descriptions',
    `sui-form-descriptions-${layout}`,
    `sui-form-descriptions-${size}`,
    { 'sui-form-descriptions-bordered': bordered },
    className,
  );

  const items = React.Children.toArray(children).filter(Boolean).map((child) => ({
    label: child.props.label,
    content: child.props.children,
    span: clamp(child.props.span || 1, 1, column),
  }));

  // Build rows in table terms: capacity units = column * 2 (label + content)
  const capacity = column * 2;
  const rows = [];
  let current = [];
  let used = 0;
  items.forEach((it) => {
    const units = it.span * 2;
    if (used + units > capacity) {
      // close current row and start new
      rows.push(current);
      current = [];
      used = 0;
    }
    current.push(it);
    used += units;
  });
  if (current.length) rows.push(current);

  return (
    <div className={cls} style={style}>
      {(title || extra) && (
        <div className="sui-form-descriptions-header">
          {title && <div className="sui-form-descriptions-title">{title}</div>}
          {extra && <div className="sui-form-descriptions-extra">{extra}</div>}
        </div>
      )}
      <table className="sui-form-descriptions-table">
        <tbody>
          {rows.map((row, rIdx) => {
            const sumUnits = row.reduce((s, it) => s + it.span * 2, 0);
            const remain = Math.max(0, capacity - sumUnits);
            return (
              <tr key={rIdx} className="sui-form-descriptions-row">
                {row.map((it, i) => {
                  // for vertical layout: label is a separate row in antd, but we'll keep simple:
                  if (layout === 'vertical') {
                    const isLast = i === row.length - 1;
                    const contentColSpan = it.span * 2 + (isLast ? remain : 0);
                    return (
                      <React.Fragment key={i}>
                        <td className="sui-form-descriptions-item-label" colSpan={contentColSpan}>{it.label}</td>
                      </React.Fragment>
                    );
                  }

                  const isLast = i === row.length - 1;
                  const labelColSpan = 1;
                  const contentColSpan = it.span * 2 - 1 + (isLast ? remain : 0);
                  return (
                    <React.Fragment key={i}>
                      <th className="sui-form-descriptions-item-label" colSpan={labelColSpan}>{it.label}</th>
                      <td className="sui-form-descriptions-item-content" colSpan={contentColSpan}>{it.content}</td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Item = ({ children }) => children;

FormDescriptions.Item = Item;

FormDescriptions.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  bordered: PropTypes.bool,
  column: PropTypes.number,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  className: PropTypes.string,
  style: PropTypes.object,
};

Item.propTypes = {
  label: PropTypes.node,
  span: PropTypes.number,
  children: PropTypes.node,
};

export default FormDescriptions;


