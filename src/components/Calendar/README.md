# Calendar 日历

用于展示日历日期，支持自定义头部和单元格内容。

## 引入

```js
import { Calendar } from 'Sui';
```

## 代码演示

- 基础用法：

```jsx
<Calendar />
```

- 受控用法：

```jsx
const [value, setValue] = useState(new Date());
<Calendar value={value} onChange={(date, dateString) => setValue(date)} />
```

- 自定义头部与日期内容：

```jsx
<Calendar
  headerRender={({ value, onChange, onToday }) => (
    <div>
      <button onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()-1, 1))}>{'<'}</button>
      <span style={{ margin: '0 8px' }}>{value.getFullYear()}-{value.getMonth()+1}</span>
      <button onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()+1, 1))}>{'>'}</button>
      <button onClick={onToday} style={{ marginLeft: 8 }}>今天</button>
    </div>
  )}
  dateCellRender={(date) => (date.getDate() % 5 === 0 ? <span>打卡</span> : null)}
/>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值（受控） | Date | - |
| defaultValue | 初始值 | Date | - |
| onChange | 日期选择回调，参数(date, dateString) | function | - |
| headerRender | 自定义头部渲染 | ({ value, onChange, onToday }) => ReactNode | - |
| dateCellRender | 自定义日期单元渲染 | (date: Date) => ReactNode | - |
| fullscreen | 是否全屏宽度 | boolean | true |


