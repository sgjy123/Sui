import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

import emptyImg from './img/empty.png';
import img404 from './img/404.png';
import img401 from './img/401.png';
import img403 from './img/403.png';
import img500 from './img/500.png';
import permissionImg from './img/permission.png';

const statusImgMap = {
  empty: emptyImg,
  '404': img404,
  '401': img401,
  '403': img403,
  '500': img500,
  permission: permissionImg,
};

const Empty = ({
  status = 'empty',
  description,
  style,
  className,
  image,
  imageStyle,
  children,
  actions,
}) => {
  const imgSrc = image || statusImgMap[status] || statusImgMap['empty'];
  
  return (
    <div className={`sui-empty${className ? ' ' + className : ''}`} style={style}>
      <img 
        className="sui-empty-img" 
        src={imgSrc} 
        alt={status} 
        style={imageStyle}
      />
      {description && <div className="sui-empty-desc">{description}</div>}
      
      {actions && (
        <div className="sui-empty-actions">
          {Array.isArray(actions) ? actions.map((action, index) => (
            <React.Fragment key={index}>
              {action}
              {index < actions.length - 1 && <span className="sui-empty-action-divider" />}
            </React.Fragment>
          )) : actions}
        </div>
      )}
      
      {children && <div className="sui-empty-content">{children}</div>}
    </div>
  );
};

Empty.propTypes = {
  /** 空状态类型，可选值：empty、404、401、403、500、permission */
  status: PropTypes.oneOf(['empty', '404', '401', '403', '500', 'permission']),
  /** 自定义描述内容 */
  description: PropTypes.node,
  /** 自定义样式 */
  style: PropTypes.object,
  /** 自定义类名 */
  className: PropTypes.string,
  /** 自定义图片地址 */
  image: PropTypes.string,
  /** 图片样式 */
  imageStyle: PropTypes.object,
  /** 自定义操作按钮 */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  /** 额外内容 */
  children: PropTypes.node,
};

Empty.defaultProps = {
  status: 'empty',
};

export default Empty; 