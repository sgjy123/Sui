# Message 全局提示

全局展示操作反馈信息。Message 组件会在页面顶部居中显示，并自动消失，是一种不打断用户操作的轻量级提示方式。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
- 适用于系统级消息提示，如操作结果、系统通知等。

## 代码演示

### 基础用法

最简单的用法，展示一条消息提示。

```jsx
import { message } from 'components';

message.info('这是一条普通提示');
```

### 不同类型

Message 组件提供四种预设类型：success、error、warning、loading，分别用于展示不同场景的反馈信息。

```jsx
import { message } from 'components';

message.success('这是一条成功提示');
message.error('这是一条错误提示');
message.warning('这是一条警告提示');
message.loading('这是一条加载提示');
```

### 自定义时长

可以通过 duration 参数自定义显示时长，单位为毫秒。默认时长为 3000ms。

```jsx
import { message } from 'components';

message.info('这条提示会显示 5 秒', 5000);
```

### 手动关闭

可以通过返回的 close 方法手动关闭提示。当 duration 设置为 0 时，消息不会自动关闭。

```jsx
import { message } from 'components';

const msg = message.loading('这条提示不会自动关闭', 0);
setTimeout(() => msg.close(), 3000);
```

## API

Message 组件提供以下方法：

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| message.info | 显示普通提示 | (content: ReactNode, duration?: number) | MessageInstance |
| message.success | 显示成功提示 | (content: ReactNode, duration?: number) | MessageInstance |
| message.error | 显示错误提示 | (content: ReactNode, duration?: number) | MessageInstance |
| message.warning | 显示警告提示 | (content: ReactNode, duration?: number) | MessageInstance |
| message.loading | 显示加载提示 | (content: ReactNode, duration?: number) | MessageInstance |

### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位毫秒。设为 0 时不自动关闭 | number | 3000 |

### MessageInstance

| 方法 | 说明 |
| --- | --- |
| close | 手动关闭提示 |

## 注意事项

1. Message 组件会自动在页面顶部居中显示，不需要额外的容器。
2. 多个消息会按顺序从上到下显示。
3. 每条消息默认显示 3 秒后自动消失。
4. 可以通过返回的 close 方法手动关闭消息。
5. 加载类型的消息会显示旋转的加载图标。 