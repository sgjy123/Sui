import React from 'react';
import Collapse from 'components/Collapse';
import './style.less';

const { Panel } = Collapse;

const CollapseDemo = () => (
  <div className="collapse-doc">
    <h1>Collapse 折叠面板</h1>
    <section>
      <h2>介绍</h2>
      <p>用于内容区域的收纳与展开，常用于常见问题、数据分组等场景。</p>
    </section>
    <section>
      <h2>引入</h2>
      <pre className="code">{`import { Collapse } from 'Sui';`}</pre>
    </section>
    <section>
      <h2>代码演示</h2>
      <div className="example">
        <h3>基础用法</h3>
        <p>最基本的折叠面板用法。</p>
        <div className="demo">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="面板1" key="1">内容1</Panel>
            <Panel header="面板2" key="2">内容2</Panel>
            <Panel header="面板3" key="3">内容3</Panel>
          </Collapse>
        </div>
        <pre className="code">{`<Collapse defaultActiveKey={['1']}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
  <Collapse.Panel header="面板3" key="3">内容3</Collapse.Panel>
</Collapse>`}</pre>
      </div>
      <div className="example">
        <h3>手风琴</h3>
        <p>每次只允许展开一个面板。</p>
        <div className="demo">
          <Collapse accordion>
            <Panel header="面板A" key="A">内容A</Panel>
            <Panel header="面板B" key="B">内容B</Panel>
            <Panel header="面板C" key="C">内容C</Panel>
          </Collapse>
        </div>
        <pre className="code">{`<Collapse accordion>
  <Collapse.Panel header="面板A" key="A">内容A</Collapse.Panel>
  <Collapse.Panel header="面板B" key="B">内容B</Collapse.Panel>
  <Collapse.Panel header="面板C" key="C">内容C</Collapse.Panel>
</Collapse>`}</pre>
      </div>
      <div className="example">
        <h3>禁用</h3>
        <p>禁用某个面板。</p>
        <div className="demo">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="可用面板" key="1">内容1</Panel>
            <Panel header="禁用面板" key="2" disabled>内容2</Panel>
          </Collapse>
        </div>
        <pre className="code">{`<Collapse defaultActiveKey={['1']}>
  <Collapse.Panel header="可用面板" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="禁用面板" key="2" disabled>内容2</Collapse.Panel>
</Collapse>`}</pre>
      </div>
      <div className="example">
        <h3>无下间距</h3>
        <p>通过 <code>gap</code> 参数控制所有面板是否有下间距。</p>
        <div className="demo">
          <Collapse defaultActiveKey={['1']} gap={false}>
            <Panel header="面板1" key="1">内容1</Panel>
            <Panel header="面板2" key="2">内容2</Panel>
            <Panel header="面板3" key="3">内容3</Panel>
          </Collapse>
        </div>
        <pre className="code">{`<Collapse defaultActiveKey={['1']} gap={false}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
  <Collapse.Panel header="面板3" key="3">内容3</Collapse.Panel>
</Collapse>`}</pre>
      </div>
      <div className="example">
        <h3>受控用法</h3>
        <p>通过 <code>activeKey</code> 和 <code>onChange</code> 实现受控折叠面板。</p>
        <div className="demo">
          {/* 受控用法示例 */}
          {/* 这里可根据实际需要添加受控状态的演示 */}
        </div>
        <pre className="code">{`const [activeKey, setActiveKey] = useState(['1']);
<Collapse activeKey={activeKey} onChange={setActiveKey}>
  <Collapse.Panel header="面板1" key="1">内容1</Collapse.Panel>
  <Collapse.Panel header="面板2" key="2">内容2</Collapse.Panel>
</Collapse>`}</pre>
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
            <td>accordion</td>
            <td>手风琴模式</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>activeKey</td>
            <td>当前激活面板的 key（受控）</td>
            <td>string | string[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>defaultActiveKey</td>
            <td>默认激活面板的 key（非受控）</td>
            <td>string | string[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>切换面板的回调</td>
            <td>(key: string | string[]) =&gt; void</td>
            <td>-</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>是否有下间距</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Collapse.Panel 子元素</td>
            <td>ReactNode</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h3>Collapse.Panel</h3>
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
            <td>header</td>
            <td>面板头内容</td>
            <td>ReactNode</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>children</td>
            <td>面板内容</td>
            <td>ReactNode</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default CollapseDemo; 