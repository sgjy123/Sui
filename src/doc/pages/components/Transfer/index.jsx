import React, { useState } from 'react';
import { Transfer } from 'components';

const mockData = Array.from({ length: 10 }, (_, i) => ({ key: i.toString(), title: `选项${i + 1}` }));

const TransferDemo = () => {
  const [targetKeys, setTargetKeys] = useState(['1', '3']);
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <div className="sui-doc">
      <h1>Transfer 穿梭框</h1>
      <section>
        <h2>介绍</h2>
        <p>用于在两个列表之间移动数据，常用于多项选择的场景。</p>
      </section>
      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Transfer } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最基础的穿梭框用法。</p>
          <div className="demo">
            <Transfer
              dataSource={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
            />
          </div>
          <pre className="code">{`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
/>`}</pre>
        </div>

        <div className="example">
          <h3>带搜索</h3>
          <p>支持列表项搜索过滤。</p>
          <div className="demo">
            <Transfer
              dataSource={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              showSearch
            />
          </div>
          <pre className="code">{`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  showSearch
/>`}</pre>
        </div>

        <div className="example">
          <h3>禁用</h3>
          <p>禁用状态下的穿梭框。</p>
          <div className="demo">
            <Transfer
              dataSource={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              disabled
            />
          </div>
          <pre className="code">{`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  disabled
/>`}</pre>
        </div>

        <div className="example">
          <h3>受控选中项</h3>
          <p>受控管理选中项。</p>
          <div className="demo">
            <Transfer
              dataSource={mockData}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={setTargetKeys}
              onSelectChange={setSelectedKeys}
            />
          </div>
          <pre className="code">{`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  selectedKeys={selectedKeys}
  onChange={setTargetKeys}
  onSelectChange={setSelectedKeys}
/>`}</pre>
        </div>

        <div className="example">
          <h3>自定义渲染</h3>
          <p>自定义每一项的渲染内容。</p>
          <div className="demo">
            <Transfer
              dataSource={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              render={item => <span style={{ color: '#409eff' }}>{item.title}</span>}
            />
          </div>
          <pre className="code">{`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  render={item => <span style={{ color: '#409eff' }}>{item.title}</span>}
/>`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>dataSource</td><td>数据源</td><td>array</td><td>[]</td></tr>
            <tr><td>targetKeys</td><td>目标列表 key 数组</td><td>array</td><td>[]</td></tr>
            <tr><td>selectedKeys</td><td>受控选中 key</td><td>array</td><td>-</td></tr>
            <tr><td>onChange</td><td>目标列表变化回调</td><td>function(targetKeys, direction, moveKeys)</td><td>-</td></tr>
            <tr><td>onSelectChange</td><td>选中项变化回调</td><td>function(leftSelected, rightSelected)</td><td>-</td></tr>
            <tr><td>render</td><td>自定义渲染每行</td><td>function(item)</td><td>item.title</td></tr>
            <tr><td>titles</td><td>列表标题</td><td>[string, string]</td><td>['源列表', '目标列表']</td></tr>
            <tr><td>operations</td><td>操作按钮文案</td><td>[string, string]</td><td>[{'>'}, {'<'}]</td></tr>
            <tr><td>showSearch</td><td>是否显示搜索</td><td>boolean</td><td>false</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>listStyle</td><td>列表自定义样式</td><td>object</td><td>-</td></tr>
            <tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr>
            <tr><td>style</td><td>自定义样式</td><td>object</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TransferDemo; 