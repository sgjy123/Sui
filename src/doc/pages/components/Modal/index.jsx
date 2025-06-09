import React, { useState } from 'react';
import { Button, Icon, Modal } from 'components';
import './style.less';

const ModalDemo = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [afterCloseMsg, setAfterCloseMsg] = useState('');

  // 模拟异步 loading
  const handleAsyncOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible4(false);
    }, 1500);
  };

  return (
    <div className="modal-doc">
      <h1>Modal 弹出框</h1>
      <section>
        <h2>介绍</h2>
        <p>用于需要用户处理事务，又不希望跳转页面的场景。</p>
      </section>
      <section>
        <h2>引入</h2>
        <pre>{`import Modal from 'components/Modal';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <div className="example-title">基础用法</div>
          <div className="example-desc">最基础的弹出框用法。</div>
          <div className="example-demo">
            <Button className="sui-btn sui-btn-primary" onClick={() => setVisible(true)}>打开弹窗</Button>
            <Modal
              visible={visible}
              title="基础弹窗"
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
            >
              这是一个基础弹窗内容。
            </Modal>
          </div>
          <pre className="example-code">{`
const [visible, setVisible] = useState(false);
<>
  <button onClick={() => setVisible(true)}>打开弹窗</button>
  <Modal
    visible={visible}
    title="基础弹窗"
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
  >
    这是一个基础弹窗内容。
  </Modal>
</>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">无底部</div>
          <div className="example-desc">自定义 footer 为 null，不显示底部按钮。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => setVisible2(true)}>打开无底部弹窗</Button>
            <Modal
              visible={visible2}
              title="无底部弹窗"
              footer={null}
              onCancel={() => setVisible2(false)}
            >
              这是一个没有底部的弹窗。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible2}
  title="无底部弹窗"
  footer={null}
  onCancel={() => setVisible2(false)}
>
  这是一个没有底部的弹窗。
</Modal>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">不可遮罩关闭</div>
          <div className="example-desc">设置 maskClosable 为 false，点击遮罩不会关闭弹窗。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => setVisible3(true)}>打开不可遮罩关闭弹窗</Button>
            <Modal
              visible={visible3}
              title="不可遮罩关闭"
              maskClosable={false}
              onOk={() => setVisible3(false)}
              onCancel={() => setVisible3(false)}
            >
              点击遮罩不会关闭弹窗，只能点击按钮关闭。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible3}
  title="不可遮罩关闭"
  maskClosable={false}
  onOk={() => setVisible3(false)}
  onCancel={() => setVisible3(false)}
>
  点击遮罩不会关闭弹窗，只能点击按钮关闭。
</Modal>
`}</pre>
        </div>
      </section>
      <section>
        <h2>进阶用法</h2>
        <div className="example">
          <div className="example-title">确认按钮 Loading</div>
          <div className="example-desc">异步操作时，确定按钮可进入 loading 状态。</div>
          <div className="example-demo">
            <Button className="sui-btn sui-btn-primary" onClick={() => setVisible4(true)}>打开 loading 弹窗</Button>
            <Modal
              visible={visible4}
              title="提交中"
              confirmLoading={loading}
              onOk={handleAsyncOk}
              onCancel={() => setVisible4(false)}
            >
              异步操作时确定按钮 loading。
            </Modal>
          </div>
          <pre className="example-code">{`
const [visible, setVisible] = useState(false);
const [loading, setLoading] = useState(false);
const handleAsyncOk = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setVisible(false);
  }, 1500);
};
<Modal
  visible={visible}
  title="提交中"
  confirmLoading={loading}
  onOk={handleAsyncOk}
  onCancel={() => setVisible(false)}
>
  异步操作时确定按钮 loading。
</Modal>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">标题左侧自定义图标</div>
          <div className="example-desc">可在标题左侧自定义图标，适合警告、成功、错误等场景。</div>
          <div className="example-demo">
            <Button onClick={() => setVisible5(true)}>打开带图标弹窗</Button>
            <Modal
              visible={visible5}
              title="警告"
              icon={<Icon name="Info" style={{ color: '#faad14' }} />}
              onOk={() => setVisible5(false)}
              onCancel={() => setVisible5(false)}
            >
              带有警告图标的弹窗。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible}
  title="警告"
  icon={<Icon name="Warning" style={{ color: '#faad14' }} />}
  onOk={() => setVisible(false)}
  onCancel={() => setVisible(false)}
>
  带有警告图标的弹窗。
</Modal>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">ESC 键关闭</div>
          <div className="example-desc">支持键盘 ESC 键关闭弹窗。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => setVisible6(true)}>打开 ESC 关闭弹窗</Button>
            <Modal
              visible={visible6}
              title="可ESC关闭"
              keyboard
              onOk={() => setVisible6(false)}
              onCancel={() => setVisible6(false)}
            >
              按 ESC 键可关闭。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible}
  title="可ESC关闭"
  keyboard
  onOk={() => setVisible(false)}
  onCancel={() => setVisible(false)}
