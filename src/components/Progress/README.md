# Progress 进度条

进度条组件，展示操作的当前进度。

A progress bar component to display the current progress of an operation.

## 代码演示 | Examples

### 基本用法 | Basic Usage

```jsx
import Progress from './index';

<Progress percent={30} />
<Progress percent={70} status="exception" />
<Progress percent={100} />
<Progress percent={50} type="circle" />
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| percent | 百分比 | number | 0 |
| status | 状态，可选 normal、success、exception、active | string | - |
| showInfo | 是否显示进度数值 | bool | true |
| size | 进度条尺寸，default/small | string | default |
| successPercent | 成功分段百分比 | number | - |
| strokeColor | 进度条颜色 | string | - |
| trailColor | 轨道颜色 | string | #f5f5f5 |
| strokeWidth | 进度条宽度 | number | 8 |
| width | 圆形进度条直径 | number | 120 |
| type | 类型，line/circle | string | line |
| format | 自定义显示内容 | function(percent) | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - | 