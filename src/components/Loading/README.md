# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
- 当操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

## 代码演示

### 基础用法

最简单的用法。

```jsx
import { Loading } from 'Sui';

<Loading />
```

### 不同尺寸

Loading 组件提供三种尺寸：small、default、large。

```jsx
import { Loading, Space } from 'Sui';

<Space>
  <Loading size="small" />
  <Loading size="default" />
  <Loading size="large" />
</Space>
```

### 自定义文本

可以自定义加载文本。

```jsx
import { Loading } from 'Sui';

<Loading text="文本内容加载中..." />
```

### 包裹内容

可以包裹内容，在加载时显示遮罩。

```jsx
import { Loading } from 'Sui';

<Loading>
  <div style={{ padding: '24px', background: '#f5f5f5' }}>
    <p>这是内容</p>
    <p>这是内容</p>
    <p>这是内容</p>
  </div>
</Loading>
```

### 全屏加载

可以设置全屏加载。

```jsx
import { Loading, Button } from 'Sui';
import { useState } from 'react';

const Demo = () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Button onClick={() => setLoading(!loading)}>
        {loading ? '关闭' : '显示'}全屏加载
      </Button>
      <Loading fullscreen spinning={loading} />
    </>
  );
};
```

### 延迟显示

可以设置延迟显示，避免闪烁。

```jsx
import { Loading } from 'Sui';

<Loading delay={500} />
```

## API

### Loading

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | 'small' \| 'default' \| 'large' | 'default' |
| text | 加载文本 | ReactNode | '加载中...' |
| spinning | 是否显示加载中 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
| children | 子元素 | ReactNode | - |
| delay | 延迟显示时间（毫秒） | number | 0 |
| fullscreen | 是否全屏显示 | boolean | false |

### 注意事项

- `spinning` 为 false 时，将直接渲染 children
- `delay` 属性可以避免加载状态闪烁，建议在加载时间较短时使用
- `fullscreen` 为 true 时，Loading 将覆盖整个页面
- 可以通过 `style` 属性自定义颜色、大小等样式

## 设计规范

### 尺寸

Loading 组件提供三种预设尺寸：

- small: 24px
- default: 32px
- large: 40px

### 颜色

- 图标颜色：使用主题色 `@primary-color`（默认：#1890ff）
- 文本颜色：使用次要文本色 `@text-color-secondary`（默认：rgba(0, 0, 0, 0.45)）
- 遮罩背景色：rgba(255, 255, 255, 0.9)

### 动画

Loading 图标使用无限旋转动画，动画时长为 1 秒，线性变化。

### 布局

- 当直接使用时，Loading 图标和文本垂直居中对齐
- 当包裹内容时，Loading 遮罩层会覆盖整个内容区域，图标和文本在遮罩层中居中显示
- 全屏模式下，Loading 会覆盖整个视口，并居中显示 