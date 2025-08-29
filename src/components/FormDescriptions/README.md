# FormDescriptions 表单描述列表

用来成组展示只读字段，支持列数/布局/边框/尺寸等配置；实现方式对齐 antd Descriptions（基于 table，支持跨列）。

## 引入

```js
import { FormDescriptions } from 'Sui';
```

## 代码演示

- 基础用法：

```jsx
<FormDescriptions title="User Info" column={3} bordered>
  <FormDescriptions.Item label="UserName">Zhou Maomao</FormDescriptions.Item>
  <FormDescriptions.Item label="Telephone">1810000000</FormDescriptions.Item>
  <FormDescriptions.Item label="Live">Hangzhou, Zhejiang</FormDescriptions.Item>
  <FormDescriptions.Item label="Remark">empty</FormDescriptions.Item>
  <FormDescriptions.Item label="Address" span={3}>
    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
  </FormDescriptions.Item>
  </FormDescriptions>
```

- 垂直布局：

```jsx
<FormDescriptions layout="vertical" column={3} bordered>
  <FormDescriptions.Item label="Product">Cloud Database</FormDescriptions.Item>
  <FormDescriptions.Item label="Billing Mode">Prepaid</FormDescriptions.Item>
  <FormDescriptions.Item label="Automatic Renewal">YES</FormDescriptions.Item>
  <FormDescriptions.Item label="Order time">2018-04-24 18:00:00</FormDescriptions.Item>
  <FormDescriptions.Item label="Usage Time">2019-04-24 18:00:00</FormDescriptions.Item>
  <FormDescriptions.Item label="Status" span={3}>Running</FormDescriptions.Item>
</FormDescriptions>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | ReactNode | - |
| extra | 右上角附加内容 | ReactNode | - |
| layout | 布局方式（水平/垂直） | 'horizontal' \| 'vertical' | 'horizontal' |
| bordered | 是否显示边框 | boolean | false |
| column | 列数 | number | 3 |
| size | 尺寸 | 'large' \| 'middle' \| 'small' | 'middle' |

### FormDescriptions.Item

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签 | ReactNode | - |
| span | 跨列数（1 ~ column） | number | 1 |


