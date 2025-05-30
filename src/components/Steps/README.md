# Steps 步骤条

> 用于展示任务的处理进度，常用于流程、引导等场景。

## 何时使用
- 展示任务/流程的进度。
- 引导用户按照步骤完成任务。

## 基本用法

```jsx
import Steps from 'components/Steps';

const steps = [
  { title: '步骤一', description: '描述信息1' },
  { title: '步骤二', description: '描述信息2' },
  { title: '步骤三', description: '描述信息3' },
];

<Steps steps={steps} current={1} />
```

## 点状和垂直用法

```jsx
// 点状步骤条
<Steps steps={steps} current={1} progressDot />

// 垂直步骤条
<Steps steps={steps} current={1} direction="vertical" />

// 垂直点状步骤条
<Steps steps={steps} current={1} direction="vertical" progressDot />
```

## API

| 参数        | 说明               | 类型     | 默认值         |
| ----------- | ------------------ | -------- | -------------- |
| steps       | 步骤数据           | array    | -              |
| current     | 当前步骤索引       | number   | 0              |
| direction   | 步骤条方向         | 'horizontal' \| 'vertical' | 'horizontal' |
| size        | 步骤条大小         | 'default' \| 'small' \| 'large' | 'default' |
| status      | 当前步骤状态       | 'wait' \| 'process' \| 'finish' \| 'error' | 'process' |
| progressDot | 点状步骤条         | boolean  | false          |
| className   | 自定义类名         | string   | -              |
| style       | 自定义样式         | object   | -              |
| onChange    | 步骤切换回调       | (current: number) => void | - |

### steps 结构

```ts
interface Step {
  title: ReactNode;        // 步骤标题
  description?: ReactNode; // 步骤描述
  icon?: ReactNode;        // 步骤图标
  status?: 'wait' | 'process' | 'finish' | 'error'; // 状态
}
```

## 设计说明
- 支持横向、垂直、点状步骤条。
- 支持自定义状态、图标、描述。
- 支持自定义样式和类名。
- 支持步骤点击切换。
