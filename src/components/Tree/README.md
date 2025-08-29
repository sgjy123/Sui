# Tree 树形控件

分层次的结构型数据展示与选择，支持展开/收起、选择、勾选等能力。

## 引入

```js
import { Tree } from 'Sui';
```

## 代码演示

- 基础用法：

```jsx
const data = [
  { key: '0', title: '父节点 0', children: [
    { key: '0-0', title: '子节点 0-0' },
    { key: '0-1', title: '子节点 0-1' },
  ]},
  { key: '1', title: '父节点 1' },
];

<Tree treeData={data} defaultExpandAll />
```

- 可选择：

```jsx
<Tree treeData={data} selectable />
```

- 可勾选：

```jsx
<Tree treeData={data} checkable defaultCheckedKeys={['0-0']} />
```

- 受控展开/选择/勾选：

```jsx
const [expandedKeys, setExpandedKeys] = useState(['0']);
const [selectedKeys, setSelectedKeys] = useState([]);
const [checkedKeys, setCheckedKeys] = useState([]);

<Tree
  treeData={data}
  expandedKeys={expandedKeys}
  onExpand={setExpandedKeys}
  selectable
  selectedKeys={selectedKeys}
  onSelect={setSelectedKeys}
  checkable
  checkedKeys={checkedKeys}
  onCheck={setCheckedKeys}
/>
```

- 半选联动与对象形式传参：

```jsx
// 通过对象传入，支持半选回显
<Tree treeData={data} checkable defaultCheckedKeys={{ checkedKeys: ['0-1'] }} />
```

- 无级联（与父子不关联）：

```jsx
<Tree treeData={data} checkable checkStrictly />
```

- 展示连接线/图标/整行可点：

```jsx
<Tree treeData={data} showLine showIcon blockNode />
```

- 禁用节点与禁用复选框：

```jsx
const data2 = [
  { key: '0', title: '父节点 0', disabled: true },
  { key: '1', title: '父节点 1', children: [
    { key: '1-0', title: '子节点 1-0', disableCheckbox: true },
  ]},
];
<Tree treeData={data2} checkable defaultExpandAll />
```

- 自定义标题渲染：

```jsx
<Tree
  treeData={data}
  titleRender={(node) => (
    <span>
      {node.title} {node.key === '0-1' && <em style={{ color: '#1677ff' }}>(推荐)</em>}
    </span>
  )}
  defaultExpandAll
/>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 数据源 | TreeNode[] | [] |
| defaultExpandAll | 默认展开全部 | boolean | false |
| defaultExpandedKeys | 默认展开的 key 集合 | string[] | - |
| expandedKeys | 展开的 key（受控） | string[] | - |
| onExpand | 展开变化回调(keys) | function | - |
| selectable | 是否可选 | boolean | false |
| selectedKeys | 选中的 key（受控） | string[] | - |
| defaultSelectedKeys | 默认选中的 key 集合 | string[] | - |
| onSelect | 选择变化回调(keys) | function | - |
| checkable | 是否显示复选框 | boolean | false |
| checkedKeys | 勾选的 key（受控） | string[] | - |
| defaultCheckedKeys | 默认勾选的 key 集合 | string[] | - |
| onCheck | 勾选变化回调(keys) | function | - |
| multiple | 可多选 | boolean | false |
| checkStrictly | 勾选与父子不关联 | boolean | false |
| showLine | 展示连接线 | boolean | false |
| showIcon | 展示图标（文件/文件夹） | boolean | false |
| blockNode | 整行可点（充满行） | boolean | false |
| titleRender | 自定义标题渲染 | (node) => ReactNode | - |
| highlightAncestorsOnHover | hover是否高亮父节点 | boolean | false |

勾选受控格式：

- 数组：`checkedKeys={['0-1', '0-1-0']}`
- 对象：`checkedKeys={{ checkedKeys: [...], halfCheckedKeys: [...] }}`


