import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const DefaultBackIcon = (
  <Icon name="Left" theme="outline" size={20} />
);

const PageHeader = ({
  title,
  subTitle,
  onBack,
  extra,
  backIcon,
  className,
  style,
}) => {
  return (
    <div className={classNames('sui-page-header', className)} style={style}>
      <div className="sui-page-header-main">
        {onBack && (
          <div className="sui-page-header-back" onClick={onBack} aria-label="返回">
            <span className="sui-page-header-back-icon">
              {backIcon || DefaultBackIcon}
            </span>
          </div>
        )}
        <div className="sui-page-header-heading">
          <span className="sui-page-header-title">{title}</span>
          {subTitle && <span className="sui-page-header-subtitle">{subTitle}</span>}
        </div>
      </div>
      {extra && <div className="sui-page-header-extra">{extra}</div>}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node,
  onBack: PropTypes.func,
  extra: PropTypes.node,
  backIcon: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default PageHeader; 