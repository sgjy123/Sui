import React, { useState } from "react";
import Radio from '../../../../components/Radio';
import './style.less';

const RadioDoc = () => {
  const [value, setValue] = useState('a');
  const [buttonValue, setButtonValue] = useState('b');
  const [blockValue, setBlockValue] = useState('c');
  const [verticalValue, setVerticalValue] = useState('1');
  const [mixValue, setMixValue] = useState();
  const [sizeValue, setSizeValue] = useState('middle');

  return (
    <div className="radio-doc">
      <h1>Radio 单选框</h1>

      <section>
        <h2>介绍</h2>
        <p>用于在多个备选项中选中单个状态。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Radio } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的单选框用法。</p>
          <div className="demo">
            <Radio>选项一</Radio>
            <Radio disabled>禁用</Radio>
          </div>
          <pre className="code">{`<Radio>选项一</Radio>
<Radio disabled>禁用</Radio>`}</pre>
        </div>

        <div className="example">
          <h3>受控用法</h3>
          <p>通过 <code>value</code> 和 <code>onChange</code> 实现受控。</p>
          <div className="demo">
            <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
              <Radio value="a">A</Radio>
              <Radio value="b">B</Radio>
              <Radio value="c">C</Radio>
            </Radio.Group>
            <div>当前选中: {value}</div>
          </div>
          <pre className="code">{`<Radio.Group value={value} onChange={e => setValue(e.target.value)}>
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
  <Radio value="c">C</Radio>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>配置 options</h3>
          <p>通过 <code>options</code> 属性快速生成单选项。</p>
          <div className="demo">
            <Radio.Group
              options={[
                { label: '苹果', value: 'apple' },
                { label: '香蕉', value: 'banana', disabled: true },
                { label: '橙子', value: 'orange' },
              ]}
              defaultValue="apple"
              onChange={e => console.log('options change', e.target.value)}
            />
          </div>
          <pre className="code">{`<Radio.Group
  options={[
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana', disabled: true },
    { label: '橙子', value: 'orange' },
  ]}
  defaultValue="apple"
  onChange={e => console.log('options change', e.target.value)}
/>`}</pre>
        </div>

        <div className="example">
          <h3>按钮样式</h3>
          <p>使用 <code>optionType="button"</code> 展示按钮风格。</p>
          <div className="demo">
            <Radio.Group
              optionType="button"
              value={buttonValue}
              onChange={e => {
                setButtonValue(e.target.value);
              }}
            >
              <Radio.Button value="a">A</Radio.Button>
              <Radio.Button value="b">B</Radio.Button>
              <Radio.Button value="c">C</Radio.Button>
            </Radio.Group>
            <div>当前选中: {buttonValue}</div>
          </div>
          <pre className="code">{`<Radio.Group optionType="button" value={buttonValue} onChange={e => setButtonValue(e.target.value)}>
  <Radio.Button value="a">A</Radio.Button>
  <Radio.Button value="b">B</Radio.Button>
  <Radio.Button value="c">C</Radio.Button>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>按钮大小</h3>
          <p>通过设置 <code>size</code> 属性控制按钮大小，可选值：large、middle、small。</p>
          <div className="demo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Radio.Group
                optionType="button"
                size="large"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>

              <Radio.Group
                optionType="button"
                size="middle"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>

              <Radio.Group
                optionType="button"
                size="small"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </div>
          </div>
          <pre className="code">{`// 大号按钮
<Radio.Group optionType="button" size="large">
  <Radio.Button value="large">Large</Radio.Button>
  <Radio.Button value="middle">Middle</Radio.Button>
  <Radio.Button value="small">Small</Radio.Button>
</Radio.Group>

// 中号按钮（默认）
<Radio.Group optionType="button" size="middle">
  <Radio.Button value="large">Large</Radio.Button>
  <Radio.Button value="middle">Middle</Radio.Button>
  <Radio.Button value="small">Small</Radio.Button>
</Radio.Group>

// 小号按钮
<Radio.Group optionType="button" size="small">
  <Radio.Button value="large">Large</Radio.Button>
  <Radio.Button value="middle">Middle</Radio.Button>
  <Radio.Button value="small">Small</Radio.Button>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>普通单选组大小</h3>
          <p>通过 <code>size</code> 属性控制普通单选组的高度，可选值：large、middle、small。</p>
          <div className="demo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Radio.Group
                size="large"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio value="large">Large</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="small">Small</Radio>
              </Radio.Group>

              <Radio.Group
                size="middle"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio value="large">Large</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="small">Small</Radio>
              </Radio.Group>

              <Radio.Group
                size="small"
                value={sizeValue}
                onChange={e => setSizeValue(e.target.value)}
              >
                <Radio value="large">Large</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="small">Small</Radio>
              </Radio.Group>
            </div>
          </div>
          <pre className="code">{`// 大号单选组
<Radio.Group size="large">
  <Radio value="large">Large</Radio>
  <Radio value="middle">Middle</Radio>
  <Radio value="small">Small</Radio>
</Radio.Group>

// 中号单选组（默认）
<Radio.Group size="middle">
  <Radio value="large">Large</Radio>
  <Radio value="middle">Middle</Radio>
  <Radio value="small">Small</Radio>
</Radio.Group>

// 小号单选组
<Radio.Group size="small">
  <Radio value="large">Large</Radio>
  <Radio value="middle">Middle</Radio>
  <Radio value="small">Small</Radio>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>块级按钮样式</h3>
          <p>设置 <code>block</code> 属性让按钮组撑满父容器。</p>
          <div className="demo">
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              block
              value={blockValue}
              onChange={e => setBlockValue(e.target.value)}
            >
              <Radio.Button value="a">A</Radio.Button>
              <Radio.Button value="b">B</Radio.Button>
              <Radio.Button value="c">C</Radio.Button>
            </Radio.Group>
            <div>当前选中: {blockValue}</div>
          </div>
          <pre className="code">{`<Radio.Group optionType="button" buttonStyle="solid" block value={blockValue} onChange={e => setBlockValue(e.target.value)}>
  <Radio.Button value="a">A</Radio.Button>
  <Radio.Button value="b">B</Radio.Button>
  <Radio.Button value="c">C</Radio.Button>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>垂直排列</h3>
          <p>通过 <code>flexDirection: column</code> 实现纵向排列。</p>
          <div className="demo">
            <Radio.Group value={verticalValue} onChange={e => setVerticalValue(e.target.value)}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Radio value="1">选项一</Radio>
                <Radio value="2">选项二</Radio>
                <Radio value="3">选项三</Radio>
              </div>
            </Radio.Group>
            <div>当前选中: {verticalValue}</div>
          </div>
          <pre className="code">{`<Radio.Group value={verticalValue} onChange={e => setVerticalValue(e.target.value)}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Radio value="1">选项一</Radio>
    <Radio value="2">选项二</Radio>
    <Radio value="3">选项三</Radio>
  </div>
</Radio.Group>`}</pre>
        </div>

        <div className="example">
          <h3>受控/非受控混用</h3>
          <p>同组内既有受控 Radio，也有 defaultChecked 的非受控 Radio，演示受控优先级。</p>
          <div className="demo">
            <Radio.Group value={mixValue} onChange={e => setMixValue(e.target.value)}>
              <Radio value="x">受控X</Radio>
              <Radio value="y">受控Y</Radio>
              <Radio defaultChecked value="z">非受控Z(初始选中)</Radio>
            </Radio.Group>
            <div>当前选中: {mixValue === undefined ? '未选中' : mixValue}</div>
          </div>
          <pre className="code">{`<Radio.Group value={mixValue} onChange={e => setMixValue(e.target.value)}>
  <Radio value="x">受控X</Radio>
  <Radio value="y">受控Y</Radio>
  <Radio defaultChecked value="z">非受控Z(初始选中)</Radio>
</Radio.Group>`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>Radio</h3>
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
            <tr><td>checked</td><td>指定当前是否选中</td><td>boolean</td><td>-</td></tr>
            <tr><td>defaultChecked</td><td>初始是否选中</td><td>boolean</td><td>false</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>onChange</td><td>变化时回调函数</td><td>function</td><td>-</td></tr>
            <tr><td>value</td><td>单选框的值</td><td>any</td><td>-</td></tr>
            <tr><td>name</td><td>原生 name 属性</td><td>string</td><td>-</td></tr>
            <tr><td>children</td><td>单选框内容</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>optionType</td><td>风格类型（default/button）</td><td>string</td><td>default</td></tr>
          </tbody>
        </table>
        <h4>方法</h4>
        <table>
          <thead>
            <tr><th>名称</th><th>描述</th></tr>
          </thead>
          <tbody>
            <tr><td>blur()</td><td>移除焦点</td></tr>
            <tr><td>focus()</td><td>获取焦点</td></tr>
          </tbody>
        </table>
        <h3>Radio.Group</h3>
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
            <tr><td>value</td><td>当前选中的值</td><td>any</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>默认选中的值</td><td>any</td><td>-</td></tr>
            <tr><td>options</td><td>配置方式生成选项</td><td>array</td><td>[]</td></tr>
            <tr><td>onChange</td><td>变化时回调函数</td><td>function</td><td>-</td></tr>
            <tr><td>disabled</td><td>是否禁用全部</td><td>boolean</td><td>false</td></tr>
            <tr><td>name</td><td>name属性</td><td>string</td><td>-</td></tr>
            <tr><td>optionType</td><td>风格类型（default/button）</td><td>string</td><td>default</td></tr>
            <tr><td>buttonStyle</td><td>按钮样式（outline/solid）</td><td>string</td><td>outline</td></tr>
            <tr><td>size</td><td>尺寸（large/middle/small）</td><td>string</td><td>middle</td></tr>
            <tr><td>block</td><td>是否块级</td><td>boolean</td><td>false</td></tr>
            <tr><td>children</td><td>选项内容</td><td>ReactNode</td><td>-</td></tr>
          </tbody>
        </table>
        <h3>Radio.Button</h3>
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
            <tr><td colSpan="4">继承 Radio 的所有属性，optionType 固定为 button</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RadioDoc; 