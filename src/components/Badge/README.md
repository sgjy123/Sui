# Badge 标记

出现在按钮、图标旁的数字或状态标记。

## 代码演示

### 基础用法

展示新消息数量。

```jsx
import { Badge, Space, Avatar } from 'components';

export default () => (
  <Space size={24}>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100} overflowCount={99}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
```

### 点状标记

以红点的形式标注需要关注的内容。

```jsx
import { Badge, Space, Avatar, Button } from 'components';

export default () => (
  <Space size={24}>
    <Badge dot>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot>
      <Button>按钮</Button>
    </Badge>
  </Space>
);
```

### 状态标记

用于表示状态的小圆点。

```jsx
import { Badge, Space } from 'components';

export default () => (
  <Space direction="vertical">
    <Badge status="success" text="成功" />
    <Badge status="error" text="错误" />
    <Badge status="default" text="默认" />
    <Badge status="processing" text="进行中" />
    <Badge status="warning" text="警告" />
  </Space>
);
```

### 自定义颜色

自定义标记的颜色。

```jsx
import { Badge, Space, Avatar } from 'components';

export default () => (
  <Space size={24}>
    <Badge count={5} color="#52c41a">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#722ed1">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#faad14">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
```

### 自定义位置

自定义标记的位置。

```jsx
import { Badge, Space, Avatar } from 'components';

export default () => (
  <Space size={24}>
    <Badge count={5} offset={[10, 10]}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} offset={[-10, 10]}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字 | number \| string | - |
| dot | 不展示数字，只有一个小红点 | boolean | false |
| text | 状态点的文本 | ReactNode | - |
| color | 自定义小圆点的颜色 | string | - |
| offset | 设置状态点的位置偏移 | [number, number] | - |
| status | 设置 Badge 为状态点 | 'success' \| 'processing' \| 'default' \| 'error' \| 'warning' | - |
| style | 自定义样式 | object | - |
| className | 自定义类名 | string | - | 