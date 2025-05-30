# Modal 弹出框

用于需要用户处理事务，又不希望跳转页面的场景。

## 何时使用
- 需要用户确认操作时。
- 需要弹出内容展示时。

## 基本用法

```jsx
import Modal from 'components/Modal';

<Modal
  visible={visible}
  title="标题"
  onOk={handleOk}
  onCancel={handleCancel}
>
  弹窗内容
</Modal>
```

## 进阶用法

```jsx
// 带 loading 状态
<Modal
  visible={visible}
  title="提交中"
  confirmLoading={loading}
  onOk={handleOk}
  onCancel={handleCancel}
>
  异步操作时确定按钮 loading。
</Modal>

// 带图标
<Modal
  visible={visible}
  title="警告"
  icon={<Icon name="Warning" style={{ color: '#faad14' }} />}
  onOk={handleOk}
  onCancel={handleCancel}
>
  带有警告图标的弹窗。
</Modal>

// ESC 键关闭、关闭后销毁内容
<Modal
  visible={visible}
  title="可ESC关闭"
  keyboard
  destroyOnClose
  onOk={handleOk}
  onCancel={handleCancel}
>
  按 ESC 键可关闭，关闭后内容销毁。
</Modal>
```

## API

| 参数             | 说明                     | 类型      | 默认值   |
| ---------------- | ------------------------ | --------- | -------- |
| visible          | 是否可见                 | boolean   | -        |
| title            | 标题                     | ReactNode | -        |
| icon             | 标题左侧图标             | ReactNode | -        |
| children         | 内容                     | ReactNode | -        |
| onOk             | 确认回调                 | function  | -        |
| onCancel         | 取消回调                 | function  | -        |
| okText           | 确认按钮文字             | ReactNode | '确定'   |
| cancelText       | 取消按钮文字             | ReactNode | '取消'   |
| footer           | 底部自定义内容           | ReactNode | -        |
| maskClosable     | 点击遮罩可关闭           | boolean   | true     |
| className        | 自定义类名               | string    | -        |
| style            | 自定义样式               | object    | -        |
| width            | 宽度                     | number/string | 520    |
| showClose        | 是否显示右上角关闭按钮    | boolean   | true     |
| keyboard         | 是否支持 ESC 关闭        | boolean   | true     |
| confirmLoading   | 确认按钮 loading 状态    | boolean   | false    |
| destroyOnClose   | 关闭时销毁内容           | boolean   | false    |
| afterClose       | 关闭动画后回调           | function  | -        |
| maskStyle        | 遮罩自定义样式           | object    | -        |
| bodyStyle        | 内容区自定义样式         | object    | -        |
| forceRender      | 强制渲染内容             | boolean   | false    |

## 设计说明
- 支持 ESC 键关闭、右上角关闭按钮、遮罩关闭。
- 支持自定义图标、loading、销毁内容、关闭后回调。
- 支持自定义样式、底部、宽度。
- 支持强制渲染、遮罩/内容区样式。 