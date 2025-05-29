import React, { useState } from 'react';
import { Loading, Button, Space } from 'components';
import './style.less';

const LoadingDoc = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="loading-doc">
      <h1>Loading 加载中</h1>

      <section>
        <h2>介绍</h2>
        <p>用于页面和区块的加载中状态。</p>
      </section>

      <section>
        <h2>何时使用</h2>
        <ul>
          <li>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</li>
          <li>当操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</li>
        </ul>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Loading } from 'Sui';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
            <Loading />
          </div>
          <pre className="code">
            {`<Loading />`}
          </pre>
        </div>

        <div className="example">
          <h3>不同尺寸</h3>
          <p>Loading 组件提供三种尺寸：small、default、large。</p>
          <div className="demo">
            <Space>
              <Loading size="small" />
              <Loading size="default" />
              <Loading size="large" />
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Loading size="small" />
  <Loading size="default" />
  <Loading size="large" />
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义文本</h3>
          <p>可以自定义加载文本。</p>
          <div className="demo">
            <Loading text="文本内容加载中..." />
          </div>
          <pre className="code">
            {`<Loading text="文本内容加载中..." />`}
          </pre>
        </div>

        <div className="example">
          <h3>包裹内容</h3>
          <p>可以包裹内容，在加载时显示遮罩。</p>
          <div className="demo">
            <Loading>
              <div style={{ padding: '24px', background: '#f5f5f5' }}>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
              </div>
            </Loading>
          </div>
          <pre className="code">
            {`<Loading>
  <div style={{ padding: '24px', background: '#f5f5f5' }}>
    <p>这是内容</p>
    <p>这是内容</p>
    <p>这是内容</p>
  </div>
</Loading>`}
          </pre>
        </div>

        <div className="example">
          <h3>全屏加载</h3>
          <p>可以设置全屏加载。</p>
          <div className="demo">
            <Button onClick={() => setLoading(!loading)}>
              {loading ? '关闭' : '显示'}全屏加载
            </Button>
            <Loading fullscreen spinning={loading} />
          </div>
          <pre className="code">
            {`const [loading, setLoading] = useState(false);

<Button onClick={() => setLoading(!loading)}>
  {loading ? '关闭' : '显示'}全屏加载
</Button>
<Loading fullscreen spinning={loading} />`}
          </pre>
        </div>

        <div className="example">
          <h3>延迟显示</h3>
          <p>可以设置延迟显示，避免闪烁。</p>
          <div className="demo">
            <Loading delay={500} />
          </div>
          <pre className="code">
            {`<Loading delay={500} />`}
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
              <td>size</td>
              <td>尺寸</td>
              <td>'small' | 'default' | 'large'</td>
              <td>'default'</td>
            </tr>
            <tr>
              <td>text</td>
              <td>加载文本</td>
              <td>ReactNode</td>
              <td>'加载中...'</td>
            </tr>
            <tr>
              <td>spinning</td>
              <td>是否显示加载中</td>
              <td>boolean</td>
              <td>true</td>
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
              <td>children</td>
              <td>子元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>delay</td>
              <td>延迟显示时间（毫秒）</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>fullscreen</td>
              <td>是否全屏显示</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>

        <h3>注意事项</h3>
        <ul>
          <li>`spinning` 为 false 时，将直接渲染 children</li>
          <li>`delay` 属性可以避免加载状态闪烁，建议在加载时间较短时使用</li>
          <li>`fullscreen` 为 true 时，Loading 将覆盖整个页面</li>
          <li>可以通过 `style` 属性自定义颜色、大小等样式</li>
        </ul>
      </section>
    </div>
  );
};

export default LoadingDoc; 