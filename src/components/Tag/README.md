# Tag 标签

用于展示分类、标签或状态信息。

## 组件特性
- 支持多种预设颜色
- 支持自定义颜色
- 可关闭的标签
- 支持图标
- 支持边框样式

## 代码演示

### 基础用法
```jsx
import { Tag } from 'Sui';

<Tag>默认标签</Tag>
<Tag color="success">成功标签</Tag>
<Tag color="processing">进行中标签</Tag>
<Tag color="error">错误标签</Tag>
<Tag color="warning">警告标签</Tag>
```

### 预设颜色
```jsx
<Tag color="magenta">magenta</Tag>
<Tag color="red">red</Tag>
<Tag color="volcano">volcano</Tag>
<Tag color="orange">orange</Tag>
<Tag color="gold">gold</Tag>
<Tag color="lime">lime</Tag>
<Tag color="green">green</Tag>
<Tag color="cyan">cyan</Tag>
<Tag color="blue">blue</Tag>
<Tag color="geekblue">geekblue</Tag>
<Tag color="purple">purple</Tag>
```

### 自定义颜色
```jsx
<Tag color="#f50">#f50</Tag>
<Tag color="#2db7f5">#2db7f5</Tag>
<Tag color="#87d068">#87d068</Tag>
<Tag color="#108ee9">#108ee9</Tag>
```

### 可关闭标签
```jsx
<Tag closable onClose={() => console.log('关闭标签')}>
  可关闭标签
</Tag>
```

### 带图标的标签
```jsx
import { Tag, Icon } from 'Sui';

<Tag icon={<Icon name="CheckOne" theme="filled" size={16} />} color="success">
  成功
</Tag>
<Tag icon={<Icon name="Loading" theme="outline" size={16} />} color="processing">
  处理中
</Tag>
<Tag icon={<Icon name="Close" theme="filled" size={16} />} color="error">
  错误
</Tag>
<Tag icon={<Icon name="Warning" theme="filled" size={16} />} color="warning">
  警告
</Tag>
```

### 无边框标签
```jsx
<Tag bordered={false} color="success">
  无边框标签
</Tag>
```

## API
| 属性      | 说明                | 类型                               | 默认值   |
| --------- | ------------------- | ---------------------------------- | -------- |
| color     | 标签颜色            | string                             | -        |
| closable  | 是否可关闭          | boolean                            | false    |
| onClose   | 关闭时的回调        | (e) => void                        | -        |
| bordered  | 是否有边框          | boolean                            | true     |
| icon      | 设置图标            | ReactNode                          | -        |
| className | 自定义类名          | string                             | -        |
| style     | 自定义样式          | object                             | -        | 