import React, { useState } from 'react';
import { Switch, Icon, Space } from 'components';
import './style.less';

const SwitchDoc = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleToggleLoading = () => {
    setLoading(!loading);
  };

  const handleToggleDisabled = () => {
    setDisabled(!disabled);
  };

  const onChange = (checked, event) => {
    console.log(`Switch to ${checked}`, event);
    setChecked(checked);
  };

  return (
    <div className="switch-doc">
      <h1>Switch 开关</h1>

      <section>
        <h2>介绍</h2>
        <p>开关选择器。表示开关状态/两种状态之间的切换。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Switch } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
            <Switch defaultChecked />
          </div>
          <pre className="code">{`<Switch defaultChecked />`}</pre>
        </div>

        <div className="example">
          <h3>禁用状态</h3>
          <p>禁用状态下的开关。</p>
          <div className="demo">
            <Space>
              <Switch disabled={disabled} defaultChecked />
              <Switch disabled={disabled} />
              <button onClick={handleToggleDisabled} className="sui-btn">
                {disabled ? '启用' : '禁用'}
              </button>
            </Space>
          </div>
          <pre className="code">{`<Switch disabled />
<Switch disabled defaultChecked />

// 动态控制禁用状态
const [disabled, setDisabled] = useState(false);
<Switch disabled={disabled} />
<button onClick={() => setDisabled(!disabled)}>
  {disabled ? '启用' : '禁用'}
</button>`}</pre>
        </div>

        <div className="example">
          <h3>加载状态</h3>
          <p>加载中的开关。</p>
          <div className="demo">
            <Space>
              <Switch loading defaultChecked />
              <Switch loading />
              <Switch loading={loading} defaultChecked />
              <button onClick={handleToggleLoading} className="sui-btn">
                {loading ? '停止加载' : '开始加载'}
              </button>
            </Space>
          </div>
          <pre className="code">{`<Switch loading defaultChecked />
<Switch loading />

// 动态控制加载状态
const [loading, setLoading] = useState(false);
<Switch loading={loading} defaultChecked />
<button onClick={() => setLoading(!loading)}>
  {loading ? '停止加载' : '开始加载'}
</button>`}</pre>
        </div>

        <div className="example">
          <h3>带文字和图标</h3>
          <p>带有文字或图标的开关。</p>
          <div className="demo">
            <Space direction="vertical">
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked
              />
              <Switch
                checkedChildren="1"
                unCheckedChildren="0"
              />
              <Switch
                checkedChildren={<Icon name="Check" />}
                unCheckedChildren={<Icon name="Close" />}
                defaultChecked
              />
            </Space>
          </div>
          <pre className="code">{`<Switch
  checkedChildren="开"
  unCheckedChildren="关"
  defaultChecked
/>
<Switch
  checkedChildren="1"
  unCheckedChildren="0"
/>
<Switch
  checkedChildren={<Icon name="Check" />}
  unCheckedChildren={<Icon name="Close" />}
  defaultChecked
/>`}</pre>
        </div>

        <div className="example">
          <h3>尺寸大小</h3>
          <p>提供三种尺寸：大号、默认、小号。</p>
          <div className="demo">
            <Space direction="vertical">
              <Switch size="small" defaultChecked />
              <Switch defaultChecked />
              <Switch size="large" defaultChecked />
            </Space>
          </div>
          <pre className="code">{`<Switch size="small" defaultChecked />
<Switch defaultChecked />
<Switch size="large" defaultChecked />`}</pre>
        </div>

        <div className="example">
          <h3>受控组件</h3>
          <p>受控的开关，通过 checked 和 onChange 控制状态。</p>
          <div className="demo">
            <Space>
              <Switch checked={checked} onChange={onChange} />
              <span>当前状态：{checked ? '开启' : '关闭'}</span>
            </Space>
          </div>
          <pre className="code">{`const [checked, setChecked] = useState(true);

const onChange = (checked) => {
  console.log(\`Switch to \${checked}\`);
  setChecked(checked);
};

<Switch checked={checked} onChange={onChange} />
<span>当前状态：{checked ? '开启' : '关闭'}</span>`}</pre>
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
              <td>checked</td>
              <td>指定当前是否选中</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>checkedChildren</td>
              <td>选中时的内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>Switch 器类名</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultChecked</td>
              <td>初始是否选中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>加载中的开关</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>开关大小，可选值：small middle large</td>
              <td>string</td>
              <td>middle</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>unCheckedChildren</td>
              <td>非选中时的内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>变化时回调函数</td>
              <td>function(checked: boolean, event: Event)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SwitchDoc; 