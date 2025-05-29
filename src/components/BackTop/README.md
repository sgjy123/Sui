# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时
- 当用户需要频繁返回顶部查看内容时

## 代码演示

### 基础用法

最简单的用法。

```jsx
import { BackTop } from 'components';

<BackTop />
```

### 仅图标模式

只显示图标的简洁模式。

```jsx
<BackTop iconOnly />
```

### 自定义图标

可以自定义图标和主题。

```jsx
<BackTop
  icon="ToTop"
  iconTheme="filled"
  iconSize={24}
/>
```

### 自定义文本

可以自定义按钮文本。

```jsx
<BackTop text="返回顶部" />
```

### 自定义样式

可以自定义回到顶部按钮的样式。

```jsx
<BackTop
  style={{
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    background: '#f50',
    color: '#fff',
  }}
/>
```

### 自定义内容

可以完全自定义按钮内容。

```jsx
<BackTop>
  <div style={{ padding: '10px', textAlign: 'center' }}>
    <Icon name="ArrowUp" theme="outline" size={24} />
    <div style={{ fontSize: '12px', marginTop: '4px' }}>顶部</div>
  </div>
</BackTop>
```

### 自定义容器

可以指定滚动容器。

```jsx
const scrollContainerRef = useRef(null);

<div ref={scrollContainerRef} style={{ height: '200px', overflow: 'auto' }}>
  <div style={{ height: '1000px' }}>
    {/* 内容 */}
  </div>
  <BackTop target={() => scrollContainerRef.current} />
</div>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visibilityHeight | 滚动高度达到此参数值才显示 BackTop | number | 400 |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
| onClick | 点击按钮的回调函数 | function | - |
| children | 自定义回到顶部按钮的内容 | ReactNode | - |
| text | 按钮文本 | ReactNode | '回到顶部' |
| showIcon | 是否显示图标 | boolean | true |
| iconOnly | 是否只显示图标 | boolean | false |
| icon | 图标名称 | string | 'ToTop' |
| iconTheme | 图标主题 | string | 'filled' |
| iconSize | 图标大小 | number | - |
| target | 指定滚动容器 | () => HTMLElement \| Window | () => window |

## 设计说明

### 样式特点

1. 默认样式
   - 固定定位在右下角
   - 白色背景，圆角边框
   - 带有轻微阴影效果
   - 平滑的显示/隐藏动画
   - 悬停时上浮效果

2. 仅图标模式
   - 圆形按钮
   - 半透明黑色背景
   - 白色图标
   - 悬停时加深背景色

3. 响应式设计
   - 在移动设备上自动隐藏文字
   - 调整按钮位置和大小
   - 保持图标清晰可见

### 交互说明

1. 显示/隐藏
   - 当页面滚动超过 visibilityHeight 时显示
   - 带有淡入动画效果
   - 滚动回顶部时自动隐藏

2. 点击行为
   - 点击时平滑滚动到顶部
   - 支持键盘操作（Enter 或空格键）
   - 可自定义点击回调函数

3. 无障碍支持
   - 支持键盘导航
   - 提供适当的 ARIA 角色
   - 可自定义焦点样式

### 使用建议

1. 位置选择
   - 默认位置适合大多数场景
   - 可根据页面布局调整位置
   - 注意避免遮挡重要内容

2. 样式定制
   - 建议保持按钮大小适中
   - 确保按钮颜色与页面风格协调
   - 图标和文字大小要清晰可辨

3. 性能考虑
   - 合理设置 visibilityHeight
   - 避免频繁更新样式
   - 使用 CSS transform 实现动画 