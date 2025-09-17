import React, { useState } from 'react';
import { Form, Input, Select, Button, Radio } from 'components';
import './style.less';

const Option = Select.Option || (({ children, ...rest }) => <option {...rest}>{children}</option>);

const FormDemo = () => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [sizeValue, setSizeValue] = useState('horizontal');
  const [align, setAlign] = useState('right');
  const [requiredMark, setRequiredMark] = useState(true);
  const [globalDisabled, setGlobalDisabled] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
    console.log('Submit: ', values);
  };

  const onFinishFailed = (err) => {
    console.log('Failed: ', err);
  };

  return (
    <div className="sui-doc">
      <h1>Form 表单</h1>

      <section>
        <h2>介绍</h2>
        <p>用于收集、校验和提交数据的表单容器，支持布局、校验、受控/非受控等。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Form } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础使用</h3>
          <p>最基础的表单使用，包含必填校验。</p>
          <div className="demo">
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={{ username: 'Sui' }}>
              <Form.Item
                name="username"
                label="用户名"
                tooltip="用户名用于登录系统"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名" allowClear />
              </Form.Item>
              <Form.Item
                help="请输入至少 6 位密码"
                name="password"
                label="密码"
                rules={[
                  { required: true, message: '请输入密码' },
                  { min: 6, message: '至少 6 位' },
                ]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  提交
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
                  重置
                </Button>
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`const [form] = Form.useForm();
<Form form={form} onFinish={onFinish} initialValues={{ username: 'Sui' }}>
  <Form.Item name="username" label="用户名" tooltip="用户名用于登录系统" rules={[{ required: true, message: '请输入用户名' }]}>
    <Input />
  </Form.Item>
  <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '至少 6 位' }]}>
    <Input.Password />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">提交</Button>
    <Button onClick={() => form.resetFields()}>重置</Button>
  </Form.Item>
</Form>`}</pre>
        </div>

        <div className="example">
          <h3>布局和尺寸</h3>
          <p>支持水平、垂直、行内布局与三种尺寸。</p>

          <div className="demo">
            <div style={{ marginBottom: '10px' }}>
              <Radio.Group
                optionType="button"
                size="middle"
                value={sizeValue}
                onChange={(e) => setSizeValue(e.target.value)}
              >
                <Radio.Button value="horizontal">horizontal</Radio.Button>
                <Radio.Button value="vertical">vertical</Radio.Button>
                <Radio.Button value="inline">inline</Radio.Button>
              </Radio.Group>
            </div>
            <Form layout={sizeValue} size="small">
              <Form.Item name="kw" label="关键词">
                <Input placeholder="搜索" />
              </Form.Item>
              <Form.Item name="type" label="类型">
                <Select style={{ width: 160 }} defaultValue="a">
                  <Option value="a">A</Option>
                  <Option value="b">B</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary">搜索</Button>
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form layout="inline" size="small">
  <Form.Item name="kw" label="关键词"><Input /></Form.Item>
  <Form.Item name="type" label="类型"><Select>...</Select></Form.Item>
  <Form.Item><Button type="primary">搜索</Button></Form.Item>
