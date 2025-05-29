# Anchor 锚点

> 用于页面内容区域的锚点导航，支持多级锚点、滚动高亮、容器自定义等。

## 何时使用
- 需要在页面内快速跳转到指定内容区域时。
- 长页面内容导航。
- 需要展示锚点结构和当前阅读进度。

## 基本用法

```jsx
import Anchor from 'components/Anchor';

const items = [
  { href: '#section1', title: 'Section 1' },
  { href: '#section2', title: 'Section 2' },
  { href: '#section3', title: 'Section 3' },
];

<>
  <Anchor items={items} />
  <div id="section1">Section 1 内容</div>
  <div id="section2">Section 2 内容</div>
  <div id="section3">Section 3 内容</div>
</>
```

## 自定义滚动容器

```jsx
const items = [
  { href: '#a1', title: 'A1' },
  { href: '#a2', title: 'A2' },
];
const ref = useRef();

<div ref={ref} style={{ height: 200, overflow: 'auto' }}>
  <div id="a1" style={{ height: 100 }}>A1内容</div>
  <div id="a2" style={{ height: 100 }}>A2内容</div>
</div>
<Anchor items={items} getContainer={() => ref.current} affix={false} />
```

## 多级锚点

```jsx
const items = [
  { href: '#main', title: '主标题', children: [
    { href: '#sub1', title: '子标题1' },
    { href: '#sub2', title: '子标题2' },
  ]},
];
```

## API

| 参数           | 说明                         | 类型                              | 默认值         |
| -------------- | ---------------------------- | --------------------------------- | -------------- |
| items          | 锚点数据                     | array                             | []             |
| offsetTop      | 距离窗口顶部的偏移量         | number                            | 0              |
| bounds         | 锚点区域边界                 | number                            | 5              |
| onClick        | 点击锚点时触发               | (href: string) => void            | -              |
| className      | 自定义类名                   | string                            | -              |
| style          | 自定义样式                   | object                            | -              |
| getContainer   | 指定滚动的容器               | () => HTMLElement                 | () => window   |
| affix          | 是否固定模式                 | boolean                           | true           |
| showInkInFixed | 固定模式下是否显示小圆点     | boolean                           | false          |
| targetOffset   | 锚点滚动偏移量               | number                            | offsetTop      |

### items 结构

```ts
interface AnchorItem {
  href: string; // 对应内容区的 id
  title: ReactNode;
  children?: AnchorItem[];
}
```

## 设计说明
- 支持多级锚点结构，自动高亮当前锚点。
- 支持自定义滚动容器，适配弹窗、局部滚动等场景。
- 支持 affix 固定模式和非固定模式。
- 支持自定义样式和类名。
- 支持自定义滚动偏移量。

