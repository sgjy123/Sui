import React from 'react';
import { Timeline } from 'components';
import './style.less';

const TimelineDoc = () => {
    return (
        <div className="timeline-doc">
            <h1>Timeline 时间轴</h1>

            <section>
                <h2>介绍</h2>
                <p>垂直展示的时间流信息。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Timeline } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基础用法</h3>
                    <p>基础的时间轴。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
                            <Timeline.Item>初步完成 2023-01-02</Timeline.Item>
                            <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
                            <Timeline.Item>发布上线 2023-01-04</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
  <Timeline.Item>初步完成 2023-01-02</Timeline.Item>
  <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
  <Timeline.Item>发布上线 2023-01-04</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义颜色</h3>
                    <p>可以设置不同的颜色来区分不同状态。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item color="green">创建项目 2023-01-01</Timeline.Item>
                            <Timeline.Item color="blue">初步完成 2023-01-02</Timeline.Item>
                            <Timeline.Item color="red">测试通过 2023-01-03</Timeline.Item>
                            <Timeline.Item color="gray">发布上线 2023-01-04</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item color="green">创建项目 2023-01-01</Timeline.Item>
  <Timeline.Item color="blue">初步完成 2023-01-02</Timeline.Item>
  <Timeline.Item color="red">测试通过 2023-01-03</Timeline.Item>
  <Timeline.Item color="gray">发布上线 2023-01-04</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>最后一个节点</h3>
                    <p>当任务状态正在发生，还在记录中，可用幽灵节点来表示当前的时间节点。</p>
                    <div className="demo">
                        <Timeline pending="正在记录..." reverse={false}>
                            <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
                            <Timeline.Item>初步完成 2023-01-02</Timeline.Item>
                            <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline pending="正在记录..." reverse={false}>
  <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
  <Timeline.Item>初步完成 2023-01-02</Timeline.Item>
  <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>交替展现</h3>
                    <p>内容在时间轴两侧交替出现。</p>
                    <div className="demo">
                        <Timeline mode="alternate">
                            <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
                            <Timeline.Item color="green">初步完成 2023-01-02</Timeline.Item>
                            <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
                            <Timeline.Item color="red">发布上线 2023-01-04</Timeline.Item>
                            <Timeline.Item>项目总结 2023-01-05</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline mode="alternate">
  <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
  <Timeline.Item color="green">初步完成 2023-01-02</Timeline.Item>
  <Timeline.Item>测试通过 2023-01-03</Timeline.Item>
  <Timeline.Item color="red">发布上线 2023-01-04</Timeline.Item>
  <Timeline.Item>项目总结 2023-01-05</Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义时间轴点</h3>
                    <p>可以设置为图标或其他自定义元素。</p>
                    <div className="demo">
                        <Timeline>
                            <Timeline.Item dot={<div style={{ background: '#1890ff', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                创建项目 2023-01-01
                            </Timeline.Item>
                            <Timeline.Item dot={<div style={{ background: '#52c41a', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                初步完成 2023-01-02
                            </Timeline.Item>
                            <Timeline.Item dot={<div style={{ background: '#faad14', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                测试通过 2023-01-03
                            </Timeline.Item>
                            <Timeline.Item dot={<div style={{ background: '#f5222d', borderRadius: '50%', width: '16px', height: '16px' }} />}>
                                发布上线 2023-01-04
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline>
  <Timeline.Item dot={<div style={{ background: '#1890ff', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    创建项目 2023-01-01
  </Timeline.Item>
  <Timeline.Item dot={<div style={{ background: '#52c41a', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    初步完成 2023-01-02
  </Timeline.Item>
  <Timeline.Item dot={<div style={{ background: '#faad14', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    测试通过 2023-01-03
  </Timeline.Item>
  <Timeline.Item dot={<div style={{ background: '#f5222d', borderRadius: '50%', width: '16px', height: '16px' }} />}>
    发布上线 2023-01-04
  </Timeline.Item>
</Timeline>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>标签</h3>
                    <p>使用 label 标签单独展示时间。</p>
                    <div className="demo">
                        <Timeline mode="left">
                            <Timeline.Item label="2023-01-01">创建项目</Timeline.Item>
                            <Timeline.Item label="2023-01-02">初步完成</Timeline.Item>
                            <Timeline.Item label="2023-01-03">测试通过</Timeline.Item>
                            <Timeline.Item label="2023-01-04">发布上线</Timeline.Item>
                        </Timeline>
                    </div>
                    <pre className="code">
                        {`<Timeline mode="left">
  <Timeline.Item label="2023-01-01">创建项目</Timeline.Item>
  <Timeline.Item label="2023-01-02">初步完成</Timeline.Item>
  <Timeline.Item label="2023-01-03">测试通过</Timeline.Item>
  <Timeline.Item label="2023-01-04">发布上线</Timeline.Item>
</Timeline>`}
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
                            <td>pending</td>
                            <td>指定最后一个幽灵节点是否存在或内容</td>
                            <td>boolean | ReactNode</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>reverse</td>
                            <td>是否倒序展示</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>通过设置 mode 可以改变时间轴和内容的相对位置</td>
                            <td>'left' | 'alternate' | 'right'</td>
                            <td>-</td>
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
                            <td>blue</td>
                        </tr>
                        <tr>
                            <td>dot</td>
                            <td>自定义时间轴点</td>
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
                            <td>label</td>
                            <td>设置标签</td>
                            <td>ReactNode</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default TimelineDoc;
