import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'components';
import './style.less';

// 基础树形数据
const treeData = [
  {
    key: '0-0',
    title: 'Node1',
    children: [
      {
        key: '0-0-0',
        title: 'Child Node1',
        children: [
          { key: '0-0-0-0', title: 'Grand Child Node1' },
          { key: '0-0-0-1', title: 'Grand Child Node2' },
        ],
      },
      { key: '0-0-1', title: 'Child Node2' },
    ],
  },
  { key: '0-1', title: 'Node2' },
];

const TreeSelectDoc = () => {
  const [basicValue, setBasicValue] = useState();
  const [multipleValue, setMultipleValue] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [checkableValue, setCheckableValue] = useState([]);
  const [clearValue, setClearValue] = useState();
  const [disabledValue, setDisabledValue] = useState();

  return (
    <div className="tree-select-doc">
      <h1>TreeSelect 树选择</h1>

      <section>
        <h2>介绍</h2>
        <p>
          树型选择控件，支持单选、多选、搜索、复选框等功能。适用于层级数据的展示和选择，如组织架构、文件系统、分类目录等场景。
        </p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { TreeSelect } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的树选择，支持单选。</p>
          <div className="demo">
            <TreeSelect
              treeData={treeData}
              value={basicValue}
              onChange={setBasicValue}
              placeholder="请选择节点"
              style={{ width: '300px' }}
            />
          </div>
          <pre className="code">{`const treeData = [
  {
    key: '0-0',
    title: 'Node1',
    children: [
      {
        key: '0-0-0',
        title: 'Child Node1',
        children: [
          { key: '0-0-0-0', title: 'Grand Child Node1' },
          { key: '0-0-0-1', title: 'Grand Child Node2' },
        ],
      },
      { key: '0-0-1', title: 'Child Node2' },
    ],
  },
  { key: '0-1', title: 'Node2' },
];

<TreeSelect
  treeData={treeData}
  value={basicValue}
  onChange={setBasicValue}
  placeholder="请选择节点"
  style={{ width: '300px' }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>多选模式</h3>
          <p>支持多选，只选择叶子节点，已选项以标签形式展示。父节点的选择状态通过子节点的选择状态来决定。</p>
          <div className="demo">
            <TreeSelect
              treeData={treeData}
              value={multipleValue}
              onChange={setMultipleValue}
              multiple
              placeholder="请选择多个节点"
              style={{ width: '400px' }}
            />
          </div>
          <pre className="code">{`<TreeSelect
  treeData={treeData}
  value={multipleValue}
  onChange={setMultipleValue}
  multiple
  placeholder="请选择多个节点"
  style={{ width: '400px' }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>可搜索</h3>
          <p>支持搜索功能，可以快速定位到需要的节点。</p>
          <div className="demo">
            <TreeSelect
              treeData={treeData}
              value={searchValue}
              onChange={setSearchValue}
              showSearch
              searchPlaceholder="搜索节点"
              placeholder="可搜索选择"
              style={{ width: '300px' }}
            />
          </div>
          <pre className="code">{`<TreeSelect
  treeData={treeData}
  value={searchValue}
  onChange={setSearchValue}
  showSearch
  searchPlaceholder="搜索节点"
  placeholder="可搜索选择"
  style={{ width: '300px' }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>复选框模式</h3>
          <p>显示复选框，支持父子节点联动选择。父节点的复选框状态会根据子节点的选择状态自动更新。</p>
          <div className="demo">
            <TreeSelect
              treeData={treeData}
              value={checkableValue}
              onChange={setCheckableValue}
              treeCheckable
              multiple
              placeholder="复选框选择"
              style={{ width: '400px' }}
            />
          </div>
          <pre className="code">{`<TreeSelect
  treeData={treeData}
  value={checkableValue}
  onChange={setCheckableValue}
  treeCheckable
  multiple
  placeholder="复选框选择"
  style={{ width: '400px' }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>清空功能</h3>
          <p>支持一键清空已选择的内容。</p>
          <div className="demo">
            <TreeSelect
              treeData={treeData}
              value={clearValue}
              onChange={setClearValue}
              allowClear
              placeholder="可清空选择"
              style={{ width: '300px' }}
            />
          </div>
          <pre className="code">{`<TreeSelect
  treeData={treeData}
  value={clearValue}
  onChange={setClearValue}
  allowClear
  placeholder="可清空选择"
  style={{ width: '300px' }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>支持整体禁用和部分节点禁用。</p>
          <div className="demo">
            <div style={{ marginBottom: '8px' }}>
              <TreeSelect treeData={treeData} disabled placeholder="整体禁用" style={{ width: '200px' }} />
            </div>
            <div>
              <TreeSelect
                treeData={treeData}
                value={disabledValue}
                onChange={setDisabledValue}
                placeholder="部分节点禁用"
                style={{ width: '200px' }}
              />
            </div>
          </div>
          <pre className="code">{`// 整体禁用
<TreeSelect treeData={treeData} disabled placeholder="整体禁用" />

// 部分节点禁用（在数据中设置 disabled: true）
const treeData = [
  {
    key: '0-1-1',
    title: 'Child Node4',
    disabled: true, // 禁用此节点
  },
];`}</pre>
        </div>

        <div className="example">
          <h3>不同尺寸</h3>
          <p>支持 small、middle、large 三种尺寸。</p>
          <div className="demo">
            <div style={{ marginBottom: '8px' }}>
              <TreeSelect treeData={treeData} size="small" placeholder="小尺寸" style={{ width: '200px' }} />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <TreeSelect treeData={treeData} size="middle" placeholder="中尺寸" style={{ width: '200px' }} />
            </div>
            <div>
              <TreeSelect treeData={treeData} size="large" placeholder="大尺寸" style={{ width: '200px' }} />
            </div>
          </div>
          <pre className="code">{`<TreeSelect treeData={treeData} size="small" placeholder="小尺寸" />
<TreeSelect treeData={treeData} size="middle" placeholder="中尺寸" />
<TreeSelect treeData={treeData} size="large" placeholder="大尺寸" />`}</pre>
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
            <tr>
              <td>treeData</td>
              <td>树形数据</td>
              <td>TreeNode[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>value</td>
              <td>指定当前选中的条目</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>指定默认选中的条目</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>选中树节点时调用此函数</td>
              <td>function(value, selectedNodes)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>选择框默认文字</td>
              <td>string</td>
              <td>'请选择'</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>支持多选，只选择叶子节点</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td>显示清除按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>showSearch</td>
              <td>是否显示搜索框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>searchPlaceholder</td>
              <td>搜索框占位符</td>
              <td>string</td>
              <td>'搜索'</td>
            </tr>
            <tr>
              <td>treeCheckable</td>
              <td>显示 checkbox</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>选择框大小</td>
              <td>'small' | 'middle' | 'large'</td>
              <td>'middle'</td>
            </tr>
            <tr>
              <td>style</td>
              <td>选择器样式</td>
              <td>object</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>

        <h3>TreeNode</h3>
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
            <tr>
              <td>key</td>
              <td>此项必须设置（其值在整个树范围内唯一）</td>
              <td>string | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>树节点显示的内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>默认根据此属性值进行筛选</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用节点</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>children</td>
              <td>子节点</td>
              <td>TreeNode[]</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>注意事项</h2>
        <ul>
          <li>
            TreeSelect 的 <code>treeData</code> 属性中，每个节点都必须有唯一的 <code>key</code> 值
          </li>
          <li>多选模式下只选择叶子节点，父节点的选择状态通过子节点的选择状态来决定</li>
          <li>
            当使用 <code>treeCheckable</code> 时，建议同时设置 <code>multiple={true}</code>
          </li>
          <li>
            搜索功能需要设置 <code>showSearch={true}</code>
          </li>
          <li>
            支持自定义 <code>filterTreeNode</code> 函数来实现自定义搜索逻辑
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TreeSelectDoc;
