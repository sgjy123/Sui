# Checkbox 多选框

## 介绍
用于在一组备选项中进行多选。

## 基本用法
```jsx
<Checkbox>选项</Checkbox>
<Checkbox disabled>禁用</Checkbox>
```

## 组合用法
```jsx
<Checkbox.Group value={['a']} onChange={val => console.log(val)}>
  <Checkbox value="a">A</Checkbox>
  <Checkbox value="b">B</Checkbox>
</Checkbox.Group>
```

## API
### Checkbox
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| checked | 是否选中 | boolean | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| indeterminate | 半选状态 | boolean | false |
| onChange | 变化时回调 | function(e) | - |
| value | 值 | any | - |
| name | name属性 | string | - |
| children | 内容 | ReactNode | - |

### Checkbox.Group
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | 选中值数组 | any[] | - |
| defaultValue | 初始选中值数组 | any[] | [] |
| options | 选项列表 | array | - |
| onChange | 变化时回调 | function(value) | - |
| disabled | 是否禁用 | boolean | false |
| name | name属性 | string | - |
| children | 子元素 | ReactNode | - |
``` 