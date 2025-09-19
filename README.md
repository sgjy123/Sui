# S-UI React 组件库

一个基于 React 的组件库，提供了丰富的 UI 组件供开发者使用。

## 安装

```bash
npm install @sgjy/s-ui
```

或

```bash
yarn add @sgjy/s-ui
```

## 使用方式

### 方式一：按需引入（推荐）

```jsx
import { Button, Input } from '@sgjy/s-ui';
import '@sgjy/s-ui/dist/style.css';

function App() {
  return (
    <div>
      <Button type="primary">按钮</Button>
      <Input placeholder="请输入内容" />
    </div>
  );
}
```

### 方式二：引入单个组件

```jsx
import Button from '@sgjy/s-ui/components/Button';
import '@sgjy/s-ui/dist/style.css';

function App() {
  return (
    <div>
      <Button type="primary">按钮</Button>
    </div>
  );
}
```

## 构建

如果你想要构建这个项目，可以运行以下命令：

```bash
npm run build
```

## 开发

启动开发服务器：

```bash
npm run dev
```

## 组件列表

- Button 按钮
- Input 输入框
- Form 表单
- Table 表格
- Modal 对话框
- ...以及其他更多组件

## 许可证

MIT