# Slider 滑块

用于在数值区间内进行选择，支持单值和范围、横向和纵向、marks、tooltip、禁用等。

## 基本用法
```jsx
<Slider defaultValue={30} />
<Slider range defaultValue={[20, 60]} />
<Slider min={0} max={200} step={10} />
<Slider marks={{0: '0°C', 100: '100°C'}} />
<Slider vertical style={{height: 200}} />
```

## API
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | 当前值（受控） | number \| [number, number] | - |
| defaultValue | 初始值 | number \| [number, number] | 0 |
| min | 最小值 | number | 0 |
| max | 最大值 | number | 100 |
| step | 步长 | number | 1 |
| marks | 刻度标记 | object | - |
| vertical | 是否垂直 | bool | false |
| disabled | 是否禁用 | bool | false |
| range | 是否为范围选择 | bool | false |
| tooltipVisible | 是否显示提示 | bool | - |
| tipFormatter | 提示格式化 | function | v => v |
| onChange | 值变化回调 | function | - |
| onAfterChange | 拖拽结束回调 | function | - |
