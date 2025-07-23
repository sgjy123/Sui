import React, { useState } from 'react';
import { ColorPicker } from '../../../../components';
import './style.less';

const ColorPickerDemo = () => {
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState('#1890ff');
  const [color3, setColor3] = useState(null);
  const [colorRgb, setColorRgb] = useState('rgb(24, 144, 255)');

  const handleColorChange = (color) => {
    console.log('Selected Color:', color);
    setColor1(color);
  };

  return (
    <div className="sui-doc">
      <h1>ColorPicker 颜色选择器</h1>
      
      <section>
        <h2>介绍</h2>
        <p>用于选择颜色的控件，支持多种颜色格式。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { ColorPicker } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，点击输入框弹出颜色面板。</p>
          <div className="demo">
            <ColorPicker 
              placeholder="请选择颜色" 
              onChange={handleColorChange}
              value={color1}
            />
          </div>
          <pre className="code">{`<ColorPicker 
  placeholder="请选择颜色" 
  onChange={(color) => console.log(color)}
/>`}</pre>
        </div>

        <div className="example">
          <h3>三种大小</h3>
          <p>我们为颜色选择器定义了三种尺寸（大、默认、小）。</p>
          <div className="demo">
            <div style={{ marginBottom: 16 }}>
              <ColorPicker size="large" placeholder="大号颜色选择器" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <ColorPicker placeholder="默认颜色选择器" />
            </div>
            <div>
              <ColorPicker size="small" placeholder="小号颜色选择器" />
            </div>
          </div>
          <pre className="code">{`<ColorPicker size="large" placeholder="大号颜色选择器" />
<ColorPicker placeholder="默认颜色选择器" />
<ColorPicker size="small" placeholder="小号颜色选择器" />`}</pre>
        </div>

        <div className="example">
          <h3>默认值</h3>
          <p>可以设置默认值，展示预设的颜色。</p>
          <div className="demo">
            <ColorPicker 
              defaultValue={color2} 
              onChange={(color) => setColor2(color)}
            />
          </div>
          <pre className="code">{`<ColorPicker defaultValue="#1890ff" />`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>禁用状态下的颜色选择器。</p>
          <div className="demo">
            <ColorPicker disabled defaultValue="#1890ff" />
          </div>
          <pre className="code">{`<ColorPicker disabled defaultValue="#1890ff" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义格式</h3>
          <p>支持 hex 和 rgb 两种格式。</p>
          <div className="demo">
            <ColorPicker 
              format="rgb" 
              defaultValue={colorRgb}
              onChange={(color) => setColorRgb(color)}
            />
          </div>
          <pre className="code">{`<ColorPicker format="rgb" defaultValue="rgb(24, 144, 255)" />`}</pre>
        </div>

        <div className="example">
          <h3>不可清除</h3>
          <p>不显示清除按钮。</p>
          <div className="demo">
            <ColorPicker allowClear={false} defaultValue="#1890ff" />
          </div>
          <pre className="code">{`<ColorPicker allowClear={false} defaultValue="#1890ff" />`}</pre>
        </div>

        <div className="example">
          <h3>触发器样式切换</h3>
          <p>通过 <code>triggerMode</code> 参数切换为输入框样式或按钮样式。</p>
          <div className="demo" style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ marginBottom: 8 }}>输入框样式（默认）</div>
              <ColorPicker 
                placeholder="请选择颜色" 
                triggerMode="input"
                style={{ width: 180 }}
              />
            </div>
            <div>
              <div style={{ marginBottom: 8 }}>按钮样式</div>
              <ColorPicker 
                triggerMode="button"
              />
            </div>
          </div>
          <pre className="code">{`<ColorPicker triggerMode="input" />
<ColorPicker triggerMode="button" />`}</pre>
        </div>

        <div className="example">
          <h3>按钮样式不同尺寸</h3>
          <p>按钮模式下也支持三种尺寸（大、默认、小）。</p>
          <div className="demo" style={{ display: 'flex', gap: 16 }}>
            <ColorPicker triggerMode="button" size="large" />
            <ColorPicker triggerMode="button" size="middle" />
            <ColorPicker triggerMode="button" size="small" />
          </div>
          <pre className="code">{`<ColorPicker triggerMode="button" size="large" />
<ColorPicker triggerMode="button" size="middle" />
<ColorPicker triggerMode="button" size="small" />`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <table className="api-table">
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
              <td>value</td>
              <td>颜色值（受控）</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>默认颜色值</td>
              <td>string</td>
              <td>'#1890ff'</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>颜色变化回调</td>
              <td>function(color: string)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框提示文本</td>
              <td>string</td>
              <td>'请选择颜色'</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>输入框大小</td>
              <td>'large' | 'middle' | 'small'</td>
              <td>'middle'</td>
            </tr>
            <tr>
              <td>format</td>
              <td>颜色格式</td>
              <td>'hex' | 'rgb'</td>
              <td>'hex'</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td>是否显示清除按钮</td>
              <td>boolean</td>
              <td>true</td>
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
            <tr>
              <td>getPopupContainer</td>
              <td>浮层渲染父节点</td>
              <td>function(triggerNode)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ColorPickerDemo;