import React from 'react';
import { Space, Button } from 'components';
import './style.less';

const SpaceDoc = () => {
  return (
    <div className="space-doc">
      <h1>Space 间距</h1>

      <section>
        <h2>介绍</h2>
        <p>设置组件之间的间距。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Space } from 'Sui';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>相邻组件水平间距。</p>
          <div className="demo">
            <Space>
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Button>按钮1</Button>
  <Button>按钮2</Button>
  <Button>按钮3</Button>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>垂直间距</h3>
          <p>相邻组件垂直间距。</p>
          <div className="demo">
            <Space direction="vertical">
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
          </div>
          <pre className="code">
            {`<Space direction="vertical">
  <Button>按钮1</Button>
  <Button>按钮2</Button>
  <Button>按钮3</Button>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>间距大小</h3>
          <p>预设三种尺寸：小、中、大。</p>
          <div className="demo">
            <Space direction="vertical" size="large">
              <Space size="small">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
              <Space size="middle">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
              <Space size="large">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
            </Space>
          </div>
          <pre className="code">
            {`<Space direction="vertical" size="large">
  <Space size="small">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
  <Space size="middle">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
  <Space size="large">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>对齐方式</h3>
          <p>设置对齐方式。</p>
          <div className="demo">
            <Space direction="vertical" size="large">
              <Space align="start">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
              <Space align="center">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
              <Space align="end">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
            </Space>
          </div>
          <pre className="code">
            {`<Space direction="vertical" size="large">
  <Space align="start">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
  <Space align="center">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
  <Space align="end">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>自动换行</h3>
          <p>自动换行。</p>
          <div className="demo">
            <Space wrap>
              {Array.from({ length: 20 }, (_, i) => (
                <Button key={i}>按钮{i + 1}</Button>
              ))}
            </Space>
          </div>
          <pre className="code">
            {`<Space wrap>
  {Array.from({ length: 20 }, (_, i) => (
    <Button key={i}>按钮{i + 1}</Button>
  ))}
</Space>`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
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
              <td>align</td>
              <td>对齐方式</td>
              <td><code>start</code> | <code>end</code> | <code>center</code> | <code>baseline</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>间距方向</td>
              <td><code>vertical</code> | <code>horizontal</code></td>
              <td><code>horizontal</code></td>
            </tr>
            <tr>
              <td>size</td>
              <td>间距大小</td>
              <td><code>small</code> | <code>middle</code> | <code>large</code> | number</td>
              <td><code>small</code></td>
            </tr>
            <tr>
              <td>split</td>
              <td>设置分隔符</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>wrap</td>
              <td>是否自动换行</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SpaceDoc; 