import React, { useState } from 'react';
import { Menu, Button } from 'components';
import './style.less';

const { SubMenu, Item, ItemGroup } = Menu;

const MenuDoc = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('mail');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const changeTheme = (value) => {
    setTheme(value);
  };

  const handleClick = (key) => {
    setCurrent(key);
  };

  return (
    <div className="menu-doc">
      <h1>Menu 导航菜单</h1>

      <section>
        <h2>介绍</h2>
        <p>为页面和功能提供导航的菜单列表。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Menu } from 'Sui';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>垂直菜单，子菜单内嵌在菜单区域。</p>
          <div className="demo">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ width: 256 }}
            >
              <SubMenu index="sub1" icon="Mail" title="导航一">
                <ItemGroup index="g1" title="分组1">
                  <Item index="1">选项1</Item>
                  <Item index="2">选项2</Item>
                </ItemGroup>
                <ItemGroup index="g2" title="分组2">
                  <Item index="3">选项3</Item>
                  <Item index="4">选项4</Item>
                </ItemGroup>
              </SubMenu>
              <SubMenu index="sub2" icon="AppStore" title="导航二">
                <Item index="5">选项5</Item>
                <Item index="6">选项6</Item>
                <SubMenu index="sub3" title="子菜单">
                  <Item index="7">选项7</Item>
                  <Item index="8">选项8</Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
          <pre className="code">
            {`<Menu
  mode="inline"
  defaultSelectedKeys={['1']}
  defaultOpenKeys={['sub1']}
  style={{ width: 256 }}
>
  <SubMenu index="sub1" icon="Mail" title="导航一">
    <ItemGroup index="g1" title="分组1">
      <Item index="1">选项1</Item>
      <Item index="2">选项2</Item>
    </ItemGroup>
    <ItemGroup index="g2" title="分组2">
      <Item index="3">选项3</Item>
      <Item index="4">选项4</Item>
    </ItemGroup>
  </SubMenu>
  <SubMenu index="sub2" icon="AppStore" title="导航二">
    <Item index="5">选项5</Item>
    <Item index="6">选项6</Item>
    <SubMenu index="sub3" title="子菜单">
      <Item index="7">选项7</Item>
      <Item index="8">选项8</Item>
    </SubMenu>
  </SubMenu>
</Menu>`}
          </pre>
        </div>

        <div className="example">
          <h3>水平菜单</h3>
          <p>水平的顶部导航菜单。</p>
          <div className="demo">
            <Menu mode="horizontal" selectedKeys={[current]} onSelect={handleClick}>
              <Item index="mail" icon="Mail">
                导航一
              </Item>
              <Item index="app" icon="AppStore" disabled>
                导航二
              </Item>
              <SubMenu index="SubMenu" title="导航 - 子菜单" icon="Setting">
                <Item index="setting:1">选项1</Item>
                <Item index="setting:2">选项2</Item>
                <Item index="setting:3">选项3</Item>
                <Item index="setting:4">选项4</Item>
              </SubMenu>
              <Item index="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  导航四 - 链接
                </a>
              </Item>
            </Menu>
          </div>
          <pre className="code">
            {`<Menu mode="horizontal" selectedKeys={[current]} onSelect={handleClick}>
  <Item index="mail" icon="Mail">
    导航一
  </Item>
  <Item index="app" icon="AppStore" disabled>
    导航二
  </Item>
  <SubMenu index="SubMenu" title="导航 - 子菜单" icon="Setting">
    <Item index="setting:1">选项1</Item>
    <Item index="setting:2">选项2</Item>
    <Item index="setting:3">选项3</Item>
    <Item index="setting:4">选项4</Item>
  </SubMenu>
  <Item index="alipay">
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      导航四 - 链接
    </a>
  </Item>
</Menu>`}
          </pre>
        </div>

        <div className="example">
          <h3>主题</h3>
          <p>内建了两套主题 light 和 dark，默认 light。</p>
          <div className="demo">
            <div className="theme-selector">
              <span>切换主题：</span>
              <Button
                className={theme === 'light' ? 'active' : ''}
                onClick={() => changeTheme('light')}
              >
                亮色
              </Button>
              <Button
                className={theme === 'dark' ? 'active' : ''}
                onClick={() => changeTheme('dark')}
              >
                暗色
              </Button>
            </div>
            <br />
            <Menu
              mode="inline"
              theme={theme}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ width: 256 }}
            >
              <Item index="1" icon="Airplay">
                选项1
              </Item>
              <Item index="2" icon="Fan">
                选项2
              </Item>
              <Item index="3" icon="Agreement">
                选项3
              </Item>
              <SubMenu index="sub1" icon="Mail" title="导航一">
                <Item index="5">选项5</Item>
                <Item index="6">选项6</Item>
                <Item index="7">选项7</Item>
                <Item index="8">选项8</Item>
              </SubMenu>
            </Menu>
          </div>
          <pre className="code">
            {`<Menu
  mode="inline"
  theme={theme}
  defaultSelectedKeys={['1']}
  defaultOpenKeys={['sub1']}
  style={{ width: 256 }}
>
  <Item index="1" icon="Airplay">
    选项1
  </Item>
  <Item index="2" icon="Fan">
    选项2
  </Item>
  <Item index="3" icon="Agreement">
    选项3
  </Item>
  <SubMenu index="sub1" icon="Mail" title="导航一">
    <Item index="5">选项5</Item>
    <Item index="6">选项6</Item>
    <Item index="7">选项7</Item>
    <Item index="8">选项8</Item>
  </SubMenu>
</Menu>`}
          </pre>
        </div>

        <div className="example">
          <h3>可收起的菜单</h3>
          <p>内嵌菜单可以被缩起/展开。</p>
          <div className="demo">
            <div className="collapse-controller">
              <Button onClick={toggleCollapsed}>
                {collapsed ? '展开' : '收起'}
              </Button>
            </div>
            <br />
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={collapsed ? [] : ['sub1']}
              style={{ width: collapsed ? 80 : 256 }}
            >
              <Item index="1" icon="Airplay">
                选项1
              </Item>
              <Item index="2" icon="Fan">
                选项2
              </Item>
              <Item index="3" icon="Agreement">
                选项3
              </Item>
              <SubMenu index="sub1" icon="Home" title="导航一">
                <Item index="5">选项5</Item>
                <Item index="6">选项6</Item>
                <Item index="7">选项7</Item>
                <Item index="8">选项8</Item>
              </SubMenu>
            </Menu>
          </div>
          <pre className="code">
            {`<Menu
  mode="inline"
  theme="light"
  inlineCollapsed={collapsed}
  defaultSelectedKeys={['1']}
  defaultOpenKeys={collapsed ? [] : ['sub1']}
  style={{ width: collapsed ? 80 : 256 }}
>
  <Item index="1" icon="Airplay">
    选项1
  </Item>
  <Item index="2" icon="Fan">
    选项2
  </Item>
  <Item index="3" icon="Agreement">
    选项3
  </Item>
  <SubMenu index="sub1" icon="Home" title="导航一">
    <Item index="5">选项5</Item>
    <Item index="6">选项6</Item>
    <Item index="7">选项7</Item>
    <Item index="8">选项8</Item>
  </SubMenu>
</Menu>`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <h3>Menu</h3>
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
              <td>mode</td>
              <td>菜单类型，现在支持垂直、水平、和内嵌模式三种</td>
              <td>string: <code>vertical</code> | <code>horizontal</code> | <code>inline</code></td>
              <td><code>vertical</code></td>
            </tr>
            <tr>
              <td>theme</td>
              <td>主题颜色</td>
              <td>string: <code>light</code> | <code>dark</code></td>
              <td><code>light</code></td>
            </tr>
            <tr>
              <td>defaultSelectedKeys</td>
              <td>初始选中的菜单项 index 数组</td>
              <td>string[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>selectedKeys</td>
              <td>当前选中的菜单项 index 数组</td>
              <td>string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultOpenKeys</td>
              <td>初始展开的 SubMenu 菜单项 index 数组</td>
              <td>string[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>openKeys</td>
              <td>当前展开的 SubMenu 菜单项 index 数组</td>
              <td>string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>inlineIndent</td>
              <td>inline 模式的菜单缩进宽度</td>
              <td>number</td>
              <td>24</td>
            </tr>
            <tr>
              <td>inlineCollapsed</td>
              <td>inline 时菜单是否收起状态</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否允许多选</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onSelect</td>
              <td>被选中时调用</td>
              <td>function(selectedKey)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onOpenChange</td>
              <td>SubMenu 展开/关闭的回调</td>
              <td>function(openKeys)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>Menu.Item</h3>
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
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>index</td>
              <td>item 的唯一标志</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>菜单图标</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>danger</td>
              <td>展示错误状态</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>

        <h3>Menu.SubMenu</h3>
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
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>index</td>
              <td>唯一标志</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>菜单图标</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>子菜单标题</td>
              <td>string | ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>Menu.ItemGroup</h3>
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
              <td>title</td>
              <td>分组标题</td>
              <td>string | ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MenuDoc;
