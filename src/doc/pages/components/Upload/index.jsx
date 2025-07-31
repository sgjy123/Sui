import React, { useState } from 'react';
import { Upload } from '../../../../components';

const UploadDemo = () => {
  const [fileList, setFileList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <div className="sui-doc">
      <h1>Upload 上传组件</h1>
      <section>
        <h2>介绍</h2>
        <p>
          用于文件选择和上传，支持多文件、受控/非受控、禁用、文件列表、删除、进度、图片/文件预览、卡片模式、文件校验等。
        </p>
      </section>
      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Upload } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最基础的上传用法。</p>
          <div className="demo">
            <Upload />
          </div>
          <pre className="code">{`<Upload />`}</pre>
        </div>

        <div className="example">
          <h3>多文件上传</h3>
          <p>支持多文件选择上传。</p>
          <div className="demo">
            <Upload multiple />
          </div>
          <pre className="code">{`<Upload multiple />`}</pre>
        </div>

        <div className="example">
          <h3>受控用法</h3>
          <p>受控管理文件列表。</p>
          <div className="demo">
            <Upload fileList={fileList} onChange={({ fileList }) => setFileList(fileList)} />
          </div>
          <pre className="code">{`const [fileList, setFileList] = useState([]);
<Upload fileList={fileList} onChange={({ fileList }) => setFileList(fileList)} />`}</pre>
        </div>

        <div className="example">
          <h3>禁用</h3>
          <p>禁用状态下的上传按钮。</p>
          <div className="demo">
            <Upload disabled />
          </div>
          <pre className="code">{`<Upload disabled />`}</pre>
        </div>

        <div className="example">
          <h3>图片列表模式</h3>
          <p>以图片列表形式展示上传文件。</p>
          <div className="demo">
            <Upload listType="picture" />
          </div>
          <pre className="code">{`<Upload listType="picture" />`}</pre>
        </div>

        <div className="example">
          <h3>图片卡片模式</h3>
          <p>以卡片形式展示图片，适合图片墙。</p>
          <div className="demo">
            <Upload listType="picture-card" multiple />
          </div>
          <pre className="code">{`<Upload listType="picture-card" />`}</pre>
        </div>

        <div className="example">
          <h3>文件校验</h3>
          <p>限制最大文件数、文件大小、文件类型，校验失败时有回调。</p>
          <div className="demo">
            <Upload
              maxCount={2}
              maxSize={1024 * 1024}
              accept="image/*"
              onChange={({ error }) => setErrorMsg(error ? `上传失败: ${error}` : '')}
            />
            {errorMsg && <div style={{ color: 'red', marginTop: 8 }}>{errorMsg}</div>}
          </div>
          <pre className="code">{`<Upload
  maxCount={2}
  maxSize={1024*1024}
  accept="image/*"
  onChange={({ error }) => setErrorMsg(error ? \`上传失败: \${error}\` : '')}
/>`}</pre>
        </div>

        <div className="example">
          <h3>自定义按钮</h3>
          <p>自定义上传按钮内容。</p>
          <div className="demo">
            <Upload>
              <span>自定义按钮</span>
            </Upload>
          </div>
          <pre className="code">{`<Upload><span>自定义按钮</span></Upload>`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>action</td>
              <td>上传地址（未实现，仅模拟）</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>headers</td>
              <td>请求头</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>data</td>
              <td>额外参数</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>withCredentials</td>
              <td>跨域携带cookie</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>accept</td>
              <td>接受的文件类型</td>
              <td>string</td>
              <td>'*'</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否多选</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>showUploadList</td>
              <td>是否展示文件列表</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>listType</td>
              <td>列表样式 'text'/'picture'/'picture-card'</td>
              <td>string</td>
              <td>'text'</td>
            </tr>
            <tr>
              <td>maxCount</td>
              <td>最大文件数</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>maxSize</td>
              <td>单文件最大字节数</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>fileList</td>
              <td>受控文件列表</td>
              <td>array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultFileList</td>
              <td>默认文件列表</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>文件变化回调</td>
              <td>function(&#123; file, fileList, error &#125;)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onRemove</td>
              <td>删除文件回调，返回false阻止删除</td>
              <td>function(file)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>beforeUpload</td>
              <td>上传前回调，返回false阻止上传</td>
              <td>function(file)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义类名</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>children</td>
              <td>自定义按钮内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UploadDemo;
