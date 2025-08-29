import React from 'react';
import { Image, Space } from 'components';
import './style.less';

const ImageDoc = () => {
  return (
    <div className="image-doc">
      <h1>Image 图片</h1>

      <section>
        <h2>介绍</h2>
        <p>用于展示图片，支持懒加载、占位、失败兜底，以及点击预览放大查看。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Image } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <div className="demo">
            <Image src="https://picsum.photos/420/240" width={420} height={240} />
          </div>
          <pre className="code">{`<Image src="https://picsum.photos/420/240" width={420} height={240} />`}</pre>
        </div>

        <div className="example">
          <h3>懒加载与占位</h3>
          <div className="demo">
            <Space>
              <Image src="https://picsum.photos/640/360" width={320} height={180} lazy />
              <Image src="https://picsum.photos/640/360" width={320} height={180} lazy placeholder={<span>Loading...</span>} />
            </Space>
          </div>
          <pre className="code">{`<Image src="https://picsum.photos/640/360" width={320} height={180} lazy />
<Image src="https://picsum.photos/640/360" width={320} height={180} lazy placeholder={<span>Loading...</span>} />`}</pre>
        </div>

        <div className="example">
          <h3>加载失败兜底与适应模式</h3>
          <div className="demo">
            <Space>
              <Image src="https://example.com/not-exists.jpg" fallback="https://picsum.photos/400/200" width={320} height={180} />
              <Image src="https://picsum.photos/400/200" width={240} height={160} fit="contain" />
            </Space>
          </div>
          <pre className="code">{`<Image src="bad.jpg" fallback="https://picsum.photos/320/180" width={320} height={180} />
<Image src="https://picsum.photos/400/200" width={240} height={160} fit="contain" />`}</pre>
        </div>

        <div className="example">
          <h3>点击预览</h3>
          <div className="demo">
            <Image src="https://picsum.photos/800/450" width={320} height={180} preview />
          </div>
          <pre className="code">{`<Image src="https://picsum.photos/800/450" width={320} height={180} preview />`}</pre>
        </div>

      </section>

      <section>
        <h2>API</h2>
        <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>src</td><td>图片地址</td><td>string</td><td>-</td></tr>
            <tr><td>alt</td><td>替代文本</td><td>string</td><td>-</td></tr>
            <tr><td>width</td><td>宽度</td><td>number | string</td><td>-</td></tr>
            <tr><td>height</td><td>高度</td><td>number | string</td><td>-</td></tr>
            <tr><td>fit</td><td>对象适应方式</td><td>'contain' | 'cover' | 'fill' | 'none' | 'scale-down'</td><td>'cover'</td></tr>
            <tr><td>placeholder</td><td>加载中占位</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>fallback</td><td>加载失败兜底图片</td><td>string</td><td>-</td></tr>
            <tr><td>lazy</td><td>是否懒加载</td><td>boolean</td><td>false</td></tr>
            <tr><td>preview</td><td>点击预览大图</td><td>boolean</td><td>true</td></tr>
            <tr><td>onLoad</td><td>加载完成回调</td><td>(e) =&gt; void</td><td>-</td></tr>
            <tr><td>onError</td><td>加载失败回调</td><td>(e) =&gt; void</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ImageDoc;


