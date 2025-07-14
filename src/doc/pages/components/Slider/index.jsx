import React, { useState } from 'react';
import { Slider, Space, Button } from 'components';
import './style.less';

const SliderDoc = () => {
    return (
        <div className="slider-doc">
            <h1>Slider 滑块</h1>

            <section>
                <h2>介绍</h2>
                <p>滑动型输入器，展示当前值和可选范围，用于在指定范围内选择一个或多个值。</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import { Slider } from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>

                <div className="example">
                    <h3>基础用法</h3>
                    <p>基础的滑块。</p>
                    <div className="demo">
                        <Slider defaultValue={30} style={{ width: 300 }} />
                    </div>
                    <pre className="code">
                        {`import { Slider } from 'Sui';

<Slider defaultValue={30} />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>范围选择</h3>
                    <p>设置 range 属性可实现范围选择功能。</p>
                    <div className="demo">
                        <Slider range defaultValue={[20, 60]} style={{ width: 300 }} />
                    </div>
                    <pre className="code">
                        {`<Slider range defaultValue={[20, 60]} />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>带刻度标记</h3>
                    <p>通过 marks 属性可以设置刻度标记。</p>
                    <div className="demo">
                        <Slider
                            defaultValue={50}
                            marks={{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }}
                            style={{ width: 300 }}
                        />
                    </div>
                    <pre className="code">
                        {`<Slider
  defaultValue={50}
  marks={{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }}
/>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>设置步长</h3>
                    <p>通过 step 属性可以设置步长。</p>
                    <div className="demo">
                        <Slider 
                            defaultValue={30} 
                            step={10} 
                            marks={{ 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }} 
                            style={{ width: 300 }} 
                        />
                    </div>
                    <pre className="code">
                        {`<Slider 
  defaultValue={30} 
  step={10} 
  marks={{ 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }} 
/>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>禁用</h3>
                    <p>设置 disabled 属性可以禁用滑块。</p>
                    <div className="demo">
                        <Slider defaultValue={40} disabled style={{ width: 300 }} />
                    </div>
                    <pre className="code">
                        {`<Slider defaultValue={40} disabled />`}
                    </pre>
                </div>

                <div className="example">
                    <h3>垂直方向</h3>
                    <p>设置 vertical 属性可以使滑块变为垂直方向。</p>
                    <div className="demo">
                        <div style={{ display: 'flex', height: 200 }}>
                            <Slider vertical defaultValue={30} style={{ height: 200, marginRight: 40 }} />
                            <Slider 
                                vertical 
                                defaultValue={50} 
                                marks={{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }} 
                                style={{ height: 200, marginRight: 40 }} 
                            />
                            <Slider vertical range defaultValue={[40, 80]} style={{ height: 200 }} />
                        </div>
                    </div>
                    <pre className="code">
                        {`<div style={{ display: 'flex', height: 200 }}>
  <Slider vertical defaultValue={30} style={{ height: 200, marginRight: 40 }} />
  <Slider 
    vertical 
    defaultValue={50} 
    marks={{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }} 
    style={{ height: 200, marginRight: 40 }} 
  />
  <Slider vertical range defaultValue={[40, 80]} style={{ height: 200 }} />
</div>`}
                    </pre>
                </div>

                <div className="example">
                    <h3>受控用法</h3>
                    <p>通过 value 和 onChange 可以实现受控用法。</p>
                    <div className="demo">
                        <ControlledDemo />
                    </div>
                    <pre className="code">
                        {`import React, { useState } from 'react';
import { Slider, Space } from 'Sui';

const ControlledDemo = () => {
  const [value, setValue] = useState(40);
  const [rangeValue, setRangeValue] = useState([20, 60]);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Slider value={value} onChange={setValue} style={{ width: 300 }} />
        <button onClick={() => setValue(60)}>设置为60</button>
      </Space>
      <Space>
        <Slider range value={rangeValue} onChange={setRangeValue} style={{ width: 300 }} />
        <button onClick={() => setRangeValue([10, 90])}>设置为[10, 90]</button>
      </Space>
    </Space>
  );
};`}
                    </pre>
                </div>

                <div className="example">
                    <h3>提示格式化</h3>
                    <p>通过 tipFormatter 可以格式化 Tooltip 的内容。</p>
                    <div className="demo">
                        <Slider
                            defaultValue={50}
                            tipFormatter={value => `${value}%`}
                            style={{ width: 300 }}
                        />
                    </div>
                    <pre className="code">
                        {`<Slider defaultValue={50} tipFormatter={value => \`\${value}%\`} />`}
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
                            <td>value</td>
                            <td>当前值（受控）</td>
                            <td>number | [number, number]</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>defaultValue</td>
                            <td>初始值</td>
                            <td>number | [number, number]</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>number</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>步长</td>
                            <td>number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>marks</td>
                            <td>刻度标记</td>
                            <td>object</td>
                            <td>{'{}'}</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否垂直方向</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>range</td>
                            <td>是否为范围选择</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>tooltipVisible</td>
                            <td>是否始终显示提示</td>
                            <td>boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tipFormatter</td>
                            <td>提示格式化函数</td>
                            <td>function(value)</td>
                            <td>value {'=>'} value</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>值变化时的回调</td>
                            <td>function(value)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>onAfterChange</td>
                            <td>拖拽结束后的回调</td>
                            <td>function(value)</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

// 受控组件示例
const ControlledDemo = () => {
    const [value, setValue] = useState(40);
    const [rangeValue, setRangeValue] = useState([20, 60]);

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Space>
                <Slider value={value} onChange={setValue} style={{ width: 300 }} />
                <Button onClick={() => setValue(60)}>设置为60</Button>
            </Space>
            <Space>
                <Slider range value={rangeValue} onChange={setRangeValue} style={{ width: 300 }} />
                <Button onClick={() => setRangeValue([10, 90])}>设置为[10, 90]</Button>
            </Space>
        </Space>
    );
};

export default SliderDoc;
