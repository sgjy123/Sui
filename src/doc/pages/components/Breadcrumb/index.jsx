import React from 'react';
import { Breadcrumb, Icon } from 'components';

const BreadcrumbDemo = () => {
  const handleClick = (item, index) => {
    console.log('Clicked item:', item, 'at index:', index);
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h2>基础用法</h2>
        <div className="demo-content">
          <Breadcrumb
            items={[
              {
                title: '首页',
                href: '/',
              },
              {
                title: '应用中心',
                href: '/apps',
              },
              {
                title: '应用列表',
              },
            ]}
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '应用中心',
    href: '/apps',
  },
  {
    title: '应用列表',
  },
];

<Breadcrumb items={items} onClick={handleClick} />`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>自定义分隔符</h2>
        <div className="demo-content">
          <Breadcrumb
            items={[
              {
                title: '首页',
                href: '/',
              },
              {
                title: '应用中心',
                href: '/apps',
              },
              {
                title: '应用列表',
              },
            ]}
            separator=">"
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '应用中心',
    href: '/apps',
  },
  {
    title: '应用列表',
  },
];

<Breadcrumb items={items} separator=">" onClick={handleClick} />`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>带图标</h2>
        <div className="demo-content">
          <Breadcrumb
            items={[
              {
                title: '首页',
                href: '/',
                icon: <Icon name="Home" />,
              },
              {
                title: '应用中心',
                href: '/apps',
                icon: <Icon name="AppStore" />,
              },
              {
                title: '应用列表',
                icon: <Icon name="UnorderedList" />,
              },
            ]}
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb, Icon } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
    icon: <Icon name="Home" />,
  },
  {
    title: '应用中心',
    href: '/apps',
    icon: <Icon name="AppStore" />,
  },
  {
    title: '应用列表',
    icon: <Icon name="UnorderedList" />,
  },
];

<Breadcrumb items={items} onClick={handleClick} />`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>图标与文字垂直排列</h2>
        <div className="demo-content">
          <Breadcrumb
            direction="vertical"
            items={[
              {
                title: '首页',
                href: '/',
                icon: <Icon name="Home" />,
              },
              {
                title: '应用中心',
                href: '/apps',
                icon: <Icon name="AppStore" />,
              },
              {
                title: '列表',
                icon: <Icon name="UnorderedList" />,
              },
            ]}
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb, Icon } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
    icon: <Icon name="Home" />,
  },
  {
    title: '应用中心',
    href: '/apps',
    icon: <Icon name="AppStore" />,
  },
  {
    title: '列表',
    icon: <Icon name="UnorderedList" />,
  },
];

<Breadcrumb 
  direction="vertical"
  items={items} 
  onClick={handleClick} 
/>`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>不同尺寸</h2>
        <div className="demo-content">
          <div style={{ marginBottom: 16 }}>
            <Breadcrumb
              className="sui-breadcrumb-large"
              items={[
                { title: '首页', href: '/' },
                { title: '应用中心', href: '/apps' },
                { title: '应用列表' },
              ]}
              onClick={handleClick}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Breadcrumb
              items={[
                { title: '首页', href: '/' },
                { title: '应用中心', href: '/apps' },
                { title: '应用列表' },
              ]}
              onClick={handleClick}
            />
          </div>
          <div>
            <Breadcrumb
              className="sui-breadcrumb-small"
              items={[
                { title: '首页', href: '/' },
                { title: '应用中心', href: '/apps' },
                { title: '应用列表' },
              ]}
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb } from 'components';

// 大型
<Breadcrumb className="sui-breadcrumb-large" items={items} />

// 默认尺寸
<Breadcrumb items={items} />

// 小型
<Breadcrumb className="sui-breadcrumb-small" items={items} />`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>垂直排列与尺寸结合</h2>
        <div className="demo-content">
          <div style={{ marginBottom: 16 }}>
            <Breadcrumb
              direction="vertical"
              className="sui-breadcrumb-large"
              items={[
                { 
                  title: '首页', 
                  href: '/',
                  icon: <Icon name="Home" />
                },
                { 
                  title: '应用', 
                  href: '/apps',
                  icon: <Icon name="AppStore" />
                },
                { 
                  title: '列表',
                  icon: <Icon name="UnorderedList" />
                },
              ]}
              onClick={handleClick}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Breadcrumb
              direction="vertical"
              items={[
                { 
                  title: '首页', 
                  href: '/',
                  icon: <Icon name="Home" />
                },
                { 
                  title: '应用', 
                  href: '/apps',
                  icon: <Icon name="AppStore" />
                },
                { 
                  title: '列表',
                  icon: <Icon name="UnorderedList" />
                },
              ]}
              onClick={handleClick}
            />
          </div>
          <div>
            <Breadcrumb
              direction="vertical"
              className="sui-breadcrumb-small"
              items={[
                { 
                  title: '首页', 
                  href: '/',
                  icon: <Icon name="Home" />
                },
                { 
                  title: '应用', 
                  href: '/apps',
                  icon: <Icon name="AppStore" />
                },
                { 
                  title: '列表',
                  icon: <Icon name="UnorderedList" />
                },
              ]}
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb, Icon } from 'components';

// 垂直排列 + 大型
<Breadcrumb 
  direction="vertical"
  className="sui-breadcrumb-large" 
  items={[
    { title: '首页', href: '/', icon: <Icon name="Home" /> },
    { title: '应用', href: '/apps', icon: <Icon name="AppStore" /> },
    { title: '列表', icon: <Icon name="UnorderedList" /> },
  ]} 
/>

// 垂直排列 + 默认尺寸
<Breadcrumb 
  direction="vertical"
  items={[
    { title: '首页', href: '/', icon: <Icon name="Home" /> },
    { title: '应用', href: '/apps', icon: <Icon name="AppStore" /> },
    { title: '列表', icon: <Icon name="UnorderedList" /> },
  ]} 
/>

// 垂直排列 + 小型
<Breadcrumb 
  direction="vertical"
  className="sui-breadcrumb-small" 
  items={[
    { title: '首页', href: '/', icon: <Icon name="Home" /> },
    { title: '应用', href: '/apps', icon: <Icon name="AppStore" /> },
    { title: '列表', icon: <Icon name="UnorderedList" /> },
  ]} 
/>`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>紧凑型</h2>
        <div className="demo-content">
          <Breadcrumb
            className="sui-breadcrumb-compact"
            items={[
              { title: '首页', href: '/' },
              { title: '应用中心', href: '/apps' },
              { title: '应用列表' },
            ]}
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb } from 'components';

<Breadcrumb className="sui-breadcrumb-compact" items={items} />`}
          </pre>
        </div>
      </div>

      <div className="demo-section">
        <h2>自定义样式</h2>
        <div className="demo-content">
          <Breadcrumb
            style={{ 
              padding: '8px 16px',
              background: '#f5f5f5',
              borderRadius: '4px'
            }}
            items={[
              { title: '首页', href: '/' },
              { title: '应用中心', href: '/apps' },
              { title: '应用列表' },
            ]}
            onClick={handleClick}
          />
        </div>
        <div className="demo-code">
          <pre>
            {`import { Breadcrumb } from 'components';

<Breadcrumb
  style={{ 
    padding: '8px 16px',
    background: '#f5f5f5',
    borderRadius: '4px'
  }}
  items={items}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDemo; 