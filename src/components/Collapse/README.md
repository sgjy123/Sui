# Collapse 折叠面板

用于内容区域的收纳与展开，常用于常见问题、数据分组等场景。

## 引入

```jsx
import { Collapse } from 'Sui';
```

## 代码演示

### 基础用法

最基本的折叠面板用法。

```jsx
<Collapse defaultActiveKey={['1']}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
  <Collapse.Panel header="面板3" key="3">内容3</Collapse.Panel>
</Collapse>
```

### 手风琴

每次只允许展开一个面板。

```jsx
<Collapse accordion>
  <Collapse.Panel header="面板A" key="A">内容A</Collapse.Panel>
  <Collapse.Panel header="面板B" key="B">内容B</Collapse.Panel>
  <Collapse.Panel header="面板C" key="C">内容C</Collapse.Panel>
</Collapse>
```

### 禁用

禁用某个面板。

```jsx
<Collapse defaultActiveKey={['1']}>
  <Collapse.Panel header="可用面板" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="禁用面板" key="2" disabled>内容2</Collapse.Panel>
</Collapse>
```

### 无下间距

通过 `gap` 参数控制所有面板是否有下间距。

```jsx
<Collapse defaultActiveKey={['1']} gap={false}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
  <Collapse.Panel header="面板3" key="3">内容3</Collapse.Panel>
</Collapse>
```

### 受控用法

通过 `activeKey` 和 `onChange` 实现受控折叠面板。

```jsx
const [activeKey, setActiveKey] = useState(['1']);
<Collapse activeKey={activeKey} onChange={setActiveKey}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
</Collapse>
```

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accordion | 手风琴模式 | boolean | false |
| activeKey | 当前激活面板的 key（受控） | string \| string[] | - |
| defaultActiveKey | 默认激活面板的 key（非受控） | string \| string[] | - |
| onChange | 切换面板的回调 | (key: string \| string[]) => void | - |
| gap | 是否有下间距 | boolean | true |
| children | Collapse.Panel 子元素 | ReactNode | - |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 面板头内容 | ReactNode | - |
| disabled | 是否禁用 | boolean | false |
| children | 面板内容 | ReactNode | - |
``` 