import React from 'react';
import { Breadcrumb, Icon } from 'components';
import './style.less';

const BreadcrumbDoc = () => {
  const handleClick = (item, index) => {
    console.log('Clicked item:', item, 'at index:', index);
  };

  return (
    <div className="breadcrumb-doc">
      <h1>Breadcrumb 面包屑</h1>

      <section>
        <h2>介绍</h2>
        <p>显示当前页面在系统层级结构中的位置，向上返回的路径。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Breadcrumb } from 'components';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
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
          <pre className="code">
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

        <div className="example">
          <h3>自定义分隔符</h3>
          <p>使用 separator 属性自定义分隔符。</p>
          <div className="demo">
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
          <pre className="code">
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

        <div className="example">
          <h3>带图标</h3>
          <p>在面包屑中使用图标。</p>
          <div className="demo">
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
          <pre className="code">
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

        <div className="example">
          <h3>图标与文字垂直排列</h3>
          <p>使用 direction 属性设置垂直排列。</p>
          <div className="demo">
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
          <pre className="code">
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

        <div className="example">
          <h3>不同尺寸</h3>
          <p>使用 className 设置不同尺寸。</p>
          <div className="demo">
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
          <pre className="code">
            {`import { Breadcrumb } from 'components';

// 大型
<Breadcrumb className="sui-breadcrumb-large" items={items} />

// 默认尺寸
<Breadcrumb items={items} />

// 小型
<Breadcrumb className="sui-breadcrumb-small" items={items} />`}
          </pre>
        </div>

        <div className="example">
          <h3>垂直排列与尺寸结合</h3>
          <p>同时使用 direction 和 className 属性。</p>
          <div className="demo">
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
          <pre className="code">
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

        <div className="example">
          <h3>紧凑型</h3>
          <p>使用 className 设置紧凑型样式。</p>
          <div className="demo">
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
          <pre className="code">
            {`import { Breadcrumb } from 'components';

<Breadcrumb className="sui-breadcrumb-compact" items={items} />`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义样式</h3>
          <p>使用 style 属性自定义样式。</p>
          <div className="demo">
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
          <pre className="code">
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
      </section>

      <section>
        <h2>API</h2>
        <h3>Breadcrumb</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>items</td>
              <td>面包屑数据</td>
              <td>BreadcrumbItem[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>separator</td>
              <td>自定义分隔符</td>
              <td>ReactNode</td>
              <td>/</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>排列方向</td>
              <td>'horizontal' | 'vertical'</td>
              <td>'horizontal'</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>点击事件回调</td>
              <td>{`(item: BreadcrumbItem, index: number) => void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>BreadcrumbItem</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>面包屑项标题</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>href</td>
              <td>链接的目标地址</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BreadcrumbDoc; 