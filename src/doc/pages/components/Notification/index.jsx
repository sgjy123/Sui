import React from 'react';
import { Notification, Button, Icon } from 'components';
import './style.less';

const NotificationDemo = () => {
  const showBasic = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
    });
  };

  const showSuccess = () => {
    Notification.success({
      title: '成功',
      content: '操作成功',
    });
  };

  const showError = () => {
    Notification.error({
      title: '错误',
      content: '操作失败',
    });
  };

  const showWarning = () => {
    Notification.warning({
      title: '警告',
      content: '请注意',
    });
  };

  const showWithButton = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
      btn: <Button type="primary">查看详情</Button>,
    });
  };

  const showWithIcon = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
      icon: <Icon name="Star" />,
    });
  };

  const showNoAutoClose = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
      duration: 0,
    });
  };

  const showNoClose = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
      closeable: false,
    });
  };

  const showNoCloseDuration = () => {
    Notification.info({
      title: '通知标题',
      content: '这是一条通知内容',
      closeable: false,
      duration: 0,
    });
  };

  return (
    <div className="notification-doc">
      <h1>Notification 通知</h1>
      <section>
        <h2>介绍</h2>
        <p>全局展示通知提醒信息，常用于系统主动推送。</p>
      </section>
      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Notification } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，4.5 秒后自动关闭。</p>
          <div className="demo">
            <Button onClick={showBasic}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
});`}</pre>
        </div>
        <div className="example">
          <h3>不同类型</h3>
          <p>通知提醒框有 4 种类型：info、success、error、warning。</p>
          <div className="demo">
            <Button onClick={showSuccess} style={{ marginRight: 8 }}>成功</Button>
            <Button onClick={showError} style={{ marginRight: 8 }}>错误</Button>
            <Button onClick={showWarning}>警告</Button>
          </div>
          <pre className="code">{`Notification.success({ title: '成功', content: '操作成功' });
Notification.error({ title: '错误', content: '操作失败' });
Notification.warning({ title: '警告', content: '请注意' });`}</pre>
        </div>
        <div className="example">
          <h3>自定义按钮</h3>
          <p>可以自定义按钮，点击按钮可以关闭通知。</p>
          <div className="demo">
            <Button onClick={showWithButton}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
  btn: <Button type="primary">查看详情</Button>,
});`}</pre>
        </div>
        <div className="example">
          <h3>自定义图标</h3>
          <p>可以自定义图标。</p>
          <div className="demo">
            <Button onClick={showWithIcon}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
  icon: <Icon name="Star" />,
});`}</pre>
        </div>
        <div className="example">
          <h3>不自动关闭</h3>
          <p>设置 duration 为 0，通知不会自动关闭。</p>
          <div className="demo">
            <Button onClick={showNoAutoClose}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
  duration: 0,
});`}</pre>
        </div>
        <div className="example">
          <h3>不显示关闭按钮</h3>
          <p>设置 closeable 为 false，通知不显示关闭按钮。</p>
          <div className="demo">
            <Button onClick={showNoClose}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
  closeable: false,
});`}</pre>
        </div>
        <div className="example">
          <h3>不可关闭</h3>
          <p>设置 closeable 为 false，duration 为 0，通知不显示关闭按钮，也不会自动关闭。</p>
          <div className="demo">
            <Button onClick={showNoCloseDuration}>显示通知</Button>
          </div>
          <pre className="code">{`Notification.info({
  title: '通知标题',
  content: '这是一条通知内容',
  closeable: false,
  duration: 0,
});`}</pre>
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
              <td>type</td>
              <td>通知提醒框的类型</td>
              <td>string</td>
              <td>info</td>
            </tr>
            <tr>
              <td>title</td>
              <td>通知提醒框的标题</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>content</td>
              <td>通知提醒框的内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td>
              <td>number</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>自定义图标</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>closeable</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时触发的回调函数</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>btn</td>
              <td>自定义按钮</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default NotificationDemo; 