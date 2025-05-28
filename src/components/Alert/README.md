# Alert 警告提示

用于页面中展示重要的提示信息，支持多种类型、可关闭、带图标。

## 何时使用
- 需要在页面中展示警告、成功、错误、信息等重要内容时。
- 顶部、表单、卡片等区域的提示。

## 基本用法

```jsx
import Alert from 'components/Alert';

<Alert message="这是一条信息提示" />
```

## 类型

```jsx
<Alert type="info" message="信息提示" />
<Alert type="success" message="成功提示" />
<Alert type="warning" message="警告提示" />
<Alert type="error" message="错误提示" />
```

## 带描述

```jsx
<Alert type="warning" message="警告" description="这是详细的警告描述内容。" />
```

## 可关闭

```jsx
<Alert message="可关闭的提示" closable onClose={() => console.log('关闭了！')} />
```

## 显示/隐藏图标

```jsx
<Alert message="无图标提示" showIcon={false} />
```

## API

| 属性        | 说明               | 类型      | 默认值   |
| ----------- | ------------------ | --------- | -------- |
| type        | 警告类型           | 'info' \| 'success' \| 'warning' \| 'error' | 'info'   |
| message     | 提示内容           | ReactNode | -        |
| description | 辅助描述内容       | ReactNode | -        |
| closable    | 是否可关闭         | boolean   | false    |
| onClose     | 关闭时的回调       | function  | -        |
| showIcon    | 是否显示图标       | boolean   | true     |
| className   | 自定义类名         | string    | -        |
| style       | 自定义样式         | object    | -        |

## 注意事项
- `message` 为必填项。
- `description` 存在时，内容会显示在主信息下方。
- `closable` 为 true 时显示关闭按钮。 