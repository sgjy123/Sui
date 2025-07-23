# ColorPicker 颜色选择器

用于选择颜色的控件，支持多种颜色格式。

## 何时使用

需要用户选择颜色时。

## 引入

```jsx
import { ColorPicker } from 'Sui';
```

# ColorPicker 颜色选择器
## 代码演示 | Examples
### 基础用法 | Basic
```jsx
<ColorPicker />
```

### 不同尺寸 | Different Sizes
```jsx
<ColorPicker size="large" placeholder="大号颜色选择器" />
<ColorPicker placeholder="默认颜色选择器" />
<ColorPicker size="small" placeholder="小号颜色选择器" />
```

### 默认值 | Default Value
```jsx
<ColorPicker defaultValue="#f5222d" />
```

### 禁用状态 | Disabled
```jsx
<ColorPicker disabled defaultValue="#1890ff" />
```

### 自定义格式 | Custom Format
```jsx
<ColorPicker format="rgb" defaultValue="rgb(24, 144, 255)" />
```

### 不可清除 | No Clear Button
```jsx
<ColorPicker allowClear={false} defaultValue="#1890ff" />
```

### 触发器样式切换 | Trigger Mode
```jsx
<ColorPicker triggerMode="input" /> // 输入框样式（默认）
<ColorPicker triggerMode="button" /> // 按钮样式
```

### 按钮样式不同尺寸 | Button Mode Sizes
```jsx
<ColorPicker triggerMode="button" size="large" />
<ColorPicker triggerMode="button" size="middle" />
<ColorPicker triggerMode="button" size="small" />
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 颜色值（受控） | string | - |
| defaultValue | 默认颜色值 | string | '#1890ff' |
| onChange | 颜色变化回调 | function(color: string) | - |
| disabled | 是否禁用 | boolean | false |
| allowClear | 是否显示清除按钮 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - |
| size | 输入框大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| format | 颜色格式 | 'hex' \| 'rgb' | 'hex' |
| placeholder | 输入框提示文本 | string | '请选择颜色' |
| getPopupContainer | 浮层渲染父节点 | function(triggerNode) | - |
| triggerMode | 触发器样式，input为输入框，button为按钮 | 'input' \| 'button' | 'input' |