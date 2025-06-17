# PageHeader 页头

通用页头组件，常用于页面顶部，展示标题、副标题、返回按钮和右侧操作区。

A universal page header component, usually used at the top of a page, showing title, subtitle, back button and extra actions.

## 代码演示 | Examples

```jsx
import PageHeader from './index';

<PageHeader
  title="页面标题"
  subTitle="这是副标题"
  onBack={() => window.history.back()}
  extra={<button>操作</button>}
/>
```

## API

| 属性      | 说明             | 类型         | 默认值 |
|---------|----------------|------------|-------|
| title   | 标题            | node       | 必填   |
| subTitle| 副标题           | node       | -     |
| onBack  | 返回按钮点击事件   | function   | -     |
| extra   | 右侧内容区        | node       | -     |
| className | 自定义类名      | string     | -     |
| style   | 自定义样式        | object     | -     | 