import React from 'react';
import { Avatar, Space } from 'components';
import './style.less';

const AvatarDemo = () => {
  return (
    <div className="avatar-doc">
      <h1>Avatar 头像</h1>
      <section>
        <h2>介绍</h2>
        <p>用于展示用户头像、企业logo、个人标识等。</p>
      </section>
      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Avatar } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <h3>基础用法</h3>
          <p>头像的基础用法。</p>
          <div className="demo">
            <Space>
              <Avatar>U</Avatar>
              <Avatar>USER</Avatar>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </Space>
          </div>
          <pre className="code">{`<Avatar>U</Avatar>
<Avatar>USER</Avatar>
<Avatar src="https://joeschmoe.io/api/v1/random" />`}</pre>
        </div>
        <div className="example">
          <h3>不同大小</h3>
          <p>头像有三种尺寸：small、default、large，也可以通过 size 属性直接设置大小。</p>
          <div className="demo">
            <Space>
              <Avatar size="small">S</Avatar>
              <Avatar size="default">D</Avatar>
              <Avatar size="large">L</Avatar>
              <Avatar size={64}>64</Avatar>
            </Space>
          </div>
          <pre className="code">{`<Avatar size="small">S</Avatar>
<Avatar size="default">D</Avatar>
<Avatar size="large">L</Avatar>
<Avatar size={64}>64</Avatar>`}</pre>
        </div>
        <div className="example">
          <h3>不同形状</h3>
          <p>头像有两种形状：circle、square。</p>
          <div className="demo">
            <Space>
              <Avatar shape="circle">C</Avatar>
              <Avatar shape="square">S</Avatar>
            </Space>
          </div>
          <pre className="code">{`<Avatar shape="circle">C</Avatar>
<Avatar shape="square">S</Avatar>`}</pre>
        </div>
        <div className="example">
          <h3>图片头像</h3>
          <p>使用图片作为头像。</p>
          <div className="demo">
            <Space>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
              <Avatar src="https://joeschmoe.io/api/v1/random" shape="square" />
            </Space>
          </div>
          <pre className="code">{`<Avatar src="https://joeschmoe.io/api/v1/random" />
<Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
<Avatar src="https://joeschmoe.io/api/v1/random" shape="square" />`}</pre>
        </div>
        <div className="example">
          <h3>文字头像</h3>
          <p>使用文字作为头像，会自动提取首字母。</p>
          <div className="demo">
            <Space>
              <Avatar>User</Avatar>
              <Avatar>John Doe</Avatar>
              <Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>
            </Space>
          </div>
          <pre className="code">{`<Avatar>User</Avatar>
<Avatar>John Doe</Avatar>
<Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>`}</pre>
        </div>
        <div className="example">
          <h3>图标头像</h3>
          <p>使用图标作为头像。</p>
          <div className="demo">
            <Space>
              <Avatar icon="User" />
              <Avatar icon="Star" style={{ backgroundColor: '#52c41a' }} />
              <Avatar icon="Setting" style={{ backgroundColor: '#722ed1' }} />
            </Space>
          </div>
          <pre className="code">{`<Avatar icon="User" />
<Avatar icon="Star" style={{ backgroundColor: '#52c41a' }} />
<Avatar icon="Setting" style={{ backgroundColor: '#722ed1' }} />`}</pre>
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
              <td>src</td>
              <td>图片头像的资源地址</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>alt</td>
              <td>图片头像无法显示时的替代文本</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>头像大小</td>
              <td>number | 'small' | 'default' | 'large'</td>
              <td>default</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>头像形状</td>
              <td>'circle' | 'square'</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>设置头像的图标类型</td>
              <td>string</td>
              <td>-</td>
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
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AvatarDemo; 