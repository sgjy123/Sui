import React, { useState } from 'react';
import { Steps, Button } from 'components';
import './style.less';

const stepsData = [
  { title: '步骤一', description: '描述信息1' },
  { title: '步骤二', description: '描述信息2' },
  { title: '步骤三', description: '描述信息3' },
];

const StepsDemo = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="steps-doc">
      <h1>Steps 步骤条</h1>
      <section>
        <h2>介绍</h2>
        <p>用于展示任务的处理进度，常用于流程、引导等场景。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <ul>
          <li>展示任务/流程的进度。</li>
          <li>引导用户按照步骤完成任务。</li>
        </ul>
      </section>
      <section>
        <h2>引入</h2>
        <pre>{`import { Steps } from 'Sui';`}</pre>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="example">
          <div className="example-title">基本用法</div>
          <div className="example-desc">最基础的步骤条用法。</div>
          <div className="example-demo">
            <Steps steps={stepsData} current={current} />
            <div style={{ margin: '24px 0' }}>
              <Button onClick={() => setCurrent(Math.max(0, current - 1))}>上一步</Button>
              <Button onClick={() => setCurrent(Math.min(stepsData.length - 1, current + 1))} style={{ marginLeft: 8 }}>
                下一步
              </Button>
            </div>
          </div>
          <pre className="example-code">
            {`const stepsData = [
  { title: '步骤一', description: '描述信息1' },
  { title: '步骤二', description: '描述信息2' },
  { title: '步骤三', description: '描述信息3' },
];
<Steps steps={stepsData} current={current} />`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">不同状态</div>
          <div className="example-desc">支持等待、进行中、已完成、错误等状态。</div>
          <div className="example-demo">
            <Steps
              steps={[
                { title: '等待', status: 'wait' },
                { title: '进行中', status: 'process' },
                { title: '已完成', status: 'finish' },
                { title: '错误', status: 'error' },
              ]}
              current={2}
            />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={[
    { title: '等待', status: 'wait' },
    { title: '进行中', status: 'process' },
    { title: '已完成', status: 'finish' },
    { title: '错误', status: 'error' },
  ]}
  current={2}
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">自定义图标</div>
          <div className="example-desc">每个步骤可自定义图标。</div>
          <div className="example-demo">
            <Steps
              steps={[
                {
                  title: '登录',
                  icon: (
                    <span role="img" aria-label="user">
                      👤
                    </span>
                  ),
                },
                {
                  title: '支付',
                  icon: (
                    <span role="img" aria-label="pay">
                      💳
                    </span>
                  ),
                },
                {
                  title: '完成',
                  icon: (
                    <span role="img" aria-label="ok">
                      ✅
                    </span>
                  ),
                },
              ]}
              current={1}
            />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={[
    { title: '登录', icon: <span role="img" aria-label="user">👤</span> },
    { title: '支付', icon: <span role="img" aria-label="pay">💳</span> },
    { title: '完成', icon: <span role="img" aria-label="ok">✅</span> },
  ]}
  current={1}
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">点状步骤条</div>
          <div className="example-desc">使用点状样式展示步骤。</div>
          <div className="example-demo">
            <Steps steps={stepsData} current={1} progressDot />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={stepsData}
  current={1}
  progressDot
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">垂直步骤条</div>
          <div className="example-desc">垂直方向的步骤条。</div>
          <div className="example-demo">
            <Steps steps={stepsData} current={1} direction="vertical" />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={stepsData}
  current={1}
  direction="vertical"
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">垂直点状步骤条</div>
          <div className="example-desc">垂直方向的点状步骤条。</div>
          <div className="example-demo">
            <Steps steps={stepsData} current={1} direction="vertical" progressDot />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={stepsData}
  current={1}
  direction="vertical"
  progressDot
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="example-title">可点击</div>
          <div className="example-desc">步骤条可点击切换。</div>
          <div className="example-demo">
            <Steps steps={stepsData} current={current} onChange={setCurrent} />
          </div>
          <pre className="example-code">
            {`<Steps
  steps={stepsData}
  current={current}
  onChange={setCurrent}
/>`}
          </pre>
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
              <td>steps</td>
              <td>步骤数据</td>
              <td>array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>current</td>
              <td>当前步骤索引</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>步骤条方向</td>
              <td>'horizontal' | 'vertical'</td>
              <td>'horizontal'</td>
            </tr>
            <tr>
              <td>size</td>
              <td>步骤条大小</td>
              <td>'default' | 'small' | 'large'</td>
              <td>'default'</td>
            </tr>
            <tr>
              <td>status</td>
              <td>当前步骤状态</td>
              <td>'wait' | 'process' | 'finish' | 'error'</td>
              <td>'process'</td>
            </tr>
            <tr>
              <td>progressDot</td>
              <td>点状步骤条</td>
              <td>boolean</td>
              <td>false</td>
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
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>点击步骤切换回调</td>
              <td>(current: number) =&gt; void</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="api-sub">
          <div>steps 结构：</div>
          <pre>{`interface Step {
  title: ReactNode;        // 步骤标题
  description?: ReactNode; // 步骤描述
  icon?: ReactNode;        // 步骤图标
  status?: 'wait' | 'process' | 'finish' | 'error'; // 状态
}`}</pre>
        </div>
      </section>
    </div>
  );
};

export default StepsDemo;
