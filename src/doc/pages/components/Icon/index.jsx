import React from 'react';
import { Icon, Button, Space } from 'components';
import './style.less';

const IconDoc = () => {
    return (
        <div className="icon-doc">
            <h1>Icon 图标</h1>

            <section>
                <h2>介绍</h2>
                <p>放置一个图标。</p>
                <p>图标引入第三方图标库：https://iconpark.oceanengine.com/</p>
                <p>Icon中的name属性来源于这个网站中的名称</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Icon } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基本使用</h3>
                    <p>展示基本的图标使用方式。</p>
                    <div className="demo">
                        <Space>
                            <Icon name='Aiming' />
                            <Icon name='AcceptEmail' />
                            <Icon name='Home' />
                            <Icon name='System' />
                        </Space>
                    </div>
                    <pre className="code">
                        {`<Space>
  <Icon name='Aiming' />
  <Icon name='AcceptEmail' />
  <Icon name='Home' />
  <Icon name='System' />
</Space>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>设置特殊属性</h3>
                    <p>可以设置图标的主题、颜色和大小。</p>
                    <div className="demo">
                        <Space>
                            <Icon name='Aiming' theme='filled' />
                            <Icon name='AllApplication' theme='filled' fill='#1890ff' />
                            <Icon name='Home' size={30} />
                            <Icon name='System' fill='#f00' />
                        </Space>
                    </div>
                    <pre className="code">
                        {`<Space>
  <Icon name='Aiming' theme='filled' />
  <Icon name='AllApplication' theme='filled' fill='#1890ff' />
  <Icon name='Home' size={30} />
  <Icon name='System' fill='#f00' />
</Space>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>按钮中使用</h3>
                    <p>在按钮中使用图标。</p>
                    <div className="demo">
                        <Space>
                            <Button icon='Aiming' />
                            <Button icon='AllApplication' theme='filled' />
                            <Button icon='Aiming'>定位</Button>
                        </Space>
                    </div>
                    <pre className="code">
                        {`<Space>
  <Button icon='Aiming' />
  <Button icon='AllApplication' theme='filled' />
  <Button icon='Aiming'>定位</Button>
</Space>`}
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
                            <td>name</td>
                            <td>图标的名称</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>theme</td>
                            <td>图标的主题</td>
                            <td>`outline` | `filled`</td>
                            <td>`outline`</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>图标的大小</td>
                            <td>number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>fill</td>
                            <td>图标的颜色</td>
                            <td>string</td>
                            <td>#000000</td>
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
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default IconDoc;
