# Button 按钮组件

按钮用于开始一个即时操作，标记了一个（或封装一组）操作命令。

## 引入

```jsx
import Button from '../components/Button';
```

## 代码演示

### 按钮类型

按钮有五种类型：默认按钮、主要按钮、虚线按钮、文本按钮和链接按钮。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="text">文本按钮</Button>
    <Button type="link">链接按钮</Button>
  </>,
  mountNode,
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button size="large">大按钮</Button>
    <Button size="middle">中按钮</Button>
    <Button size="small">小按钮</Button>
  </>,
  mountNode,
);
```

### 禁用状态

按钮的禁用状态。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button disabled>默认按钮(禁用)</Button>
    <Button type="primary" disabled>主要按钮(禁用)</Button>
  </>,
  mountNode,
);
```

### 加载状态

添加 `loading` 属性即可让按钮处于加载状态。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button loading>加载中</Button>
    <Button type="primary" loading>加载中</Button>
  </>,
  mountNode,
);
```

### 图标按钮

当需要在 Button 内嵌入图标时，可以设置 `icon` 属性。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button icon="Plus">添加</Button>
    <Button icon="Delete" type="primary">删除</Button>
    <Button icon="Download" iconPosition="end">下载</Button>
  </>,
  mountNode,
);
```

### 按钮形状

按钮可以设置不同的形状。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button shape="default">默认按钮</Button>
    <Button shape="circle" icon="Plus" />
    <Button shape="round" type="primary">圆角按钮</Button>
  </>,
  mountNode,
);
```

### 波纹效果

可以控制按钮点击时是否显示波纹效果。

```jsx
import Button from '../components/Button';

ReactDOM.render(
  <>
    <Button rippleEffect={true}>有波纹效果</Button>
    <Button rippleEffect={false}>无波纹效果</Button>
  </>,
  mountNode,
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 设置按钮类型 | `default` \| `primary` \| `dashed` \| `text` \| `link` | `default` |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| disabled | 按钮失效状态 | `boolean` | `false` |
| loading | 设置按钮加载状态 | `boolean` | `false` |
| icon | 设置按钮的图标组件 | `string` | - |
| iconTheme | 设置图标的主题 | `outline` \| `filled` | `outline` |
| iconPosition | 设置图标位置 | `start` \| `end` | `start` |
| ghost | 幽灵属性，使按钮背景透明 | `boolean` | `false` |
| danger | 设置危险按钮 | `boolean` | `false` |
| block | 将按钮宽度调整为其父宽度的选项 | `boolean` | `false` |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |
| rippleEffect | 是否启用点击波纹效果 | `boolean` | `true` |
| onClick | 点击按钮时的回调 | `(event) => void` | - |