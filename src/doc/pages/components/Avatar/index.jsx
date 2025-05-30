import React from 'react';
import { Avatar, Space } from 'components';
import './style.less';

const AvatarDemo = () => {
  return (
    <div className="avatar-doc">
      <div className="example">
        <div className="example-title">基础用法</div>
        <div className="example-desc">头像的基础用法。</div>
        <div className="example-demo">
          <Space>
            <Avatar>U</Avatar>
            <Avatar>USER</Avatar>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">不同大小</div>
        <div className="example-desc">头像有三种尺寸：small、default、large，也可以通过 size 属性直接设置大小。</div>
        <div className="example-demo">
          <Space>
            <Avatar size="small">S</Avatar>
            <Avatar size="default">D</Avatar>
            <Avatar size="large">L</Avatar>
            <Avatar size={64}>64</Avatar>
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">不同形状</div>
        <div className="example-desc">头像有两种形状：circle、square。</div>
        <div className="example-demo">
          <Space>
            <Avatar shape="circle">C</Avatar>
            <Avatar shape="square">S</Avatar>
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">图片头像</div>
        <div className="example-desc">使用图片作为头像。</div>
        <div className="example-demo">
          <Space>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
            <Avatar src="https://joeschmoe.io/api/v1/random" shape="square" />
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">文字头像</div>
        <div className="example-desc">使用文字作为头像，会自动提取首字母。</div>
        <div className="example-demo">
          <Space>
            <Avatar>User</Avatar>
            <Avatar>John Doe</Avatar>
            <Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">图标头像</div>
        <div className="example-desc">使用图标作为头像。</div>
        <div className="example-demo">
          <Space>
            <Avatar icon="User" />
            <Avatar icon="Star" style={{ backgroundColor: '#52c41a' }} />
            <Avatar icon="Setting" style={{ backgroundColor: '#722ed1' }} />
          </Space>
        </div>
      </div>

      <div className="example">
        <div className="example-title">API</div>
        <div className="example-desc">Avatar 组件的 API 说明。</div>
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
      </div>
    </div>
  );
};

export default AvatarDemo; 