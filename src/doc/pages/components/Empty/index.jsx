import React from 'react';
import { Empty, Button } from 'components';
import './style.less';

const EmptyDoc = () => {
    return (
        <div className="empty-doc">
            <h1>Empty 空状态</h1>

            <section>
                <h2>介绍</h2>
                <p>空状态时的展示占位组件。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Empty } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基础用法</h3>
                    <p>最简单的用法。</p>
                    <div className="demo">
                        <Empty />
                    </div>
                    <pre className="code">
                        {`<Empty />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义图片</h3>
                    <p>使用自定义图片。</p>
                    <div className="demo">
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                                height: 60,
                            }}
                        />
                    </div>
                    <pre className="code">
                        {`<Empty
  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  imageStyle={{
    height: 60,
  }}
/>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义描述</h3>
                    <p>自定义描述内容。</p>
                    <div className="demo">
                        <Empty description="暂无数据" />
                    </div>
                    <pre className="code">
                        {`<Empty description="暂无数据" />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义内容</h3>
                    <p>通过 children 自定义内容。</p>
                    <div className="demo">
                        <Empty>
                            <Button type="primary">创建</Button>
                        </Empty>
                    </div>
                    <pre className="code">
                        {`<Empty>
  <Button type="primary">创建</Button>
</Empty>`}
                    </pre>
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
                            <td>description</td>
                            <td>自定义描述内容</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>image</td>
                            <td>设置显示图片，为 string 时表示自定义图片地址</td>
                            <td>ReactNode</td>
                            <td>Empty.PRESENTED_IMAGE_DEFAULT</td>
                        </tr>
                        <tr>
                            <td>imageStyle</td>
                            <td>图片样式</td>
                            <td>CSSProperties</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>额外内容</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default EmptyDoc; 