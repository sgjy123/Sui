# Pagination 分页

分页组件，用于展示数据的分页信息。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示

### 基础分页

最简单的分页。

```jsx
<Pagination total={50} />
```

### 更多分页

更多分页。

```jsx
<Pagination total={500} />
```

### 改变每页显示条目数

可以切换每页显示条数。

```jsx
<Pagination
  total={500}
  showSizeChanger
  showTotal={(total, range) => `共 ${total} 条`}
/>
```

### 跳转

快速跳转到某一页。

```jsx
<Pagination total={500} showQuickJumper />
```

### 迷你版本

迷你版本的分页器。

```jsx
<Pagination total={50} simple />
```

### 禁用状态

禁用状态的分页器。

```jsx
<Pagination total={50} disabled />
```

## API

### Pagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数 | number | 1 |
| defaultCurrent | 默认的当前页数 | number | 1 |
| total | 数据总数 | number | 0 |
| pageSize | 每页条数 | number | 10 |
| defaultPageSize | 默认的每页条数 | number | 10 |
| onChange | 页码改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |
| showSizeChanger | 是否可以改变 pageSize | boolean | false |
| showQuickJumper | 是否可以快速跳转至某页 | boolean | false |
| showTotal | 用于显示总共有多少条数据 | function(total, range) | - |
| simple | 简单分页 | boolean | false |
| disabled | 禁用分页 | boolean | false |
| size | 分页组件大小 | 'default' \| 'small' | 'default' |
| pageSizeOptions | 指定每页可以显示多少条 | string[] | ['10', '20', '30', '40'] | 