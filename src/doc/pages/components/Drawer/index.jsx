import React, { useState } from 'react';
import Drawer from '../../../../components/Drawer';
import Button from '../../../../components/Button';
import './style.less';

const DrawerDoc = () => {
  // 为每个抽屉创建独立的状态变量
  const [basicVisible, setBasicVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const [customWidthVisible, setCustomWidthVisible] = useState(false);
  const [noMaskVisible, setNoMaskVisible] = useState(false);

  return (
    <div className="drawer-doc">
      <h1>Drawer 抽屉</h1>
      <p>抽屉从屏幕边缘滑出的浮层，可以包含表单或操作等内容。</p>

      <section>
        <h2>何时使用</h2>
        <p>抽屉组件用于在屏幕边缘显示额外的内容或操作，通常用于：</p>
        <ul>
          <li>需要展示更多内容时</li>
          <li>需要展示表单或操作时</li>
          <li>需要展示详情时</li>
        </ul>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基本用法</h3>
          <p>最简单的用法，点击按钮打开抽屉。</p>
          <div className="demo">
            <Button type="primary" onClick={() => setBasicVisible(true)}>
              Open Drawer
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              visible={basicVisible}
              onClose={() => setBasicVisible(false)}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
          <pre className="code">
{`const [visible, setVisible] = useState(false);

<Button type="primary" onClick={() => setVisible(true)}>
  Open Drawer
</Button>
<Drawer
  title="Basic Drawer"
  placement="right"
  visible={visible}
  onClose={() => setVisible(false)}
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Drawer>`}
          </pre>
        </div>

        <div className="example">
          <h3>不同位置</h3>
          <p>抽屉可以从四个方向滑出。</p>
          <div className="demo">
            <div className="demo-buttons">
              <Button onClick={() => setLeftVisible(true)}>Left</Button>
              <Button onClick={() => setRightVisible(true)}>Right</Button>
              <Button onClick={() => setTopVisible(true)}>Top</Button>
              <Button onClick={() => setBottomVisible(true)}>Bottom</Button>
            </div>

            <Drawer
              title="Left Drawer"
              placement="left"
              visible={leftVisible}
              onClose={() => setLeftVisible(false)}
            >
              <p>Left drawer content</p>
            </Drawer>

            <Drawer
              title="Right Drawer"
              placement="right"
              visible={rightVisible}
              onClose={() => setRightVisible(false)}
            >
              <p>Right drawer content</p>
            </Drawer>

            <Drawer
              title="Top Drawer"
              placement="top"
              visible={topVisible}
              onClose={() => setTopVisible(false)}
            >
              <p>Top drawer content</p>
            </Drawer>

            <Drawer
              title="Bottom Drawer"
              placement="bottom"
              visible={bottomVisible}
              onClose={() => setBottomVisible(false)}
            >
              <p>Bottom drawer content</p>
            </Drawer>
          </div>
          <pre className="code">
{`const [leftVisible, setLeftVisible] = useState(false);
const [rightVisible, setRightVisible] = useState(false);
const [topVisible, setTopVisible] = useState(false);
const [bottomVisible, setBottomVisible] = useState(false);

<Button onClick={() => setLeftVisible(true)}>Left</Button>
<Button onClick={() => setRightVisible(true)}>Right</Button>
<Button onClick={() => setTopVisible(true)}>Top</Button>
<Button onClick={() => setBottomVisible(true)}>Bottom</Button>

<Drawer
  title="Left Drawer"
  placement="left"
  visible={leftVisible}
  onClose={() => setLeftVisible(false)}
>
  <p>Left drawer content</p>
</Drawer>

<Drawer
  title="Right Drawer"
  placement="right"
  visible={rightVisible}
  onClose={() => setRightVisible(false)}
>
  <p>Right drawer content</p>
</Drawer>

<Drawer
  title="Top Drawer"
  placement="top"
  visible={topVisible}
  onClose={() => setTopVisible(false)}
>
  <p>Top drawer content</p>
</Drawer>

<Drawer
  title="Bottom Drawer"
  placement="bottom"
  visible={bottomVisible}
  onClose={() => setBottomVisible(false)}
>
  <p>Bottom drawer content</p>
</Drawer>`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义宽度</h3>
          <p>可以自定义抽屉的宽度。</p>
          <div className="demo">
            <Button type="primary" onClick={() => setCustomWidthVisible(true)}>
              Open Drawer
            </Button>
            <Drawer
              title="Custom Width Drawer"
              placement="right"
              width={500}
              visible={customWidthVisible}
              onClose={() => setCustomWidthVisible(false)}
            >
              <p>This drawer has a custom width of 500px</p>
            </Drawer>
          </div>
          <pre className="code">
{`const [visible, setVisible] = useState(false);

<Button type="primary" onClick={() => setVisible(true)}>
  Open Drawer
</Button>
<Drawer
  title="Custom Width Drawer"
  placement="right"
  width={500}
  visible={visible}
  onClose={() => setVisible(false)}
>
  <p>This drawer has a custom width of 500px</p>
</Drawer>`}
          </pre>
        </div>

        <div className="example">
          <h3>无遮罩</h3>
          <p>可以设置不显示遮罩层。</p>
          <div className="demo">
            <Button type="primary" onClick={() => setNoMaskVisible(true)}>
              Open Drawer without Mask
            </Button>
            <Drawer
              title="No Mask Drawer"
              placement="right"
              mask={false}
              visible={noMaskVisible}
              onClose={() => setNoMaskVisible(false)}
            >
              <p>This drawer has no mask</p>
            </Drawer>
          </div>
          <pre className="code">
{`const [visible, setVisible] = useState(false);

<Button type="primary" onClick={() => setVisible(true)}>
  Open Drawer without Mask
</Button>
<Drawer
  title="No Mask Drawer"
  placement="right"
  mask={false}
  visible={visible}
  onClose={() => setVisible(false)}
>
  <p>This drawer has no mask</p>
</Drawer>`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
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
              <td>visible</td>
              <td>抽屉是否可见</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>title</td>
              <td>抽屉标题</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>抽屉的方向</td>
              <td>'left' | 'right' | 'top' | 'bottom'</td>
              <td>'right'</td>
            </tr>
            <tr>
              <td>width</td>
              <td>抽屉宽度</td>
              <td>number | string</td>
              <td>256</td>
            </tr>
            <tr>
              <td>height</td>
              <td>抽屉高度</td>
              <td>number | string</td>
              <td>256</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>mask</td>
              <td>是否显示遮罩</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>点击遮罩是否关闭抽屉</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时触发的回调函数</td>
              <td>{'() => void'}</td>
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
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>注意事项</h2>
        <ul>
          <li>抽屉组件会阻止页面滚动</li>
          <li>建议在抽屉内容较多时设置合适的宽度或高度</li>
          <li>可以通过 style 属性自定义抽屉的样式</li>
        </ul>
      </section>
    </div>
  );
};

export default DrawerDoc; 