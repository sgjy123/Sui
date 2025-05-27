# Empty 空状态

用于展示数据为空、无权限、异常等状态。

## 组件特性
- 支持多种状态（empty、404、401、403、500、permission、search、network）
- 可自定义描述、图片和操作按钮
- 支持添加额外内容区域
- 默认展示 empty.png

## 代码演示

### 基础用法
```jsx
import Empty from '../../components/Empty';

<Empty />
```

### 不同状态
```jsx
<Empty status="404" description="页面未找到" />
<Empty status="500" description="服务器错误" />
<Empty status="permission" description="无权限访问" />
```

### 自定义图片
```jsx
<Empty 
  image="https://example.com/custom-image.png"
  description="自定义图片"
/>
```

### 自定义图片大小
```jsx
<Empty 
  imageStyle={{ width: '80px' }}
  description="调整图片大小"
/>
```

### 添加操作按钮
```jsx
import { Button } from 'antd';

<Empty
  status="404"
  description="页面未找到"
  actions={[
    <Button type="primary" key="back" onClick={() => window.history.back()}>
      返回上页
    </Button>,
    <Button key="home" onClick={() => window.location.href = '/'}>
      回到首页
    </Button>
  ]}
/>
```

### 添加额外内容
```jsx
<Empty description="没有任何数据">
  <Button type="primary">创建新数据</Button>
</Empty>
```

## API
| 属性        | 说明                | 类型                               | 默认值   |
| ----------- | ------------------- | ---------------------------------- | -------- |
| status      | 状态类型            | string                             | 'empty'  |
| description | 自定义描述内容      | ReactNode                          | -        |
| style       | 自定义样式          | object                             | -        |
| className   | 自定义类名          | string                             | -        |
| image       | 自定义图片地址      | string                             | -        |
| imageStyle  | 图片样式            | object                             | -        |
| actions     | 自定义操作按钮      | ReactNode \| ReactNode[]           | -        |
| children    | 额外内容            | ReactNode                          | -        | 