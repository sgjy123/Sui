# Transfer 穿梭框

用于在两个列表之间移动数据，常用于多项选择的场景。

## 何时使用
- 需要在两个集合中进行数据移动、选择时。
- 适合数据量中等、需要批量操作的场景。

## 引入
```jsx
import { Transfer } from 'Sui';
```

## 代码演示 | Examples

### 基础用法 | Basic
```jsx
const data = Array.from({ length: 10 }, (_, i) => ({ key: i.toString(), title: `选项${i+1}` }));
const [targetKeys, setTargetKeys] = useState(['1', '3']);
<Transfer
  dataSource={data}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
/>
```

### 带搜索 | With Search
```jsx
<Transfer
  dataSource={data}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  showSearch
/>
```

### 禁用 | Disabled
```jsx
<Transfer
  dataSource={data}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  disabled
/>
```

### 受控选中项 | Controlled Selected
```jsx
const [selectedKeys, setSelectedKeys] = useState([]);
<Transfer
  dataSource={data}
  targetKeys={targetKeys}
  selectedKeys={selectedKeys}
  onChange={setTargetKeys}
  onSelectChange={setSelectedKeys}
/>
```

### 自定义渲染 | Custom Render
```jsx
<Transfer
  dataSource={data}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  render={item => <span style={{ color: '#409eff' }}>{item.title}</span>}
/>
```

## API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | array | [] |
| targetKeys | 目标列表 key 数组 | array | [] |
| selectedKeys | 受控选中 key | array | - |
| onChange | 目标列表变化回调 | function(targetKeys, direction, moveKeys) | - |
| onSelectChange | 选中项变化回调 | function(leftSelected, rightSelected) | - |
| render | 自定义渲染每行 | function(item) | item.title |
| titles | 列表标题 | [string, string] | ['源列表', '目标列表'] |
| operations | 操作按钮文案 | [string, string] | ['>', '<'] |
| showSearch | 是否显示搜索 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| listStyle | 列表自定义样式 | object | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - | 