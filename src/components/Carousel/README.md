# Carousel 走马灯

轮播切换视图组件，支持自动播放、指示点、箭头导航，以及滑动和淡入淡出两种效果。

## 引入

```js
import { Carousel } from 'Sui';
```

## 代码演示

- 基础用法：

```jsx
<Carousel style={{ width: 400, height: 200 }}>
  <div style={{ background: '#364d79', height: '100%', color: '#fff' }}>1</div>
  <div style={{ background: '#64b5f6', height: '100%', color: '#fff' }}>2</div>
  <div style={{ background: '#81c784', height: '100%', color: '#fff' }}>3</div>
</Carousel>
```

- 自动播放与自定义速度：

```jsx
<Carousel autoplay autoplaySpeed={2000} style={{ width: 400, height: 200 }}>
  {...}
</Carousel>
```

- 淡入淡出：

```jsx
<Carousel effect="fade" style={{ width: 400, height: 200 }}>
  {...}
</Carousel>
```

- 指示器样式与位置：

```jsx
// 条形指示器，顶部位置
<Carousel dots dotsType="bar" dotsPosition="top" style={{ width: 400, height: 200 }}>
  {...}
</Carousel>

// 圆点指示器，右侧位置
<Carousel dots dotsType="dot" dotsPosition="right" style={{ width: 400, height: 200 }}>
  {...}
</Carousel>
```

- 控制左右箭头显示：

```jsx
// 仅显示右箭头
<Carousel arrows showPrevArrow={false} showNextArrow style={{ width: 400, height: 200 }}>
  {...}
</Carousel>

// 仅显示左箭头
<Carousel arrows showPrevArrow showNextArrow={false} style={{ width: 400, height: 200 }}>
  {...}
</Carousel>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | true |
| autoplaySpeed | 自动切换间隔（ms） | number | 3000 |
| dots | 是否显示指示点 | boolean | true |
| dotsType | 指示器类型，圆点或条形 | 'dot' | 'bar' | 'dot' |
| dotsPosition | 指示器位置 | 'bottom' | 'top' | 'left' | 'right' | 'bottom' |
| arrows | 是否显示左右箭头 | boolean | true |
| showPrevArrow | 是否显示左箭头（在 arrows 为 true 时生效） | boolean | true |
| showNextArrow | 是否显示右箭头（在 arrows 为 true 时生效） | boolean | true |
| infinite | 是否循环 | boolean | true |
| initialSlide | 初始索引 | number | 0 |
| effect | 切换效果，`slide` 或 `fade` | string | 'slide' |
| pauseOnHover | 鼠标移入时是否暂停 | boolean | true |
| beforeChange | 切换前回调 | (from, to) => void | - |
| afterChange | 切换后回调 | (current) => void | - |


