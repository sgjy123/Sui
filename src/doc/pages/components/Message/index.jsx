import React from 'react';
import { message } from 'components';
import './style.less';

const MessageDoc = () => {
  const showMessage = (type) => {
    switch (type) {
      case 'info':
        message.info('这是一条普通提示');
        break;
      case 'success':
        message.success('这是一条成功提示');
        break;
      case 'error':
        message.error('这是一条错误提示');
        break;
      case 'warning':
        message.warning('这是一条警告提示');
        break;
      case 'loading':
        message.loading('这是一条加载提示');
        break;
      default:
        break;
    }
  };

  return (
    <div className="message-doc">
      <h1>Message 全局提示</h1>

      <section>
        <h2>介绍</h2>
        <p>全局展示操作反馈信息。Message 组件会在页面顶部居中显示，并自动消失，是一种不打断用户操作的轻量级提示方式。</p>
      </section>

      <section>
        <h2>何时使用</h2>
        <ul>
          <li>可提供成功、警告和错误等反馈信息。</li>
          <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
          <li>适用于系统级消息提示，如操作结果、系统通知等。</li>
        </ul>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">
          {`import message from 'components/Message';`}
        </pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>最简单的用法，展示一条消息提示。</p>
          <div className="demo">
            <button onClick={() => showMessage('info')}>显示普通提示</button>
          </div>
          <pre className="code">
            {`message.info('这是一条普通提示');`}
          </pre>
        </div>

        <div className="example">
          <h3>不同类型</h3>
          <p>Message 组件提供四种预设类型：success、error、warning、loading，分别用于展示不同场景的反馈信息。</p>
          <div className="demo">
            <button onClick={() => showMessage('success')}>成功提示</button>
            <button onClick={() => showMessage('error')}>错误提示</button>
            <button onClick={() => showMessage('warning')}>警告提示</button>
            <button onClick={() => showMessage('loading')}>加载提示</button>
          </div>
          <pre className="code">
            {`message.success('这是一条成功提示');
message.error('这是一条错误提示');
message.warning('这是一条警告提示');
message.loading('这是一条加载提示');`}
          </pre>
        </div>

        <div className="example">
          <h3>自定义时长</h3>
          <p>可以通过 duration 参数自定义显示时长，单位为毫秒。默认时长为 3000ms。</p>
          <div className="demo">
            <button onClick={() => message.info('这条提示会显示 5 秒', 5000)}>
              显示 5 秒
            </button>
          </div>
          <pre className="code">
            {`message.info('这条提示会显示 5 秒', 5000);`}
          </pre>
        </div>

        <div className="example">
          <h3>手动关闭</h3>
          <p>可以通过返回的 close 方法手动关闭提示。当 duration 设置为 0 时，消息不会自动关闭。</p>
          <div className="demo">
            <button
              onClick={() => {
                const msg = message.loading('这条提示不会自动关闭', 0);
                setTimeout(() => msg.close(), 3000);
              }}
            >
              3 秒后关闭
            </button>
          </div>
          <pre className="code">
            {`const msg = message.loading('这条提示不会自动关闭', 0);
setTimeout(() => msg.close(), 3000);`}
          </pre>
        </div>
      </section>

      <section>
        <h2>API</h2>
        <p>Message 组件提供以下方法：</p>
        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>说明</th>
              <th>参数</th>
              <th>返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>message.info</td>
              <td>显示普通提示</td>
              <td>(content: ReactNode, duration?: number)</td>
              <td>MessageInstance</td>
            </tr>
            <tr>
              <td>message.success</td>
              <td>显示成功提示</td>
              <td>(content: ReactNode, duration?: number)</td>
              <td>MessageInstance</td>
            </tr>
            <tr>
              <td>message.error</td>
              <td>显示错误提示</td>
              <td>(content: ReactNode, duration?: number)</td>
              <td>MessageInstance</td>
            </tr>
            <tr>
              <td>message.warning</td>
              <td>显示警告提示</td>
              <td>(content: ReactNode, duration?: number)</td>
              <td>MessageInstance</td>
            </tr>
            <tr>
              <td>message.loading</td>
              <td>显示加载提示</td>
              <td>(content: ReactNode, duration?: number)</td>
              <td>MessageInstance</td>
            </tr>
          </tbody>
        </table>

        <h3>参数说明</h3>
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
              <td>content</td>
              <td>提示内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>自动关闭的延时，单位毫秒。设为 0 时不自动关闭</td>
              <td>number</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>

        <h3>MessageInstance</h3>
        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>close</td>
              <td>手动关闭提示</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MessageDoc; 