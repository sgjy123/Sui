# Drawer 抽屉

抽屉从屏幕边缘滑出的浮层，可以包含表单或操作等内容。

## 何时使用

抽屉组件用于在屏幕边缘显示额外的内容或操作，通常用于：

- 需要展示更多内容时
- 需要展示表单或操作时
- 需要展示详情时

## 代码演示

### 基本用法

最简单的用法，点击按钮打开抽屉。

```jsx
import { Drawer, Button } from 'sui';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Drawer
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
```

### 不同位置

抽屉可以从四个方向滑出。

```jsx
import { Drawer, Button } from 'sui';

const Demo = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setLeftVisible(true)}>Left</Button>
      <Button onClick={() => setRightVisible(true)}>Right</Button>
      <Button onClick={() => setTopVisible(true)}>Top</Button>
      <Button onClick={() => setBottomVisible(true)}>Bottom</Button>

      <Drawer
        title="Left Drawer"
        placement="left"
        visible={leftVisible}
        onClose={() => setLeftVisible(false)}
      >
        <p>Left drawer content</p>
      </Drawer>

      <Drawer
        title="Right Drawer"
        placement="right"
        visible={rightVisible}
        onClose={() => setRightVisible(false)}
      >
        <p>Right drawer content</p>
      </Drawer>

      <Drawer
        title="Top Drawer"
        placement="top"
        visible={topVisible}
        onClose={() => setTopVisible(false)}
      >
        <p>Top drawer content</p>
      </Drawer>

      <Drawer
        title="Bottom Drawer"
        placement="bottom"
        visible={bottomVisible}
        onClose={() => setBottomVisible(false)}
      >
        <p>Bottom drawer content</p>
      </Drawer>
    </>
  );
};
```

### 自定义宽度

可以自定义抽屉的宽度。

```jsx
import { Drawer, Button } from 'sui';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Drawer
      </Button>
      <Drawer
        title="Custom Width Drawer"
        placement="right"
        width={500}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>This drawer has a custom width of 500px</p>
      </Drawer>
    </>
  );
};
```

### 无遮罩

可以设置不显示遮罩层。

```jsx
import { Drawer, Button } from 'sui';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Drawer without Mask
      </Button>
      <Drawer
        title="No Mask Drawer"
        placement="right"
        mask={false}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>This drawer has no mask</p>
      </Drawer>
    </>
  );
};
```

## API

### Drawer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 抽屉是否可见 | boolean | false |
| title | 抽屉标题 | ReactNode | - |
| placement | 抽屉的方向 | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' |
| width | 抽屉宽度 | number \| string | 456 |
| height | 抽屉高度 | number \| string | 456 |
| closable | 是否显示关闭按钮 | boolean | true |
| mask | 是否显示遮罩 | boolean | true |
| maskClosable | 点击遮罩是否关闭抽屉 | boolean | true |
| onClose | 关闭时触发的回调函数 | () => void | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |

## 注意事项

1. 抽屉组件会阻止页面滚动
2. 建议在抽屉内容较多时设置合适的宽度或高度
3. 可以通过 style 属性自定义抽屉的样式
4. 抽屉的打开和关闭都有平滑的动画效果
5. 点击遮罩层或关闭按钮都会触发关闭动画 