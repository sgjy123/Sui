import React from 'react';
import { Tooltip, Button, Space } from 'components';
import './style.less';

const TooltipDoc = () => {
  return (
    <div className="tooltip-doc">
      <h1>Tooltip 文字提示</h1>

      <section>
        <h2>介绍</h2>
        <p>简单的文字提示气泡框。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import { Tooltip } from 'Sui';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基本用法</h3>
          <p>最简单的用法。</p>
          <div className="demo">
            <Tooltip title="这是一个提示文字">
              <Button>鼠标移入</Button>
            </Tooltip>
          </div>
          <pre className="code">
            {`<Tooltip title="这是一个提示文字">
  <Button>鼠标移入</Button>
</Tooltip>`}
          </pre>
        </div>

        <div className="example">
          <h3>位置</h3>
          <p>支持12个不同的位置。</p>
          <div className="demo">
            <Space>
              <Tooltip title="提示文字" placement="top">
                <Button>上</Button>
              </Tooltip>
              <Tooltip title="提示文字" placement="bottom">
                <Button>下</Button>
              </Tooltip>
              <Tooltip title="提示文字" placement="left">
                <Button>左</Button>
              </Tooltip>
              <Tooltip title="提示文字" placement="right">
                <Button>右</Button>
              </Tooltip>
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Tooltip title="提示文字" placement="top">
    <Button>上</Button>
  </Tooltip>
  <Tooltip title="提示文字" placement="bottom">
    <Button>下</Button>
  </Tooltip>
  <Tooltip title="提示文字" placement="left">
    <Button>左</Button>
  </Tooltip>
  <Tooltip title="提示文字" placement="right">
    <Button>右</Button>
  </Tooltip>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义样式</h3>
          <p>可以自定义背景色、文字颜色等样式。</p>
          <div className="demo">
            <Space>
              <Tooltip title="提示文字" color="#f50">
                <Button>红色背景</Button>
              </Tooltip>
              <Tooltip title="提示文字" color="#2db7f5">
                <Button>蓝色背景</Button>
              </Tooltip>
              <Tooltip title="提示文字" color="#87d068">
                <Button>绿色背景</Button>
              </Tooltip>
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Tooltip title="提示文字" color="#f50">
    <Button>红色背景</Button>
  </Tooltip>
  <Tooltip title="提示文字" color="#2db7f5">
    <Button>蓝色背景</Button>
  </Tooltip>
  <Tooltip title="提示文字" color="#87d068">
    <Button>绿色背景</Button>
  </Tooltip>
</Space>`}
          </pre>
        </div>

        <div className="example">
          <h3>箭头指向</h3>
          <p>设置箭头是否指向目标元素中心。</p>
          <div className="demo">
            <Space>
              <Tooltip title="提示文字" arrow={false}>
                <Button>无箭头</Button>
              </Tooltip>
              <Tooltip title="提示文字" arrow={true}>
                <Button>有箭头</Button>
              </Tooltip>
            </Space>
          </div>
          <pre className="code">
            {`<Space>
  <Tooltip title="提示文字" arrow={false}>
    <Button>无箭头</Button>
  </Tooltip>
  <Tooltip title="提示文字" arrow={true}>
    <Button>有箭头</Button>
  </Tooltip>
</Space>`}
          </pre>
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
              <td>title</td>
              <td>提示文字</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>背景颜色</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>气泡框位置</td>
              <td>'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'</td>
              <td>'top'</td>
            </tr>
            <tr>
              <td>arrow</td>
              <td>箭头是否指向目标元素中心</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>open</td>
              <td>用于手动控制浮层显隐</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultOpen</td>
              <td>默认是否显隐</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td>触发行为</td>
              <td>'hover' | 'focus' | 'click' | 'contextMenu'</td>
              <td>'hover'</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TooltipDoc;
