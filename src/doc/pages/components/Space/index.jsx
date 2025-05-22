import React from 'react';
import { Space, Button, Divider } from '../../../../components';
import CodeBlock from '../../Doc/CodeBlock';

const SpaceDemo = () => {
  return (
    <div className="space-doc-container">
      <h1>Space 间距</h1>
      <p>设置组件之间的间距。</p>

      <h2>何时使用</h2>
      <p>避免组件紧贴在一起，拉开统一的空间。</p>
      <ul>
        <li>适合行内元素的水平间距。</li>
        <li>可以设置各种水平对齐方式。</li>
      </ul>

      <h2>代码演示</h2>

      <h3>基础用法</h3>
      <p>相邻组件水平间距。</p>
      <div className="demo-container">
        <Space>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Space>
      </div>
      <CodeBlock>
        {`<Space>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>`}
      </CodeBlock>

      <h3>垂直间距</h3>
      <p>相邻组件垂直间距。</p>
      <div className="demo-container">
        <Space direction="vertical">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Space>
      </div>
      <CodeBlock>
        {`<Space direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>`}
      </CodeBlock>

      <h3>间距大小</h3>
      <p>预设三种尺寸：small、middle、large，分别对应 8px、16px、24px，也可以自定义数字大小。</p>
      <div className="demo-container">
        <Space direction="vertical" size="large">
          <Space size="small">
            <Button>small</Button>
            <Button>small</Button>
            <Button>small</Button>
          </Space>
          <Space size="middle">
            <Button>middle</Button>
            <Button>middle</Button>
            <Button>middle</Button>
          </Space>
          <Space size="large">
            <Button>large</Button>
            <Button>large</Button>
            <Button>large</Button>
          </Space>
          <Space size={32}>
            <Button>32px</Button>
            <Button>32px</Button>
            <Button>32px</Button>
          </Space>
        </Space>
      </div>
      <CodeBlock>
        {`<Space direction="vertical" size="large">
  <Space size="small">
    <Button>small</Button>
    <Button>small</Button>
    <Button>small</Button>
  </Space>
  <Space size="middle">
    <Button>middle</Button>
    <Button>middle</Button>
    <Button>middle</Button>
  </Space>
  <Space size="large">
    <Button>large</Button>
    <Button>large</Button>
    <Button>large</Button>
  </Space>
  <Space size={32}>
    <Button>32px</Button>
    <Button>32px</Button>
    <Button>32px</Button>
  </Space>
</Space>`}
      </CodeBlock>

      <h3>对齐方式</h3>
      <p>设置对齐方式。</p>
      <div className="demo-container">
        <Space direction="vertical" size="large">
          <Space align="start">
            <Button>Start</Button>
            <Button>Start</Button>
            <Button>Start</Button>
          </Space>
          <Space align="center">
            <Button>Center</Button>
            <Button>Center</Button>
            <Button>Center</Button>
          </Space>
          <Space align="end">
            <Button>End</Button>
            <Button>End</Button>
            <Button>End</Button>
          </Space>
          <Space align="baseline">
            <Button>Baseline</Button>
            <Button>Baseline</Button>
            <Button>Baseline</Button>
          </Space>
        </Space>
      </div>
      <CodeBlock>
        {`<Space direction="vertical" size="large">
  <Space align="start">
    <Button>Start</Button>
    <Button>Start</Button>
    <Button>Start</Button>
  </Space>
  <Space align="center">
    <Button>Center</Button>
    <Button>Center</Button>
    <Button>Center</Button>
  </Space>
  <Space align="end">
    <Button>End</Button>
    <Button>End</Button>
    <Button>End</Button>
  </Space>
  <Space align="baseline">
    <Button>Baseline</Button>
    <Button>Baseline</Button>
    <Button>Baseline</Button>
  </Space>
</Space>`}
      </CodeBlock>

      <h3>自动换行</h3>
      <p>自动换行。</p>
      <div className="demo-container">
        <Space wrap>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
          <Button>Button 5</Button>
          <Button>Button 6</Button>
          <Button>Button 7</Button>
          <Button>Button 8</Button>
        </Space>
      </div>
      <CodeBlock>
        {`<Space wrap>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
  <Button>Button 4</Button>
  <Button>Button 5</Button>
  <Button>Button 6</Button>
  <Button>Button 7</Button>
  <Button>Button 8</Button>
</Space>`}
      </CodeBlock>

      <h3>分隔符</h3>
      <p>相邻组件分隔符。</p>
      <div className="demo-container">
        <Space split={<Divider type="vertical" />}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Space>
      </div>
      <CodeBlock>
        {`<Space split={<Divider type="vertical" />}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>`}
      </CodeBlock>

      <h2>API</h2>
      <h3>Space</h3>
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
            <td>align</td>
            <td>对齐方式</td>
            <td>'start' | 'end' | 'center' | 'baseline'</td>
            <td>-</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>间距方向</td>
            <td>'horizontal' | 'vertical'</td>
            <td>'horizontal'</td>
          </tr>
          <tr>
            <td>size</td>
            <td>间距大小</td>
            <td>'small' | 'middle' | 'large' | number</td>
            <td>'small'</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default SpaceDemo; 