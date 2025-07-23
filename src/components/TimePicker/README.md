# TimePicker 时间选择框

输入或选择时间的控件，支持小时、分钟、秒以及上午/下午等多种格式。

## 何时使用

- 当用户需要输入一个精确的时间点时，可以点击标准输入框，弹出时间面板进行选择。
- 支持多种时间格式，满足不同场景需求。
- 支持12小时制和24小时制切换。

## 代码演示 | Examples
### 基础用法 | Basic Usage

```jsx
<TimePicker placeholder="请选择时间" />
```

### 不同尺寸 | Different Sizes
```jsx
<TimePicker size="large" placeholder="大号时间选择框" />
<TimePicker placeholder="默认时间选择框" />
<TimePicker size="small" placeholder="小号时间选择框" />
```

### 默认值 | Default Value
```jsx
<TimePicker defaultValue={new Date()} />
```

### 禁用状态 | Disabled
```jsx
<TimePicker disabled />
```

### 自定义格式 | Custom Format
```jsx
<TimePicker format="HH:mm" placeholder="选择时间（小时:分钟）" />
```

### 步长选项 | Step Options
```jsx
<TimePicker 
  hourStep={2} 
  minuteStep={15} 
  secondStep={10} 
  placeholder="步长选项" 
/>
```

### 禁用选项 | Disabled Options
```jsx
<TimePicker 
  disabledHours={() => [0, 1, 2, 3]} // 禁用0-3点
  disabledMinutes={(hour) => (hour === 4 ? [30, 31, 32] : [])} // 4点时禁用30-32分
  disabledSeconds={(hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : [])} // 5点0分时禁用0-2秒
  placeholder="禁用部分时间选项"
/>
```

### 12小时制 | 12 Hours
```jsx
<TimePicker 
  use12Hours 
  format="h:mm:ss a" 
  placeholder="12小时制" 
/>
```

### 隐藏禁用选项 | Hide Disabled Options
```jsx
<TimePicker 
  disabledHours={() => [0, 1, 2, 3, 4, 5]}
  hideDisabledOptions
  placeholder="隐藏禁用选项"
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|--|--|--|--|
| value | 时间（受控） | Date | - |
| defaultValue | 默认时间 | Date | - |
| onChange | 时间变化回调 | function(time: Date, timeString: string) | - |
| placeholder | 输入框提示文本 | string | '请选择时间' |
| disabled | 禁用 | boolean | false |
| size | 输入框大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| format | 时间格式 | string | 'HH:mm:ss' |
| allowClear | 是否显示清除按钮 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - |
| hourStep | 小时选项的间隔 | number | 1 |
| minuteStep | 分钟选项的间隔 | number | 1 |
| secondStep | 秒选项的间隔 | number | 1 |
| disabledHours | 禁止选择部分小时选项 | function() => number[] | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(hour: number) => number[] | - |
| disabledSeconds | 禁止选择部分秒选项 | function(hour: number, minute: number) => number[] | - |
| use12Hours | 使用12小时制 | boolean | false |
| hideDisabledOptions | 隐藏禁用选项 | boolean | false |

## 格式说明

| 格式 | 输出 | 说明 |
|--|--|--|
| HH | 00-23 | 小时（24小时制，两位数） |
| H | 0-23 | 小时（24小时制） |
| h | 1-12 | 小时（12小时制） |
| hh | 01-12 | 小时（12小时制，两位数） |
| mm | 00-59 | 分钟（两位数） |
| m | 0-59 | 分钟 |
| ss | 00-59 | 秒（两位数） |
| s | 0-59 | 秒 |
| a | am/pm | 上午/下午（小写） |
| A | AM/PM | 上午/下午（大写） |

## 注意事项

- 时间格式化支持 HH、H、h、hh、mm、m、ss、s、a、A 等格式，可以自由组合。
- 当设置 `use12Hours` 为 true 时，建议将 `format` 设置为包含 a 或 A 的格式，如 "h:mm:ss a"。
- 如需更复杂的时间格式化，可以在 onChange 回调中自行处理。