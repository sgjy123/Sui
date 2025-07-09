# InputNumber 计数器

## 介绍
用于数字输入，支持加减按钮。

## 基本用法
```jsx
<InputNumber />
```

## API
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | 当前值（受控） | number | - |
| defaultValue | 初始值 | number | 0 |
| min | 最小值 | number | -Infinity |
| max | 最大值 | number | Infinity |
| step | 步长 | number | 1 |
| disabled | 是否禁用 | boolean | false |
| size | 尺寸（large/middle/small） | string | middle |
| onChange | 值变化回调 | function(value) | - |
| readOnly | 只读 | boolean | false |
| precision | 小数位数 | number | - | 