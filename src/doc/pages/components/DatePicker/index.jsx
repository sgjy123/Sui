import React, { useState } from 'react';
import DatePicker from '../../../../components/DatePicker';
import './style.less';

const DatePickerDemo = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [dateTimeRange, setDateTimeRange] = useState(null);

  const handleDateChange = (date, dateString) => {
    console.log('Selected Date:', date);
    console.log('Formatted Date String:', dateString);
    setDate1(date);
  };

  // 禁用今天之前的日期
  const disabledDate = (date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };
  
  // 禁用时间
  const disabledTime = () => {
    return {
      disabledHours: () => [0, 1, 2, 3], // 禁用0-3点
      disabledMinutes: (hour) => (hour === 4 ? [30, 31, 32] : []), // 4点时禁用30-32分
      disabledSeconds: (hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : []), // 5点0分时禁用0-2秒
    };
  };

  return (
    <div className="sui-doc">
      <h1>DatePicker 日期选择框</h1>
      
      <section>
        <h2>介绍</h2>
        <p>输入或选择日期的控件，支持年、月、日期等多种格式。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { DatePicker } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，点击输入框弹出日期面板。</p>
          <div className="demo">
            <DatePicker 
              placeholder="请选择日期" 
              onChange={handleDateChange}
              value={date1}
            />
          </div>
          <pre className="code">{`<DatePicker 
  placeholder="请选择日期" 
  onChange={(date, dateString) => console.log(date, dateString)}
/>`}</pre>
        </div>

        <div className="example">
          <h3>三种大小</h3>
          <p>我们为日期选择框定义了三种尺寸（大、默认、小）。</p>
          <div className="demo">
            <div style={{ marginBottom: 16 }}>
              <DatePicker size="large" placeholder="大号日期选择框" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <DatePicker placeholder="默认日期选择框" />
            </div>
            <div>
              <DatePicker size="small" placeholder="小号日期选择框" />
            </div>
          </div>
          <pre className="code">{`<DatePicker size="large" placeholder="大号日期选择框" />
<DatePicker placeholder="默认日期选择框" />
<DatePicker size="small" placeholder="小号日期选择框" />`}</pre>
        </div>

        <div className="example">
          <h3>默认值</h3>
          <p>可以设置默认值，展示预设的日期。</p>
          <div className="demo">
            <DatePicker 
              defaultValue={date2} 
              onChange={(date, dateString) => setDate2(date)}
            />
          </div>
          <pre className="code">{`<DatePicker defaultValue={new Date()} />`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>禁用状态下的日期选择框。</p>
          <div className="demo">
            <DatePicker disabled />
          </div>
          <pre className="code">{`<DatePicker disabled />`}</pre>
        </div>

        <div className="example">
          <h3>自定义格式</h3>
          <p>使用 format 指定日期格式。</p>
          <div className="demo">
            <DatePicker 
              format="YYYY年MM月DD日" 
              placeholder="请选择日期" 
              onChange={(date, dateString) => setDate3(date)}
              value={date3}
            />
          </div>
          <pre className="code">{`<DatePicker format="YYYY年MM月DD日" placeholder="请选择日期" />`}</pre>
        </div>

        <div className="example">
          <h3>不可选日期</h3>
          <p>使用 disabledDate 设置不可选择的日期。</p>
          <div className="demo">
            <DatePicker 
              disabledDate={disabledDate}
              placeholder="禁用今天之前的日期"
            />
          </div>
          <pre className="code">{`<DatePicker 
  disabledDate={(date) => {
    // 禁用今天之前的日期
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  }}
  placeholder="禁用今天之前的日期"
/>`}</pre>
        </div>

        <div className="example">
          <h3>时间选择</h3>
          <p>通过设置 showTime 属性，可以选择时间。</p>
          <div className="demo">
            <DatePicker 
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="选择日期和时间"
              onChange={(date, dateString) => {
                console.log('Selected DateTime:', date);
                console.log('Formatted DateTime String:', dateString);
                setDateTime(date);
              }}
              value={dateTime}
            />
          </div>
          <pre className="code">{`<DatePicker 
  showTime 
  format="YYYY-MM-DD HH:mm:ss" 
  placeholder="选择日期和时间"
  onChange={(date, dateString) => console.log(date, dateString)}
/>`}</pre>
        </div>

        <div className="example">
          <h3>禁用时间</h3>
          <p>通过设置 disabledTime 函数，可以禁用某些时间点。</p>
          <div className="demo">
            <DatePicker 
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="选择日期和时间"
              disabledTime={disabledTime}
              onChange={(date, dateString) => {
                console.log('Selected DateTime with restrictions:', date);
                console.log('Formatted DateTime String with restrictions:', dateString);
                setDateTimeRange(date);
              }}
              value={dateTimeRange}
            />
          </div>
          <pre className="code">{`<DatePicker 
  showTime 
  format="YYYY-MM-DD HH:mm:ss"
  placeholder="选择日期和时间"
  disabledTime={() => ({
    disabledHours: () => [0, 1, 2, 3], // 禁用0-3点
    disabledMinutes: (hour) => (hour === 4 ? [30, 31, 32] : []), // 4点时禁用30-32分
    disabledSeconds: (hour, minute) => (hour === 5 && minute === 0 ? [0, 1, 2] : []), // 5点0分时禁用0-2秒
  })}
  onChange={(date, dateString) => console.log(date, dateString)}
/>`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>DatePicker</h3>
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
              <td>日期（受控）</td>
              <td>Date</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>默认日期</td>
              <td>Date</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>日期变化回调</td>
              <td>function(date: Date, dateString: string)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框提示文本</td>
              <td>string</td>
              <td>'请选择日期'</td>
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
              <td>日期格式</td>
              <td>string</td>
              <td>'YYYY-MM-DD'</td>
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
              <td>disabledDate</td>
              <td>不可选择的日期</td>
              <td>(date: Date) =&gt; boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showTime</td>
              <td>增加时间选择功能</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabledTime</td>
              <td>不可选择的时间</td>
              <td>
                `
                disabledHours?: () =&gt; number[],
                disabledMinutes?: (hour: number) =&gt; number[],
                disabledSeconds?: (hour: number, minute: number) =&gt; number[]
                `
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DatePickerDemo;