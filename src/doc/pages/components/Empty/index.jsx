import React from 'react';
import { Empty, Button } from 'components';

const EmptyDoc = () => {
    return (
        <div className="empty-doc">
            <h1>Empty 空状态</h1>

            <section>
                <h2>介绍</h2>
                <p>空状态时的展示占位图。</p>
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
                    <h3>基本使用</h3>
                    <p>最简单的占位图。</p>
                    <div className="demo">
                        <Empty />
                    </div>
                    <pre className="code">
                        {`<Empty />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>不同状态</h3>
                    <p>展示不同状态的空状态。</p>
                    <div className="demo" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                        <div style={{ width: '200px', textAlign: 'center' }}>
                            <Empty status="404" description="页面未找到" />
                            <p>404</p>
                        </div>
                        <div style={{ width: '200px', textAlign: 'center' }}>
                            <Empty status="500" description="服务器错误" />
                            <p>500</p>
                        </div>
                        <div style={{ width: '200px', textAlign: 'center' }}>
                            <Empty status="403" description="无权限访问" />
                            <p>403</p>
                        </div>
                    
                    </div>
                    <pre className="code">
                        {`<Empty status="404" description="页面未找到" />
<Empty status="500" description="服务器错误" />
<Empty status="403" description="无权限访问" />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义图片</h3>
                    <p>使用自定义图片。</p>
                    <div className="demo">
                        <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
                    </div>
                    <pre className="code">
                        {`<Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义图片大小</h3>
                    <p>自定义图片大小。</p>
                    <div className="demo">
                        <Empty 
                            imageStyle={{ width: '80px' }}
                            description="调整图片大小"
                        />
                    </div>
                    <pre className="code">
                        {`<Empty 
  imageStyle={{ width: '80px' }}
  description="调整图片大小"
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
                    <h3>操作按钮</h3>
                    <p>添加操作按钮。</p>
                    <div className="demo">
                        <Empty
                            status="404"
                            description="页面未找到"
                            actions={[
                                <Button type="primary" key="back" onClick={() => alert('返回上页')}>
                                    返回上页
                                </Button>,
                                <Button key="home" onClick={() => alert('回到首页')}>
                                    回到首页
                                </Button>
                            ]}
                        />
                    </div>
                    <pre className="code">
                        {`<Empty
  status="404"
  description="页面未找到"
  actions={[
    <Button type="primary" key="back" onClick={() => window.history.back()}>
      返回上页
    </Button>,
    <Button key="home" onClick={() => window.location.href = '/'}>
      回到首页
    </Button>
  ]}
/>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>额外内容</h3>
                    <p>可以添加额外内容。</p>
                    <div className="demo">
                        <Empty
                            description="暂无数据"
                        >
                            <Button type="primary">创建数据</Button>
                        </Empty>
                    </div>
                    <pre className="code">
                        {`<Empty description="暂无数据">
  <Button type="primary">创建数据</Button>
</Empty>`}
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
                            <td>status</td>
                            <td>状态类型，可选值：empty、404、401、403、500、permission</td>
                            <td>string</td>
                            <td>'empty'</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>自定义类名</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>description</td>
                            <td>自定义描述内容</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>image</td>
                            <td>自定义图片地址</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>imageStyle</td>
                            <td>图片样式</td>
                            <td>CSSProperties</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>actions</td>
                            <td>自定义操作按钮</td>
                            <td>ReactNode | ReactNode[]</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>额外内容</td>
                            <td>ReactNode</td>
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

export default EmptyDoc; 