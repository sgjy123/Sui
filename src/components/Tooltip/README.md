# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 当用户鼠标悬停、聚焦或点击一个元素时，需要展示附加信息给用户。
- 当内容过多或空间有限，无法直接展示完整信息时。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | ReactNode \| () => ReactNode | - |
| placement | 气泡框位置 | `top` \| `left` \| `right` \| `bottom` | `top` |
| trigger | 触发行为 | `hover` \| `click` | `hover` |
| color | 背景颜色 | string | - |
| overlayClassName | 卡片类名 | string | - |
| overlayStyle | 卡片样式 | object | - |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| arrow | 是否显示箭头 | boolean | true |
| visible | 用于手动控制浮层显隐 | boolean | - |
| onVisibleChange | 显示隐藏的回调 | (visible) => void | - |
| defaultVisible | 默认是否显隐 | boolean | false |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip | boolean | false |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode) => HTMLElement | () => document.body |