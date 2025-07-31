# Table 表格

展示行列数据，支持排序、筛选、分页、选择、展开等操作。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、筛选操作时；
- 当需要在表格中展示数据的层次结构时。

## 基础用法

```jsx
import { Table } from 'sui';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
  },
];

<Table columns={columns} dataSource={dataSource} />
```

## 带排序的表格

```jsx
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a - b,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
];
```

## 带选择的表格

```jsx
const [selectedRowKeys, setSelectedRowKeys] = useState([]);

const rowSelection = {
  selectedRowKeys,
  onChange: (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    console.log('selectedRows: ', selectedRows);
  },
};

<Table 
  rowSelection={rowSelection}
  columns={columns} 
  dataSource={dataSource} 
/>
```

## 可展开的表格

```jsx
const expandable = {
  expandedRowRender: (record) => (
    <p style={{ margin: 0 }}>
      这是 {record.name} 的详细信息
    </p>
  ),
  rowExpandable: (record) => record.name !== 'Not Expandable',
};

<Table 
  expandable={expandable}
  columns={columns} 
  dataSource={dataSource} 
/>
```

## 带分页的表格

```jsx
<Table 
  columns={columns} 
  dataSource={dataSource}
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条/共 ${total} 条`,
  }}
/>
```

## 自定义渲染

```jsx
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    render: (age) => <span style={{ color: age > 30 ? 'red' : 'green' }}>{age}</span>,
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];
```

## 固定列

```jsx
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  // ... 更多列
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: () => <a>操作</a>,
  },
];
```

## 不同尺寸

```jsx
<Table size="small" columns={columns} dataSource={dataSource} />
<Table size="middle" columns={columns} dataSource={dataSource} />
<Table size="large" columns={columns} dataSource={dataSource} />
```

## 加载状态

```jsx
<Table 
  loading={true}
  columns={columns} 
  dataSource={dataSource} 
/>
```

## 隔行变色

```jsx
// 默认隔行变色
<Table 
  striped
  columns={columns} 
  dataSource={dataSource} 
/>

// 自定义颜色隔行变色
<Table 
  striped
  stripeColor="#f0f8ff"
  columns={columns} 
  dataSource={dataSource} 
/>
```

## 列对齐方式

```jsx
// 默认左对齐
<Table 
  align="left"
  columns={columns} 
  dataSource={dataSource} 
/>

// 居中对齐
<Table 
  align="center"
  columns={columns} 
  dataSource={dataSource} 
/>

// 右对齐
<Table 
  align="right"
  columns={columns} 
  dataSource={dataSource} 
/>

// 混合对齐方式（在列配置中单独设置）
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name', align: 'left' },
  { title: '年龄', dataIndex: 'age', key: 'age', align: 'center' },
  { title: '地址', dataIndex: 'address', key: 'address', align: 'right' },
];
```

## API

### Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列的配置描述 | ColumnType[] | - |
| dataSource | 数据数组 | object[] | - |
| rowKey | 表格行 key 的取值 | string \| (record) => string | 'id' |
| pagination | 分页器配置 | object \| false | false |
| loading | 页面是否加载中 | boolean | false |
| bordered | 是否展示外边框和列边框 | boolean | false |
| size | 表格大小 | 'small' \| 'middle' \| 'large' | 'middle' |
| rowSelection | 表格行是否可选择 | object | - |
| expandable | 展开功能的配置 | object | - |
| scroll | 设置横向或纵向滚动，也可用于指定滚动区域的宽和高 | object | - |
| onChange | 分页、排序、筛选变化时触发 | function | - |
| striped | 是否启用隔行变色 | boolean | false |
| stripeColor | 隔行变色的背景颜色 | string | '#fafafa' |
| align | 表格的默认对齐方式 | 'left' \| 'center' \| 'right' | 'left' |

### ColumnType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列头显示文字 | ReactNode | - |
| dataIndex | 列数据在数据项中对应的 key | string | - |
| key | React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性 | string | - |
| width | 列宽度 | string \| number | - |
| align | 设置列内容的对齐方式 | 'left' \| 'right' \| 'center' | 'left' |
| fixed | 列固定方向 | 'left' \| 'right' | - |
| sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true | function \| boolean | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | function(text, record, index) | - |

### pagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数 | number | 1 |
| pageSize | 每页条数 | number | 10 |
| total | 数据总数 | number | 0 |
| showSizeChanger | 是否可以改变 pageSize | boolean | true |
| showQuickJumper | 是否可以快速跳转至某页 | boolean | false |
| showTotal | 用于显示总数 | function(total, range) | - |
| onChange | 页码改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |

### rowSelection

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] | [] |
| onChange | 选中项发生变化时的回调 | function(selectedRowKeys, selectedRows) | - |

### expandable

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expandedRowRender | 自定义展开行内容 | function(record, index, indent, expanded) | - |
| rowExpandable | 设置是否允许行展开 | function(record) | - |
| onExpand | 展开/收起行时触发 | function(expanded, record) | - | 