import React from 'react';
import { Button, MessageBox } from 'components';
import './style.less';

const MessageBoxDemo = () => {
  const showInfo = () => {
    MessageBox.info({ title: '信息', content: '这是一个信息提示框' });
  };
  const showSuccess = () => {
    MessageBox.success({ title: '成功', content: '操作成功！' });
  };
  const showError = () => {
    MessageBox.error({ title: '错误', content: '发生了错误！' });
  };
  const showWarning = () => {
    MessageBox.warning({ title: '警告', content: '请注意操作！' });
  };
  const showConfirm = () => {
    MessageBox.confirm({ title: '确认', content: '确定要删除吗？' }).then(ok => {
      MessageBox.info({ title: '结果', content: ok ? '你点击了确定' : '你点击了取消' });
    });
  };
  const showMaskClosable = () => {
    MessageBox.info({ title: '可点遮罩关闭', content: '点击遮罩可关闭', maskClosable: true });
  };

  return (
    <div className="messagebox-doc">
      <h1>MessageBox 消息提示框</h1>
      <section>
        <h2>介绍</h2>
        <p>用于主动向用户反馈重要信息、操作确认等。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <div className="example-title">基础用法</div>
          <div className="example-desc">最基础的信息提示框。</div>
          <div className="example-demo">
            <Button onClick={showInfo}>信息</Button>
            <Button type="primary" onClick={showSuccess} style={{ marginLeft: 8 }}>成功</Button>
            <Button type="primary" danger onClick={showError} style={{ marginLeft: 8 }}>错误</Button>
            <Button type="primary" onClick={showWarning} style={{ marginLeft: 8 }}>警告</Button>
          </div>
        </div>
        <div className="example">
          <div className="example-title">确认框（Promise用法）</div>
          <div className="example-desc">支持 Promise，点击按钮后可根据结果处理。</div>
          <div className="example-demo">
            <Button type="primary" onClick={showConfirm}>确认</Button>
          </div>
        </div>
        <div className="example">
          <div className="example-title">可点击遮罩关闭</div>
          <div className="example-desc">设置 maskClosable 为 true，点击遮罩可关闭。</div>
          <div className="example-demo">
            <Button onClick={showMaskClosable}>可点遮罩关闭</Button>
          </div>
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
            <tr><td>type</td><td>类型</td><td>'info' | 'success' | 'error' | 'warning' | 'confirm'</td><td>'info'</td></tr>
            <tr><td>title</td><td>标题</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>content</td><td>内容</td><td>ReactNode</td><td>-</td></tr>
            <tr><td>okText</td><td>确认按钮文字</td><td>ReactNode</td><td>'确定'</td></tr>
            <tr><td>cancelText</td><td>取消按钮文字</td><td>ReactNode</td><td>'取消'</td></tr>
            <tr><td>showCancel</td><td>显示取消按钮</td><td>boolean</td><td>false</td></tr>
            <tr><td>onOk</td><td>确认回调</td><td>function</td><td>-</td></tr>
            <tr><td>onCancel</td><td>取消回调</td><td>function</td><td>-</td></tr>
            <tr><td>maskClosable</td><td>点击遮罩关闭</td><td>boolean</td><td>false</td></tr>
            <tr><td>onClose</td><td>关闭后回调</td><td>function</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>注意事项</h2>
        <ul>
          <li>支持 Promise/回调两种用法。</li>
          <li>支持 ESC 键关闭。</li>
          <li>支持遮罩关闭、按钮文字自定义。</li>
        </ul>
      </section>
    </div>
  );
};

export default MessageBoxDemo; 