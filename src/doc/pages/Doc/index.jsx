import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'components';
import './style.less';

const DocIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 处理侧边栏菜单点击事件
  const handleMenuSelect = (key) => {
    navigate(key);
  };

  // 顶部导航菜单数据
  const topMenuItems = [
    { key: '/public', label: '首页' },
    { key: '/doc', label: '组件' },
    { key: '/guide', label: '指南' }
  ];

  // 侧边栏菜单数据
  const sideMenuItems = [
    { key: '/doc/button', label: 'Button 按钮' },
    { key: '/doc/icon', label: 'Icon 图标' },
    { key: '/doc/divider', label: '分割线' },
    { key: '/doc/timeline', label: '时间轴' },
    { key: '/doc/tooltip', label: 'Tooltip 文字提示' },
    { key: '/doc/menu', label: 'Menu 导航菜单' },
    { key: '/doc/space', label: 'Space 间距' },
    { key: '/doc/grid', label: 'Grid 栅格' },
    { key: '/doc/empty', label: 'Empty 空状态' },
    { key: '/doc/breadcrumb', label: 'Breadcrumb 面包屑' }
  ];

  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="logo">
          <h1>Sui Design</h1>
        </div>
        <Menu mode="horizontal" showBorder={false} selectedKeys={[location.pathname]} onSelect={handleMenuSelect}>
          {topMenuItems.map(item => (
            <Menu.Item key={item.key} index={item.key}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </header>

      <div className="doc-container">
        <aside className="doc-sidebar">
          <div className="menu-group">
            <h3>通用</h3>
            <Menu 
              mode="vertical" 
              selectedKeys={[location.pathname]}
              onSelect={handleMenuSelect}
            >
              {sideMenuItems.map(item => (
                <Menu.Item key={item.key} index={item.key}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </aside>

        <main className="doc-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DocIndex;
