import React, { useRef } from 'react';
import { BackTop, Icon } from 'components';
import './style.less';

const BackTopDemo = () => {
  const scrollContainerRef = useRef(null);

  // 生成长内容用于演示
  const longContent = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className="demo-content-block">
      <h3>内容块 {index + 1}</h3>
      <p>这是一个示例内容块，用于演示回到顶部功能。当页面滚动到一定距离时，回到顶部按钮会显示出来。</p>
      <p>点击回到顶部按钮可以平滑滚动到页面顶部。</p>
    </div>
  ));

  return (
    <div className="backtop-doc">
      <h1>BackTop 回到顶部</h1>

      <section>
        <h2>介绍</h2>
        <p>返回页面顶部的操作按钮。</p>
      </section>

      <section>
        <h2>何时使用</h2>
        <ul>
          <li>当页面内容区域较长时</li>
          <li>当用户需要快速返回页面顶部时</li>
          <li>当页面有多个内容区域需要快速导航时</li>
        </ul>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <div className="demo">
            <BackTop />
            <p className="demo-desc">基础用法，点击回到顶部</p>
          </div>
          <pre className="code">
{`<BackTop />`}
          </pre>
        </div>

        <div className="example">
          <div className="demo">
            <div className="icon-demo">
              <BackTop iconOnly style={{ right: 20, bottom: 100 }} />
            </div>
            <p className="demo-desc">仅图标模式，支持自定义图标和主题</p>
          </div>
          <pre className="code">
{`<BackTop iconOnly />`}
          </pre>
        </div>

        <div className="example">
          <div className="demo">
            <div className="text-demo">
              <BackTop text="返回顶部" style={{ right: 20, bottom: 20 }} />
            </div>
            <p className="demo-desc">自定义文本</p>
          </div>
          <pre className="code">
{`<BackTop text="返回顶部" />`}
          </pre>
        </div>

        <div className="example">
          <div className="demo">
            <div className="style-demo">
              <BackTop
                style={{
                  right: 100,
                  bottom: 20,
                  background: '#1088e9',
                }}
              />
            </div>
            <p className="demo-desc">自定义样式</p>
          </div>
          <pre className="code">
{`<BackTop
  style={{
    right: 100,
    bottom: 100,
    background: '#1088e9',
  }}
/>`}
          </pre>
        </div>

        <div className="example">
          <div className="demo">
            <div ref={scrollContainerRef} className="scroll-container">
              <div className="scroll-content">
                {Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="scroll-item">
                    <h4>滚动内容 {index + 1}</h4>
                    <p>这是一个可滚动容器中的内容块。</p>
                  </div>
                ))}
              </div>
              <BackTop target={() => scrollContainerRef.current} />
            </div>
            <p className="demo-desc">自定义滚动容器</p>
          </div>
          <pre className="code">
{`const scrollContainerRef = useRef(null);

<div ref={scrollContainerRef} className="scroll-container">
  <div className="scroll-content">
    {/* 滚动内容 */}
  </div>
  <BackTop target={() => scrollContainerRef.current} />
</div>`}
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
              <td>visibilityHeight</td>
              <td>滚动高度达到此参数值才出现 BackTop</td>
              <td>number</td>
              <td>400</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>点击按钮的回调函数</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>text</td>
              <td>按钮文字</td>
              <td>string</td>
              <td>'回到顶部'</td>
            </tr>
            <tr>
              <td>showIcon</td>
              <td>是否显示图标</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>iconOnly</td>
              <td>是否仅显示图标</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标名称</td>
              <td>string</td>
              <td>'ToTop'</td>
            </tr>
            <tr>
              <td>iconTheme</td>
              <td>图标主题</td>
              <td>'filled' | 'outline'</td>
              <td>'filled'</td>
            </tr>
            <tr>
              <td>iconSize</td>
              <td>图标大小</td>
              <td>number</td>
              <td>16</td>
            </tr>
            <tr>
              <td>target</td>
              <td>设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>
              <td>{'() => HTMLElement | Window'}</td>
              <td>{'() => window'}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="demo-content">
        {longContent}
      </div>
    </div>
  );
};

export default BackTopDemo; 