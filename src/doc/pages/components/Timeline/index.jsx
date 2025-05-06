import React from 'react';
import Timeline from '../../../../components/Timeline/index.jsx';
import Divider from '../../../../components/Divider/index.jsx';

const TimelineDoc = () => {
    return (
        <div className="timeline-doc">
            <h1>Timeline 时间轴</h1>

            <section>
                <h2>介绍</h2>
                <p>垂直展示的时间流信息，常用于展示一系列的信息内容。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import Timeline from '../components/Timeline';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基本用法</h3>
                    <p>基本的时间轴。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
                            <Timeline.Item>解决初始网络问题 2023-09-01</Timeline.Item>
                            <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
                            <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
  <Timeline.Item>解决初始网络问题 2023-09-01</Timeline.Item>
  <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
  <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>不同颜色</h3>
                    <p>可以设置不同的颜色，表示不同的状态。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item color="green">创建服务 2023-09-01</Timeline.Item>
                            <Timeline.Item color="green">解决初始网络问题 2023-09-01</Timeline.Item>
                            <Timeline.Item color="red">严重故障 2023-09-01</Timeline.Item>
                            <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item color="green">创建服务 2023-09-01</Timeline.Item>
  <Timeline.Item color="green">解决初始网络问题 2023-09-01</Timeline.Item>
  <Timeline.Item color="red">严重故障 2023-09-01</Timeline.Item>
  <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>最后一个节点</h3>
                    <p>当任务状态正在发生，还在记录中，可用幽灵节点来表示当前的时间节点。</p>
                    <div className="demo">
                        <Timeline pending="正在记录..." reverse={false}>
                            <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
                            <Timeline.Item>解决初始网络问题 2023-09-01</Timeline.Item>
                            <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline pending="正在记录..." reverse={false}>
  <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
  <Timeline.Item>解决初始网络问题 2023-09-01</Timeline.Item>
  <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>交替展现</h3>
                    <p>内容在时间轴两侧交替出现。</p>
                    <div className="demo">
                        <Timeline mode="alternate">
                            <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
                            <Timeline.Item color="green">解决初始网络问题 2023-09-01</Timeline.Item>
                            <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
                            <Timeline.Item color="red">网络问题正在解决 2023-09-01</Timeline.Item>
                            <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline mode="alternate">
  <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
  <Timeline.Item color="green">解决初始网络问题 2023-09-01</Timeline.Item>
  <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
  <Timeline.Item color="red">网络问题正在解决 2023-09-01</Timeline.Item>
  <Timeline.Item>创建服务 2023-09-01</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义时间轴点</h3>
                    <p>可以设置为图标或其他自定义元素。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item dot={<div style={{ background: '#1890ff', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                创建服务 2023-09-01
                            </Timeline.Item>
                            <Timeline.Item dot={<div style={{ background: '#52c41a', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                解决初始网络问题 2023-09-01
                            </Timeline.Item>
                            <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
                            <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item dot={<div style={{ background: '#1890ff', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    创建服务 2023-09-01
  </Timeline.Item>
  <Timeline.Item dot={<div style={{ background: '#52c41a', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    解决初始网络问题 2023-09-01
  </Timeline.Item>
  <Timeline.Item>技术测试 2023-09-01</Timeline.Item>
  <Timeline.Item>网络问题正在解决 2023-09-01</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>标签</h3>
                    <p>使用 label 标签单独展示时间。</p>
                    <div className="demo">
                        <Timeline mode="left">
                            <Timeline.Item label="2023-09-01">创建服务</Timeline.Item>
                            <Timeline.Item label="2023-09-01">解决初始网络问题</Timeline.Item>
                            <Timeline.Item label="2023-09-01">技术测试</Timeline.Item>
                            <Timeline.Item label="2023-09-01">网络问题正在解决</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline mode="left">
  <Timeline.Item label="2023-09-01">创建服务</Timeline.Item>
  <Timeline.Item label="2023-09-01">解决初始网络问题</Timeline.Item>
  <Timeline.Item label="2023-09-01">技术测试</Timeline.Item>
  <Timeline.Item label="2023-09-01">网络问题正在解决</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>
            </section>

            <Divider />

            <section>
                <h2>API</h2>
                
                <h3>Timeline</h3>
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
                            <td>mode</td>
                            <td>通过设置 mode 可以改变时间轴和内容的相对位置</td>
                            <td>'left' | 'alternate' | 'right'</td>
                            <td>'right'</td>
                        </tr>
                        <tr>
                            <td>pending</td>
                            <td>指定最后一个幽灵节点是否存在或内容</td>
                            <td>boolean | ReactNode</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>pendingDot</td>
                            <td>当最后一个幽灵节点存在時，指定其时间图点</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>reverse</td>
                            <td>节点排序方向</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Timeline.Item</h3>
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
                            <td>指定圆圈颜色</td>
                            <td>string</td>
                            <td>'blue'</td>
                        </tr>
                        <tr>
                            <td>dot</td>
                            <td>自定义时间轴点</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>设置标签</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>自定义节点位置</td>
                            <td>'left' | 'right'</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tailStyle</td>
                            <td>自定义轴线样式，特别是当自定义圆点样式时防止轴线位置错乱</td>
                            <td>object</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default TimelineDoc;