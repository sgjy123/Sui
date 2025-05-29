# Card 卡片

卡片容器，用于展示文本、图片、链接等内容。

## 何时使用

- 需要展示一个包含标题、内容、操作等信息的容器时
- 需要展示一个包含图片、描述等信息的卡片时
- 需要展示一个可交互的卡片时

## 代码演示

### 基础用法

包含标题、内容、操作区域。

```jsx
import { Card } from 'Sui';

<Card
  title="卡片标题"
  extra={<a href="#">更多</a>}
  style={{ width: 300 }}
>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>
```

### 无边框

在灰色背景上使用无边框的卡片。

```jsx
<Card bordered={false} style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>
```

### 简洁卡片

只包含内容区域。

```jsx
<Card style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>
```

### 带封面的卡片

使用 cover 属性可以设置卡片封面。

```jsx
<Card
  hoverable
  style={{ width: 240 }}
  cover={
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
  }
>
  <Card.Meta
    title="卡片标题"
    description="卡片描述"
  />
</Card>
```

### 加载中

展示加载状态。

```jsx
<Card loading style={{ width: 300 }}>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>
```

### 更小尺寸

使用 size 属性可以设置卡片尺寸。

```jsx
<Space>
  <Card size="small" title="小尺寸卡片" style={{ width: 300 }}>
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
  <Card title="默认尺寸卡片" style={{ width: 300 }}>
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</Space>
```

### 带操作按钮

使用 actions 属性可以设置卡片底部的操作按钮。

```jsx
import { Card, Icon } from 'Sui';

<Card
  style={{ width: 300 }}
  actions={[
    <Icon name="Setting" key="setting" />,
    <Icon name="Edit" key="edit" />,
    <Icon name="Delete" key="delete" />,
  ]}
>
  <p>卡片内容</p>
  <p>卡片内容</p>
  <p>卡片内容</p>
</Card>
```

## API

### Card

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | ReactNode | - |
| extra | 卡片右上角的操作区域 | ReactNode | - |
| bordered | 是否有边框 | boolean | true |
| hoverable | 鼠标移过时可浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| cover | 卡片封面 | ReactNode | - |
| actions | 卡片操作组，位置在卡片底部 | ReactNode[] | - |
| size | 卡片尺寸 | 'default' \| 'small' | 'default' |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |

### Card.Meta

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | ReactNode | - |
| description | 描述内容 | ReactNode | - |
| avatar | 头像/图标 | ReactNode | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |

## 注意事项

- `Card.Meta` 组件用于展示卡片的主要内容，通常包含标题、描述和头像等信息
- 当 `loading` 为 true 时，卡片内容会被替换为加载占位符
- `hoverable` 属性会使卡片在鼠标悬停时显示阴影效果
- `actions` 属性接收一个 ReactNode 数组，用于在卡片底部显示操作按钮
- `size` 属性可以设置卡片的内边距和字体大小
- `cover` 属性可以设置卡片的封面图片，图片会自动适应卡片宽度 