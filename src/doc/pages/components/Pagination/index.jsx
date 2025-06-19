import React, { useState } from 'react';
import { Pagination, Space, Button, Progress } from 'components';
import './style.less';

const PaginationDoc = () => {
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);
  const [dynamicPercent, setDynamicPercent] = useState(0);

  const onChange1 = (page, pageSize) => {
    setCurrent1(page);
    console.log('Page:', page, 'PageSize:', pageSize);
  };

  const onChange2 = (page, pageSize) => {
    setCurrent2(page);
    console.log('Page:', page, 'PageSize:', pageSize);
  };

  const onChange3 = (page, pageSize) => {
    setCurrent3(page);
    console.log('Page:', page, 'PageSize:', pageSize);
  };

  const handleDynamic = () => {
    setDynamicPercent(prevPercent => (prevPercent + 10) % 100);
  };

  return (
    <div className="pagination-doc">
      <h1>Pagination 分页</h1>

      <section>
        <h2>介绍</h2>
        <p>采用分页布局，将数据或内容分隔成多页显示，方便用户浏览和管理。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Pagination } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的分页用法。</p>
          <div className="demo">
            <Pagination total={100} current={current1} onChange={onChange1} />
          </div>
          <pre className="code">{`const [current, setCurrent] = useState(1);
<Pagination total={100} current={current} onChange={(page, pageSize) => setCurrent(page)} />`}</pre>
        </div>

        <div className="example">
          <h3>更多选项</h3>
          <p>带总数、每页条数选择器和快速跳转。</p>
          <div className="demo">
            <Pagination
              total={500}
              current={current2}
              onChange={onChange2}
              showTotal={(total, range) => `共 ${total} 条数据`}
              showSizeChanger
              pageSizeOptions={['10', '20', '50', '100']}
              showQuickJumper
            />
          </div>
          <pre className="code">{`const [current, setCurrent] = useState(1);
<Pagination
  total={500}
  current={current}
  onChange={(page, pageSize) => setCurrent(page)}
  showTotal={(total, range) => '共 ' + total + ' 条数据'}
  showSizeChanger
  pageSizeOptions={['10', '20', '50', '100']}
  showQuickJumper
/>`}</pre>
        </div>

        <div className="example">
          <h3>简洁分页</h3>
          <p>简单的上一页、下一页。</p>
          <div className="demo">
            <Pagination total={50} simple current={current3} onChange={onChange3} />
          </div>
          <pre className="code">{`const [current, setCurrent] = useState(1);
<Pagination total={50} simple current={current} onChange={(page, pageSize) => setCurrent(page)} />`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>禁用分页。</p>
          <div className="demo">
            <Pagination total={100} disabled />
          </div>
          <pre className="code">{`<Pagination total={100} disabled />`}</pre>
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
            <tr><td>total</td><td>数据总数</td><td>number</td><td>0</td></tr>
            <tr><td>current</td><td>当前页数</td><td>number</td><td>1</td></tr>
            <tr><td>pageSize</td><td>每页条数</td><td>number</td><td>10</td></tr>
            <tr><td>onChange</td><td>页码改变回调</td><td>function(page, pageSize)</td><td>-</td></tr>
            <tr><td>showTotal</td><td>显示总条数和当前数据范围</td><td>function(total, range)</td><td>(total, range) =&gt; `共 total 条`</td></tr>
            <tr><td>showSizeChanger</td><td>是否显示每页条数选择器</td><td>boolean</td><td>false</td></tr>
            <tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td>string[]</td><td>['10', '20', '30', '40']</td></tr>
            <tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td>boolean</td><td>false</td></tr>
            <tr><td>disabled</td><td>禁用分页</td><td>boolean</td><td>false</td></tr>
            <tr><td>simple</td><td>是否是简洁模式</td><td>boolean</td><td>false</td></tr>
            <tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr>
            <tr><td>style</td><td>自定义样式</td><td>object</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaginationDoc; 