import React, { useState } from 'react';
import { Cascader } from 'components';
import './style.less';

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [{ value: 'jiangbei', label: '江北' }],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [{ value: 'zhonghuamen', label: '中华门' }],
      },
    ],
  },
];

const customOptions = [
  {
    code: 'zhejiang',
    name: '浙江',
    items: [
      {
        code: 'hangzhou',
        name: '杭州',
        items: [{ code: 'xihu', name: '西湖' }],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: '江苏',
    items: [
      {
        code: 'nanjing',
        name: '南京',
        items: [{ code: 'zhonghuamen', name: '中华门' }],
      },
    ],
  },
];

const CascaderDoc = () => {
  const [value, setValue] = useState(['zhejiang', 'hangzhou', 'xihu']);
  const [multi, setMulti] = useState([
    [
        "zhejiang",
        "hangzhou",
        "xihu"
    ],
    [
        "zhejiang",
        "hangzhou",
        "xiasha"
    ],
    [
        "zhejiang",
        "ningbo",
        "jiangbei"
    ]
]);
  const [disabledVal, setDisabledVal] = useState([]);
  const [clearVal, setClearVal] = useState([]);
  const [customVal, setCustomVal] = useState([]);
  const [dynamicOptions, setDynamicOptions] = useState([
    { value: 'zhejiang', label: '浙江', isLeaf: false },
    { value: 'jiangsu', label: '江苏', isLeaf: false },
  ]);
  const [dynamicVal, setDynamicVal] = useState([]);

  // 动态加载
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        targetOption.loading = false;
        targetOption.children = [
          { label: `${targetOption.label} 城市 1`, value: `${targetOption.value}-1`, isLeaf: true },
          { label: `${targetOption.label} 城市 2`, value: `${targetOption.value}-2`, isLeaf: true },
        ];
        setDynamicOptions([...dynamicOptions]);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="cascader-doc">
      <h1>Cascader 级联选择器</h1>

      <section>
        <h2>介绍</h2>
        <p>支持多级联动选择，支持单选、多选、禁用、清空、自定义字段、动态加载等功能。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Cascader } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最基础的级联选择。</p>
          <div className="demo">
            <Cascader
              options={options}
              value={value}
              onChange={(e) => {

                console.log('onChange', value, e);
              }}
              placeholder="请选择"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'jiangbei', label: '江北' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'zhonghuamen', label: '中华门' },
        ],
      },
    ],
  },
];

