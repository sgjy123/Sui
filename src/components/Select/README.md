# Select 选择器

下拉选择器，支持单选。

## 何时使用 When To Use
- 需要从多个选项中选择一个时。
- 表单中常见的基础控件。

## 基本用法 Basic Usage

```jsx
import Select from '../../Select';

const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3', disabled: true },
];

<Select
  options={options}
  value={value}
  onChange={setValue}
  placeholder="请选择"
/>
```

## API
| 属性      | 说明           | 类型     | 默认值   |
|---------|--------------|--------|--------|
| options | 选项列表        | array  | []     |
| value   | 当前选中值      | any    | -      |
| onChange | 选中回调      | function(value, option) | - |
| placeholder | 占位符      | string | 请选择  |
| disabled | 是否禁用      | bool   | false  |

### options 结构
```
{
  label: string, // 选项显示内容
  value: any,    // 选项值
  disabled?: bool // 是否禁用
}
``` 