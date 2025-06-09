import React from 'react';
import { Dropdown, Menu, Button, Space } from 'components';
import './style.less';

const DropdownDemo = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
      <Menu.Item key="4" danger>
        Danger item
      </Menu.Item>
    </Menu>
  );

  const menuWithDivider = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3" disabled>
        3rd menu item (disabled)
      </Menu.Item>
      <Menu.Item key="4" danger>
        Danger item
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dropdown-doc">
      <h1>Dropdown 下拉菜单</h1>
      <section>
        <h2>介绍</h2>
        <p>向下弹出的列表。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Dropdown } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>
        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的下拉菜单。</p>
          <div className="demo">
            <Dropdown overlay={menu}>
              <Button>Hover me</Button>
            </Dropdown>
          </div>
          <pre className="code">{`<Dropdown overlay={menu}>
  <Button>Hover me</Button>
</Dropdown>`}</pre>
        </div>

        <div className="example">
          <h3>带箭头的下拉菜单</h3>
          <p>移入后显示带有下拉箭头的菜单。</p>
          <div className="demo">
            <Dropdown overlay={menu} arrow>
              <Button>Hover me</Button>
            </Dropdown>
          </div>
          <pre className="code">{`<Dropdown overlay={menu} arrow>
  <Button>Hover me</Button>
</Dropdown>`}</pre>
        </div>

        <div className="example">
          <h3>触发方式</h3>
          <p>默认是移入触发菜单，可以点击触发。</p>
          <div className="demo">
            <Dropdown overlay={menu} trigger="click">
              <Button>Click me</Button>
            </Dropdown>
          </div>
          <pre className="code">{`<Dropdown overlay={menu} trigger='click'>
  <Button>Click me</Button>
</Dropdown>`}</pre>
        </div>

        <div className="example">
          <h3>菜单项禁用</h3>
          <p>使用 disabled 属性禁用菜单项。</p>
          <div className="demo">
            <Dropdown overlay={menuWithDivider}>
              <Button>Hover me</Button>
            </Dropdown>
          </div>
          <pre className="code">{`<Dropdown overlay={menuWithDivider}>
  <Button>Hover me</Button>
</Dropdown>`}</pre>
        </div>

        <div className="example">
          <h3>不同位置</h3>
          <p>支持 6 个不同的位置。</p>
          <div className="demo">
            <Space size={24}>
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
          <pre className="code">{`<Dropdown overlay={menu} placement="bottomLeft" arrow>
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
</Dropdown>`}</pre>
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
      </section>
    </div>
  );
};

export default DropdownDemo;
