# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，向上追溯的路径。

## 何时使用

- 当系统拥有超过两级以上的层级结构时
- 当需要告知用户"你在哪里"时
- 当需要向上导航的功能时

## 代码演示

### 基础用法

最简单的用法。

```jsx
import { Breadcrumb } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '应用中心',
    href: '/apps',
  },
  {
    title: '应用列表',
  },
];

ReactDOM.render(
  <Breadcrumb items={items} onClick={(item, index) => console.log('点击了', item, index)} />,
  mountNode,
);
```

### 自定义分隔符

使用自定义分隔符。

```jsx
import { Breadcrumb } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '应用中心',
    href: '/apps',
  },
  {
    title: '应用列表',
  },
];

ReactDOM.render(
  <Breadcrumb items={items} separator=">" />,
  mountNode,
);
```

### 带图标的

可以带图标。

```jsx
import { Breadcrumb, Icon } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
    icon: <Icon name="Home" />,
  },
  {
    title: '应用中心',
    href: '/apps',
    icon: <Icon name="AppStore" />,
  },
  {
    title: '应用列表',
    icon: <Icon name="UnorderedList" />,
  },
];

ReactDOM.render(
  <Breadcrumb items={items} />,
  mountNode,
);
```

### 图标与文字垂直排列

设置 `direction="vertical"` 可使图标与文字垂直排列。

```jsx
import { Breadcrumb, Icon } from 'components';

const items = [
  {
    title: '首页',
    href: '/',
    icon: <Icon name="Home" />,
  },
  {
    title: '应用中心',
    href: '/apps',
    icon: <Icon name="AppStore" />,
  },
  {
    title: '列表',
    icon: <Icon name="UnorderedList" />,
  },
];

ReactDOM.render(
  <Breadcrumb direction="vertical" items={items} />,
  mountNode,
);
```

### 不同尺寸

面包屑支持三种尺寸：小型、默认、大型。

```jsx
import { Breadcrumb } from 'components';

// 大型
<Breadcrumb 
  className="sui-breadcrumb-large" 
  items={items} 
/>

// 默认尺寸
<Breadcrumb items={items} />

// 小型
<Breadcrumb 
  className="sui-breadcrumb-small" 
  items={items} 
/>
```

### 紧凑型

使用紧凑型样式，分隔符间距更小。

```jsx
import { Breadcrumb } from 'components';

<Breadcrumb 
  className="sui-breadcrumb-compact" 
  items={items} 
/>
```

### 自定义样式

可以自定义面包屑的样式。

```jsx
import { Breadcrumb } from 'components';

<Breadcrumb
  style={{ 
    padding: '8px 16px',
    background: '#f5f5f5',
    borderRadius: '4px'
  }}
  items={items}
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 面包屑项数组 | array | - |
| separator | 分隔符 | ReactNode | '/' |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
| onClick | 点击链接时的回调函数 | (item, index) => void | - |
| direction | 排列方向 | 'horizontal' \| 'vertical' | 'horizontal' |

### 预设样式类名

| 类名 | 说明 |
| --- | --- |
| sui-breadcrumb-large | 大型尺寸 |
| sui-breadcrumb-small | 小型尺寸 |
| sui-breadcrumb-compact | 紧凑型样式 |
| sui-breadcrumb-vertical | 垂直排列样式 |
| sui-breadcrumb-item-disabled | 禁用状态 |

### items

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 面包屑项标题 | ReactNode | - |
| href | 面包屑项链接 | string | - |
| icon | 图标 | ReactNode | - | 