>
  按 ESC 键可关闭。
</Modal>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">关闭时销毁内容</div>
          <div className="example-desc">设置 destroyOnClose，关闭后内容会被销毁。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => setVisible7(true)}>打开销毁内容弹窗</Button>
            <Modal
              visible={visible7}
              title="销毁内容"
              destroyOnClose
              onOk={() => setVisible7(false)}
              onCancel={() => setVisible7(false)}
            >
              关闭后内容会被销毁。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible}
  title="销毁内容"
  destroyOnClose
  onOk={() => setVisible(false)}
  onCancel={() => setVisible(false)}
>
  关闭后内容会被销毁。
</Modal>
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">关闭动画后回调</div>
          <div className="example-desc">关闭动画结束后触发 afterClose 回调。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => { setAfterCloseMsg(''); setVisible2(true); }}>打开 afterClose 弹窗</Button>
            <Modal
              visible={visible2}
              title="关闭后回调"
              afterClose={() => setAfterCloseMsg('已关闭！')}
              onOk={() => setVisible2(false)}
              onCancel={() => setVisible2(false)}
            >
              关闭后会有回调。
            </Modal>
            {afterCloseMsg && <div style={{ color: '#52c41a', marginTop: 8 }}>{afterCloseMsg}</div>}
          </div>
          <pre className="example-code">{`
const [msg, setMsg] = useState('');
<Modal
  visible={visible}
  title="关闭后回调"
  afterClose={() => setMsg('已关闭！')}
  onOk={() => setVisible(false)}
  onCancel={() => setVisible(false)}
>
  关闭后会有回调。
</Modal>
{msg && <div>{msg}</div>}
`}</pre>
        </div>

        <div className="example">
          <div className="example-title">遮罩和内容区自定义样式</div>
          <div className="example-desc">可通过 maskStyle、bodyStyle 分别自定义遮罩和内容区样式。</div>
          <div className="example-demo">
            <Button className="sui-btn" onClick={() => setVisible3(true)}>打开自定义样式弹窗</Button>
            <Modal
              visible={visible3}
              title="自定义样式"
              maskStyle={{ background: 'rgba(0,0,0,0.2)' }}
              bodyStyle={{ background: '#f6ffed' }}
              onOk={() => setVisible3(false)}
              onCancel={() => setVisible3(false)}
            >
              这是自定义样式的弹窗。
            </Modal>
          </div>
          <pre className="example-code">{`
<Modal
  visible={visible}
  title="自定义样式"
  maskStyle={{ background: 'rgba(0,0,0,0.2)' }}
  bodyStyle={{ background: '#f6ffed' }}
  onOk={() => setVisible(false)}
  onCancel={() => setVisible(false)}
>
  这是自定义样式的弹窗。
</Modal>
`}</pre>
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
            <tr><td>visible</td><td>是否可见</td><td>boolean</td><td>-</td></tr>
            <tr><td>title</td><td>标题</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>children</td><td>内容</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>onOk</td><td>确认回调</td><td>function</td><td>-</td></tr>
            <tr><td>onCancel</td><td>取消回调</td><td>function</td><td>-</td></tr>
            <tr><td>okText</td><td>确认按钮文字</td><td>ReactNode</td><td>'确定'</td></tr>
            <tr><td>cancelText</td><td>取消按钮文字</td><td>ReactNode</td><td>'取消'</td></tr>
            <tr><td>footer</td><td>底部自定义内容</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>maskClosable</td><td>点击遮罩可关闭</td><td>boolean</td><td>true</td></tr>
            <tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr>
            <tr><td>style</td><td>自定义样式</td><td>object</td><td>-</td></tr>
            <tr><td>width</td><td>宽度</td><td>number/string</td><td>520</td></tr>
            <tr><td>icon</td><td>标题左侧图标</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>true</td></tr>
            <tr><td>keyboard</td><td>支持键盘 ESC 键关闭</td><td>boolean</td><td>false</td></tr>
            <tr><td>confirmLoading</td><td>确认按钮 loading 状态</td><td>boolean</td><td>false</td></tr>
            <tr><td>destroyOnClose</td><td>关闭后销毁内容</td><td>boolean</td><td>false</td></tr>
            <tr><td>afterClose</td><td>关闭动画结束后回调</td><td>function</td><td>-</td></tr>
            <tr><td>maskStyle</td><td>遮罩自定义样式</td><td>object</td><td>-</td></tr>
            <tr><td>bodyStyle</td><td>内容区自定义样式</td><td>object</td><td>-</td></tr>
            <tr><td>forceRender</td><td>强制渲染</td><td>boolean</td><td>false</td></tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>注意事项</h2>
        <ul>
          <li>弹窗打开时会锁定页面滚动。</li>
          <li>可通过 footer 自定义底部内容。</li>
        </ul>
      </section>
    </div>
  );
};

export default ModalDemo; 