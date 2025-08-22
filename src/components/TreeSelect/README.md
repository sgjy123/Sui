# TreeSelect 树选择

树型选择控件，支持单选、多选、搜索、复选框等功能。多选模式下已选项采用标签展示，超出可显示数量时以“+N...”的形式汇总显示（同 Cascader）。

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 基本用法

```jsx
import { TreeSelect } from 'sui-components';
import { useState } from 'react';

const treeData = [
  {
    key: '0-0',
    title: 'Node1',
    children: [
      {
        key: '0-0-0',
        title: 'Child Node1',
      },
      {
        key: '0-0-1',
        title: 'Child Node2',
      },
    ],
  },
  {
    key: '0-1',
    title: 'Node2',
  },
];

function App() {
  const [value, setValue] = useState();
  
  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      placeholder="请选择"
    />
  );
}
```

## 多选模式

```jsx
import { TreeSelect } from 'sui-components';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([]);
  
  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      placeholder="请选择"
      multiple
      allowClear
      maxTagCount={2}
    />
  );
}
```

## 复选框模式

```jsx
import { TreeSelect } from 'sui-components';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([]);
  
  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      placeholder="请选择"
      treeCheckable
      showCheckedStrategy="SHOW_PARENT"
      allowClear
    />
  );
}
```

## 可搜索

```jsx
import { TreeSelect } from 'sui-components';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState();
  
  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      placeholder="请选择"
      showSearch
      allowClear
    />
  );
}
```

## API

### TreeSelect Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | TreeNode[] | [] |
| value | 指定当前选中的条目 | string \| string[] | - |
| defaultValue | 指定默认选中的条目 | string \| string[] | - |
| onChange | 选中树节点时调用此函数 | function(value, selectedNodes) | - |
| placeholder | 选择框默认文字 | string | '请选择' |
| disabled | 是否禁用 | boolean | false |
| multiple | 支持多选，已选项以标签形式展示 | boolean | false |
| allowClear | 显示清除按钮 | boolean | false |
| showSearch | 是否显示搜索框 | boolean | false |
| filterTreeNode | 是否根据输入项进行筛选，默认用 title 进行匹配 | function(inputValue, treeNode) | - |
| treeCheckable | 显示 checkbox | boolean | false |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | false |
| treeDefaultExpandedKeys | 默认展开的树节点 | string[] | [] |
| treeExpandedKeys | 设置展开的树节点（受控） | string[] | - |
| onTreeExpand | 展开/收起节点时触发 | function(expandedKeys, {expanded, node}) | - |
| getPopupContainer | 菜单渲染父节点 | function(triggerNode) | () => document.body |
| dropdownStyle | 下拉菜单的样式 | object | {} |
| className | 选择器类名 | string | '' |
| style | 选择器样式 | object | {} |
| size | 选择框大小 | 'small' \| 'middle' \| 'large' | 'middle' |
| showCheckedStrategy | 定义选中项回填的方式 | 'SHOW_ALL' \| 'SHOW_PARENT' \| 'SHOW_CHILD' | 'SHOW_CHILD' |
| maxTagCount | 最多展示的标签数量，超出时以“+N...”合并显示 | number | 2 |
| maxTagPlaceholder | 自定义合并占位的内容，入参为被合并的 key 列表 | function(omittedKeys: (string\|number)[]) | - |

### TreeNode Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 此项必须设置（其值在整个树范围内唯一） | string \| number | - |
| title | 树节点显示的内容 | ReactNode | - |
| disabled | 是否禁用节点 | boolean | false |
| children | 子节点 | TreeNode[] | - |

## 注意事项

1. TreeSelect 的 `treeData` 属性中，每个节点都必须有唯一的 `key` 值
2. 当使用 `treeCheckable` 时，建议同时设置 `multiple={true}`
3. 搜索功能需要设置 `showSearch={true}`
4. 异步加载需要动态更新 `treeData`
5. 如果需要自定义节点的渲染，可以通过修改组件源码添加 `treeNodeLabelProp` 和 `treeNodeFilterProp` 属性