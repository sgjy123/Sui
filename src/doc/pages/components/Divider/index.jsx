import React from 'react';
import { Divider, Button, Space } from 'components';
import './style.less';

const DividerDoc = () => {
    return (
        <div className="divider-doc">
            <h1>Divider 分割线</h1>

            <section>
                <h2>介绍</h2>
                <p>区隔内容的分割线。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Divider } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>水平分割线</h3>
                    <p>默认为水平分割线，可在中间加入文字。</p>
                    <div className="demo">
                        <p>这是一段文字</p>
                        <Divider />
                        <p>这是一段文字</p>
                        <Divider>文字</Divider>
                        <p>这是一段文字</p>
                    </div>
                    <pre className="code">
                        {`<p>这是一段文字</p>
<Divider />
<p>这是一段文字</p>
<Divider>文字</Divider>
<p>这是一段文字</p>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>带文字的分割线</h3>
                    <p>分割线中带有文字，可以用 orientation 指定文字位置。</p>
                    <div className="demo">
                        <Divider orientation="left">左侧文字</Divider>
                        <p>这是一段文字</p>
                        <Divider orientation="center">居中文字</Divider>
                        <p>这是一段文字</p>
                        <Divider orientation="right">右侧文字</Divider>
                        <p>这是一段文字</p>
                    </div>
                    <pre className="code">
                        {`<Divider orientation="left">左侧文字</Divider>
<p>这是一段文字</p>
<Divider orientation="center">居中文字</Divider>
<p>这是一段文字</p>
<Divider orientation="right">右侧文字</Divider>
<p>这是一段文字</p>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>垂直分割线</h3>
                    <p>使用 type="vertical" 设置为行内的垂直分割线。</p>
                    <div className="demo">
                        <Space>
                            <span>文本</span>
                            <Divider type="vertical" />
                            <Button type="link">链接</Button>
                            <Divider type="vertical" />
                            <Button type="primary">按钮</Button>
                        </Space>
                    </div>
                    <pre className="code">
                        {`<Space>
  <span>文本</span>
  <Divider type="vertical" />
  <Button type="link">链接</Button>
  <Divider type="vertical" />
  <Button type="primary">按钮</Button>
</Space>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>虚线</h3>
                    <p>可以设置为虚线。</p>
                    <div className="demo">
                        <p>这是一段文字</p>
                        <Divider dashed />
                        <p>这是一段文字</p>
                    </div>
                    <pre className="code">
                        {`<p>这是一段文字</p>
<Divider dashed />
<p>这是一段文字</p>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>普通文字</h3>
                    <p>使用 plain 可以设置为更轻量的分割文字样式。</p>
                    <div className="demo">
                        <Divider plain>文本</Divider>
                        <p>这是一段文字</p>
                        <Divider orientation="left" plain>左侧文本</Divider>
                        <p>这是一段文字</p>
                        <Divider orientation="right" plain>右侧文本</Divider>
                        <p>这是一段文字</p>
                    </div>
                    <pre className="code">
                        {`<Divider plain>文本</Divider>
<p>这是一段文字</p>
<Divider orientation="left" plain>左侧文本</Divider>
<p>这是一段文字</p>
<Divider orientation="right" plain>右侧文本</Divider>
<p>这是一段文字</p>`}
                    </pre>
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
                        <tr>
                            <td>className</td>
                            <td>分割线样式类</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>嵌套的标题</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>dashed</td>
                            <td>是否虚线</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>分割线标题的位置</td>
                            <td>'left' | 'right' | 'center'</td>
                            <td>'center'</td>
                        </tr>
                        <tr>
                            <td>orientationMargin</td>
                            <td>标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 'left' 或 'right'</td>
                            <td>string | number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>plain</td>
                            <td>文字是否显示为普通正文样式</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>分割线样式对象</td>
                            <td>CSSProperties</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>水平还是垂直类型</td>
                            <td>'horizontal' | 'vertical'</td>
                            <td>'horizontal'</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default DividerDoc;
