import React, { useState } from 'react';
import { Rate, Icon } from 'components';
import './style.less';

const RateDoc = () => {
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(2.5);
  const [value3, setValue3] = useState(1);
  
  const desc = ['很糟糕', '一般', '还行', '很好', '非常好'];

  return (
    <div className="rate-doc">
      <h1>Rate 评分</h1>

      <section>
        <h2>介绍</h2>
        <p>评分组件，对评价进行展示。常用于对事物进行评级操作。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Rate } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
            <Rate defaultValue={3} />
          </div>
          <pre className="code">{`<Rate defaultValue={3} />`}</pre>
        </div>

        <div className="example">
          <h3>半星</h3>
          <p>支持选中半星。</p>
          <div className="demo">
            <Rate allowHalf defaultValue={2.5} />
          </div>
          <pre className="code">{`<Rate allowHalf defaultValue={2.5} />`}</pre>
        </div>

        <div className="example">
          <h3>受控方式</h3>
          <p>受控的评分组件，通过 <code>value</code> 和 <code>onChange</code> 控制。</p>
          <div className="demo">
            <Rate value={value1} onChange={setValue1} />
            <span className="rate-value">当前评分：{value1} 分</span>
          </div>
          <pre className="code">{`const [value, setValue] = useState(3);

<Rate value={value} onChange={setValue} />
<span>当前评分：{value} 分</span>`}</pre>
        </div>

        <div className="example">
          <h3>半星受控</h3>
          <p>支持受控的半星选择。</p>
          <div className="demo">
            <Rate allowHalf value={value2} onChange={setValue2} />
            <span className="rate-value">当前评分：{value2} 分</span>
          </div>
          <pre className="code">{`const [value, setValue] = useState(2.5);

<Rate allowHalf value={value} onChange={setValue} />
<span>当前评分：{value} 分</span>`}</pre>
        </div>

        <div className="example">
          <h3>自定义字符</h3>
          <p>可以使用其他字符或图标代替星星。</p>
          <div className="demo">
            <div className="custom-rate-demo">
              <Rate character="好" allowHalf value={value3} onChange={setValue3} />
              <br />
              <Rate character={<Icon name="Heart" theme="filled" />} allowHalf value={value3} onChange={setValue3} />
              <br />
              <Rate character="A" allowHalf value={value3} onChange={setValue3} />
              <br />
              <Rate character="汉" allowHalf value={value3} onChange={setValue3} />
            </div>
          </div>
          <pre className="code">{`<Rate character="好" allowHalf value={value} onChange={setValue} />
<Rate character={<Icon name="Heart" theme="filled" />} allowHalf value={value} onChange={setValue} />
<Rate character="A" allowHalf value={value} onChange={setValue} />
<Rate character="汉" allowHalf value={value} onChange={setValue} />`}</pre>
        </div>

        <div className="example">
          <h3>只读模式</h3>
          <p>只读，无法交互。</p>
          <div className="demo">
            <Rate disabled defaultValue={2} />
          </div>
          <pre className="code">{`<Rate disabled defaultValue={2} />`}</pre>
        </div>

        <div className="example">
          <h3>清除</h3>
          <p>支持允许或者禁用清除。</p>
          <div className="demo">
            <div>
              <Rate defaultValue={3} />
              <span className="rate-desc">允许清除（默认）</span>
            </div>
            <div>
              <Rate allowClear={false} defaultValue={3} />
              <span className="rate-desc">禁用清除</span>
            </div>
          </div>
          <pre className="code">{`<Rate defaultValue={3} />
<Rate allowClear={false} defaultValue={3} />`}</pre>
        </div>

        <div className="example">
          <h3>自定义数量</h3>
          <p>可以自定义星星的数量。</p>
          <div className="demo">
            <Rate count={10} defaultValue={5} />
          </div>
          <pre className="code">{`<Rate count={10} defaultValue={5} />`}</pre>
        </div>

        <div className="example">
          <h3>带文案的评分</h3>
          <p>带有文案的评分。</p>
          <div className="demo">
            <span>
              <Rate tooltips={desc} value={value1} onChange={setValue1} />
              {value1 ? <span className="rate-text">{desc[value1 - 1]}</span> : ''}
            </span>
          </div>
          <pre className="code">{`const desc = ['很糟糕', '一般', '还行', '很好', '非常好'];
const [value, setValue] = useState(3);

<span>
  <Rate tooltips={desc} value={value} onChange={setValue} />
  {value ? <span>{desc[value - 1]}</span> : ''}
</span>`}</pre>
        </div>

        <div className="example">
          <h3>不同尺寸</h3>
          <p>可以使用不同尺寸的评分组件。</p>
          <div className="demo">
            <div className="size-demo">
              <Rate size="large" defaultValue={3} />
              <span className="rate-desc">大号</span>
            </div>
            <div className="size-demo">
              <Rate defaultValue={3} />
              <span className="rate-desc">中号（默认）</span>
            </div>
            <div className="size-demo">
              <Rate size="small" defaultValue={3} />
              <span className="rate-desc">小号</span>
            </div>
          </div>
          <pre className="code">{`<Rate size="large" defaultValue={3} />
<Rate defaultValue={3} />
<Rate size="small" defaultValue={3} />`}</pre>
        </div>
      </section>

      <section>
        <h2>API 参数</h2>
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
              <td>allowClear</td>
              <td>是否允许再次点击后清除</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>allowHalf</td>
              <td>是否允许半选</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>character</td>
              <td>自定义字符</td>
              <td>ReactNode</td>
              <td>&lt;Icon name="Star" theme="filled" /&gt;</td>
            </tr>
            <tr>
              <td>characterClassName</td>
              <td>自定义字符的样式类</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义样式类名</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>count</td>
              <td>星星总数</td>
              <td>number</td>
              <td>5</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>默认值</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>只读，无法进行交互</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式对象</td>
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tooltips</td>
              <td>自定义每项的提示信息</td>
              <td>string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>当前数，受控值</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>选择时的回调</td>
              <td>function(value: number)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onHoverChange</td>
              <td>鼠标经过时数值变化的回调</td>
              <td>function(value: number)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸，可选 large、middle、small</td>
              <td>string</td>
              <td>middle</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RateDoc; 