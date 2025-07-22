# Cascader 级联选择器

多级联动选择器，支持单选、多选、禁用、清空、自定义字段名、动态加载、changeOnSelect、不同尺寸、多选标签数量限制等功能。

## 何时使用 When To Use
- 需要从多级数据中选择一组有层级关系的数据时。
- 城市选择、分类选择等场景。

## 基本用法 Basic Usage

```jsx
import { Cascader } from 'Sui';

// 单选示例
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙' },
        ],
      },
    ],
  },
];

// 单选
const [value, setValue] = useState(['zhejiang', 'hangzhou', 'xihu']);
<Cascader options={options} value={value} onChange={setValue} placeholder="请选择" />

// 多选
const [multi, setMulti] = useState([['zhejiang', 'hangzhou', 'xihu'], ['zhejiang', 'hangzhou', 'xiasha']]);
<Cascader options={options} value={multi} onChange={setMulti} multiple maxTagCount={2} placeholder="多选" />
```

## API
| 属性         | 说明                | 类型     | 默认值   |
|------------|-------------------|--------|--------|
| options    | 选项数据            | array  | []     |
| value      | 选中值（受控）        | array  | -      |
| defaultValue | 默认值（非受控）    | array  | []     |
| onChange   | 选中回调            | function(value, selectedOptions) | - |
| placeholder| 占位符              | string | 请选择  |
| disabled   | 是否禁用            | bool   | false  |
| multiple   | 是否多选            | bool   | false  |
| clearable  | 是否可清空           | bool   | false  |
| fieldNames | 自定义字段名         | object | { label: 'label', value: 'value', children: 'children' } |
| size       | 尺寸                | string | 'middle' |
| style      | 自定义样式           | object | -      |
| className  | 自定义类名           | string | -      |
| loadData   | 动态加载数据         | function(selectedOptions) | - |
| changeOnSelect | 选择即改变        | bool   | false  |
| maxTagCount | 多选模式下最多显示的标签数量 | number | 2      |

### options 结构
```
{
  label: string, // 显示内容
  value: any,    // 选项值
  children?: array, // 子选项
  disabled?: bool,  // 是否禁用
  isLeaf?: bool     // 是否叶子节点（动态加载时）
}
```

### fieldNames 结构
```
{
  label: 'label',
  value: 'value',
  children: 'children'
}
```

### 多选模式
多选模式下，value 的格式为二维数组，每个子数组表示一个选中的路径。例如：
```
[
  ['zhejiang', 'hangzhou', 'xihu'],
  ['zhejiang', 'hangzhou', 'xiasha']
]
```

### maxTagCount 属性
在多选模式下，当选中的选项较多时，可以使用 maxTagCount 属性限制显示的标签数量，超出部分会显示为 +N 的形式。这对于节省空间和提高用户体验非常有用。

## 特性 Features
- 支持单选/多选
- 支持禁用、清空
- 支持自定义字段名
- 支持动态加载
- 支持 changeOnSelect
- 支持不同尺寸
- 支持多选模式下限制标签显示数量