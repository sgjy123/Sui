import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Image } from 'components';
import Logo from './../../../assets/Sui-Design.png';
import './style.less';

const GuideIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 处理侧边栏菜单点击事件
  const handleMenuSelect = (key) => {
    navigate(key);
  };

  // 顶部导航菜单数据
  const topMenuItems = [
    { key: '/pub', label: '首页' },
    { key: '/guide', label: '指南' },
    { key: '/doc', label: '组件' },
  ];

  // 侧边栏菜单数据
  const sideMenuItems = [
    { key: '/guide/introduction', label: '介绍' },
    { key: '/guide/quick-start', label: '快速开始' },
    // { key: '/guide/theme', label: '定制主题' },
    { key: '/guide/server', label: '服务支持' },
  ];

  // 默认显示快速开始内容
  const getDefaultContent = () => {
    if (location.pathname === '/guide/introduction' || location.pathname === '/guide') {
      return (
        <div className="markdown-content">
          <h1>介绍</h1>
          <p>Sui Design 是一个基于 React 实现的 UI 组件库，提供了丰富的组件用于构建现代化的用户界面。</p>
          <p>该组件库具有以下特点：</p>
          <ul>
            <li>丰富的组件：包含50+个高质量组件</li>
            <li>易于使用：API 设计简洁明了，降低学习成本</li>
            <li>主题定制：支持灵活的主题定制能力</li>
            <li>性能优良：注重性能优化，提供良好的用户体验</li>
          </ul>
        </div>
      );
    } else if (location.pathname === '/guide/quick-start') {
      return (
        <div className="markdown-content">
          <h1>快速开始</h1>

          <h2>安装</h2>
          <pre className="code-block">npm install @sgjy/s-ui</pre>

          <h2>使用</h2>
          <pre className="code-block">
            {`import { Button } from '@sgjy/s-ui';

function App() {
  return <Button type="primary">Hello World</Button>;
}`}
          </pre>

          <h2>按需加载</h2>
          <p>Sui Design 默认支持 tree shaking，可以直接引入组件而无需额外配置。</p>
          <pre className="code-block">{`import { Button, Card, Grid } from '@sgjy/s-ui';`}</pre>
        </div>
      );
    } else if (location.pathname === '/guide/theme') {
      return (
        <div className="markdown-content">
          <h1>定制主题</h1>
          <p>Sui Design 使用 CSS Variables 来定义样式，可以通过覆盖 CSS 变量来自定义主题。</p>

          <h2>自定义 CSS 变量</h2>
          <pre className="code-block">
            {`:root {
  --sui-primary-color: #1890ff;
  --sui-success-color: #52c41a;
  --sui-warning-color: #faad14;
  --sui-error-color: #ff4d4f;
}`}
          </pre>

          <h2>使用 ConfigProvider</h2>
          <p>通过 ConfigProvider 组件可以全局配置组件的主题和其他属性。</p>
          <pre className="code-block">
            {`import { ConfigProvider } from '@sgjy/s-ui';

function App() {
  return (
    <ConfigProvider theme={{ primaryColor: '#1890ff' }}>
      <YourApp />
    </ConfigProvider>
  );
}`}
          </pre>
        </div>
      );
    } else if (location.pathname === '/guide/server') {
      return (
        <div className="markdown-content">
          <h1>服务支持</h1>

          <h2>浏览器兼容性</h2>
          <p>Sui Design 支持现代浏览器以及 Internet Explorer 11 (部分功能可能受限)。</p>
          <ul>
            <li>Chrome &gt; 60</li>
            <li>Firefox &gt; 60</li>
            <li>Safari &gt; 12</li>
            <li>Edge &gt; 12</li>
            <li>IE &gt; 11</li>
          </ul>

          <h2>获取帮助</h2>
          <p>如果您在使用过程中遇到问题，可以通过以下方式获取帮助：</p>
          <ul>
            <li>查阅组件文档</li>
            <li>在 GitHub 上提交 issue</li>
            <li>加入交流群讨论</li>
          </ul>

          <h2>社区支持</h2>
          <p>欢迎加入我们的社区，与其他开发者一起交流和学习。</p>
        </div>
      );
    } else {
      // 默认显示介绍页面
      return (
        <div className="markdown-content">
          <h1>介绍</h1>
          <p>Sui Design 是一个基于 React 实现的 UI 组件库，提供了丰富的组件用于构建现代化的用户界面。</p>
          <p>该组件库具有以下特点：</p>
          <ul>
            <li>丰富的组件：包含50+个高质量组件</li>
            <li>易于使用：API 设计简洁明了，降低学习成本</li>
            <li>主题定制：支持灵活的主题定制能力</li>
            <li>性能优良：注重性能优化，提供良好的用户体验</li>
            <li>类型支持：使用 TypeScript 开发，提供完整的类型定义</li>
          </ul>
        </div>
      );
    }
  };

  // 确定当前选中的菜单项
  const getSelectedKeys = () => {
    // 如果是 /guide 根路径，则默认选中介绍页面
    if (location.pathname === '/guide') {
      return ['/guide/introduction'];
    }
    return [location.pathname];
  };

  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="logo">
          <Image src={Logo} height={54} preview={false} />
        </div>
        <Menu mode="horizontal" showBorder={false} selectedKeys={[location.pathname]} onSelect={handleMenuSelect}>
          {topMenuItems.map((item) => (
            <Menu.Item key={item.key} index={item.key}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </header>

      <div className="doc-container">
        <aside className="doc-sidebar">
          <div className="menu-group">
            <div>指南</div>
            <Menu mode="vertical" selectedKeys={getSelectedKeys()} onSelect={handleMenuSelect}>
              {sideMenuItems.map((item) => (
                <Menu.Item key={item.key} index={item.key}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </aside>

        <main className="doc-content">{getDefaultContent()}</main>
      </div>
    </div>
  );
};

export default GuideIndex;
