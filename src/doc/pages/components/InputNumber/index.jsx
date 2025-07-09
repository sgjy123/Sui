import React, { useState } from 'react';
import { InputNumber } from 'components';
import './style.less';

const InputNumberDoc = () => {
  const [value, setValue] = useState(2);
  const [decimal, setDecimal] = useState(1.5);
  const [large, setLarge] = useState(10);
  const [middle, setMiddle] = useState(5);
  const [small, setSmall] = useState(1);

  return (
    <div className="inputnumber-doc">
      <h1>InputNumber 计数器</h1>

      <section>
        <h2>介绍</h2>
        <p>用于数字输入，支持加减按钮。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { InputNumber } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基本用法</h3>
          <div className="demo">
            <InputNumber />
          </div>
          <pre className="code">{`<InputNumber />`}</pre>
        </div>

        <div className="example">
          <h3>受控用法</h3>
          <div className="demo">
            <InputNumber value={value} onChange={setValue} />
            <span style={{ marginLeft: 8 }}>当前值: {value}</span>
          </div>
          <pre className="code">{`<InputNumber value={value} onChange={setValue} />`}</pre>
        </div>

        <div className="example">
          <h3>步长/最小值/最大值</h3>
          <div className="demo">
            <InputNumber min={1} max={10} step={2} defaultValue={3} />
          </div>
          <pre className="code">{`<InputNumber min={1} max={10} step={2} defaultValue={3} />`}</pre>
        </div>

        <div className="example">
          <h3>禁用</h3>
          <div className="demo">
            <InputNumber disabled defaultValue={5} />
          </div>
          <pre className="code">{`<InputNumber disabled defaultValue={5} />`}</pre>
        </div>

        <div className="example">
          <h3>只读</h3>
          <div className="demo">
            <InputNumber readOnly defaultValue={8} />
          </div>
          <pre className="code">{`<InputNumber readOnly defaultValue={8} />`}</pre>
        </div>

        <div className="example">
          <h3>小数与精度</h3>
          <div className="demo">
            <InputNumber step={0.1} precision={2} value={decimal} onChange={setDecimal} />
            <span style={{ marginLeft: 8 }}>当前值: {decimal}</span>
          </div>
          <pre className="code">{`<InputNumber step={0.1} precision={2} value={decimal} onChange={setDecimal} />`}</pre>
        </div>

        <div className="example">
          <h3>尺寸</h3>
          <div className="demo">
            <InputNumber size="large" value={large} onChange={setLarge} style={{ marginRight: 12 }} />
            <InputNumber size="middle" value={middle} onChange={setMiddle} style={{ marginRight: 12 }} />
            <InputNumber size="small" value={small} onChange={setSmall} />
          </div>
          <pre className="code">{`<InputNumber size="large" value={large} onChange={setLarge} />
<InputNumber size="middle" value={middle} onChange={setMiddle} />
<InputNumber size="small" value={small} onChange={setSmall} />`}</pre>
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
            <tr><td>value</td><td>当前值（受控）</td><td>number</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>初始值</td><td>number</td><td>0</td></tr>
            <tr><td>min</td><td>最小值</td><td>number</td><td>-Infinity</td></tr>
            <tr><td>max</td><td>最大值</td><td>number</td><td>Infinity</td></tr>
            <tr><td>step</td><td>步长</td><td>number</td><td>1</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>size</td><td>尺寸（large/middle/small）</td><td>string</td><td>middle</td></tr>
            <tr><td>onChange</td><td>值变化回调</td><td>function(value)</td><td>-</td></tr>
            <tr><td>readOnly</td><td>只读</td><td>boolean</td><td>false</td></tr>
            <tr><td>precision</td><td>小数位数</td><td>number</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InputNumberDoc;
