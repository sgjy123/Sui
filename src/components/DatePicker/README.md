# DatePicker 日期选择框

输入或选择日期的控件，支持年、月、日期、时间等多种格式。

## 何时使用

- 当用户需要输入一个日期时，可以点击标准输入框，弹出日期面板进行选择。
- 当用户需要输入一个精确的时间点时，可以启用时间选择功能。
- 支持多种日期和时间格式，满足不同场景需求。

## 代码演示 | Examples

### 基础用法 | Basic Usage
```jsx
<DatePicker placeholder="请选择日期" />
```

### 不同尺寸 | Different Sizes
```jsx
<DatePicker size="large" placeholder="大号日期选择框" />
<DatePicker placeholder="默认日期选择框" />
<DatePicker size="small" placeholder="小号日期选择框" />
```

### 默认值 | Default Value
```jsx
<DatePicker defaultValue={new Date()} />
```

### 禁用状态 | Disabled
```jsx
<DatePicker disabled />
```

### 自定义格式 | Custom Format
```jsx
<DatePicker format="YYYY年MM月DD日" />
```

### 不可选日期 | Disabled Date
```jsx
<DatePicker 
  disabledDate={(date) => {
    // 禁用今天之前的日期
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  }}
/>
```

### 时间选择 | Time Picker
```jsx
<DatePicker 
  showTime 
  format="YYYY-MM-DD HH:mm:ss" 
  placeholder="选择日期和时间"
/>
```

### 禁用时间 | Disabled Time
```jsx
<DatePicker 
  showTime 
  format="YYYY-MM-DD HH:mm:ss"
  disabledTime={() => ({
    disabledHours: () => [0, 1, 2, 3], // 禁用0-3点
    disabledMinutes: (hour) => (hour === 4 ? [30, 31, 32] : []), // 4点时禁用30-32分
    disabledSeconds: (hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : []), // 5点0分时禁用0-2秒
  })}
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 日期（受控） | Date | - |
| defaultValue | 默认日期 | Date | - |
| onChange | 日期变化回调 | function(date: Date, dateString: string) | - |
| placeholder | 输入框提示文本 | string | '请选择日期' |
| disabled | 禁用 | boolean | false |
| size | 输入框大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| format | 日期格式 | string | 'YYYY-MM-DD' |
| allowClear | 是否显示清除按钮 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - |
| disabledDate | 不可选择的日期 | (date: Date) => boolean | - |
| showTime | 增加时间选择功能 | boolean | false |
| disabledTime | 不可选择的时间 | () => { disabledHours?: () => number[], disabledMinutes?: (hour: number) => number[], disabledSeconds?: (hour: number, minute: number) => number[] } | - |

## 格式说明

| 格式 | 输出 | 说明 |
| --- | --- | --- |
| YYYY | 2023 | 年份 |
| MM | 01-12 | 月份（两位数） |
| DD | 01-31 | 日期（两位数） |
| HH | 00-23 | 小时（24小时制，两位数） |
| mm | 00-59 | 分钟（两位数） |
| ss | 00-59 | 秒（两位数） |

## 注意事项

- 日期格式化支持 YYYY、MM、DD、HH、mm、ss 六种格式，可以自由组合。
- 当设置 `showTime` 为 true 时，建议将 `format` 设置为 "YYYY-MM-DD HH:mm:ss"。
- 如需更复杂的日期格式化，可以在 onChange 回调中自行处理。