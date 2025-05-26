# Grid 栅格

24 栅格系统，用于快速创建响应式布局。

## 何时使用

- 需要创建响应式布局时
- 需要创建基于行列的页面结构时
- 需要灵活控制元素排列顺序时
- 需要创建复杂的表单布局时
- 需要创建卡片网格布局时

## 代码演示

### 基础栅格

从堆叠到水平排列，展示了不同列数的组合。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <>
    <Row>
      <Col span={24}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>24</div>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>12</div>
      </Col>
      <Col span={12}>
        <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>12</div>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>8</div>
      </Col>
      <Col span={8}>
        <div style={{ background: '#b0b0b0', padding: '20px', textAlign: 'center' }}>8</div>
      </Col>
      <Col span={8}>
        <div style={{ background: '#a0a0a0', padding: '20px', textAlign: 'center' }}>8</div>
      </Col>
    </Row>
  </>,
  mountNode,
);
```

### 栅格间隔

通过设置 Row 的 gutter 属性来调整栅格之间的间隔。gutter 的值表示栅格之间的间距，单位为像素。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <Row gutter={16}>
    <Col span={6}>
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>6</div>
    </Col>
    <Col span={6}>
      <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>6</div>
    </Col>
    <Col span={6}>
      <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>6</div>
    </Col>
    <Col span={6}>
      <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>6</div>
    </Col>
  </Row>,
  mountNode,
);
```

### 对齐方式

通过设置 Row 的 justify 和 align 属性来调整栅格的对齐方式。justify 控制水平对齐，align 控制垂直对齐。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <>
    <Row justify="space-between" style={{ marginBottom: '16px' }}>
      <Col span={6}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>space-between</div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>space-between</div>
      </Col>
    </Row>
    <Row justify="center" align="middle" style={{ height: '100px', background: '#fafafa' }}>
      <Col span={6}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>center</div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>center</div>
      </Col>
    </Row>
  </>,
  mountNode,
);
```

### 响应式布局

通过设置不同断点的 span 值来创建响应式布局。在不同屏幕尺寸下，栅格会自动调整布局。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <Row>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>响应式</div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>响应式</div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>响应式</div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>响应式</div>
    </Col>
  </Row>,
  mountNode,
);
```

### 栅格排序

通过设置 Col 的 order、push、pull 属性来调整栅格的顺序。order 控制显示顺序，push 和 pull 控制栅格的移动。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <Row>
    <Col span={6} order={4}>
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>1</div>
    </Col>
    <Col span={6} order={3}>
      <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>2</div>
    </Col>
    <Col span={6} order={2}>
      <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>3</div>
    </Col>
    <Col span={6} order={1}>
      <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>4</div>
    </Col>
  </Row>,
  mountNode,
);
```

### 栅格偏移

通过设置 Col 的 offset 属性来调整栅格的偏移量。offset 的值表示栅格左侧的间隔格数。

```jsx
import { Grid } from '../components';

const { Row, Col } = Grid;

ReactDOM.render(
  <>
    <Row>
      <Col span={8}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>8</div>
      </Col>
      <Col span={8} offset={8}>
        <div style={{ background: '#e0e0e0', padding: '20px', textAlign: 'center' }}>8</div>
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        <div style={{ background: '#d0d0d0', padding: '20px', textAlign: 'center' }}>6</div>
      </Col>
      <Col span={6} offset={6}>
        <div style={{ background: '#c0c0c0', padding: '20px', textAlign: 'center' }}>6</div>
      </Col>
    </Row>
  </>,
  mountNode,
);
```

## API

### Row

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间隔，单位像素 | number | 0 |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` | - |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` | - |
| wrap | 是否自动换行 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |

### Col

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格占据的列数，总数为 24 | number | - |
| offset | 栅格左侧的间隔格数 | number | 0 |
| order | 栅格顺序 | number | 0 |
| push | 栅格向右移动格数 | number | 0 |
| pull | 栅格向左移动格数 | number | 0 |
| xs | 超小屏幕下的列数 (&lt;576px) | number | - |
| sm | 小屏幕下的列数 (≥576px) | number | - |
| md | 中等屏幕下的列数 (≥768px) | number | - |
| lg | 大屏幕下的列数 (≥992px) | number | - |
| xl | 超大屏幕下的列数 (≥1200px) | number | - |
| xxl | 超超大屏幕下的列数 (≥1600px) | number | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |