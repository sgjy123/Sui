# Avatar 头像

用来代表用户或事物，支持图片、文字、图标三种类型。

## 代码演示

### 基础用法

头像的基础用法。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
  </Space>
);
```

### 不同大小

头像有三种尺寸：small、default、large，也可以通过 size 属性直接设置大小。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar size="small">S</Avatar>
    <Avatar size="default">D</Avatar>
    <Avatar size="large">L</Avatar>
    <Avatar size={64}>64</Avatar>
  </Space>
);
```

### 不同形状

头像有两种形状：circle、square。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar shape="circle">C</Avatar>
    <Avatar shape="square">S</Avatar>
  </Space>
);
```

### 图片头像

使用图片作为头像。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
    <Avatar src="https://joeschmoe.io/api/v1/random" shape="square" />
  </Space>
);
```

### 文字头像

使用文字作为头像，会自动提取首字母。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar>User</Avatar>
    <Avatar>John Doe</Avatar>
    <Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>
  </Space>
);
```

### 图标头像

使用图标作为头像。

```jsx
import { Avatar, Space } from 'components';

export default () => (
  <Space>
    <Avatar icon="User" />
    <Avatar icon="Star" style={{ backgroundColor: '#52c41a' }} />
    <Avatar icon="Setting" style={{ backgroundColor: '#722ed1' }} />
  </Space>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片头像的资源地址 | string | - |
| alt | 图片头像无法显示时的替代文本 | string | - |
| size | 头像大小 | number \| 'small' \| 'default' \| 'large' | default |
| shape | 头像形状 | 'circle' \| 'square' | circle |
| icon | 设置头像的图标类型 | string | - |
| style | 自定义样式 | object | - |
| className | 自定义类名 | string | - | 