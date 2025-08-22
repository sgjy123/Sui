# Select 选择器

下拉选择器，支持单选与多选。多选模式下，已选项以标签形式展示；当内容区显示不下时，末尾以“+N...”合并显示（与 Cascader 一致），可通过 `maxTagCount` 和 `maxTagPlaceholder` 定制行为。

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

## 多选模式 Multiple

```jsx
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
  { label: '选项四', value: '4' },
];

const [vals, setVals] = useState(['1','2','3']);

<Select
  options={options}
  value={vals}
  onChange={setVals}
  mode="multiple"
  maxTagCount={2}
  maxTagPlaceholder={(omitted) => `+${omitted.length} 更多`}
  placeholder="多选"
/>;
```

## API
| 属性      | 说明           | 类型     | 默认值   |
|---------|--------------|--------|--------|
| options | 选项列表        | array  | []     |
| value   | 当前选中值      | any    | -      |
| onChange | 选中回调      | function(value, option) | - |
| placeholder | 占位符      | string | 请选择  |
| disabled | 是否禁用      | bool   | false  |
| mode | 选择模式（单选/多选） | 'single' | 'multiple' | 'single' |
| maxTagCount | 多选模式下最多展示的标签数量，超出以“+N...”合并显示 | number | 2 |
| maxTagPlaceholder | 自定义合并占位内容，参数为被合并的值数组 | function(omittedValues: any[]) | - |

### options 结构
```
{
  label: string, // 选项显示内容
  value: any,    // 选项值
  disabled?: bool // 是否禁用
}
``` 