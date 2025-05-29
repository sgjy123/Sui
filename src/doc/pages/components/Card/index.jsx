import React from 'react';
import { Card, Icon, Space } from 'components';
import './style.less';

const CardDoc = () => {
  return (
    <div className="card-doc">
      <h1>Card 卡片</h1>

      <section>
        <h2>介绍</h2>
        <p>卡片容器，用于展示文本、图片、链接等内容。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Card } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>包含标题、内容、操作区域。</p>
          <div className="demo">
            <Card
              title="卡片标题"
              extra={<a href="#">更多</a>}
              style={{ width: 300 }}
            >
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
          </div>
          <pre className="code">
            {`<Card
  title="卡片标题"
  extra={<a href="#">更多</a>}
  style={{ width: 300 }}
>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>`}
          </pre>
        </div>

        <div className="example">
          <h3>无边框</h3>
          <p>在灰色背景上使用无边框的卡片。</p>
          <div className="demo" style={{ background: '#f0f2f5', padding: '24px' }}>
            <Card bordered={false} style={{ width: 300 }}>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
          </div>
          <pre className="code">
            {`<Card bordered={false} style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>`}
          </pre>
        </div>

        <div className="example">
          <h3>简洁卡片</h3>
          <p>只包含内容区域。</p>
          <div className="demo">
            <Card style={{ width: 300 }}>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
          </div>
          <pre className="code">
            {`<Card style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>`}
          </pre>
        </div>

        <div className="example">
          <h3>带封面的卡片</h3>
          <p>使用 cover 属性可以设置卡片封面。</p>
          <div className="demo">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Card.Meta
                title="卡片标题"
                description="卡片描述"
              />
            </Card>
          </div>
          <pre className="code">
            {`<Card
  hoverable
  style={{ width: 240 }}
  cover={
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
  }
>
  <Card.Meta
    title="卡片标题"
    description="卡片描述"
  />
</Card>`}
          </pre>
        </div>

        <div className="example">
          <h3>加载中</h3>
          <p>展示加载状态。</p>
          <div className="demo">
            <Card loading style={{ width: 300 }}>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
          </div>
          <pre className="code">
            {`<Card loading style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>`}
          </pre>
        </div>

        <div className="example">
          <h3>更小尺寸</h3>
          <p>使用 size 属性可以设置卡片尺寸。</p>
          <div className="demo">
            <Space>
              <Card size="small" title="小尺寸卡片" style={{ width: 300 }}>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
              </Card>
              <Card title="默认尺寸卡片" style={{ width: 300 }}>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
              </Card>
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Card size="small" title="小尺寸卡片" style={{ width: 300 }}>
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
  <Card title="默认尺寸卡片" style={{ width: 300 }}>
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>带操作按钮</h3>
          <p>使用 actions 属性可以设置卡片底部的操作按钮。</p>
          <div className="demo">
            <Card
              style={{ width: 300 }}
              actions={[
                <Icon name="Setting" key="setting" />,
                <Icon name="Edit" key="edit" />,
                <Icon name="Delete" key="delete" />,
              ]}
            >
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
          </div>
          <pre className="code">
            {`<Card
  style={{ width: 300 }}
  actions={[
    <Icon name="Setting" key="setting" />,
    <Icon name="Edit" key="edit" />,
    <Icon name="Delete" key="delete" />,
  ]}
>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>`}
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
              <td>title</td>
              <td>卡片标题</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>extra</td>
              <td>卡片右上角的操作区域</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bordered</td>
              <td>是否有边框</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>hoverable</td>
              <td>鼠标移过时可浮起</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>cover</td>
              <td>卡片封面</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>actions</td>
              <td>卡片操作组，位置在卡片底部</td>
              <td>ReactNode[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>卡片尺寸</td>
              <td>'default' | 'small'</td>
              <td>'default'</td>
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
      </section>
    </div>
  );
};

export default CardDoc; 