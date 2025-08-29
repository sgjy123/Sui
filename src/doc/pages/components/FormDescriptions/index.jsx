import React from 'react';
import { FormDescriptions, Space } from 'components';
import './style.less';

const FormDescriptionsDoc = () => {
  return (
    <div className="formdescriptions-doc">
      <h1>FormDescriptions 表单描述列表</h1>

      <section>
        <h2>介绍</h2>
        <p>用于在详情页或表单回显中，按列展示只读字段信息。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { FormDescriptions } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <div className="demo">
            <FormDescriptions title="User Info" column={3} bordered>
              <FormDescriptions.Item label="UserName">Zhou Maomao</FormDescriptions.Item>
              <FormDescriptions.Item label="Telephone">1810000000</FormDescriptions.Item>
              <FormDescriptions.Item label="Live">Hangzhou, Zhejiang</FormDescriptions.Item>
              <FormDescriptions.Item label="Remark">empty</FormDescriptions.Item>
              <FormDescriptions.Item label="Address" span={3}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </FormDescriptions.Item>
            </FormDescriptions>
          </div>
          <pre className="code">{`<FormDescriptions title="User Info" column={3} bordered>...</FormDescriptions>`}</pre>
        </div>

        <div className="example">
          <h3>垂直布局（对齐 antd）</h3>
          <div className="demo">
            <FormDescriptions layout="vertical" column={3} bordered>
              <FormDescriptions.Item label="Product">Cloud Database</FormDescriptions.Item>
              <FormDescriptions.Item label="Billing Mode">Prepaid</FormDescriptions.Item>
              <FormDescriptions.Item label="Automatic Renewal">YES</FormDescriptions.Item>
              <FormDescriptions.Item label="Order time">2018-04-24 18:00:00</FormDescriptions.Item>
              <FormDescriptions.Item label="Usage Time">2019-04-24 18:00:00</FormDescriptions.Item>
              <FormDescriptions.Item label="Status" span={3}>Running</FormDescriptions.Item>
            </FormDescriptions>
          </div>
          <pre className="code">{`<FormDescriptions layout="vertical" column={3} bordered>...</FormDescriptions>`}</pre>
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
            <tr><td>title</td><td>标题</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>extra</td><td>右上角附加内容</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>layout</td><td>布局方式（水平/垂直）</td><td>'horizontal' | 'vertical'</td><td>'horizontal'</td></tr>
            <tr><td>bordered</td><td>是否显示边框</td><td>boolean</td><td>false</td></tr>
            <tr><td>column</td><td>列数</td><td>number</td><td>3</td></tr>
            <tr><td>size</td><td>尺寸</td><td>'large' | 'middle' | 'small'</td><td>'middle'</td></tr>
          </tbody>
        </table>

        <h3>FormDescriptions.Item</h3>
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
            <tr><td>label</td><td>标签</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>span</td><td>跨列数（1 ~ column）</td><td>number</td><td>1</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FormDescriptionsDoc;


