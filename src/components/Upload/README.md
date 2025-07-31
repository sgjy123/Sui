# Upload 上传组件

用于文件选择和上传，支持多文件、受控/非受控、禁用、文件列表、删除、进度、图片/文件预览、卡片模式、文件校验等。

## 何时使用
- 需要用户上传文件或图片时。
- 支持多文件、受控、禁用、进度、删除、图片预览、卡片模式、文件校验等常用场景。

## 引入
```jsx
import { Upload } from 'Sui';
```

## 代码演示 | Examples

### 基础用法 | Basic
```jsx
<Upload />
```

### 多文件上传 | Multiple
```jsx
<Upload multiple />
```

### 受控用法 | Controlled
```jsx
const [fileList, setFileList] = useState([]);
<Upload fileList={fileList} onChange={({ fileList }) => setFileList(fileList)} />
```

### 禁用 | Disabled
```jsx
<Upload disabled />
```

### 图片列表模式 | Picture List
```jsx
<Upload listType="picture" />
```

### 图片卡片模式 | Picture Card
```jsx
<Upload listType="picture-card" />
```

### 文件校验 | File Validation
```jsx
<Upload maxCount={2} maxSize={1024*1024} accept="image/*" />
```

### 自定义按钮 | Custom Button
```jsx
<Upload><span>自定义按钮</span></Upload>
```

## API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传地址（未实现，仅模拟） | string | - |
| headers | 请求头 | object | - |
| data | 额外参数 | object | - |
| withCredentials | 跨域携带cookie | boolean | false |
| accept | 接受的文件类型 | string | '*' |
| multiple | 是否多选 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| showUploadList | 是否展示文件列表 | boolean | true |
| listType | 列表样式 'text'/'picture'/'picture-card' | string | 'text' |
| maxCount | 最大文件数 | number | - |
| maxSize | 单文件最大字节数 | number | - |
| fileList | 受控文件列表 | array | - |
| defaultFileList | 默认文件列表 | array | [] |
| onChange | 文件变化回调 | function({ file, fileList, error }) | - |
| onRemove | 删除文件回调，返回false阻止删除 | function(file) | - |
| beforeUpload | 上传前回调，返回false阻止上传 | function(file) | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | object | - |
| children | 自定义按钮内容 | ReactNode | - | 