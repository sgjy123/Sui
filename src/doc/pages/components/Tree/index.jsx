import React, { useState } from 'react';
import { Tree, Space } from 'components';
import './style.less';

const demoData = [
  { key: '0', title: '父节点 0', children: [
    { key: '0-0', title: '子节点 0-0' },
    { key: '0-1', title: '子节点 0-1', children: [
      { key: '0-1-0', title: '叶子 0-1-0' },
      { key: '0-1-1', title: '叶子 0-1-1' },
    ] },
  ]},
  { key: '1', title: '父节点 1' },
];

const TreeDoc = () => {
  const [expandedKeys, setExpandedKeys] = useState(['0']);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);

  return (
    <div className="tree-doc">
      <h1>Tree 树形控件</h1>

      <section>
        <h2>介绍</h2>
        <p>用于分层数据的展示与交互，支持展开、选择、勾选。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Tree } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>展示层级结构，支持展开/收起。</p>
          <div className="demo">
            <Tree treeData={demoData} defaultExpandAll />
          </div>
          <pre className="code">{`<Tree treeData={data} defaultExpandAll />`}</pre>
        </div>

        <div className="example">
          <h3>可选择/可勾选（含半选联动）</h3>
          <p>选择与勾选可独立配置，勾选默认启用父子联动并产生半选态。</p>
          <div className="demo">
            <Space size={24}>
              <Tree treeData={demoData} selectable showIcon />
              <Tree treeData={demoData} checkable defaultCheckedKeys={{ checkedKeys: ["0-1"] }} />
            </Space>
          </div>
          <pre className="code">{`<Tree treeData={data} selectable showIcon />
<Tree treeData={data} checkable defaultCheckedKeys={{ checkedKeys: ["0-1"] }} />`}</pre>
        </div>

        <div className="example">
          <h3>受控用法（展示线条/图标/整行）</h3>
          <p>完全受控同时展示连接线、图标与整行点击区域。</p>
          <div className="demo">
            <Tree
              treeData={demoData}
              expandedKeys={expandedKeys}
              onExpand={setExpandedKeys}
              selectable
              selectedKeys={selectedKeys}
              onSelect={setSelectedKeys}
              checkable
              checkedKeys={checkedKeys}
              onCheck={setCheckedKeys}
              showLine
              showIcon
              blockNode
              highlightAncestorsOnHover
            />
          </div>
          <pre className="code">{`const [expandedKeys, setExpandedKeys] = useState(['0']);
const [selectedKeys, setSelectedKeys] = useState([]);
const [checkedKeys, setCheckedKeys] = useState([]);

<Tree
  treeData={data}
  expandedKeys={expandedKeys}
  onExpand={setExpandedKeys}
  selectable
  selectedKeys={selectedKeys}
  onSelect={setSelectedKeys}
  checkable
  checkedKeys={checkedKeys}
  onCheck={setCheckedKeys}
  showLine
  showIcon
  blockNode
/>`}</pre>
        </div>

        <div className="example">
          <h3>无级联（与父子不关联）</h3>
          <p>设置 checkStrictly 关闭父子联动，仅影响当前节点。</p>
          <div className="demo">
            <Tree treeData={demoData} checkable checkStrictly defaultExpandAll />
          </div>
          <pre className="code">{`<Tree treeData={data} checkable checkStrictly />`}</pre>
        </div>

        <div className="example">
          <h3>禁用节点与禁用复选框</h3>
          <div className="demo">
            <Tree
              treeData={[
                { key: '0', title: '父节点 0', disabled: true },
                { key: '1', title: '父节点 1', children: [
                  { key: '1-0', title: '子节点 1-0', disableCheckbox: true },
                ]},
              ]}
              checkable
              defaultExpandAll
              highlightParentOnHover
            />
          </div>
          <pre className="code">{`const data2 = [
  { key: '0', title: '父节点 0', disabled: true },
  { key: '1', title: '父节点 1', children: [
    { key: '1-0', title: '子节点 1-0', disableCheckbox: true },
  ]},
];
<Tree treeData={data2} checkable defaultExpandAll />`}</pre>
        </div>

        <div className="example">
          <h3>自定义样式</h3>
          <p>通过自定义类名覆盖样式，使树形控件风格更贴合业务需求。</p>
          <div className="demo">
            <Tree className="my-custom-tree" treeData={demoData} defaultExpandAll showIcon blockNode highlightParentOnHover />
          </div>
          <pre className="code">{`.my-custom-tree .sui-tree-node:hover > .sui-tree-node-inner { background: #fff7e6; }
.my-custom-tree .sui-tree-node-selected > .sui-tree-node-inner { background: #ffe7ba; }
.my-custom-tree .sui-tree-title { color: #d46b08; font-weight: 600; }
.my-custom-tree .sui-tree-icon { color: #fa8c16; }
.my-custom-tree .sui-tree-children-lined { border-left: 1px dashed #faad14; }
// React 中请在页面样式文件中添加上述样式，或直接给 Tree 传入 style/className 自定义。`}</pre>
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
            <tr><td>treeData</td><td>数据源</td><td>TreeNode[]</td><td>[]</td></tr>
            <tr><td>defaultExpandAll</td><td>默认展开全部</td><td>boolean</td><td>false</td></tr>
            <tr><td>defaultExpandedKeys</td><td>默认展开 keys</td><td>string[]</td><td>-</td></tr>
            <tr><td>expandedKeys</td><td>展开 keys（受控）</td><td>string[]</td><td>-</td></tr>
            <tr><td>onExpand</td><td>展开变化回调(keys)</td><td>function</td><td>-</td></tr>
            <tr><td>selectable</td><td>是否可选</td><td>boolean</td><td>false</td></tr>
            <tr><td>selectedKeys</td><td>选中 keys（受控）</td><td>string[]</td><td>-</td></tr>
            <tr><td>defaultSelectedKeys</td><td>默认选中 keys</td><td>string[]</td><td>-</td></tr>
            <tr><td>onSelect</td><td>选择变化回调(keys)</td><td>function</td><td>-</td></tr>
            <tr><td>checkable</td><td>是否显示复选框</td><td>boolean</td><td>false</td></tr>
            <tr><td>checkedKeys</td><td>勾选 keys（受控）</td><td>string[]</td><td>-</td></tr>
            <tr><td>defaultCheckedKeys</td><td>默认勾选 keys</td><td>string[]</td><td>-</td></tr>
            <tr><td>onCheck</td><td>勾选变化回调</td><td>function</td><td>-</td></tr>
            <tr><td>checkStrictly</td><td>勾选与父子不关联</td><td>boolean</td><td>false</td></tr>
            <tr><td>showLine</td><td>展示连接线</td><td>boolean</td><td>false</td></tr>
            <tr><td>showIcon</td><td>展示图标（文件/文件夹）</td><td>boolean</td><td>false</td></tr>
            <tr><td>blockNode</td><td>整行可点（充满行）</td><td>boolean</td><td>false</td></tr>
            <tr><td>multiple</td><td>可多选</td><td>boolean</td><td>false</td></tr>
            <tr><td>highlightAncestorsOnHover</td><td>hover是否高亮父节点</td><td>boolean</td><td>false</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TreeDoc;


