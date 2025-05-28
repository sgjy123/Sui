import React from 'react';
import { Grid } from 'components';
import './style.less';

const { Row, Col } = Grid;

const GridDoc = () => {
  return (
    <div className="grid-doc">
      <h1>Grid 栅格</h1>

      <section>
        <h2>介绍</h2>
        <p>24 栅格系统，用于快速创建响应式布局。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Grid } from 'components';
const { Row, Col } = Grid;`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础栅格</h3>
          <p>从堆叠到水平排列。</p>
          <div className="demo">
            <Row>
              <Col span={24}>
                <div className="grid-content">col-24</div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="grid-content">col-12</div>
              </Col>
              <Col span={12}>
                <div className="grid-content">col-12</div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div className="grid-content">col-8</div>
              </Col>
              <Col span={8}>
                <div className="grid-content">col-8</div>
              </Col>
              <Col span={8}>
                <div className="grid-content">col-8</div>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
            </Row>
          </div>
          <pre className="code">
            {`<Row>
  <Col span={24}>
    <div>col-24</div>
  </Col>
</Row>
<Row>
  <Col span={12}>
    <div>col-12</div>
  </Col>
  <Col span={12}>
    <div>col-12</div>
  </Col>
</Row>
<Row>
  <Col span={8}>
    <div>col-8</div>
  </Col>
  <Col span={8}>
    <div>col-8</div>
  </Col>
  <Col span={8}>
    <div>col-8</div>
  </Col>
</Row>
<Row>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
</Row>`}
          </pre>
        </div>

        <div className="example">
          <h3>区块间隔</h3>
          <p>栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。</p>
          <div className="demo">
            <Row gutter={16}>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">col-6</div>
              </Col>
            </Row>
          </div>
          <pre className="code">
            {`<Row gutter={16}>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
  <Col span={6}>
    <div>col-6</div>
  </Col>
</Row>`}
          </pre>
        </div>

        <div className="example">
          <h3>对齐方式</h3>
          <p>通过设置 Row 的 justify 和 align 属性来调整栅格的对齐方式。</p>
          <div className="demo">
            <Row justify="space-between" style={{ marginBottom: '16px' }}>
              <Col span={6}>
                <div className="grid-content">space-between</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">space-between</div>
              </Col>
            </Row>
            <Row justify="center" align="middle" style={{ height: '100px', background: '#fafafa' }}>
              <Col span={6}>
                <div className="grid-content">center</div>
              </Col>
              <Col span={6}>
                <div className="grid-content">center</div>
              </Col>
            </Row>
          </div>
          <pre className="code">
            {`<Row justify="space-between">
  <Col span={6}>
    <div>space-between</div>
  </Col>
  <Col span={6}>
    <div>space-between</div>
  </Col>
</Row>
<Row justify="center" align="middle" style={{ height: '100px' }}>
  <Col span={6}>
    <div>center</div>
  </Col>
  <Col span={6}>
    <div>center</div>
  </Col>
</Row>`}
          </pre>
        </div>

        <div className="example">
          <h3>栅格排序</h3>
          <p>通过设置 Col 的 order、push、pull 属性来调整栅格的顺序。</p>
          <div className="demo">
            <Row>
              <Col span={6} order={4}>
                <div className="grid-content">1</div>
              </Col>
              <Col span={6} order={3}>
                <div className="grid-content">2</div>
              </Col>
              <Col span={6} order={2}>
                <div className="grid-content">3</div>
              </Col>
              <Col span={6} order={1}>
                <div className="grid-content">4</div>
              </Col>
            </Row>
          </div>
          <pre className="code">
            {`<Row>
  <Col span={6} order={4}>
    <div>1</div>
  </Col>
  <Col span={6} order={3}>
    <div>2</div>
  </Col>
  <Col span={6} order={2}>
    <div>3</div>
  </Col>
  <Col span={6} order={1}>
    <div>4</div>
  </Col>
</Row>`}
          </pre>
        </div>

        <div className="example">
          <h3>响应式布局</h3>
          <p>预设六个响应尺寸：xs sm md lg xl xxl。</p>
          <div className="demo">
            <Row>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="grid-content">响应式</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="grid-content">响应式</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="grid-content">响应式</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="grid-content">响应式</div>
              </Col>
            </Row>
          </div>
          <pre className="code">
            {`<Row>
  <Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    <div>响应式</div>
  </Col>
</Row>`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>Row</h3>
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
              <td>垂直对齐方式</td>
              <td><code>top</code> | <code>middle</code> | <code>bottom</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>gutter</td>
              <td>栅格间隔</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>justify</td>
              <td>水平排列方式</td>
              <td><code>start</code> | <code>end</code> | <code>center</code> | <code>space-around</code> | <code>space-between</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>wrap</td>
              <td>是否自动换行</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>

        <h3>Col</h3>
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
              <td>span</td>
              <td>栅格占位格数</td>
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
              <td><code>{'<576px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sm</td>
              <td><code>{'≥576px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>md</td>
              <td><code>{'≥768px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lg</td>
              <td><code>{'≥992px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>xl</td>
              <td><code>{'≥1200px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>xxl</td>
              <td><code>{'≥1600px'}</code> 响应式栅格</td>
              <td>number | object</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default GridDoc; 