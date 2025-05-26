import React from 'react';
import { Grid } from '../../../../components';
import CodeBlock from '../../Doc/CodeBlock';

const GridDemo = () => {
  return (
    <div className="grid-doc-container">
      <h1>Grid 栅格</h1>
      <p>栅格系统是一种基于行（row）和列（col）的布局系统，用于快速创建响应式布局。我们采用了 24 栅格系统，将区域进行 24 等分，可以灵活地组合出各种布局。</p>

      <h2>何时使用</h2>
      <p>栅格系统用于页面布局，可以快速创建响应式的页面结构。</p>
      <ul>
        <li>需要创建响应式布局时。</li>
        <li>需要创建基于行列的页面结构时。</li>
        <li>需要灵活控制元素排列顺序时。</li>
        <li>需要创建复杂的表单布局时。</li>
        <li>需要创建卡片网格布局时。</li>
      </ul>

      <h2>代码演示</h2>

      <h3>基础用法</h3>
      <p>使用 Row 和 Col 组件创建基础的栅格布局。栅格系统基于 24 列，每个 Col 的 span 属性表示占据的列数。</p>
      <div className="demo-container">
        <Grid.Row>
          <Grid.Col span={24}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>24</div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col span={12}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>12</div>
          </Grid.Col>
          <Grid.Col span={12}>
            <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>12</div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col span={8}>
            <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>8</div>
          </Grid.Col>
          <Grid.Col span={8}>
            <div style={{ background: '#b0b0b0', padding: '20px', textAlign: 'center' }}>8</div>
          </Grid.Col>
          <Grid.Col span={8}>
            <div style={{ background: '#a0a0a0', padding: '20px', textAlign: 'center' }}>8</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row>
  <Grid.Col span={24}>
    <div>24</div>
  </Grid.Col>
</Grid.Row>
<Grid.Row>
  <Grid.Col span={12}>
    <div>12</div>
  </Grid.Col>
  <Grid.Col span={12}>
    <div>12</div>
  </Grid.Col>
</Grid.Row>
<Grid.Row>
  <Grid.Col span={8}>
    <div>8</div>
  </Grid.Col>
  <Grid.Col span={8}>
    <div>8</div>
  </Grid.Col>
  <Grid.Col span={8}>
    <div>8</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h3>栅格间隔</h3>
      <p>通过设置 Row 的 gutter 属性来调整栅格之间的间隔。gutter 的值表示栅格之间的间距，单位为像素。</p>
      <div className="demo-container">
        <Grid.Row gutter={16}>
          <Grid.Col span={6}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row gutter={16}>
  <Grid.Col span={6}>
    <div>6</div>
  </Grid.Col>
  <Grid.Col span={6}>
    <div>6</div>
  </Grid.Col>
  <Grid.Col span={6}>
    <div>6</div>
  </Grid.Col>
  <Grid.Col span={6}>
    <div>6</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h3>对齐方式</h3>
      <p>通过设置 Row 的 justify 和 align 属性来调整栅格的对齐方式。justify 控制水平对齐，align 控制垂直对齐。</p>
      <div className="demo-container">
        <Grid.Row justify="space-between" style={{ marginBottom: '16px' }}>
          <Grid.Col span={6}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>space-between</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>space-between</div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row justify="center" align="middle" style={{ height: '100px', background: '#fafafa' }}>
          <Grid.Col span={6}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>center</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>center</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row justify="space-between">
  <Grid.Col span={6}>
    <div>space-between</div>
  </Grid.Col>
  <Grid.Col span={6}>
    <div>space-between</div>
  </Grid.Col>
</Grid.Row>

<Grid.Row justify="center" align="middle">
  <Grid.Col span={6}>
    <div>center</div>
  </Grid.Col>
  <Grid.Col span={6}>
    <div>center</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h3>响应式布局</h3>
      <p>通过设置不同断点的 span 值来创建响应式布局。在不同屏幕尺寸下，栅格会自动调整布局。</p>
      <div className="demo-container">
        <Grid.Row>
          <Grid.Col xs={24} sm={12} md={8} lg={6}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>响应式</div>
          </Grid.Col>
          <Grid.Col xs={24} sm={12} md={8} lg={6}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>响应式</div>
          </Grid.Col>
          <Grid.Col xs={24} sm={12} md={8} lg={6}>
            <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>响应式</div>
          </Grid.Col>
          <Grid.Col xs={24} sm={12} md={8} lg={6}>
            <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>响应式</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row>
  <Grid.Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Grid.Col>
  <Grid.Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Grid.Col>
  <Grid.Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Grid.Col>
  <Grid.Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h3>栅格排序</h3>
      <p>通过设置 Col 的 order、push、pull 属性来调整栅格的顺序。order 控制显示顺序，push 和 pull 控制栅格的移动。</p>
      <div className="demo-container">
        <Grid.Row>
          <Grid.Col span={6} order={4}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>1</div>
          </Grid.Col>
          <Grid.Col span={6} order={3}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>2</div>
          </Grid.Col>
          <Grid.Col span={6} order={2}>
            <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>3</div>
          </Grid.Col>
          <Grid.Col span={6} order={1}>
            <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>4</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row>
  <Grid.Col span={6} order={4}>
    <div>1</div>
  </Grid.Col>
  <Grid.Col span={6} order={3}>
    <div>2</div>
  </Grid.Col>
  <Grid.Col span={6} order={2}>
    <div>3</div>
  </Grid.Col>
  <Grid.Col span={6} order={1}>
    <div>4</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h3>栅格偏移</h3>
      <p>通过设置 Col 的 offset 属性来调整栅格的偏移量。offset 的值表示栅格左侧的间隔格数。</p>
      <div className="demo-container">
        <Grid.Row>
          <Grid.Col span={8}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>8</div>
          </Grid.Col>
          <Grid.Col span={8} offset={8}>
            <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>8</div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col span={6} offset={6}>
            <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
          <Grid.Col span={6} offset={6}>
            <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>6</div>
          </Grid.Col>
        </Grid.Row>
      </div>
      <CodeBlock>
        {`<Grid.Row>
  <Grid.Col span={8}>
    <div>8</div>
  </Grid.Col>
  <Grid.Col span={8} offset={8}>
    <div>8</div>
  </Grid.Col>
</Grid.Row>
<Grid.Row>
  <Grid.Col span={6} offset={6}>
    <div>6</div>
  </Grid.Col>
  <Grid.Col span={6} offset={6}>
    <div>6</div>
  </Grid.Col>
</Grid.Row>`}
      </CodeBlock>

      <h2>API</h2>
      <h3>Row</h3>
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
            <td>gutter</td>
            <td>栅格间隔，单位像素</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>justify</td>
            <td>水平排列方式</td>
            <td>'start' | 'end' | 'center' | 'space-around' | 'space-between'</td>
            <td>-</td>
          </tr>
          <tr>
            <td>align</td>
            <td>垂直对齐方式</td>
            <td>'top' | 'middle' | 'bottom'</td>
            <td>-</td>
          </tr>
          <tr>
            <td>wrap</td>
            <td>是否自动换行</td>
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
        </tbody>
      </table>

      <h3>Col</h3>
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
            <td>span</td>
            <td>栅格占据的列数，总数为 24</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>栅格左侧的间隔格数</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>order</td>
            <td>栅格顺序</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>push</td>
            <td>栅格向右移动格数</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>pull</td>
            <td>栅格向左移动格数</td>
            <td>number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>xs</td>
            <td>超小屏幕下的列数 (&lt;576px)</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>sm</td>
            <td>小屏幕下的列数 (≥576px)</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>md</td>
            <td>中等屏幕下的列数 (≥768px)</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>lg</td>
            <td>大屏幕下的列数 (≥992px)</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>xl</td>
            <td>超大屏幕下的列数 (≥1200px)</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>xxl</td>
            <td>超超大屏幕下的列数 (≥1600px)</td>
            <td>number</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default GridDemo; 