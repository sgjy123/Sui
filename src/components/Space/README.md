# Space 间距组件

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 引入

```jsx
import Space from '../components/Space';
```

## 代码演示

### 基础用法

相邻组件水平间距。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';

ReactDOM.render(
  <Space>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Space>,
  mountNode,
);
```

### 垂直间距

相邻组件垂直间距。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';

ReactDOM.render(
  <Space direction="vertical">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Space>,
  mountNode,
);
```

### 间距大小

预设三种尺寸：small、middle、large，分别对应 8px、16px、24px，也可以自定义数字大小。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';

ReactDOM.render(
  <Space direction="vertical" size="large">
    <Space size="small">
      <Button>small</Button>
      <Button>small</Button>
      <Button>small</Button>
    </Space>
    <Space size="middle">
      <Button>middle</Button>
      <Button>middle</Button>
      <Button>middle</Button>
    </Space>
    <Space size="large">
      <Button>large</Button>
      <Button>large</Button>
      <Button>large</Button>
    </Space>
    <Space size={32}>
      <Button>32px</Button>
      <Button>32px</Button>
      <Button>32px</Button>
    </Space>
  </Space>,
  mountNode,
);
```

### 对齐方式

设置对齐方式。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';

ReactDOM.render(
  <Space direction="vertical" size="large">
    <Space align="start">
      <Button>Start</Button>
      <Button>Start</Button>
      <Button>Start</Button>
    </Space>
    <Space align="center">
      <Button>Center</Button>
      <Button>Center</Button>
      <Button>Center</Button>
    </Space>
    <Space align="end">
      <Button>End</Button>
      <Button>End</Button>
      <Button>End</Button>
    </Space>
    <Space align="baseline">
      <Button>Baseline</Button>
      <Button>Baseline</Button>
      <Button>Baseline</Button>
    </Space>
  </Space>,
  mountNode,
);
```

### 自动换行

自动换行。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';

ReactDOM.render(
  <Space wrap>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
    <Button>Button 7</Button>
    <Button>Button 8</Button>
  </Space>,
  mountNode,
);
```

### 分隔符

相邻组件分隔符。

```jsx
import Space from '../components/Space';
import Button from '../components/Button';
import Divider from '../components/Divider';

ReactDOM.render(
  <Space split={<Divider type="vertical" />}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Space>,
  mountNode,
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| align | 对齐方式 | `'start'` \| `'end'` \| `'center'` \| `'baseline'` | - |
| direction | 间距方向 | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| size | 间距大小 | `'small'` \| `'middle'` \| `'large'` \| `number` | `'small'` |
| split | 设置分隔符 | `ReactNode` | - |
| wrap | 是否自动换行 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - | 