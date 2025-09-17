# Form 表单

基于 antd 思想实现的简单表单容器，提供表单数据管理、校验、布局能力。

## 何时使用

- 数据录入，收集并校验用户输入。
- 与 `Input`、`Select` 等控件组合使用。

## 代码演示

```jsx
import { Form, Input, Button } from 'Sui';

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={(values)=>console.log(values)} initialValues={{ username: 'Sui' }}>
      <Form.Item name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}> 
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};
```

## API

### Form

- `form`: 表单实例，由 `Form.useForm()` 创建
- `initialValues`: 初始值对象
- `onFinish(values)`: 校验通过提交回调
- `onFinishFailed(error)`: 校验失败回调
- `onValuesChange(changedValues, allValues, previousValues)`: 字段变更回调
- `layout`: 'horizontal' | 'vertical' | 'inline'
- `size`: 'large' | 'middle' | 'small'
- `labelCol`/`wrapperCol`: 标签/控件布局样式对象
- `labelAlign`: 标签对齐方式 'left' | 'right'
- `requiredMark`: 是否显示必填星号，默认 true
- `disabled`: 是否整体禁用，默认 false
- `scrollToFirstError`: 提交失败滚动到首个错误项
- `colon`: 是否在标签后显示冒号

### Form.Item

- `name`: 字段名
- `label`: 标签
- `rules`: 校验规则数组，支持 `required`/`pattern`/`min`/`max`/`validator`
- `help`: 自定义帮助或错误文案
- `extra`: 额外说明
- `validateTrigger`: 触发校验的事件，默认 `onChange`
- `valuePropName`: 值属性名，默认 `value`
- `getValueFromEvent(e)`: 从事件获取值
- `normalize(value, prevValue, allValues)`: 规范化值
- `noStyle`: 不渲染外层样式容器
- `required`: 显示必填样式
- `tooltip`: 字符串/ReactNode 或对象，显示在标签旁的提示。对象形如：`{ title: ReactNode | string, icon?: ReactNode }`
- `dependencies`: 依赖字段数组，依赖项变化时刷新自身
- `shouldUpdate(prevValues, nextValues)`: 自定义是否刷新（高优先级），返回 true 则刷新
- 其他：支持透传样式和类名

### Form.useForm

返回 `[form]`，包含以下方法：
- `setFieldsValue(values)`
- `getFieldValue(name)` / `getFieldsValue()`
- `resetFields(names?)`
- `validateFields(names?)`
- `submit(event?)`
- `getFieldError(name)` / `isFieldsTouched(names?)`

## 尺寸规范

- large: 高度 40px
- middle: 高度 32px
- small: 高度 24px


