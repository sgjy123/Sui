import React from 'react';
import Tooltip from '../../../../components/Tooltip/index.jsx';

const TooltipDoc = () => {
    return (
        <div className="tooltip-doc">
            <h1>Tooltip 文字提示</h1>

            <section>
                <h2>介绍</h2>
                <p>简单的文字提示气泡框，当鼠标悬停、聚焦或点击在一个元素上时，弹出的文字提示。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import Tooltip from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基本使用</h3>
                    <p>最简单的用法。</p>
                    <div className="demo">
                        <Tooltip title="这是一个提示文字">
                            <span>鼠标移到这里</span>
                        </Tooltip>
                    </div>
                    <pre className="code">
                        {`<Tooltip title="这是一个提示文字">
  <span>鼠标移到这里</span>
</Tooltip>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>不同的弹出位置</h3>
                    <p>支持 4 个不同的方向显示。</p>
                    <div className="demo" style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
                        <Tooltip placement="top" title="Top 提示文字">
                            <button style={{ margin: '0 10px' }}>上</button>
                        </Tooltip>
                        <Tooltip placement="left" title="Left 提示文字">
                            <button style={{ margin: '0 10px' }}>左</button>
                        </Tooltip>
                        <Tooltip placement="right" title="Right 提示文字">
                            <button style={{ margin: '0 10px' }}>右</button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Bottom 提示文字">
                            <button style={{ margin: '0 10px' }}>下</button>
                        </Tooltip>
                    </div>
                    <pre className="code">
                        {`<Tooltip placement="top" title="Top 提示文字">
  <button>上</button>
</Tooltip>
<Tooltip placement="left" title="Left 提示文字">
  <button>左</button>
</Tooltip>
<Tooltip placement="right" title="Right 提示文字">
  <button>右</button>
</Tooltip>
<Tooltip placement="bottom" title="Bottom 提示文字">
  <button>下</button>
</Tooltip>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>不同的触发方式</h3>
                    <p>鼠标移入或点击触发。</p>
                    <div className="demo">
                        <Tooltip trigger="hover" title="鼠标移入触发">
                            <button style={{ margin: '0 10px' }}>移入</button>
                        </Tooltip>
                        <Tooltip trigger="click" title="鼠标点击触发">
                            <button style={{ margin: '0 10px' }}>点击</button>
                        </Tooltip>
                    </div>
                    <pre className="code">
                        {`<Tooltip trigger="hover" title="鼠标移入触发">
  <button>移入</button>
</Tooltip>
<Tooltip trigger="click" title="鼠标点击触发">
  <button>点击</button>
</Tooltip>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>自定义颜色</h3>
                    <p>可以自定义背景颜色。</p>
                    <div className="demo">
                        <Tooltip title="这是红色背景" color="#f50">
                            <button style={{ margin: '0 10px' }}>红色</button>
                        </Tooltip>
                        <Tooltip title="这是蓝色背景" color="#1890ff">
                            <button style={{ margin: '0 10px' }}>蓝色</button>
                        </Tooltip>
                        <Tooltip title="这是绿色背景" color="#52c41a">
                            <button style={{ margin: '0 10px' }}>绿色</button>
                        </Tooltip>
                    </div>
                    <pre className="code">
                        {`<Tooltip title="这是红色背景" color="#f50">
  <button>红色</button>
</Tooltip>
<Tooltip title="这是蓝色背景" color="#1890ff">
  <button>蓝色</button>
</Tooltip>
<Tooltip title="这是绿色背景" color="#52c41a">
  <button>绿色</button>
</Tooltip>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>长文本</h3>
                    <p>长文本自动折行。</p>
                    <div className="demo">
                        <Tooltip title="这是一段很长的提示文字，当文字内容过长时会自动折行，确保内容能够完整显示，不会因为宽度限制而被截断。这样可以提供更好的用户体验，让用户能够看到完整的提示信息。">
                            <button>长文本提示</button>
                        </Tooltip>
                    </div>
                    <pre className="code">
                        {`<Tooltip title="这是一段很长的提示文字，当文字内容过长时会自动折行，确保内容能够完整显示，不会因为宽度限制而被截断。这样可以提供更好的用户体验，让用户能够看到完整的提示信息。">
  <button>长文本提示</button>
</Tooltip>`}
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
                            <td>title</td>
                            <td>提示文字</td>
                            <td>ReactNode | () =&gt; ReactNode</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>气泡框位置</td>
                            <td>'top' | 'left' | 'right' | 'bottom'</td>
                            <td>'top'</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>触发行为</td>
                            <td>'hover' | 'click'</td>
                            <td>'hover'</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>背景颜色</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>overlayClassName</td>
                            <td>卡片类名</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>overlayStyle</td>
                            <td>卡片样式</td>
                            <td>object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>mouseEnterDelay</td>
                            <td>鼠标移入后延时多少才显示 Tooltip，单位：秒</td>
                            <td>number</td>
                            <td>0.1</td>
                        </tr>
                        <tr>
                            <td>mouseLeaveDelay</td>
                            <td>鼠标移出后延时多少才隐藏 Tooltip，单位：秒</td>
                            <td>number</td>
                            <td>0.1</td>
                        </tr>
                        <tr>
                            <td>arrow</td>
                            <td>是否显示箭头</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>用于手动控制浮层显隐</td>
                            <td>boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>onVisibleChange</td>
                            <td>显示隐藏的回调</td>
                            <td>(visible) =&gt; void</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>defaultVisible</td>
                            <td>默认是否显隐</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>destroyTooltipOnHide</td>
                            <td>关闭后是否销毁 Tooltip</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>getPopupContainer</td>
                            <td>浮层渲染父节点，默认渲染到 body 上</td>
                            <td>(triggerNode) =&gt; HTMLElement</td>
                            <td>() =&gt; document.body</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default TooltipDoc;
