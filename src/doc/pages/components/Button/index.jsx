import React from 'react';
import Button from '../../../../components/Button/index.jsx';

const ButtonDoc = () => {
    return (
        <div className="button-doc">
            <h1>Button 按钮组件</h1>

            <section>
                <h2>介绍</h2>
                <p>按钮用于开始一个即时操作，标记了一个（或封装一组）操作命令。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import {Button} from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>按钮类型</h3>
                    <p>按钮有五种类型：默认按钮、主要按钮、虚线按钮、文本按钮和链接按钮。</p>
                    <div className="demo">
                        <Button type="default">默认按钮</Button>
                        <Button type="primary">主要按钮</Button>
                        <Button type="dashed">虚线按钮</Button>
                        <Button type="text">文本按钮</Button>
                        <Button type="link">链接按钮</Button>
                    </div>
                    <pre className="code">
                        {`<Button type="default">默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button type="text">文本按钮</Button>
<Button type="link">链接按钮</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>按钮尺寸</h3>
                    <p>按钮有大、中、小三种尺寸。</p>
                    <div className="demo">
                        <Button size="large">大按钮</Button>
                        <Button size="middle">中按钮</Button>
                        <Button size="small">小按钮</Button>
                    </div>
                    <pre className="code">
                        {`<Button size="large">大按钮</Button>
<Button size="middle">中按钮</Button>
<Button size="small">小按钮</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>禁用状态</h3>
                    <p>按钮的禁用状态。</p>
                    <div className="demo">
                        <Button disabled>默认按钮(禁用)</Button>
                        <Button type="primary" disabled>主要按钮(禁用)</Button>
                    </div>
                    <pre className="code">
                        {`<Button disabled>默认按钮(禁用)</Button>
<Button type="primary" disabled>主要按钮(禁用)</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>加载状态</h3>
                    <p>添加 `loading` 属性即可让按钮处于加载状态。</p>
                    <div className="demo">
                        <Button loading>加载中</Button>
                        <Button type="primary" loading>加载中</Button>
                    </div>
                    <pre className="code">
                        {`<Button loading>加载中</Button>
<Button type="primary" loading>加载中</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>图标按钮</h3>
                    <p>当需要在 Button 内嵌入图标时，可以设置 `icon` 属性。</p>
                    <div className="demo">
                        <Button icon="Plus">添加</Button>
                        <Button icon="Delete" type="primary">删除</Button>
                        <Button icon="Download" iconPosition="end">下载</Button>
                    </div>
                    <pre className="code">
                        {`<Button icon="Plus">添加</Button>
<Button icon="Delete" type="primary">删除</Button>
<Button icon="Download" iconPosition="end">下载</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>按钮形状</h3>
                    <p>按钮可以设置不同的形状。</p>
                    <div className="demo">
                        <Button shape="default">默认按钮</Button>
                        <Button shape="circle" size='large'>1</Button>
                        <Button shape="circle">1</Button>
                        <Button shape="circle" icon='Download' />
                        <Button shape="round" type="primary">圆角按钮</Button>
                    </div>
                    <pre className="code">
                        {`<Button shape="default">默认按钮</Button>
<Button shape="circle" icon="Plus" />
<Button shape="round" type="primary">圆角按钮</Button>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>波纹效果</h3>
                    <p>可以控制按钮点击时是否显示波纹效果。</p>
                    <div className="demo">
                        <Button rippleEffect={true}>有波纹效果</Button>
                        <Button rippleEffect={false}>无波纹效果</Button>
                    </div>
                    <pre className="code">
                        {`<Button rippleEffect={true}>有波纹效果</Button>
<Button rippleEffect={false}>无波纹效果</Button>`}
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
                            <td>type</td>
                            <td>设置按钮类型</td>
                            <td>`default` | `primary` | `dashed` | `text` | `link`</td>
                            <td>`default`</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>设置按钮大小</td>
                            <td>`large` | `middle` | `small`</td>
                            <td>`middle`</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>按钮失效状态</td>
                            <td>`boolean`</td>
                            <td>`false`</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>设置按钮加载状态</td>
                            <td>`boolean`</td>
                            <td>`false`</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置按钮的图标组件</td>
                            <td>`string`</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>iconTheme</td>
                            <td>设置图标的主题</td>
                            <td>`outline` | `filled`</td>
                            <td>`outline`</td>
                        </tr>
                        <tr>
                            <td>iconPosition</td>
                            <td>设置图标位置</td>
                            <td>`start` | `end`</td>
                            <td>`start`</td>
                        </tr>
                        <tr>
                            <td>ghost</td>
                            <td>幽灵属性，使按钮背景透明</td>
                            <td>`boolean`</td>
                            <td>`false`</td>
                        </tr>
                        <tr>
                            <td>danger</td>
                            <td>设置危险按钮</td>
                            <td>`boolean`</td>
                            <td>`false`</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>将按钮宽度调整为其父宽度的选项</td>
                            <td>`boolean`</td>
                            <td>`false`</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>设置按钮形状</td>
                            <td>`default` | `circle` | `round`</td>
                            <td>`default`</td>
                        </tr>
                        <tr>
                            <td>rippleEffect</td>
                            <td>是否启用点击波纹效果</td>
                            <td>`boolean`</td>
                            <td>`true`</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>点击按钮时的回调</td>
                            <td>`(event) ={'>'} void`</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ButtonDoc;
