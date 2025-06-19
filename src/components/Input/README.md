# Input 输入框

通用输入框组件，支持多种场景和丰富功能。

A universal input component for various scenarios and rich features.

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示 | Examples

### 基础用法 | Basic Usage
```jsx
<Input placeholder="请输入" />
```

### 三种大小 | Three Sizes
```jsx
<Input size="large" placeholder="大号输入框" />
<Input placeholder="默认输入框" />
<Input size="small" placeholder="小号输入框" />
```

### 带图标 | With Icon
```jsx
<Input prefix={<Icon name="User" />} placeholder="用户名" />
<Input prefix={<Icon name="Lock" />} suffix={<Icon name="Eye" />} placeholder="密码" />
```

### 可清除 | Allow Clear
```jsx
<Input allowClear placeholder="可清除" />
```

### 只读和禁用 | ReadOnly & Disabled
```jsx
<Input readOnly value="只读内容" />
<Input disabled placeholder="禁用状态" />
```

### 最大长度和字数统计 | Max Length & Show Count
```jsx
<Input maxLength={10} showCount placeholder="最多输入10个字符" />
```

### 前置/后置标签 | Addon Before/After
```jsx
<Input addonBefore="http://" addonAfter=".com" placeholder="网站" />
```

### loading 状态 | Loading
```jsx
<Input loading placeholder="加载中..." />
```

### 输入内容格式化 | Formatter
```jsx
<Input
  value={value}
  onChange={e => setValue(e.target.value.replace(/[^\d]/g, ''))}
  formatter={val => val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  placeholder="请输入数字"
  allowClear
/>
```

### 禁用粘贴/复制/剪切 | Disable Paste/Copy/Cut
```jsx
<Input disablePaste disableCopy disableCut placeholder="禁止粘贴/复制/剪切" />
```

### 多行输入（TextArea） | TextArea
```jsx
<Input.TextArea
  value={value}
  onChange={e => setValue(e.target.value)}
  placeholder="请输入多行文本"
  autoSize
  allowClear
  showCount
  maxLength={100}
  style={{ minHeight: 60 }}
/>
```

### 密码框 | Password
```jsx
<Input.Password placeholder="请输入密码" />
```

## API

### Input
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string | - |
| defaultValue | 输入框默认内容 | string | - |
| onChange | 输入框内容变化时的回调 | function(e: Event) | - |
| onPressEnter | 按下回车的回调 | function(e: Event) | - |
| placeholder | 输入框提示文字 | string | - |
| disabled | 是否禁用 | boolean | false |
| readOnly | 是否只读 | boolean | false |
| size | 输入框大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| prefix | 前缀图标 | ReactNode | - |
| suffix | 后缀图标 | ReactNode | - |
| allowClear | 可以点击清除图标删除内容 | boolean | false |
| type | 声明 input 类型 | string | 'text' |
| error | 错误状态 | boolean | false |
| maxLength | 最大输入长度 | number | - |
| showCount | 是否展示字数 | boolean | false |
| addonBefore | 前置标签 | ReactNode | - |
| addonAfter | 后置标签 | ReactNode | - |
| loading | 是否显示 loading 图标 | boolean | false |
| formatter | 输入内容格式化 | function(value: string): string | - |
| disablePaste | 禁用粘贴 | boolean | false |
| disableCopy | 禁用复制 | boolean | false |
| disableCut | 禁用剪切 | boolean | false |

### Input.TextArea
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 内容 | string | - |
| defaultValue | 默认内容 | string | - |
| onChange | 内容变化时的回调 | function(e: Event) | - |
| onPressEnter | 按下回车的回调 | function(e: Event) | - |
| placeholder | 提示文字 | string | - |
| disabled | 是否禁用 | boolean | false |
| readOnly | 是否只读 | boolean | false |
| size | 大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| allowClear | 可清除 | boolean | false |
| maxLength | 最大输入长度 | number | - |
| showCount | 是否展示字数 | boolean | false |
| autoSize | 自适应高度 | boolean | false |
| formatter | 内容格式化 | function(value: string): string | - |
| addonBefore | 前置标签 | ReactNode | - |
| addonAfter | 后置标签 | ReactNode | - |
| disablePaste | 禁用粘贴 | boolean | false |
| disableCopy | 禁用复制 | boolean | false |
| disableCut | 禁用剪切 | boolean | false |

### Input.Password
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string | - |
| defaultValue | 输入框默认内容 | string | - |
| onChange | 输入框内容变化时的回调 | function(e: Event) | - |
| onPressEnter | 按下回车的回调 | function(e: Event) | - |
| placeholder | 输入框提示文字 | string | '请输入密码' |
| disabled | 是否禁用 | boolean | false |
| size | 输入框大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| error | 错误状态 | boolean | false | 