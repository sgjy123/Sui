import React from 'react';
import { PageHeader, Button } from 'components';
import './style.less';

const PageHeaderDoc = () => {
  return (
    <div className="page-header-doc">
      <h1>PageHeader 页头</h1>

      <section>
        <h2>介绍</h2>
        <p>通用页头组件，常用于页面顶部，展示标题、副标题、返回按钮和右侧操作区。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { PageHeader } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>带返回按钮、标题、副标题和右侧操作区的页头。</p>
          <div className="demo">
            <PageHeader
              title="页面标题"
              subTitle="这是副标题"
              onBack={() => alert('返回')}
              extra={<Button type="primary">主操作</Button>}
            />
          </div>
          <pre className="code">{`<PageHeader
  title="页面标题"
  subTitle="这是副标题"
  onBack={() => alert('返回')}
  extra={<Button type="primary">主操作</Button>}
/>`}</pre>
        </div>

        <div className="example">
          <h3>只显示标题</h3>
          <p>只展示标题的简单页头。</p>
          <div className="demo">
            <PageHeader title="纯标题页头" />
          </div>
          <pre className="code">{`<PageHeader title="纯标题页头" />`}</pre>
        </div>

        <div className="example">
          <h3>自定义右侧内容</h3>
          <p>通过 extra 属性自定义右侧内容。</p>
          <div className="demo">
            <PageHeader
              title="带操作的页头"
              extra={
                <>
                  <Button>次要操作</Button>
                  <Button type="primary">主操作</Button>
                </>
              }
            />
          </div>
          <pre className="code">{`<PageHeader
  title="带操作的页头"
  extra={
    <>
      <Button>次要操作</Button>
      <Button type="primary">主操作</Button>
    </>
  }
/>`}</pre>
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
            <tr><td>title</td><td>标题</td><td>node</td><td>必填</td></tr>
            <tr><td>subTitle</td><td>副标题</td><td>node</td><td>-</td></tr>
            <tr><td>onBack</td><td>返回按钮点击事件</td><td>function</td><td>-</td></tr>
            <tr><td>extra</td><td>右侧内容区</td><td>node</td><td>-</td></tr>
            <tr><td>className</td><td>自定义类名</td><td>string</td><td>-</td></tr>
            <tr><td>style</td><td>自定义样式</td><td>object</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PageHeaderDoc; 