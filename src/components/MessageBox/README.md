# MessageBox 消息提示框

用于主动向用户反馈重要信息、操作确认等。

## 何时使用
- 需要全局弹出消息、确认、警告、错误等。
- 需要阻断式交互时。

## 基本用法

```jsx
import MessageBox from 'components/MessageBox';

// 信息提示
MessageBox.info({ title: '提示', content: '操作成功！' });

// 确认框
MessageBox.confirm({ title: '确认', content: '确定要删除吗？' }).then(ok => {
  if (ok) { /* 用户点击了确定 */ }
});
```

## API

| 参数        | 说明           | 类型      | 默认值   |
| ----------- | -------------- | --------- | -------- |
| type        | 类型           | 'info' \| 'success' \| 'error' \| 'warning' \| 'confirm' | 'info' |
| title       | 标题           | ReactNode | -        |
| content     | 内容           | ReactNode | -        |
| okText      | 确认按钮文字   | ReactNode | '确定'   |
| cancelText  | 取消按钮文字   | ReactNode | '取消'   |
| showCancel  | 显示取消按钮   | boolean   | false    |
| onOk        | 确认回调       | function  | -        |
| onCancel    | 取消回调       | function  | -        |
| maskClosable| 点击遮罩关闭   | boolean   | false    |
| onClose     | 关闭后回调     | function  | -        |

## 静态方法
- MessageBox.info(opts)
- MessageBox.success(opts)
- MessageBox.error(opts)
- MessageBox.warning(opts)
- MessageBox.confirm(opts)

## 设计说明
- 支持多类型、Promise/回调、遮罩、ESC关闭。
- 支持全局静态方法调用。
- 支持自定义内容、标题、按钮文字、icon。 