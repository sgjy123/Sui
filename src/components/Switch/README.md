# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

```jsx
import { Switch } from 'Sui';

// 基础用法
<Switch defaultChecked />

// 禁用状态
<Switch disabled />

// 加载状态
<Switch loading />

// 不同大小
<Switch size="small" />
<Switch size="middle" />
<Switch size="large" />

// 带文字和图标
<Switch
  checkedChildren="开"
  unCheckedChildren="关"
  defaultChecked
/>

<Switch
  checkedChildren={<Icon name="Check" />}
  unCheckedChildren={<Icon name="Close" />}
  defaultChecked
/>

// 事件处理
<Switch
  defaultChecked
  onChange={(checked, event) => {
    console.log(`switch to ${checked}`);
  }}
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | - |
| checkedChildren | 选中时的内容 | ReactNode | - |
| className | Switch 器类名 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| loading | 加载中的开关 | boolean | false |
| size | 开关大小，可选值：`small` `middle` `large` | string | `middle` |
| style | 自定义样式 | CSSProperties | - |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| onChange | 变化时回调函数 | function(checked: boolean, event: Event) | - | 