# Radio 单选框

用于在多个备选项中选中单个状态。

## 何时使用
- 用于在一组备选项中进行单选。
- 和 Select 组件类似，但用于选项较少的场景。

## 基本用法
```jsx
import Radio from '../../Radio';

<Radio>选项一</Radio>
<Radio.Group options={[{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]} />
<Radio.Group value={value} onChange={...}>
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
</Radio.Group>
<Radio.Button value="a">A</Radio.Button>
```

## API
### Radio
| 属性           | 说明                | 类型      | 默认值         |
|----------------|---------------------|-----------|----------------|
| checked        | 指定当前是否选中    | boolean   | -              |
| defaultChecked | 初始是否选中        | boolean   | false          |
| disabled       | 是否禁用            | boolean   | false          |
| onChange       | 变化时回调函数      | function  | -              |
| value          | 单选框的值          | any       | -              |
| name           | 原生 name 属性      | string    | -              |
| children       | 单选框内容          | ReactNode | -              |
| optionType     | 风格类型（default/button）| string | default        |

### Radio.Group
| 属性           | 说明                | 类型      | 默认值         |
|----------------|---------------------|-----------|----------------|
| value          | 当前选中的值        | any       | -              |
| defaultValue   | 默认选中的值        | any       | -              |
| options        | 配置方式生成选项    | array     | []             |
| onChange       | 变化时回调函数      | function  | -              |
| disabled       | 是否禁用全部        | boolean   | false          |
| name           | name属性            | string    | -              |
| optionType     | 风格类型（default/button）| string | default        |
| buttonStyle    | 按钮样式（outline/solid）| string | outline        |
| size           | 尺寸（large/middle/small）| string | middle         |
| block          | 是否块级            | boolean   | false          |
| children       | 选项内容            | ReactNode | -              |

### Radio.Button
| 属性           | 说明                | 类型      | 默认值         |
|----------------|---------------------|-----------|----------------|
| 继承 Radio 的所有属性，optionType 固定为 button |

## 方法
| 名称      | 描述   |
| ------- | ---- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 | 