<Cascader options={options} value={value} onChange={setValue} placeholder="请选择" />
`}</pre>
        </div>

        <div className="example">
          <h3>多选模式</h3>
          <p>支持多选，已选项以标签形式展示，可移除。</p>
          <div className="demo">
            <Cascader
              options={options}
              value={multi}
              onChange={(e) => {
                console.log('onChange', multi, e);
              }}
              multiple
              maxTagCount={2} // 新增，演示maxTagCount效果
              placeholder="多选"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`<Cascader options={options} value={multi} onChange={setMulti} multiple placeholder="多选" />`}</pre>
        </div>

        <div className="example">
          <h3>禁用</h3>
          <p>整体禁用或部分选项不可选。</p>
          <div className="demo">
            <Cascader
              options={options}
              value={disabledVal}
              onChange={setDisabledVal}
              disabled
              placeholder="整体禁用"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`<Cascader options={options} value={disabledVal} onChange={setDisabledVal} disabled placeholder="整体禁用" />`}</pre>
        </div>

        <div className="example">
          <h3>清空按钮</h3>
          <p>clearable 属性可一键清空已选内容。</p>
          <div className="demo">
            <Cascader
              options={options}
              value={clearVal}
              onChange={setClearVal}
              clearable
              placeholder="可清空"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`<Cascader options={options} value={clearVal} onChange={setClearVal} clearable placeholder="可清空" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义字段名</h3>
          <p>通过 fieldNames 属性自定义字段名。</p>
          <div className="demo">
            <Cascader
              options={customOptions}
              value={customVal}
              onChange={setCustomVal}
              fieldNames={{ label: 'name', value: 'code', children: 'items' }}
              placeholder="自定义字段"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`
const customOptions = [
  {
    code: 'zhejiang',
    name: '浙江',
    items: [
      {
        code: 'hangzhou',
        name: '杭州',
        items: [
          { code: 'xihu', name: '西湖' },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: '江苏',
    items: [
      {
        code: 'nanjing',
        name: '南京',
        items: [
          { code: 'zhonghuamen', name: '中华门' },
        ],
      },
    ],
  },
];

<Cascader
  options={customOptions}
  value={customVal}
  onChange={setCustomVal}
  fieldNames={{ label: 'name', value: 'code', children: 'items' }}
  placeholder="自定义字段"
/>
`}</pre>
        </div>

        <div className="example">
          <h3>动态加载</h3>
          <p>通过 loadData 属性动态加载下级选项。</p>
          <div className="demo">
            <Cascader
              options={dynamicOptions}
              value={dynamicVal}
              onChange={setDynamicVal}
              loadData={loadData}
              changeOnSelect
              placeholder="动态加载"
              style={{ width: 300 }}
            />
          </div>
          <pre className="code">{`
const [dynamicOptions, setDynamicOptions] = useState([
  { value: 'zhejiang', label: '浙江', isLeaf: false },
  { value: 'jiangsu', label: '江苏', isLeaf: false },
]);

const loadData = (selectedOptions) => {
  const targetOption = selectedOptions[selectedOptions.length - 1];
  targetOption.loading = true;
  return new Promise(resolve => {
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        { label: \`\${targetOption.label} 城市 1\`, value: \`\${targetOption.value}-1\`, isLeaf: true },
        { label: \`\${targetOption.label} 城市 2\`, value: \`\${targetOption.value}-2\`, isLeaf: true },
      ];
      setDynamicOptions([...dynamicOptions]);
      resolve();
    }, 1000);
  });
};

<Cascader
  options={dynamicOptions}
  value={dynamicVal}
  onChange={setDynamicVal}
  loadData={loadData}
  changeOnSelect
  placeholder="动态加载"
/>
`}</pre>
        </div>

        <div className="example">
          <h3>不同尺寸</h3>
          <p>通过 size 属性设置输入框大小，支持 small、middle、large。</p>
          <div className="demo">
            <Cascader
              options={options}
              size="small"
              placeholder="小尺寸 small"
              style={{ width: 180, marginRight: 12 }}
            />
            <Cascader
              options={options}
              size="middle"
              placeholder="中等尺寸 middle"
              style={{ width: 180, marginRight: 12 }}
            />
            <Cascader options={options} size="large" placeholder="大尺寸 large" style={{ width: 180 }} />
          </div>
          <pre className="code">{`<Cascader options={options} size="small" placeholder="小尺寸 small" />
<Cascader options={options} size="middle" placeholder="中等尺寸 middle" />
<Cascader options={options} size="large" placeholder="大尺寸 large" />`}</pre>
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
              <td>选项数据</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>value</td>
              <td>当前选中值（受控）</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>默认值（非受控）</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>选中回调</td>
              <td>function(value, selectedOptions)</td>
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
              <td>multiple</td>
              <td>是否多选</td>
              <td>bool</td>
              <td>false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否可清空</td>
              <td>bool</td>
              <td>false</td>
            </tr>
            <tr>
              <td>fieldNames</td>
              <td>自定义字段名</td>
              <td>object</td>
              <td>{`{ label: 'label', value: 'value', children: 'children' }`}</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸</td>
              <td>'large' | 'middle' | 'small'</td>
              <td>'middle'</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义类名</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>loadData</td>
              <td>动态加载数据</td>
              <td>function(selectedOptions)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>changeOnSelect</td>
              <td>选择即改变</td>
              <td>bool</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CascaderDoc;
