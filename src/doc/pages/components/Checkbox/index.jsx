import React, { useState } from 'react';
import { Checkbox } from 'components';
import './style.less';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange', disabled: true },
];

const CheckboxDoc = () => {
  const [checked, setChecked] = useState(false);
  const [groupValue, setGroupValue] = useState(['a']);
  const [optionsValue, setOptionsValue] = useState(['apple']);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [sizeValue, setSizeValue] = useState(['middle']);

  // 全选/半选演示
  const plainOptions = ['A', 'B', 'C'];
  const [checkedList, setCheckedList] = useState(['A']);
  const allChecked = checkedList.length === plainOptions.length;
  const isIndeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  return (
    <div className="checkbox-doc">
      <h1>Checkbox 多选框</h1>

      <section>
        <h2>介绍</h2>
        <p>用于在一组备选项中进行多选。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Checkbox } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基本用法</h3>
          <div className="demo">
            <Checkbox>选项一</Checkbox>
            <Checkbox disabled>禁用</Checkbox>
          </div>
          <pre className="code">{`<Checkbox>选项一</Checkbox>
<Checkbox disabled>禁用</Checkbox>`}</pre>
        </div>

        <div className="example">
          <h3>受控用法</h3>
          <div className="demo">
            <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
              受控Checkbox
            </Checkbox>
            <span style={{ marginLeft: 8 }}>当前状态: {checked ? '选中' : '未选中'}</span>
          </div>
          <pre className="code">{`<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
  受控Checkbox
</Checkbox>`}</pre>
        </div>

        <div className="example">
          <h3>组合用法</h3>
          <div className="demo">
            <Checkbox.Group value={groupValue} onChange={setGroupValue}>
              <Checkbox value="a">A</Checkbox>
              <Checkbox value="b">B</Checkbox>
              <Checkbox value="c">C</Checkbox>
            </Checkbox.Group>
            <span style={{ marginLeft: 8 }}>当前选中: {groupValue.join(', ')}</span>
          </div>
          <pre className="code">{`<Checkbox.Group value={groupValue} onChange={setGroupValue}>
  <Checkbox value="a">A</Checkbox>
  <Checkbox value="b">B</Checkbox>
  <Checkbox value="c">C</Checkbox>
</Checkbox.Group>`}</pre>
        </div>

        <div className="example">
          <h3>options 用法</h3>
          <div className="demo">
            <Checkbox.Group
              options={options}
              value={optionsValue}
              onChange={setOptionsValue}
            />
            <span style={{ marginLeft: 8 }}>当前选中: {optionsValue.join(', ')}</span>
          </div>
          <pre className="code">{`<Checkbox.Group
  options={options}
  value={optionsValue}
  onChange={setOptionsValue}
/>`}</pre>
        </div>

        <div className="example">
          <h3>全选与半选</h3>
          <div className="demo">
            <Checkbox
              indeterminate={isIndeterminate}
              checked={allChecked}
              onChange={e => {
                setCheckedList(e.target.checked ? plainOptions : []);
              }}
            >全选</Checkbox>
            <Checkbox.Group
              value={checkedList}
              onChange={setCheckedList}
            >
              {plainOptions.map(opt => (
                <Checkbox key={opt} value={opt}>{opt}</Checkbox>
              ))}
            </Checkbox.Group>
            <span style={{ marginLeft: 8 }}>当前: {checkedList.join(', ')}</span>
          </div>
          <pre className="code">{`<Checkbox
  indeterminate={isIndeterminate}
  checked={allChecked}
  onChange={e => {
    setCheckedList(e.target.checked ? plainOptions : []);
  }}
>全选</Checkbox>
<Checkbox.Group
  value={checkedList}
  onChange={setCheckedList}
>
  {plainOptions.map(opt => (
    <Checkbox key={opt} value={opt}>{opt}</Checkbox>
  ))}
</Checkbox.Group>`}</pre>
        </div>

        <div className="example">
          <h3>尺寸</h3>
          <div className="demo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Checkbox.Group size="large" value={sizeValue} onChange={setSizeValue}>
                <Checkbox value="large">Large</Checkbox>
                <Checkbox value="middle">Middle</Checkbox>
                <Checkbox value="small">Small</Checkbox>
              </Checkbox.Group>
              <Checkbox.Group size="middle" value={sizeValue} onChange={setSizeValue}>
                <Checkbox value="large">Large</Checkbox>
                <Checkbox value="middle">Middle</Checkbox>
                <Checkbox value="small">Small</Checkbox>
              </Checkbox.Group>
              <Checkbox.Group size="small" value={sizeValue} onChange={setSizeValue}>
                <Checkbox value="large">Large</Checkbox>
                <Checkbox value="middle">Middle</Checkbox>
                <Checkbox value="small">Small</Checkbox>
              </Checkbox.Group>
            </div>
          </div>
          <pre className="code">{`<Checkbox.Group size="large" value={sizeValue} onChange={setSizeValue}>
  <Checkbox value="large">Large</Checkbox>
  <Checkbox value="middle">Middle</Checkbox>
  <Checkbox value="small">Small</Checkbox>
</Checkbox.Group>
<Checkbox.Group size="middle" value={sizeValue} onChange={setSizeValue}>
  <Checkbox value="large">Large</Checkbox>
  <Checkbox value="middle">Middle</Checkbox>
  <Checkbox value="small">Small</Checkbox>
</Checkbox.Group>
<Checkbox.Group size="small" value={sizeValue} onChange={setSizeValue}>
  <Checkbox value="large">Large</Checkbox>
  <Checkbox value="middle">Middle</Checkbox>
  <Checkbox value="small">Small</Checkbox>
</Checkbox.Group>`}</pre>
        </div>
      </section>
    </div>
  );
};

export default CheckboxDoc; 