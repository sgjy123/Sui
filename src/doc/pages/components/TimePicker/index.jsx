import React, { useState } from 'react';
import { TimePicker } from '../../../../components';

const TimePickerDemo = () => {
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(new Date());
  const [time3, setTime3] = useState(null);
  const [time12h, setTime12h] = useState(null);

  const handleTimeChange = (time, timeString) => {
    console.log('Selected Time:', time);
    console.log('Formatted Time String:', timeString);
    setTime1(time);
  };

  // 禁用时间
  const disabledHours = () => [0, 1, 2, 3]; // 禁用0-3点
  const disabledMinutes = (hour) => (hour === 4 ? [30, 31, 32] : []); // 4点时禁用30-32分
  const disabledSeconds = (hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : []); // 5点0分时禁用0-2秒

  return (
    <div className="sui-doc">
      <h1>TimePicker 时间选择框</h1>
      
      <section>
        <h2>介绍</h2>
        <p>输入或选择时间的控件，支持小时、分钟、秒以及上午/下午等多种格式。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { TimePicker } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，点击输入框弹出时间面板。</p>
          <div className="demo">
            <TimePicker 
              placeholder="请选择时间" 
              onChange={handleTimeChange}
              value={time1}
            />
          </div>

          <pre className="code">{`<TimePicker 
  placeholder="请选择时间" 
  onChange={(time, timeString) => console.log(time, timeString)}
/>`}</pre>
        </div>

        <div className="example">
          <h3>三种大小</h3>
          <p>我们为时间选择框定义了三种尺寸（大、默认、小）。</p>
          <div className="demo">
            <div style={{ marginBottom: 16 }}>
              <TimePicker size="large" placeholder="大号时间选择框" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <TimePicker placeholder="默认时间选择框" />
            </div>
            <div>
              <TimePicker size="small" placeholder="小号时间选择框" />
            </div>
          </div>
          <pre className="code">{`<TimePicker size="large" placeholder="大号时间选择框" />
<TimePicker placeholder="默认时间选择框" />
<TimePicker size="small" placeholder="小号时间选择框" />`}</pre>
        </div>

        <div className="example">
          <h3>默认值</h3>
          <p>设置默认时间。</p>
          <div className="demo">
            <TimePicker 
              defaultValue={time2} 
              onChange={(time) => setTime2(time)}
            />
          </div>
          <pre className="code">{`<TimePicker defaultValue={new Date()} />`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>禁用时间选择。</p>
          <div className="demo">
            <TimePicker disabled />
          </div>
          <pre className="code">{`<TimePicker disabled />`}</pre>
        </div>

        <div className="example">
          <h3>自定义格式</h3>
          <p>使用 format 指定时间格式。</p>
          <div className="demo">
            <TimePicker 
              format="HH:mm" 
              placeholder="选择时间（小时:分钟）" 
              onChange={(time) => setTime3(time)}
            />
          </div>
          <pre className="code">{`<TimePicker format="HH:mm" placeholder="选择时间（小时:分钟）" />`}</pre>
        </div>

        <div className="example">
          <h3>步长选项</h3>
          <p>可以使用 hourStep、minuteStep、secondStep 按步长展示可选的时分秒。</p>
          <div className="demo">
            <TimePicker 
              hourStep={2} 
              minuteStep={15} 
              secondStep={10} 
              placeholder="步长选项" 
            />
          </div>
          <pre className="code">{`<TimePicker 
  hourStep={2} 
  minuteStep={15} 
  secondStep={10} 
  placeholder="步长选项" 
/>`}</pre>
        </div>

        <div className="example">
          <h3>禁用选项</h3>
          <p>可以使用 disabledHours、disabledMinutes、disabledSeconds 禁用部分时间选项。</p>
          <div className="demo">
            <TimePicker 
              disabledHours={disabledHours}
              disabledMinutes={disabledMinutes}
              disabledSeconds={disabledSeconds}
              placeholder="禁用部分时间选项"
            />
          </div>
          <pre className="code">{`<TimePicker 
  disabledHours={() => [0, 1, 2, 3]} // 禁用0-3点
  disabledMinutes={(hour) => (hour === 4 ? [30, 31, 32] : [])} // 4点时禁用30-32分
  disabledSeconds={(hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : [])} // 5点0分时禁用0-2秒
  placeholder="禁用部分时间选项"
/>`}</pre>
        </div>

        <div className="example">
          <h3>12小时制</h3>
          <p>使用 use12Hours 可以切换到12小时制。</p>
          <div className="demo">
            <TimePicker 
              use12Hours 
              format="h:mm:ss a" 
              placeholder="12小时制" 
              onChange={(time) => setTime12h(time)}
            />
          </div>
          <pre className="code">{`<TimePicker 
  use12Hours 
  format="h:mm:ss a" 
  placeholder="12小时制" 
/>`}</pre>
        </div>

        <div className="example">
          <h3>隐藏禁用选项</h3>
          <p>使用 hideDisabledOptions 可以隐藏禁用的选项。</p>
          <div className="demo">
            <TimePicker 
              disabledHours={() => [0, 1, 2, 3, 4, 5]}
              hideDisabledOptions
              placeholder="隐藏禁用选项"
            />
          </div>
          <pre className="code">{`<TimePicker 
  disabledHours={() => [0, 1, 2, 3, 4, 5]}
  hideDisabledOptions
  placeholder="隐藏禁用选项"
/>`}</pre>
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
              <td>时间（受控）</td>
              <td>Date</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>默认时间</td>
              <td>Date</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>时间变化回调</td>
              <td>function(time: Date, timeString: string)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框提示文本</td>
              <td>string</td>
              <td>'请选择时间'</td>
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
              <td>时间格式</td>
              <td>string</td>
              <td>'HH:mm:ss'</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td>是否显示清除按钮</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>hourStep</td>
              <td>小时选项的间隔</td>
              <td>number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>minuteStep</td>
              <td>分钟选项的间隔</td>
              <td>number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>secondStep</td>
              <td>秒选项的间隔</td>
              <td>number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>disabledHours</td>
              <td>禁止选择部分小时选项</td>
              <td>function() =&gt; number[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabledMinutes</td>
              <td>禁止选择部分分钟选项</td>
              <td>function(hour: number) =&gt; number[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabledSeconds</td>
              <td>禁止选择部分秒选项</td>
              <td>function(hour: number, minute: number) =&gt; number[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>use12Hours</td>
              <td>使用12小时制</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>hideDisabledOptions</td>
              <td>隐藏禁用选项</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TimePickerDemo;