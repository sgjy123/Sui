# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

```jsx
import { Menu } from '../components';

const { SubMenu, Item, ItemGroup } = Menu;

// 基础菜单
const BasicMenu = () => (
  <Menu defaultSelectedKeys={['1']} mode="inline">
    <Item key="1" icon="PieChart">选项1</Item>
    <Item key="2" icon="Desktop">选项2</Item>
    <SubMenu key="sub1" icon="Mail" title="导航一">
      <Item key="5">选项5</Item>
      <Item key="6">选项6</Item>
      <Item key="7">选项7</Item>
      <Item key="8">选项8</Item>
    </SubMenu>
  </Menu>
);

// 水平菜单
const HorizontalMenu = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Item key="mail" icon="Mail">导航一</Item>
    <Item key="app" icon="AppStore">导航二</Item>
    <SubMenu key="SubMenu" title="导航 - 子菜单" icon="Setting">
      <Item key="setting:1">选项1</Item>
      <Item key="setting:2">选项2</Item>
    </SubMenu>
  </Menu>
);

// 无边框菜单
const NoBorderMenu = () => (
  <Menu mode="horizontal" showBorder={false}>
    <Item key="1">无边框菜单</Item>
    <Item key="2">选项2</Item>
  </Menu>
);
```

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |
| theme | 主题颜色 | `light` \| `dark` | `light` |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string[] | [] |
| selectedKeys | 当前选中的菜单项 key 数组 | string[] | - |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | string[] | [] |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string[] | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | false |
| multiple | 是否允许多选 | boolean | false |
| showBorder | 是否显示菜单边框 | boolean | true |
| onSelect | 被选中时调用 | function(selectedKey) | - |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys) | - |

### Menu.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| index | item 的唯一标志 | string | - |
| icon | 菜单图标 | string | - |
| danger | 展示错误状态 | boolean | false |

### Menu.SubMenu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| index | 唯一标志 | string | - |
| icon | 菜单图标 | string | - |
| title | 子菜单标题 | string \| ReactNode | - |

### Menu.ItemGroup

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | string \| ReactNode | - |
