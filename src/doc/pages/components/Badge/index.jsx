import React from 'react';
import { Badge, Space, Avatar, Button } from 'components';
import './style.less';

const BadgeDemo = () => {
  return (
    <div className="badge-doc">
      <h1>Badge 徽标数</h1>
      <section>
        <h2>介绍</h2>
        <p>用于展示新消息数量、状态点等小型标记。</p>
      </section>
      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Badge } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <h3>基础用法</h3>
          <p>展示新消息数量。</p>
          <div className="demo">
            <Space size={24}>
              <Badge count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={0} showZero>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={99}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={100} overflowCount={99}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </div>
          <pre className="code">{`<Badge count={5}>
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={0} showZero>
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={99}>
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={100} overflowCount={99}>
  <Avatar shape="square" size="large" />
</Badge>`}</pre>
        </div>
        <div className="example">
          <h3>点状标记</h3>
          <p>以红点的形式标注需要关注的内容。</p>
          <div className="demo">
            <Space size={24}>
              <Badge dot>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge dot>
                <Button>按钮</Button>
              </Badge>
            </Space>
          </div>
          <pre className="code">{`<Badge dot>
  <Avatar shape="square" size="large" />
</Badge>
<Badge dot>
  <Button>按钮</Button>
</Badge>`}</pre>
        </div>
        <div className="example">
          <h3>状态标记</h3>
          <p>用于表示状态的小圆点。</p>
          <div className="demo">
            <Space direction="vertical">
              <Badge status="success" text="成功" />
              <Badge status="error" text="错误" />
              <Badge status="default" text="默认" />
              <Badge status="processing" text="进行中" />
              <Badge status="warning" text="警告" />
            </Space>
          </div>
          <pre className="code">{`<Badge status="success" text="成功" />
<Badge status="error" text="错误" />
<Badge status="default" text="默认" />
<Badge status="processing" text="进行中" />
<Badge status="warning" text="警告" />`}</pre>
        </div>
        <div className="example">
          <h3>自定义颜色</h3>
          <p>自定义标记的颜色。</p>
          <div className="demo">
            <Space size={24}>
              <Badge count={5} color="#52c41a">
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={5} color="#722ed1">
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={5} color="#faad14">
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </div>
          <pre className="code">{`<Badge count={5} color="#52c41a">
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={5} color="#722ed1">
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={5} color="#faad14">
  <Avatar shape="square" size="large" />
</Badge>`}</pre>
        </div>
        <div className="example">
          <h3>自定义位置</h3>
          <p>自定义标记的位置。</p>
          <div className="demo">
            <Space size={24}>
              <Badge count={5} offset={[10, 10]}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={5} offset={[-10, 10]}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </div>
          <pre className="code">{`<Badge count={5} offset={[10, 10]}>
  <Avatar shape="square" size="large" />
</Badge>
<Badge count={5} offset={[-10, 10]}>
  <Avatar shape="square" size="large" />
</Badge>`}</pre>
        </div>
      </section>
      <section>
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
              <td>count</td>
              <td>展示的数字</td>
              <td>number | string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>dot</td>
              <td>不展示数字，只有一个小红点</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>text</td>
              <td>状态点的文本</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>自定义小圆点的颜色</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>设置状态点的位置偏移</td>
              <td>[number, number]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>status</td>
              <td>设置 Badge 为状态点</td>
              <td>'success' | 'processing' | 'default' | 'error' | 'warning'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义类名</td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BadgeDemo; 