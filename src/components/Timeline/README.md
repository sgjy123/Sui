# Timeline 时间轴

垂直展示的时间流信息，可用于展示一系列的信息内容。

## 引入

```jsx
import Timeline from '../components/Timeline';
```

## 代码演示

### 基本用法

基础的时间轴。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline>
    <Timeline.Item>创建服务器 2023-01-01</Timeline.Item>
    <Timeline.Item>初始化数据库 2023-01-02</Timeline.Item>
    <Timeline.Item>部署应用程序 2023-01-03</Timeline.Item>
    <Timeline.Item>系统上线 2023-01-04</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### 不同颜色

时间轴点可以设置不同的颜色，用于区分不同类型的事件。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline>
    <Timeline.Item color="green">创建服务器 2023-01-01</Timeline.Item>
    <Timeline.Item color="blue">初始化数据库 2023-01-02</Timeline.Item>
    <Timeline.Item color="red">部署应用程序 2023-01-03</Timeline.Item>
    <Timeline.Item color="gray">系统上线 2023-01-04</Timeline.Item>
    <Timeline.Item color="#722ed1">自定义颜色 2023-01-05</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### 最后一个节点

通过 `pending` 属性可以设置最后一个节点为幽灵节点，表示时间轴未完成。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline pending="系统升级中...">
    <Timeline.Item>创建服务器 2023-01-01</Timeline.Item>
    <Timeline.Item>初始化数据库 2023-01-02</Timeline.Item>
    <Timeline.Item>部署应用程序 2023-01-03</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### 交替展现

内容在时间轴两侧交替出现。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline mode="alternate">
    <Timeline.Item>创建服务器 2023-01-01</Timeline.Item>
    <Timeline.Item>初始化数据库 2023-01-02</Timeline.Item>
    <Timeline.Item>部署应用程序 2023-01-03</Timeline.Item>
    <Timeline.Item>系统上线 2023-01-04</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### 自定义时间轴点

可以设置为图标或其他自定义元素。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline>
    <Timeline.Item dot={<Icon type="Clock" />}>创建服务器 2023-01-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="Database" />}>初始化数据库 2023-01-02</Timeline.Item>
    <Timeline.Item dot={<Icon type="Cloud" />}>部署应用程序 2023-01-03</Timeline.Item>
    <Timeline.Item dot={<Icon type="CheckCircle" />}>系统上线 2023-01-04</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### 标签

使用 `label` 标签单独展示时间。

```jsx
import Timeline from '../components/Timeline';

ReactDOM.render(
  <Timeline>
    <Timeline.Item label="2023-01-01">创建服务器</Timeline.Item>
    <Timeline.Item label="2023-01-02">初始化数据库</Timeline.Item>
    <Timeline.Item label="2023-01-03">部署应用程序</Timeline.Item>
    <Timeline.Item label="2023-01-04">系统上线</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

## API

### Timeline

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| mode | 时间轴的展示方式 | `left` \| `alternate` \| `right` | `left` |
| pending | 指定最后一个幽灵节点内容 | `boolean` \| `ReactNode` | `false` |
| pendingDot | 指定幽灵节点的图标 | `ReactNode` | `<span className="sui-timeline-item-pending-dot" />` |
| reverse | 是否倒序排列 | `boolean` | `false` |
| className | 额外的 CSS 类 | `string` | - |
| style | 额外的样式 | `CSSProperties` | - |

### Timeline.Item

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| color | 指定圆圈颜色，可选 `blue`、`red`、`green`、`gray`，或自定义的色值 | `string` | `blue` |
| dot | 自定义时间轴点 | `ReactNode` | - |
| position | 指定节点位置，仅在 `mode` 为 `left` 或 `right` 时有效 | `left` \| `right` | - |
| label | 设置标签 | `ReactNode` | - |
| tailStyle | 自定义轴线样式，特别是当自定义圆点样式时防止轴线位置错乱 | `CSSProperties` | `{}` |
| className | 额外的 CSS 类 | `string` | - |
| style | 额外的样式 | `CSSProperties` | - |