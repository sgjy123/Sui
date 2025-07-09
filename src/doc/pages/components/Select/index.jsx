import React, { useState } from 'react';
import { Icon, Select } from 'components';
import './style.less';

const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三（禁用）', value: '3', disabled: true },
  { label: '选项四', value: '4' },
];

const groupOptions = [
  { label: '分组A', options: [
    { label: 'A-1', value: 'a1' },
    { label: 'A-2', value: 'a2' },
  ]},
  { label: '分组B', options: [
    { label: 'B-1', value: 'b1' },
    { label: 'B-2', value: 'b2', disabled: true },
  ]},
];

const SelectDoc = () => {
  const [value, setValue] = useState();
  const [multi, setMulti] = useState([]);
  const [groupVal, setGroupVal] = useState();
  const [disabledVal, setDisabledVal] = useState('2');
  const [clearVal, setClearVal] = useState('1');
  const [iconVal, setIconVal] = useState();
  const [bodyVal, setBodyVal] = useState();
  const [customVal, setCustomVal] = useState();
  const [searchVal, setSearchVal] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [multiSearchVal, setMultiSearchVal] = useState([]);
  const [multiSearchInput, setMultiSearchInput] = useState('');

  return (
    <div className="select-doc">
      <h1>Select 下拉框</h1>

      <section>
        <h2>介绍</h2>
        <p>支持单选、多选、分组、禁用、清空、自定义渲染、弹层挂载等丰富功能。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Select } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础单选</h3>
          <p>最基础的单选下拉框。</p>
          <div className="demo">
            <Select options={options} value={value} onChange={setValue} placeholder="请选择" />
          </div>
          <pre className="code">{`<Select options={options} value={value} onChange={setValue} placeholder="请选择" />`}</pre>
        </div>

        <div className="example">
          <h3>多选模式</h3>
          <p>支持多选，已选项以标签形式展示，可移除。</p>
          <div className="demo">
            <Select options={options} value={multi} onChange={setMulti} mode="multiple" placeholder="多选" />
          </div>
          <pre className="code">{`<Select options={options} value={multi} onChange={setMulti} mode="multiple" placeholder="多选" />`}</pre>
        </div>

        <div className="example">
          <h3>分组选项</h3>
          <p>下拉项支持分组展示。</p>
          <div className="demo">
            <Select options={groupOptions} value={groupVal} onChange={setGroupVal} placeholder="分组选择" />
          </div>
          <pre className="code">{`<Select options={groupOptions} value={groupVal} onChange={setGroupVal} placeholder="分组选择" />`}</pre>
        </div>

        <div className="example">
          <h3>禁用整体/部分选项</h3>
          <p>整体禁用或部分选项不可选。</p>
          <div className="demo">
            <Select options={options} value={disabledVal} onChange={setDisabledVal} disabled placeholder="整体禁用" />
            <br />
            <Select options={options} value={disabledVal} onChange={setDisabledVal} placeholder="部分禁用" />
          </div>
          <pre className="code">{`<Select options={options} value={disabledVal} onChange={setDisabledVal} disabled placeholder="整体禁用" />
<Select options={options} value={disabledVal} onChange={setDisabledVal} placeholder="部分禁用" />`}</pre>
        </div>

        <div className="example">
          <h3>清空按钮</h3>
          <p>allowClear 属性可一键清空已选内容。</p>
          <div className="demo">
            <Select options={options} value={clearVal} onChange={setClearVal} allowClear placeholder="可清空" />
          </div>
          <pre className="code">{`<Select options={options} value={clearVal} onChange={setClearVal} allowClear placeholder="可清空" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义下拉图标</h3>
          <p>通过 icon 属性自定义下拉箭头。</p>
          <div className="demo">
            <Select options={options} value={iconVal} onChange={setIconVal} icon={<Icon name="ArrowDown" theme="filled" />} placeholder="自定义图标" />
          </div>
          <pre className="code">{`<Select options={options} value={iconVal} onChange={setIconVal} icon={<Icon name="ArrowDown" theme="filled" />} placeholder="自定义图标" />`}</pre>
        </div>

        <div className="example">
          <h3>弹层挂载到 body</h3>
          <p>通过 getPopupContainer 属性将下拉弹层挂载到 body。</p>
          <div className="demo">
            <Select options={options} value={bodyVal} onChange={setBodyVal} getPopupContainer={() => document.body} placeholder="挂载到body" />
          </div>
          <pre className="code">{`<Select options={options} value={bodyVal} onChange={setBodyVal} getPopupContainer={() => document.body} placeholder="挂载到body" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义渲染选项</h3>
          <p>通过 renderOption 自定义下拉项内容。</p>
          <div className="demo">
            <Select
              options={options}
              value={customVal}
              onChange={setCustomVal}
              placeholder="自定义渲染"
              renderOption={(option, selected) => (
                <span style={{ fontWeight: selected ? 700 : 400, color: option.disabled ? '#bbb' : '#333' }}>
                  {option.label} {selected ? '✔️' : ''}
                </span>
              )}
            />
          </div>
          <pre className="code">{`<Select
  options={options}
  value={customVal}
  onChange={setCustomVal}
  placeholder="自定义渲染"
  renderOption={(option, selected) => (
    <span style={{ fontWeight: selected ? 700 : 400, color: option.disabled ? '#bbb' : '#333' }}>
      {option.label} {selected ? '✔️' : ''}
    </span>
  )}
/>`}</pre>
        </div>

        <div className="example">
          <h3>键盘操作</h3>
          <p>支持上下键切换、回车选中、ESC关闭下拉、Backspace删除多选标签。</p>
          <div className="demo">
            <Select options={options} value={multi} onChange={setMulti} mode="multiple" placeholder="键盘操作" />
          </div>
          <pre className="code">{`<Select options={options} value={multi} onChange={setMulti} mode="multiple" placeholder="键盘操作" />`}</pre>
        </div>

        <div className="example">
          <h3>不同尺寸</h3>
          <p>通过 size 属性设置下拉框大小，支持 small、middle、large。</p>
          <div className="demo">
            <Select options={options} size="small" placeholder="小尺寸 small" style={{ marginRight: 12 }} />
            <Select options={options} size="middle" placeholder="中等尺寸 middle" style={{ marginRight: 12 }} />
            <Select options={options} size="large" placeholder="大尺寸 large" />
          </div>
          <pre className="code">{`<Select options={options} size="small" placeholder="小尺寸 small" />
<Select options={options} size="middle" placeholder="中等尺寸 middle" />
<Select options={options} size="large" placeholder="大尺寸 large" />`}</pre>
        </div>

        <div className="example">
          <h3>支持搜索</h3>
          <p>showSearch 属性开启本地搜索，选择框本身可输入搜索，体验与 antd 一致。</p>
          <div className="demo">
            <Select
              options={options}
              value={searchVal}
              onChange={setSearchVal}
              showSearch
              placeholder="可搜索..."
              onSearch={setSearchInput}
              filterOption={(input, option) => String(option.label).toLowerCase().indexOf(input.toLowerCase()) > -1}
            />
          </div>
          <pre className="code">{`<Select
  options={options}
  value={searchVal}
  onChange={setSearchVal}
  showSearch
  placeholder="可搜索..."
  onSearch={setSearchInput}
  filterOption={(input, option) => String(option.label).toLowerCase().indexOf(input.toLowerCase()) > -1}
/>`}</pre>
        </div>

        <div className="example">
          <h3>多选支持搜索</h3>
          <p>mode="multiple" 和 showSearch 同时使用，支持多选标签+输入搜索，体验与 antd 一致。</p>
          <div className="demo">
            <Select
              options={options}
              value={multiSearchVal}
              onChange={setMultiSearchVal}
              showSearch
              mode="multiple"
              placeholder="多选可搜索..."
              onSearch={setMultiSearchInput}
              filterOption={(input, option) => String(option.label).toLowerCase().indexOf(input.toLowerCase()) > -1}
            />
          </div>
          <pre className="code">{`<Select
  options={options}
  value={multiSearchVal}
  onChange={setMultiSearchVal}
  showSearch
  mode="multiple"
  placeholder="多选可搜索..."
  onSearch={setMultiSearchInput}
  filterOption={(input, option) => String(option.label).toLowerCase().indexOf(input.toLowerCase()) > -1}
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
            <tr>
              <td>options</td>
              <td>选项列表，支持分组</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>value</td>
              <td>当前选中值</td>
              <td>any | any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>选中回调</td>
              <td>function(value, option)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位符</td>
              <td>string</td>
              <td>请选择</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>bool</td>
              <td>false</td>
            </tr>
            <tr>
              <td>mode</td>
              <td>选择模式（单选/多选）</td>
              <td>'single' | 'multiple'</td>
              <td>'single'</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td>显示清空按钮</td>
              <td>bool</td>
              <td>false</td>
            </tr>
            <tr>
              <td>getPopupContainer</td>
              <td>弹层挂载节点</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>自定义下拉箭头</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>dropdownWidth</td>
              <td>下拉菜单宽度</td>
              <td>string | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>renderOption</td>
              <td>自定义渲染选项</td>
              <td>function(option, selected)</td>
              <td>-</td>
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
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SelectDoc; 