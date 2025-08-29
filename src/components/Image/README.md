# Image 图片

用于展示图片，支持懒加载、加载占位、失败兜底、点击预览等功能。

## 引入

```js
import { Image } from 'Sui';
```

## 代码演示

- 基础用法：

```jsx
<Image src="https://picsum.photos/400/240" width={400} height={240} />
```

- 懒加载与占位：

```jsx
<Image
  src="https://picsum.photos/640/360"
  width={320}
  height={180}
  lazy
  placeholder={<span>Loading...</span>}
/>
```

- 加载失败兜底：

```jsx
<Image
  src="https://example.com/not-exists.jpg"
  fallback="https://picsum.photos/320/180"
  width={320}
  height={180}
/>
```

- 点击预览：

```jsx
<Image src="https://picsum.photos/800/450" width={320} height={180} preview />
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | string | - |
| alt | 替代文本 | string | - |
| width | 宽度 | number \| string | - |
| height | 高度 | number \| string | - |
| fit | 对象适应方式 | 'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down' | 'cover' |
| placeholder | 加载中占位 | ReactNode | - |
| fallback | 加载失败兜底图片 | string | - |
| lazy | 是否懒加载 | boolean | false |
| preview | 是否启用点击预览 | boolean | true |
| onLoad | 加载完成回调 | (e) => void | - |
| onError | 加载失败回调 | (e) => void | - |


