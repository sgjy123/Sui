import React, { useState } from 'react';
import { Calendar, Space, Button } from 'components';
import './style.less';

const CalendarDoc = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-doc">
      <h1>Calendar 日历</h1>

      <section>
        <h2>介绍</h2>
        <p>用于展示日历日期，支持自定义头部和单元格内容。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Calendar } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <div className="demo">
            <div style={{ width: 700 }}>
              <Calendar />
            </div>
          </div>
          <pre className="code">{`<Calendar />`}</pre>
        </div>

        <div className="example">
          <h3>受控用法</h3>
          <div className="demo">
            <Space direction="vertical">
              <div style={{ width: 700 }}>
                <Calendar value={value} onChange={(d) => setValue(d)} />
              </div>
              <div>当前值：{value.toDateString()}</div>
            </Space>
          </div>
          <pre className="code">{`const [value, setValue] = useState(new Date());
<Calendar value={value} onChange={(d) => setValue(d)} />`}</pre>
        </div>

        <div className="example">
          <h3>非全屏宽度</h3>
          <p>通过设置 fullscreen='false'，在受限容器中展示日历。</p>
          <div className="demo">
            <div style={{ width: 360 }}>
              <Calendar fullscreen={false} />
            </div>
          </div>
          <pre className="code">{`<div style={{ width: 360 }}>
  <Calendar fullscreen={false} />
</div>`}</pre>
        </div>

        <div className="example">
          <h3>自定义头部与单元格</h3>
          <div className="demo">
            <div style={{ width: 700 }}>
              <Calendar
                headerRender={({ value, onChange, onToday }) => (
                  <Space>
                    <Button size="small" icon="Left" onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()-1, 1))} />
                    <span style={{ fontWeight: 600 }}>{value.getFullYear()}年 {value.getMonth()+1}月</span>
                    <Button size="small" icon="Right" onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()+1, 1))} />
                    <Button size="small" onClick={onToday}>今天</Button>
                  </Space>
                )}
                dateCellRender={(date) => (date.getDate() % 5 === 0 ? <span style={{ color: '#1677ff' }}>打卡</span> : null)}
              />
            </div>
          </div>
          <pre className="code">{`<Calendar
  headerRender={({ value, onChange, onToday }) => (
    <Space>
      <Button size="small" icon="Left" onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()-1, 1))} />
      <span>{value.getFullYear()}年 {value.getMonth()+1}月</span>
      <Button size="small" icon="Right" onClick={() => onChange(new Date(value.getFullYear(), value.getMonth()+1, 1))} />
      <Button size="small" onClick={onToday}>今天</Button>
    </Space>
  )}
  dateCellRender={(date) => (date.getDate() % 5 === 0 ? <span>打卡</span> : null)}
/>`}</pre>
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
            <tr><td>value</td><td>当前值（受控）</td><td>Date</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>初始值</td><td>Date</td><td>-</td></tr>
            <tr><td>onChange</td><td>日期选择回调 (date, dateString)</td><td>function</td><td>-</td></tr>
            <tr><td>headerRender</td><td>自定义头部</td><td>{'({ value, onChange, onToday }) => ReactNode'}</td><td>-</td></tr>
            <tr><td>dateCellRender</td><td>自定义日期单元格</td><td>(date: Date) =&gt; ReactNode</td><td>-</td></tr>
            <tr><td>fullscreen</td><td>是否全屏宽度</td><td>boolean</td><td>true</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CalendarDoc;


