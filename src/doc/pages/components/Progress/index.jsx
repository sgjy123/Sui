import React, { useState } from 'react';
import { Progress, Button } from 'components';
import './style.less';

const ProgressDoc = () => {
  const [dynamicPercent, setDynamicPercent] = useState(0);
  const handleDynamic = () => {
    setDynamicPercent(prev => (prev >= 100 ? 0 : prev + 10));
  };

  return (
    <div className="progress-doc">
      <h1>Progress 进度条</h1>

      <section>
        <h2>介绍</h2>
        <p>用于展示操作的当前进度。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Progress } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最基本的进度条用法。</p>
          <div className="demo">
            <Progress percent={30} />
            <Progress percent={70} />
            <Progress percent={100} />
          </div>
          <pre className="code">{`<Progress percent={30} />
<Progress percent={70} />
<Progress percent={100} />`}</pre>
        </div>

        <div className="example">
          <h3>不同状态</h3>
          <p>支持 normal、success、exception、active 四种状态。</p>
          <div className="demo">
            <Progress percent={40} status="active" />
            <Progress percent={100} status="success" />
            <Progress percent={60} status="exception" />
          </div>
          <pre className="code">{`<Progress percent={40} status="active" />
<Progress percent={100} status="success" />
<Progress percent={60} status="exception" />`}</pre>
        </div>

        <div className="example">
          <h3>环形进度条</h3>
          <p>type 设置为 circle 展示环形进度条。</p>
          <div className="demo">
            <Progress type="circle" percent={30} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </div>
          <pre className="code">{`<Progress type="circle" percent={30} />
<Progress type="circle" percent={70} status="exception" />
<Progress type="circle" percent={100} />`}</pre>
        </div>

        <div className="example">
          <h3>自定义颜色</h3>
          <p>通过 strokeColor 设置进度条颜色。</p>
          <div className="demo">
            <Progress percent={50} strokeColor="#faad14" />
            <Progress type="circle" percent={75} strokeColor="#13c2c2" />
          </div>
          <pre className="code">{`<Progress percent={50} strokeColor="#faad14" />
<Progress type="circle" percent={75} strokeColor="#13c2c2" />`}</pre>
        </div>

        <div className="example">
          <h3>小尺寸</h3>
          <p>通过 size="small" 设置小尺寸进度条。</p>
          <div className="demo">
            <Progress percent={60} size="small" />
            <Progress type="circle" percent={60} size="small" />
          </div>
          <pre className="code">{`<Progress percent={60} size="small" />
<Progress type="circle" percent={60} size="small" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义文本</h3>
          <p>通过 format 自定义显示内容。</p>
          <div className="demo">
            <Progress percent={80} format={p => p + ' Days'} />
            <Progress type="circle" percent={80} format={p => '已完成' + p + '%'} />
          </div>
          <pre className="code">{`<Progress percent={80} format={p => p + ' Days'} />\n<Progress type="circle" percent={80} format={p => '已完成' + p + '%'} />`}</pre>
        </div>

        <div className="example">
          <h3>动态进度</h3>
          <p>点击按钮动态控制进度条的进度。</p>
          <div className="demo">
            <Button onClick={handleDynamic} style={{ marginBottom: 16 }}>增加进度</Button>
            <Progress percent={dynamicPercent} />
            <Progress percent={dynamicPercent} type='circle' />
          </div>
          <pre className="code">{`const [percent, setPercent] = useState(0);
<Button onClick={handleDynamic} style={{ marginBottom: 16 }}>增加进度</Button>
<Progress percent={dynamicPercent} />
<Progress percent={dynamicPercent} type='circle' />`}</pre>
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
            <tr><td>percent</td><td>百分比</td><td>number</td><td>0</td></tr>
            <tr><td>status</td><td>状态，可选 normal、success、exception、active</td><td>string</td><td>-</td></tr>
            <tr><td>showInfo</td><td>是否显示进度数值</td><td>bool</td><td>true</td></tr>
            <tr><td>size</td><td>进度条尺寸，default/small</td><td>string</td><td>default</td></tr>
            <tr><td>successPercent</td><td>成功分段百分比</td><td>number</td><td>-</td></tr>
            <tr><td>strokeColor</td><td>进度条颜色</td><td>string</td><td>-</td></tr>
            <tr><td>trailColor</td><td>轨道颜色</td><td>string</td><td>#f5f5f5</td></tr>
            <tr><td>strokeWidth</td><td>进度条宽度</td><td>number</td><td>8</td></tr>
            <tr><td>width</td><td>圆形进度条直径</td><td>number</td><td>120</td></tr>
            <tr><td>type</td><td>类型，line/circle</td><td>string</td><td>line</td></tr>
            <tr><td>format</td><td>自定义显示内容</td><td>function(percent)</td><td>-</td></tr>
            <tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr>
            <tr><td>style</td><td>自定义样式</td><td>object</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProgressDoc; 