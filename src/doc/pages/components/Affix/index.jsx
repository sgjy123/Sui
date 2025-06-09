import React from 'react';
import { Affix, Button } from 'components';
import './style.less';

const AffixDoc = () => {
  return (
    <div className="affix-doc">
      <h1>Affix 固钉</h1>

      <section>
        <h2>介绍</h2>
        <p>将页面元素固定在可视区域。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Affix } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，固定在距离顶部 20px 的位置。</p>
          <div className="demo" style={{ height: '200px', overflow: 'auto' }}>
            <div style={{ height: '1000px', padding: '20px' }}>
              <Affix offsetTop={20} zIndex={1001}>
                <Button type="primary">固定在顶部 20px 处</Button>
              </Affix>
            </div>
          </div>
          <pre className="code">
            {`<Affix offsetTop={20} zIndex={1001}>
  <Button type="primary">固定在顶部 20px 处</Button>
</Affix>`}
          </pre>
        </div>

        <div className="example">
          <h3>固定在底部</h3>
          <p>固定在距离底部 20px 的位置。</p>
          <div className="demo" style={{ height: '200px', overflow: 'auto' }}>
            <div style={{ height: '1000px', padding: '20px' }}>
              <Affix offsetBottom={20}>
                <Button type="primary">固定在底部 20px 处</Button>
              </Affix>
            </div>
          </div>
          <pre className="code">
            {`<Affix offsetBottom={20}>
  <Button type="primary">固定在底部 20px 处</Button>
</Affix>`}
          </pre>
        </div>

        <div className="example">
          <h3>状态变化回调</h3>
          <p>可以监听固钉状态的变化。</p>
          <div className="demo" style={{ height: '200px', overflow: 'auto' }}>
            <div style={{ height: '1000px', padding: '20px' }}>
              <Affix offsetTop={100} onChange={(affixed) => console.log('固钉状态:', affixed)}>
                <Button type="primary">滚动时查看控制台输出</Button>
              </Affix>
            </div>
          </div>
          <pre className="code">
            {`<Affix offsetTop={100} onChange={(affixed) => console.log('固钉状态:', affixed)}>
  <Button type="primary">滚动时查看控制台输出</Button>
</Affix>`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义容器</h3>
          <p>可以指定固钉的容器。</p>
          <div className="demo">
            <div id="custom-container" style={{ height: '300px', overflow: 'auto', border: '1px solid #d9d9d9' }}>
              <div style={{ height: '1000px', padding: '20px' }}>
                <Affix target={() => document.getElementById('custom-container')} offsetTop={50}>
                  <Button type="primary">在自定义容器中固定</Button>
                </Affix>
              </div>
            </div>
          </div>
          <pre className="code">
            {`<div id="custom-container" style={{ height: '300px', overflow: 'auto' }}>
  <div style={{ height: '1000px', padding: '20px' }}>
    <Affix target={() => document.getElementById('custom-container')} offsetTop={50}>
      <Button type="primary">在自定义容器中固定</Button>
    </Affix>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>offsetTop</td>
              <td>距离窗口顶部达到指定偏移量后触发</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>offsetBottom</td>
              <td>距离窗口底部达到指定偏移量后触发</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>target</td>
              <td>设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>
              <td>() =&gt; HTMLElement</td>
              <td>window</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>固定状态改变时触发的回调函数</td>
              <td>(affixed: boolean) =&gt; void</td>
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
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>zIndex</td>
              <td>固钉的层级</td>
              <td>number</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>注意事项</h2>
        <ul>
          <li>offsetTop 和 offsetBottom 不能同时设置</li>
          <li>当使用自定义容器时，需要确保容器有正确的定位属性（relative、absolute、fixed）</li>
          <li>固钉元素会保持其原始宽度，不会随容器宽度变化而改变</li>
        </ul>
      </section>
    </div>
  );
};

export default AffixDoc;
