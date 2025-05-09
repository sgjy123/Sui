import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.less';

const DocIndex = () => {
  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="logo">
          <h1>Sui Design</h1>
        </div>
        <nav className="nav-links">
          <a href="/public">首页</a>
          <a href="/doc">组件</a>
          <a href="/guide">指南</a>
        </nav>
      </header>

      <div className="doc-container">
        <aside className="doc-sidebar">
          <div className="menu-group">
            <h3>通用</h3>
            <ul>
              <li>
                <Link to="/doc/button">Button 按钮</Link>
              </li>
              <li>
                <Link to="/doc/icon">Icon 图标</Link>
              </li>
              <li>
                <Link to="/doc/divider">分割线</Link>
              </li>
              <li>
                <Link to="/doc/timeline">时间轴</Link>
              </li>
              <li>
                <Link to="/doc/tooltip">Tooltip 文字提示</Link>
              </li>
            </ul>
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
