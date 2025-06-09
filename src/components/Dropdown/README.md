# Dropdown 下拉菜单组件

向下弹出的操作菜单。

## 何时使用
- 当页面上的操作命令过多时，可以用下拉菜单收纳。
- 点击或移入触发元素，弹出菜单进行选择。

## 基本用法

```jsx
import Dropdown from './Dropdown';
import Menu from '../Menu';
import Button from '../Button';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
    <Menu.Item key="4" danger>Danger item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu}>
  <Button>Hover me</Button>
</Dropdown>
```

## 带箭头

```jsx
<Dropdown overlay={menu} arrow>
  <Button>Hover me</Button>
</Dropdown>
```

## 触发方式

```jsx
<Dropdown overlay={menu} trigger="click">
  <Button>Click me</Button>
</Dropdown>

<Dropdown overlay={menu} trigger={["hover", "click"]}>
  <Button>Hover or Click me</Button>
</Dropdown>
```

## 不同位置

```jsx
<Dropdown overlay={menu} placement="bottomLeft">
  <Button>bottomLeft</Button>
</Dropdown>
<Dropdown overlay={menu} placement="bottomCenter">
  <Button>bottomCenter</Button>
</Dropdown>
<Dropdown overlay={menu} placement="bottomRight">
  <Button>bottomRight</Button>
</Dropdown>
<Dropdown overlay={menu} placement="topLeft">
  <Button>topLeft</Button>
</Dropdown>
<Dropdown overlay={menu} placement="topCenter">
  <Button>topCenter</Button>
</Dropdown>
<Dropdown overlay={menu} placement="topRight">
  <Button>topRight</Button>
</Dropdown>
```

## API

### Dropdown
| 参数            | 说明                       | 类型                                             | 默认值         |
|-----------------|----------------------------|--------------------------------------------------|----------------|
| overlay         | 菜单内容                   | ReactNode                                        | -              |
| trigger         | 触发下拉的行为             | 'hover' \| 'click' \| Array<'hover'\|'click'> | 'hover'        |
| placement       | 菜单弹出位置               | 'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight' | 'bottomLeft' |
| disabled        | 是否禁用                   | boolean                                          | false          |
| visible         | 菜单是否显示（受控）       | boolean                                          | -              |
| onVisibleChange | 菜单显示状态改变时回调     | (visible: boolean) => void                       | -              |
| className       | 自定义类名                 | string                                           | -              |
| style           | 自定义样式                 | React.CSSProperties                              | -              |
| arrow           | 是否显示下拉箭头           | boolean                                          | false          |

### Dropdown.Menu
建议配合 Menu 组件使用，支持 Menu.Item、Menu.Divider、danger、disabled 等属性。

## 注意事项
- 组件已支持所有主流下拉菜单的交互和定位方式。
- 支持自定义触发方式、位置、箭头、禁用等。
- 菜单和触发元素之间有 8px 间隙。

---

如有更多用法需求，欢迎补充！ 