</Form>`}</pre>
        </div>

        <div className="example">
          <h3>变化回调 onValuesChange</h3>
          <p>实时响应表单值变化。</p>
          <div className="demo">
            <Form onValuesChange={(changed, all) => console.log('changed:', changed, 'all:', all)}>
              <Form.Item name="a" label="字段A">
                <Input placeholder="输入任意值" />
              </Form.Item>
              <Form.Item name="b" label="字段B">
                <Input placeholder="观察控制台" />
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form onValuesChange={(changed, all) => console.log(changed, all)}>
  <Form.Item name="a" label="字段A"><Input /></Form.Item>
  <Form.Item name="b" label="字段B"><Input /></Form.Item>
</Form>`}</pre>
        </div>

        <div className="example">
          <h3>标签对齐与必填标记</h3>
          <p>通过 labelAlign、requiredMark 控制标签与必填星号。</p>
          <div className="demo">
            <div style={{ marginBottom: '10px' }}>
              <Radio.Group optionType="button" size="middle" value={align} onChange={(e) => setAlign(e.target.value)}>
                <Radio.Button value="left">label 左对齐</Radio.Button>
                <Radio.Button value="right">label 右对齐</Radio.Button>
              </Radio.Group>
              <Radio.Group
                optionType="button"
                size="middle"
                style={{ marginLeft: 8 }}
                value={requiredMark}
                onChange={(e) => setRequiredMark(e.target.value)}
              >
                <Radio.Button value={true}>显示必填*</Radio.Button>
                <Radio.Button value={false}>隐藏必填*</Radio.Button>
              </Radio.Group>
            </div>
            <Form layout="horizontal" labelAlign={align} requiredMark={requiredMark}>
              <Form.Item name="x" label="用户名" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="y" label="密码" rules={[{ required: true }, { min: 6 }]}>
                <Input.Password />
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form labelAlign="left" requiredMark={false}>...</Form>`}</pre>
        </div>

        <div className="example">
          <h3>整体禁用 disabled</h3>
          <p>通过 disabled 快速禁用整个表单。</p>
          <div className="demo">
            <div style={{ marginBottom: '10px' }}>
              <Radio.Group
                optionType="button"
                size="middle"
                value={globalDisabled}
                onChange={(e) => setGlobalDisabled(e.target.value)}
              >
                <Radio.Button value={false}>可用</Radio.Button>
                <Radio.Button value={true}>禁用</Radio.Button>
              </Radio.Group>
            </div>
            <Form disabled={globalDisabled} initialValues={{ u: 'Sui' }}>
              <Form.Item name="u" label="用户名">
                <Input />
              </Form.Item>
              <Form.Item name="p" label="密码">
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary">提交</Button>
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form disabled>...</Form>`}</pre>
        </div>

        <div className="example">
          <h3>滚动到首个错误 scrollToFirstError</h3>
          <p>提交失败后自动滚动定位到第一个错误字段。</p>
          <div className="demo">
            <Form scrollToFirstError onFinish={(values) => console.log(values)}>
              <Form.Item
                name="email2"
                label="邮箱"
                rules={[{ required: true }, { pattern: /.+@.+\..+/, message: '邮箱不正确' }]}
              >
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item name="pwd2" label="密码" rules={[{ required: true }, { min: 6 }]}>
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form scrollToFirstError>...</Form>`}</pre>
        </div>

        <div className="example">
          <h3>dependencies 字段依赖</h3>
          <p>当依赖的字段值变化时，当前字段会重新渲染。</p>
          <div className="demo">
            <Form initialValues={{ country: 'china', city: 'beijing' }} form={form1}>
              <Form.Item name="country" label="国家">
                <Select
                  style={{ width: 160 }}
                  options={[
                    { label: '中国', value: 'china' },
                    { label: '美国', value: 'usa' },
                    { label: '日本', value: 'japan' },
                  ]}
                />
              </Form.Item>
                              <Form.Item name="city" label="城市" dependencies={['country']}>
                  {() => {
                    const country = form1.getFieldValue('country');
                  const cityOptions = {
                    china: [
                      { label: '北京', value: 'beijing' },
                      { label: '上海', value: 'shanghai' },
                    ],
                    usa: [
                      { label: '纽约', value: 'newyork' },
                      { label: '洛杉矶', value: 'losangeles' },
                    ],
                    japan: [
                      { label: '东京', value: 'tokyo' },
                      { label: '大阪', value: 'osaka' },
                    ],
                  };
                  return (
                    <Select style={{ width: 160 }} options={cityOptions[country] || []} placeholder="请选择城市" />
                  );
                }}
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form.Item name="city" label="城市" dependencies={['country']}>
  {() => {
    const country = form.getFieldValue('country');
    const cityOptions = {
      china: [{label:'北京',value:'beijing'},{label:'上海',value:'shanghai'}],
      usa: [{label:'纽约',value:'newyork'},{label:'洛杉矶',value:'losangeles'}]
    };
    return <Select options={cityOptions[country] || []} />;
  }}
</Form.Item>`}</pre>
        </div>

        <div className="example">
          <h3>dependencies 动态校验</h3>
          <p>根据依赖字段的值动态设置校验规则。</p>
          <div className="demo">
            <Form initialValues={{ type: 'email', value: '' }} form={form2}>
              <Form.Item name="type" label="类型">
                <Select
                  style={{ width: 160 }}
                  options={[
                    { label: '邮箱', value: 'email' },
                    { label: '手机', value: 'phone' },
                    { label: '身份证', value: 'idcard' },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="value"
                label="值"
                dependencies={['type']}
                rules={[
                  { required: true, message: '请输入值' },
                                      ({ getFieldValue }) => ({
                      validator(_, value) {
                        const type = getFieldValue('type');
                      if (type === 'email' && value && !/.+@.+\..+/.test(value)) {
                        return Promise.reject(new Error('请输入正确的邮箱格式'));
                      }
                      if (type === 'phone' && value && !/^1[3-9]\d{9}$/.test(value)) {
                        return Promise.reject(new Error('请输入正确的手机号格式'));
                      }
                      if (type === 'idcard' && value && !/^\d{17}[\dXx]$/.test(value)) {
                        return Promise.reject(new Error('请输入正确的身份证号格式'));
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input placeholder="根据类型输入对应格式" />
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form.Item 
  name="value" 
  dependencies={['type']}
  rules={[
    { required: true, message: '请输入值' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const type = getFieldValue('type');
        if (type === 'email' && !/.+@.+\..+/.test(value)) {
          return Promise.reject(new Error('邮箱格式不正确'));
        }
        return Promise.resolve();
      },
    }),
  ]}
>
  <Input />
</Form.Item>`}</pre>
        </div>

        <div className="example">
          <h3>shouldUpdate 条件渲染</h3>
          <p>使用 shouldUpdate 实现更复杂的条件渲染逻辑。</p>
          <div className="demo">
            <Form initialValues={{ type: 'a', count: 0 }} form={form}>
              <Form.Item name="type" label="类型">
                <Select
                  style={{ width: 160 }}
                  options={[
                    { label: 'A', value: 'a' },
                    { label: 'B', value: 'b' },
                  ]}
                />
              </Form.Item>
              <Form.Item name="count" label="计数器">
                <Input placeholder="输入数字" />
              </Form.Item>
              <Form.Item shouldUpdate={(prev, next) => prev.type !== next.type}>
                {() => {
                  const allValues = form.getFieldsValue();
                  const currentType = allValues.type;
                  const currentCount = allValues.count;
                  return (
                    <div
                      style={{
                        color: '#1890ff',
                        fontSize: '12px',
                        padding: '8px',
                        background: '#f0f0f0',
                        borderRadius: '4px',
                      }}
                    >
                      当前类型：{currentType}，计数器：{currentCount}
                    </div>
                  );
                }}
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`<Form.Item shouldUpdate={(prev, next) => prev.type !== next.type}>
  {() => <div>当前类型：{form.getFieldsValue().type}</div>}
</Form.Item>`}</pre>
        </div>

        <div className="example">
          <h3>自定义校验</h3>
          <p>通过 `validator` 编写自定义校验逻辑。</p>
          <div className="demo">
            <Form>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { pattern: /.+@.+\..+/, message: '邮箱格式不正确' },
                ]}
              >
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
                name="age"
                label="年龄"
                rules={[
                  {
                    validator: ({ value }) => {
                      return new Promise((resolve, reject) => {
                        if (!value) return reject(new Error('请输入年龄'));
                        const n = Number(value);
                        if (Number.isNaN(n) || n < 1) reject(new Error('请输入正确的年龄'));
                        else resolve();
                      });
                    },
                  },
                ]}
              >
                <Input placeholder="请输入年龄" />
              </Form.Item>
            </Form>
          </div>
          <pre className="code">{`rules={[{ validator: ({ value }) => value ? Promise.resolve() : Promise.reject(new Error('必填')) }]}`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>Form</h3>
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
              <td>form</td>
              <td>表单实例</td>
              <td>FormInstance</td>
              <td>-</td>
            </tr>
            <tr>
              <td>initialValues</td>
              <td>初始值</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onFinish</td>
              <td>提交成功回调</td>
              <td>(values)=&gt;void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onFinishFailed</td>
              <td>提交失败回调</td>
              <td>(error)=&gt;void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>layout</td>
              <td>布局</td>
              <td>'horizontal'|'vertical'|'inline'</td>
              <td>'horizontal'</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸</td>
              <td>'large'|'middle'|'small'</td>
              <td>'middle'</td>
            </tr>
          </tbody>
        </table>

        <h3>Form.Item</h3>
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
              <td>name</td>
              <td>字段名</td>
              <td>string | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>label</td>
              <td>标签</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rules</td>
              <td>校验规则</td>
              <td>Rule[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>help</td>
              <td>帮助或错误文案</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>extra</td>
              <td>额外说明</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>validateTrigger</td>
              <td>触发校验事件</td>
              <td>string</td>
              <td>'onChange'</td>
            </tr>
            <tr>
              <td>valuePropName</td>
              <td>值属性名</td>
              <td>string</td>
              <td>'value'</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FormDemo;
