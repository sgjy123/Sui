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

  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="logo">
          <h1>Sui Design</h1>
        </div>
        <Menu mode="horizontal" showBorder={false} selectedKeys={[location.pathname]} onSelect={handleMenuSelect}>
          <Menu.Item key="/public" index="/public">
            首页
          </Menu.Item>
          <Menu.Item key="/doc" index="/doc">
            组件
          </Menu.Item>
          <Menu.Item key="/guide" index="/guide">
            指南
          </Menu.Item>
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
              <Menu.Item key="/doc/button" index="/doc/button">
                Button 按钮
              </Menu.Item>
              <Menu.Item key="/doc/icon" index="/doc/icon">
                Icon 图标
              </Menu.Item>
              <Menu.Item key="/doc/divider" index="/doc/divider">
                分割线
              </Menu.Item>
              <Menu.Item key="/doc/timeline" index="/doc/timeline">
                时间轴
              </Menu.Item>
              <Menu.Item key="/doc/tooltip" index="/doc/tooltip">
                Tooltip 文字提示
              </Menu.Item>
              <Menu.Item key="/doc/menu" index="/doc/menu">
                Menu 导航菜单
              </Menu.Item>
              <Menu.Item key="/doc/space" index="/doc/space">
                Space 间距
              </Menu.Item>
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
