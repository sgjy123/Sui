import React from 'react';
import { Tag, Icon } from 'components';
import './style.less';

const TagDoc = () => {
    return (
        <div className="tag-doc">
            <h1>Tag 标签</h1>

            <section>
                <h2>介绍</h2>
                <p>用于展示分类、标签或状态信息。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Tag } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基础用法</h3>
                    <p>展示不同状态的标签。</p>
                    <div className="demo">
                        <Tag>默认标签</Tag>
                        <Tag color="success">成功标签</Tag>
                        <Tag color="processing">进行中标签</Tag>
                        <Tag color="error">错误标签</Tag>
                        <Tag color="warning">警告标签</Tag>
                    </div>
                    <pre className="code">
                        {`<Tag>默认标签</Tag>
<Tag color="success">成功标签</Tag>
<Tag color="processing">进行中标签</Tag>
<Tag color="error">错误标签</Tag>
<Tag color="warning">警告标签</Tag>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>预设颜色</h3>
                    <p>展示所有预设颜色的标签。</p>
                    <div className="demo">
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                    <pre className="code">
                        {`<Tag color="magenta">magenta</Tag>
<Tag color="red">red</Tag>
<Tag color="volcano">volcano</Tag>
<Tag color="orange">orange</Tag>
<Tag color="gold">gold</Tag>
<Tag color="lime">lime</Tag>
<Tag color="green">green</Tag>
<Tag color="cyan">cyan</Tag>
<Tag color="blue">blue</Tag>
<Tag color="geekblue">geekblue</Tag>
<Tag color="purple">purple</Tag>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义颜色</h3>
                    <p>使用自定义颜色。</p>
                    <div className="demo">
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                    <pre className="code">
                        {`<Tag color="#f50">#f50</Tag>
<Tag color="#2db7f5">#2db7f5</Tag>
<Tag color="#87d068">#87d068</Tag>
<Tag color="#108ee9">#108ee9</Tag>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>可关闭标签</h3>
                    <p>可关闭的标签。</p>
                    <div className="demo">
                        <Tag closable onClose={() => alert('关闭标签')}>
                            可关闭标签
                        </Tag>
                    </div>
                    <pre className="code">
                        {`<Tag closable onClose={() => console.log('关闭标签')}>
  可关闭标签
</Tag>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>带图标的标签</h3>
                    <p>带图标的标签。</p>
                    <div className="demo">
                        <Tag icon={<Icon name="CheckOne" theme="filled" size={16} />} color="success" closable>
                            成功
                        </Tag>
                        <Tag icon={<Icon name="Loading" theme="outline" size={16} />} color="processing" closable>
                            处理中
                        </Tag>
                        <Tag icon={<Icon name="Close" theme="filled" size={16} />} color="error" closable>
                            错误
                        </Tag>
                        <Tag icon={<Icon name="Attention" theme="filled" size={16} />} color="warning" closable>
                            警告
                        </Tag>
                    </div>
                    <pre className="code">
                        {`import { Tag, Icon } from 'Sui';

<Tag icon={<Icon name="CheckOne" theme="filled" size={16} />} color="success" closable>
  成功
</Tag>
<Tag icon={<Icon name="Loading" theme="outline" size={16} />} color="processing" closable>
  处理中
</Tag>
<Tag icon={<Icon name="Close" theme="filled" size={16} />} color="error" closable>
  错误
</Tag>
<Tag icon={<Icon name="Warning" theme="filled" size={16} />} color="warning" closable>
  警告
</Tag>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>无边框标签</h3>
                    <p>无边框的标签。</p>
                    <div className="demo">
                        <Tag bordered={false} color="success">
                            无边框标签
                        </Tag>
                        <Tag bordered={false} color="processing">
                            无边框标签
                        </Tag>
                        <Tag bordered={false} color="error">
                            无边框标签
                        </Tag>
                        <Tag bordered={false} color="warning">
                            无边框标签
                        </Tag>
                    </div>
                    <pre className="code">
                        {`<Tag bordered={false} color="success">
  无边框标签
</Tag>
<Tag bordered={false} color="processing">
  无边框标签
</Tag>
<Tag bordered={false} color="error">
  无边框标签
</Tag>
<Tag bordered={false} color="warning">
  无边框标签
</Tag>`}
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
                            <td>color</td>
                            <td>标签颜色</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否可关闭</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭时的回调</td>
                            <td>{`(e) => void`}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>bordered</td>
                            <td>是否有边框</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置图标</td>
                            <td>ReactNode</td>
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
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default TagDoc; 