import React, { useState } from 'react';
import Input from '../../../../components/Input';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import './style.less';

const InputDemo = () => {
  const [searchValue, setSearchValue] = useState('');
  const [password, setPassword] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [formatterValue, setFormatterValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleErrorChange = (e) => {
    const value = e.target.value;
    setErrorValue(value);
  };

  // 千分位格式化
  const numberFormatter = (val) => val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="sui-doc">
      <h1>Input 输入框</h1>

      <section>
        <h2>介绍</h2>
        <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      </section>

       <section>
        <h2>引入</h2>
        <pre className="code">{`import { Input } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
            <Input placeholder="请输入" />
          </div>
          <pre className="code">{`<Input placeholder="请输入" />`}</pre>
        </div>

        <div className="example">
          <h3>三种大小</h3>
          <p>我们为输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。</p>
          <div className="demo">
            <div style={{ marginBottom: 16 }}>
              <Input size="large" placeholder="大号输入框" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input placeholder="默认输入框" />
            </div>
            <div>
              <Input size="small" placeholder="小号输入框" />
            </div>
          </div>
          <pre className="code">{`<Input size="large" placeholder="大号输入框" />
<Input placeholder="默认输入框" />
<Input size="small" placeholder="小号输入框" />`}</pre>
        </div>

        <div className="example">
          <h3>带图标的输入框</h3>
          <p>通过 prefix 和 suffix 属性可以添加前置和后置图标。</p>
          <div className="demo">
            <div style={{ marginBottom: 16 }}>
              <Input prefix={<Icon name="User" />} placeholder="用户名" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input prefix={<Icon name="Lock" />} suffix={<Icon name="Eye" />} placeholder="密码" />
            </div>
            <div>
              <Input
                prefix={<Icon name="Search" />}
                suffix={
                  <Button type="primary" onClick={handleSearch} loading={loading}>
                    搜索
                  </Button>
                }
                placeholder="请输入搜索内容"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                loading={loading}
              />
            </div>
          </div>
          <pre className="code">{`<Input prefix={<Icon name="User" />} placeholder="用户名" />
<Input prefix={<Icon name="Lock" />} suffix={<Icon name="Eye" />} placeholder="密码" />
<Input
  prefix={<Icon name="Search" />}
  suffix={<Button type="primary">搜索</Button>}
  placeholder="请输入搜索内容"
/>`}</pre>
        </div>

        <div className="example">
          <h3>可清除</h3>
          <p>使用 allowClear 属性可以显示清除按钮。</p>
          <div className="demo">
            <Input allowClear placeholder="可清除" />
          </div>
          <pre className="code">{`<Input allowClear placeholder="可清除" />`}</pre>
        </div>

        <div className="example">
          <h3>只读和禁用</h3>
          <p>只读和禁用状态。</p>
          <div className="demo">
            <Input readOnly value="只读内容" style={{marginBottom: '10px'}} />
            <Input disabled placeholder="禁用状态"/>
          </div>
          <pre className="code">{`<Input readOnly value="只读内容" />
<Input disabled placeholder="禁用状态" />`}</pre>
        </div>

        <div className="example">
          <h3>最大长度和字数统计</h3>
          <p>通过 maxLength 和 showCount 属性限制输入长度并显示字数。</p>
          <div className="demo">
            <Input maxLength={10} showCount placeholder="最多输入10个字符" />
          </div>
          <pre className="code">{`<Input maxLength={10} showCount placeholder="最多输入10个字符" />`}</pre>
        </div>

        <div className="example">
          <h3>前置/后置标签</h3>
          <p>通过 addonBefore 和 addonAfter 属性添加前后缀标签。</p>
          <div className="demo">
            <Input addonBefore="http://" addonAfter=".com" placeholder="网站" />
          </div>
          <pre className="code">{`<Input addonBefore="http://" addonAfter=".com" placeholder="网站" />`}</pre>
        </div>

        <div className="example">
          <h3>loading 状态</h3>
          <p>右侧显示 loading 图标。</p>
          <div className="demo">
            <Input loading placeholder="加载中..." />
          </div>
          <pre className="code">{`<Input loading placeholder="加载中..." />`}</pre>
        </div>

        <div className="example">
          <h3>输入内容格式化</h3>
          <p>输入内容自动格式化（如千分位）。</p>
          <div className="demo">
            <Input
              value={formatterValue}
              onChange={e => setFormatterValue(e.target.value.replace(/[^\d]/g, ''))}
              formatter={numberFormatter}
              placeholder="请输入数字"
              allowClear
            />
          </div>
          <pre className="code">{`<Input
  value={value}
  onChange={e => setValue(e.target.value.replace(/[^\d]/g, ''))}
  formatter={val => val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  placeholder="请输入数字"
  allowClear
/>`}</pre>
        </div>

        <div className="example">
          <h3>禁用粘贴/复制/剪切</h3>
          <p>通过 disablePaste/disableCopy/disableCut 属性禁用相关操作。</p>
          <div className="demo">
            <Input disablePaste disableCopy disableCut placeholder="禁止粘贴/复制/剪切" />
          </div>
          <pre className="code">{`<Input disablePaste disableCopy disableCut placeholder="禁止粘贴/复制/剪切" />`}</pre>
        </div>

        <div className="example">
          <h3>多行输入（TextArea）</h3>
          <p>支持多行输入，支持自适应高度、清除、字数统计等。</p>
          <div className="demo">
            <Input.TextArea
              value={textAreaValue}
              onChange={e => setTextAreaValue(e.target.value)}
              placeholder="请输入多行文本"
              autoSize
              allowClear
              showCount
              maxLength={100}
              style={{ minHeight: 60 }}
            />
          </div>
          <pre className="code">{`<Input.TextArea
  value={value}
  onChange={e => setValue(e.target.value)}
  placeholder="请输入多行文本"
  autoSize
  allowClear
  showCount
  maxLength={100}
  style={{ minHeight: 60 }}
/>`}</pre>
        </div>

        <div className="example">
          <h3>密码框</h3>
          <p>用于密码的输入。</p>
          <div className="demo">
            <Input.Password
              placeholder="请输入密码"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <pre className="code">{`<Input.Password placeholder="请输入密码" />`}</pre>
        </div>

        <div className="example">
          <h3>错误状态</h3>
          <p>输入框的错误状态。</p>
          <div className="demo">
            <Input
              error
              placeholder="错误状态"
              value={errorValue}
              onChange={handleErrorChange}
            />
          </div>
          <pre className="code">{`<Input error placeholder="错误状态" />`}</pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>Input</h3>
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
            <tr><td>value</td><td>输入框内容</td><td>string</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>输入框默认内容</td><td>string</td><td>-</td></tr>
            <tr><td>onChange</td><td>输入框内容变化时的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>onPressEnter</td><td>按下回车的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>placeholder</td><td>输入框提示文字</td><td>string</td><td>-</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>readOnly</td><td>是否只读</td><td>boolean</td><td>false</td></tr>
            <tr><td>size</td><td>输入框大小</td><td>'large' | 'middle' | 'small'</td><td>'middle'</td></tr>
            <tr><td>prefix</td><td>前缀图标</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>suffix</td><td>后缀图标</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td>boolean</td><td>false</td></tr>
            <tr><td>type</td><td>声明 input 类型</td><td>string</td><td>'text'</td></tr>
            <tr><td>error</td><td>错误状态</td><td>boolean</td><td>false</td></tr>
            <tr><td>maxLength</td><td>最大输入长度</td><td>number</td><td>-</td></tr>
            <tr><td>showCount</td><td>是否展示字数</td><td>boolean</td><td>false</td></tr>
            <tr><td>addonBefore</td><td>前置标签</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>addonAfter</td><td>后置标签</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>loading</td><td>是否显示 loading 图标</td><td>boolean</td><td>false</td></tr>
            <tr><td>formatter</td><td>输入内容格式化</td><td>function(value: string): string</td><td>-</td></tr>
            <tr><td>disablePaste</td><td>禁用粘贴</td><td>boolean</td><td>false</td></tr>
            <tr><td>disableCopy</td><td>禁用复制</td><td>boolean</td><td>false</td></tr>
            <tr><td>disableCut</td><td>禁用剪切</td><td>boolean</td><td>false</td></tr>
          </tbody>
        </table>
        <h3>Input.TextArea</h3>
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
            <tr><td>value</td><td>内容</td><td>string</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>默认内容</td><td>string</td><td>-</td></tr>
            <tr><td>onChange</td><td>内容变化时的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>onPressEnter</td><td>按下回车的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>placeholder</td><td>提示文字</td><td>string</td><td>-</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>readOnly</td><td>是否只读</td><td>boolean</td><td>false</td></tr>
            <tr><td>size</td><td>大小</td><td>'large' | 'middle' | 'small'</td><td>'middle'</td></tr>
            <tr><td>allowClear</td><td>可清除</td><td>boolean</td><td>false</td></tr>
            <tr><td>maxLength</td><td>最大输入长度</td><td>number</td><td>-</td></tr>
            <tr><td>showCount</td><td>是否展示字数</td><td>boolean</td><td>false</td></tr>
            <tr><td>autoSize</td><td>自适应高度</td><td>boolean</td><td>false</td></tr>
            <tr><td>formatter</td><td>内容格式化</td><td>function(value: string): string</td><td>-</td></tr>
            <tr><td>addonBefore</td><td>前置标签</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>addonAfter</td><td>后置标签</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>disablePaste</td><td>禁用粘贴</td><td>boolean</td><td>false</td></tr>
            <tr><td>disableCopy</td><td>禁用复制</td><td>boolean</td><td>false</td></tr>
            <tr><td>disableCut</td><td>禁用剪切</td><td>boolean</td><td>false</td></tr>
          </tbody>
        </table>
        <h3>Input.Password</h3>
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
            <tr><td>value</td><td>输入框内容</td><td>string</td><td>-</td></tr>
            <tr><td>defaultValue</td><td>输入框默认内容</td><td>string</td><td>-</td></tr>
            <tr><td>onChange</td><td>输入框内容变化时的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>onPressEnter</td><td>按下回车的回调</td><td>function(e: Event)</td><td>-</td></tr>
            <tr><td>placeholder</td><td>输入框提示文字</td><td>string</td><td>'请输入密码'</td></tr>
            <tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr>
            <tr><td>size</td><td>输入框大小</td><td>'large' | 'middle' | 'small'</td><td>'middle'</td></tr>
            <tr><td>error</td><td>错误状态</td><td>boolean</td><td>false</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InputDemo; 