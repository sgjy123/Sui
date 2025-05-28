import React from 'react';
import Alert from 'components/Alert';
import './style.less';

const AlertDoc = () => {
  return (
    <div className="alert-doc">
      <h1>Alert 警告提示</h1>

      <section>
        <h2>介绍</h2>
        <p>用于页面中展示重要的提示信息，支持多种类型、可关闭、带图标。</p>
      </section>

      <section>
        <h2>何时使用</h2>
        <ul>
          <li>需要在页面中展示警告、成功、错误、信息等重要内容时。</li>
          <li>顶部、表单、卡片等区域的提示。</li>
        </ul>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，展示一条信息提示。</p>
          <div className="demo">
            <Alert message="这是一条信息提示" />
          </div>
          <pre className="code">
            {`<Alert message="这是一条信息提示" />`}
          </pre>
        </div>

        <div className="example">
          <h3>不同类型</h3>
          <p>Alert 组件提供四种预设类型：info、success、warning、error。</p>
          <div className="demo">
            <Alert type="info" message="这是一条信息提示" />
            <Alert type="success" message="这是一条成功提示" />
            <Alert type="warning" message="这是一条警告提示" />
            <Alert type="error" message="这是一条错误提示" />
          </div>
          <pre className="code">
            {`<Alert type="info" message="这是一条信息提示" />
<Alert type="success" message="这是一条成功提示" />
<Alert type="warning" message="这是一条警告提示" />
<Alert type="error" message="这是一条错误提示" />`}
          </pre>
        </div>

        <div className="example">
          <h3>带描述</h3>
          <p>通过 description 属性添加辅助描述内容。</p>
          <div className="demo">
            <Alert
              type="warning"
              message="系统维护通知"
              description="系统将于2024年3月15日凌晨2:00-4:00进行例行维护，期间服务可能暂时不可用，请提前做好相关安排。"
            />
          </div>
          <pre className="code">
            {`<Alert
  type="warning"
  message="系统维护通知"
  description="系统将于2024年3月15日凌晨2:00-4:00进行例行维护，期间服务可能暂时不可用，请提前做好相关安排。"
/>`}
          </pre>
        </div>

        <div className="example">
          <h3>可关闭</h3>
          <p>通过 closable 属性设置是否可关闭，onClose 回调会在关闭时触发。</p>
          <div className="demo">
            <Alert
              type="info"
              message="新功能上线通知"
              description="我们刚刚发布了新版本，新增了多项功能，点击查看详情。"
              closable
              onClose={() => console.log('通知已关闭')}
            />
          </div>
          <pre className="code">
            {`<Alert
  type="info"
  message="新功能上线通知"
  description="我们刚刚发布了新版本，新增了多项功能，点击查看详情。"
  closable
  onClose={() => console.log('通知已关闭')}
/>`}
          </pre>
        </div>

        <div className="example">
          <h3>显示/隐藏图标</h3>
          <p>通过 showIcon 属性设置是否显示图标。</p>
          <div className="demo">
            <Alert
              type="success"
              message="操作成功"
              description="您的订单已成功提交，订单号：202403150001"
              showIcon={false}
            />
          </div>
          <pre className="code">
            {`<Alert
  type="success"
  message="操作成功"
  description="您的订单已成功提交，订单号：202403150001"
  showIcon={false}
/>`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义样式</h3>
          <p>通过 className 和 style 属性自定义样式。</p>
          <div className="demo">
            <Alert
              type="error"
              message="操作失败"
              description="请检查网络连接后重试"
              style={{ 
                marginTop: '20px',
                backgroundColor: '#fff2f0',
                borderColor: '#ffccc7'
              }}
            />
          </div>
          <pre className="code">
            {`<Alert
  type="error"
  message="操作失败"
  description="请检查网络连接后重试"
  style={{ 
    marginTop: '20px',
    backgroundColor: '#fff2f0',
    borderColor: '#ffccc7'
  }}
/>`}
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
              <td>type</td>
              <td>警告类型</td>
              <td>'info' \| 'success' \| 'warning' \| 'error'</td>
              <td>'info'</td>
            </tr>
            <tr>
              <td>message</td>
              <td>提示内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>description</td>
              <td>辅助描述内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否可关闭</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时的回调</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showIcon</td>
              <td>是否显示图标</td>
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
              <td>object</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>注意事项</h2>
        <ul>
          <li>message 为必填项。</li>
          <li>description 存在时，内容会显示在主信息下方。</li>
          <li>closable 为 true 时显示关闭按钮。</li>
          <li>可以通过 className 和 style 属性自定义样式。</li>
        </ul>
      </section>
    </div>
  );
};

export default AlertDoc; 