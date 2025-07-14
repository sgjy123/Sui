# Rate 评分

评分组件，对评价进行展示。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

```jsx
import { Rate } from 'Sui';

// 基础使用
<Rate />

// 自定义星星数量
<Rate count={10} />

// 支持半星
<Rate allowHalf defaultValue={2.5} />

// 只读状态
<Rate disabled defaultValue={2} />

// 支持清除
<Rate allowClear={true} defaultValue={3} />

// 自定义字符
<Rate character="好" />
<Rate character={<Icon name="Heart" theme="filled" />} />

// 不同尺寸
<Rate size="large" />
<Rate size="middle" />
<Rate size="small" />

// 添加提示
<Rate tooltips={['很糟糕', '一般', '还行', '很好', '非常好']} />
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |
| allowHalf | 是否允许半选 | boolean | false |
| character | 自定义字符 | ReactNode | <Icon name="Star" theme="filled" /> |
| characterClassName | 自定义字符的样式类 | string | - |
| className | 自定义样式类名 | string | - |
| count | 星星总数 | number | 5 |
| defaultValue | 默认值 | number | 0 |
| disabled | 只读，无法进行交互 | boolean | false |
| style | 自定义样式对象 | CSSProperties | - |
| tooltips | 自定义每项的提示信息 | string[] | - |
| value | 当前数，受控值 | number | - |
| onChange | 选择时的回调 | function(value: number) | - |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |
| size | 尺寸，可选 `large`、`middle`、`small` | string | middle | 