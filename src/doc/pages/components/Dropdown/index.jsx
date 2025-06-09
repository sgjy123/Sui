import React from 'react';
import { Dropdown, Menu, Button, Space } from 'components';
import './style.less';

const DropdownDemo = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
      <Menu.Item key="4" danger>Danger item</Menu.Item>
    </Menu>
  );

  const menuWithDivider = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3" disabled>3rd menu item (disabled)</Menu.Item>
      <Menu.Item key="4" danger>Danger item</Menu.Item>
    </Menu>
  );

  return (
    <div className="demo-dropdown">
      <h2>Dropdown 下拉菜单</h2>
      <p>向下弹出的列表。</p>

      <h3>何时使用</h3>
      <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>

      <h3>代码演示</h3>

      <div className="demo-section">
        <h4>基本用法</h4>
        <p>最简单的下拉菜单。</p>
        <div className="demo-wrapper">
          <Dropdown overlay={menu}>
            <Button>Hover me</Button>
          </Dropdown>
        </div>
      </div>

      <div className="demo-section">
        <h4>带箭头的下拉菜单</h4>
        <p>移入后显示带有下拉箭头的菜单。</p>
        <div className="demo-wrapper">
          <Dropdown overlay={menu} arrow>
            <Button>Hover me</Button>
          </Dropdown>
        </div>
      </div>

      <div className="demo-section">
        <h4>触发方式</h4>
        <p>默认是移入触发菜单，可以点击触发。</p>
        <div className="demo-wrapper">
          <Space>
            <Dropdown overlay={menu} trigger='click'>
              <Button>Click me</Button>
            </Dropdown>
            <Dropdown overlay={menu} trigger='hover'>
              <Button>Hover me</Button>
            </Dropdown>
          </Space>
        </div>
      </div>

      <div className="demo-section">
        <h4>菜单项禁用</h4>
        <p>使用 disabled 属性禁用菜单项。</p>
        <div className="demo-wrapper">
          <Dropdown overlay={menuWithDivider}>
            <Button>Hover me</Button>
          </Dropdown>
        </div>
      </div>

      <div className="demo-section">
        <h4>不同位置</h4>
        <p>支持 6 个不同的位置。</p>
        <div className="demo-wrapper">
          <Space>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button>bottomRight</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topLeft" arrow>
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter" arrow>
              <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight" arrow>
              <Button>topRight</Button>
            </Dropdown>
          </Space>
        </div>
      </div>

      <h3>API</h3>
      <h4>Dropdown</h4>
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
            <td>overlay</td>
            <td>菜单</td>
            <td>ReactNode</td>
            <td>-</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>触发下拉的行为</td>
            <td>Array&lt;'click'|'hover'&gt;</td>
            <td>['hover']</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>菜单弹出位置</td>
            <td>'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'</td>
            <td>bottomLeft</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>菜单是否禁用</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>visible</td>
            <td>菜单是否显示</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onVisibleChange</td>
            <td>菜单显示状态改变时调用</td>
            <td>(visible: boolean) =&gt; void</td>
            <td>-</td>
          </tr>
          <tr>
            <td>arrow</td>
            <td>是否显示下拉箭头</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>getPopupContainer</td>
            <td>菜单渲染父节点。默认渲染到 body 上</td>
            <td>(triggerNode: HTMLElement) =&gt; HTMLElement</td>
            <td>() =&gt; document.body</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DropdownDemo; 