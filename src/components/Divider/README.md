# Divider 分割线组件

分割线是一个呈线形的轻量组件，用于分隔内容区域，创建视觉上的分组或层次感。

## 引入

```jsx
import Divider from '../components/Divider';
```

## 代码演示

### 水平分割线

默认为水平分割线，可以在中间加入文字。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <p>这是一段文字...</p>
    <Divider />
    <p>这是一段文字...</p>
    <Divider>文本</Divider>
    <p>这是一段文字...</p>
  </>,
  mountNode,
);
```

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <span>文本</span>
    <Divider type="vertical" />
    <span>文本</span>
    <Divider type="vertical" />
    <span>文本</span>
  </>,
  mountNode,
);
```

### 标题位置

修改分割线中文字的位置。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <Divider orientation="left">左侧文字</Divider>
    <p>这是一段文字...</p>
    <Divider orientation="center">居中文字</Divider>
    <p>这是一段文字...</p>
    <Divider orientation="right">右侧文字</Divider>
    <p>这是一段文字...</p>
  </>,
  mountNode,
);
```

### 自定义文字间距

使用 `orientationMargin` 指定标题和最近 `left/right` 边框之间的距离，百分比或像素值。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <Divider orientation="left" orientationMargin="0px">左侧无间距</Divider>
    <p>这是一段文字...</p>
    <Divider orientation="right" orientationMargin="50px">右侧间距50px</Divider>
    <p>这是一段文字...</p>
  </>,
  mountNode,
);
```

### 虚线

使用 `dashed` 可以设置为虚线。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <p>这是一段文字...</p>
    <Divider dashed />
    <p>这是一段文字...</p>
  </>,
  mountNode,
);
```

### 简约风格

设置 `plain` 可以使分割线文字使用更轻量的样式。

```jsx
import Divider from '../components/Divider';

ReactDOM.render(
  <>
    <p>这是一段文字...</p>
    <Divider plain>文本</Divider>
    <p>这是一段文字...</p>
    <Divider orientation="left" plain>左侧文字</Divider>
    <p>这是一段文字...</p>
  </>,
  mountNode,
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |
| orientation | 分割线标题的位置 | `left` \| `center` \| `right` | `center` |
| orientationMargin | 标题和最近 `left/right` 边框之间的距离，百分比或像素值 | `string` \| `number` | - |
| dashed | 是否虚线 | `boolean` | `false` |
| plain | 文字是否显示为普通正文样式 | `boolean` | `false` |
| className | 分割线样式类 | `string` | - |
| style | 分割线样式对象 | `object` | - |
| children | 嵌套的标题 | `ReactNode` | - |