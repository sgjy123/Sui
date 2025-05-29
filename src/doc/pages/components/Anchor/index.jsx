import React, { useRef } from 'react';
import {Anchor} from 'components';
import './style.less';

const AnchorDemo = () => {
  const scrollContainerRef = useRef(null);

  const items = [
    {
      href: '#basic',
      title: '基础用法',
    },
    {
      href: '#static',
      title: '静态位置',
    },
    {
      href: '#custom',
      title: '自定义样式',
      children: [
        {
          href: '#custom-style',
          title: '自定义样式',
        },
        {
          href: '#custom-container',
          title: '自定义容器',
        },
      ],
    },
  ];

  const itemsCustom = [
    { href: '#section1', title: 'Section 1' },
    { href: '#section2', title: 'Section 2' },
    { href: '#section3', title: 'Section 3' },
    { href: '#section4', title: 'Section 4' },
    { href: '#section5', title: 'Section 5' },
  ];

  return (
    <div className="anchor-demo">
      <h1>Anchor 锚点</h1>
      <p>用于跳转到页面指定位置。</p>

      <h2>何时使用</h2>
      <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>

      <h2>代码演示</h2>

      <div className="demo-section">
        <h3 id="basic">基础用法</h3>
        <p>最简单的用法。</p>
        <div className="demo-content">
          <Anchor items={items}  />
        </div>
      </div>

      <div className="demo-section">
        <h3 id="static">静态位置</h3>
        <p>不固定，随页面滚动。</p>
        <div className="demo-content">
          <Anchor items={items} affix={false} />
        </div>
      </div>

      <div className="demo-section">
        <h3 id="custom">自定义样式</h3>
        <p>可以自定义样式。</p>
        <div className="demo-content">
          <Anchor
            items={items}
            style={{ background: '#f5f5f5', padding: '10px' }}
            affix={false}
          />
        </div>
      </div>

      <div className="demo-section">
        <h3 id="custom-container">自定义容器</h3>
        <p>可以指定滚动的容器。</p>
        <div className="demo-content">
          <div
            ref={scrollContainerRef}
            style={{
              height: '200px',
              overflow: 'auto',
              border: '1px solid #f0f0f0',
              padding: '20px',
            }}
          >
            <div id="section1" style={{ height: 100 }}>Section 1 内容</div>
            <div id="section2" style={{ height: 100 }}>Section 2 内容</div>
            <div id="section3" style={{ height: 100 }}>Section 3 内容</div>
            <div id="section4" style={{ height: 100 }}>Section 4 内容</div>
            <div id="section5" style={{ height: 100 }}>Section 5 内容</div>
            <div id="section6" style={{ height: 100 }}>Section 6 内容</div>
            <div id="section7" style={{ height: 100 }}>Section 7 内容</div>
            <div id="section8" style={{ height: 100 }}>Section 8 内容</div>
            <div id="section9" style={{ height: 100 }}>Section 9 内容</div>
            <div id="section10" style={{ height: 100 }}>Section 10 内容</div>
          </div>
          <Anchor
            affix={false}
            items={itemsCustom}
            getContainer={() => scrollContainerRef.current}
          />
        </div>
      </div>

      <h2>API</h2>
      <table className="api-table">
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
            <td>锚点数据</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>offsetTop</td>
            <td>距离窗口顶部达到指定偏移量后触发</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>bounds</td>
            <td>锚点区域边界</td>
            <td>number</td>
            <td>5</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>点击锚点时触发</td>
            <td>{'(href: string) => void'}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>className</td>
            <td>自定义类名</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>style</td>
            <td>自定义样式</td>
            <td>object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>getContainer</td>
            <td>指定滚动的容器</td>
            <td>{'() => HTMLElement'}</td>
            <td>{'() => window'}</td>
          </tr>
          <tr>
            <td>affix</td>
            <td>固定模式</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showInkInFixed</td>
            <td>固定模式下是否显示小圆点</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>targetOffset</td>
            <td>锚点滚动偏移量</td>
            <td>number</td>
            <td>offsetTop</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnchorDemo; 