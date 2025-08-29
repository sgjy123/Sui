import React from 'react';
import { Carousel, Space, Button } from 'components';
import './style.less';

const colors = ['#364d79', '#64b5f6', '#81c784', '#ff8a65'];
const Slide = ({ idx }) => (
  <div style={{ background: colors[idx % colors.length], height: '100%', color: '#fff', fontSize: 48,
    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{idx + 1}</div>
);

const CarouselDoc = () => {
  return (
    <div className="carousel-doc">
      <h1>Carousel 走马灯</h1>

      <section>
        <h2>介绍</h2>
        <p>用于一组内容的轮播展示，支持自动播放、指示点、箭头以及淡入淡出效果。</p>
      </section>

      <section>
        <h2>引入</h2>
        <pre className="code">{`import { Carousel } from 'Sui';`}</pre>
      </section>

      <section>
        <h2>代码演示</h2>

        <div className="example">
          <h3>基础用法</h3>
          <p>默认开启自动播放与指示点。</p>
          <div className="demo">
            <div style={{ width: 400, height: 200 }}>
              <Carousel>
                {[0,1,2].map(i => <Slide key={i} idx={i} />)}
              </Carousel>
            </div>
          </div>
          <pre className="code">{`<Carousel style={{ width: 400, height: 200 }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Carousel>`}</pre>
        </div>

        <div className="example">
          <h3>淡入淡出</h3>
          <p>将 effect 设为 fade。</p>
          <div className="demo">
            <div style={{ width: 400, height: 200 }}>
              <Carousel effect="fade">
                {[0,1,2].map(i => <Slide key={i} idx={i} />)}
              </Carousel>
            </div>
          </div>
          <pre className="code">{`<Carousel effect="fade">...</Carousel>`}</pre>
        </div>

        <div className="example">
          <h3>自定义速度与控制</h3>
          <p>设置 autoplaySpeed 自定义自动播放间隔；可关闭自动播放，保留箭头与指示点。</p>
          <div className="demo">
            <div style={{ width: 400, height: 200 }}>
              <Carousel autoplay autoplaySpeed={1500}>
                {[0,1,2,3].map(i => <Slide key={i} idx={i} />)}
              </Carousel>
            </div>
          </div>
          <pre className="code">{`<Carousel autoplay autoplaySpeed={1500}>...</Carousel>`}</pre>
        </div>

        <div className="example">
          <h3>指示器样式与位置</h3>
          <p>支持圆点(dot)与条形(bar)两种类型，以及 top/bottom/left/right 四个位置。</p>
          <div className="demo">
            <Space>
              <div style={{ width: 280, height: 160 }}>
                <Carousel dots dotsType="bar" dotsPosition="top">
                  {[0,1,2].map(i => <Slide key={i} idx={i} />)}
                </Carousel>
              </div>
              <div style={{ width: 280, height: 160 }}>
                <Carousel dots dotsType="dot" dotsPosition="right">
                  {[0,1,2].map(i => <Slide key={i} idx={i} />)}
                </Carousel>
              </div>
            </Space>
          </div>
          <pre className="code">{`<Carousel dots dotsType="bar" dotsPosition="top">...</Carousel>
<Carousel dots dotsType="dot" dotsPosition="right">...</Carousel>`}</pre>
        </div>

        <div className="example">
          <h3>控制左右箭头显示</h3>
          <p>通过 showPrevArrow 与 showNextArrow 分别控制左右箭头（需配合 arrows）。</p>
          <div className="demo">
            <Space>
              <div style={{ width: 280, height: 160 }}>
                <Carousel arrows showPrevArrow={false} showNextArrow>
                  {[0,1,2].map(i => <Slide key={i} idx={i} />)}
                </Carousel>
              </div>
              <div style={{ width: 280, height: 160 }}>
                <Carousel arrows showPrevArrow showNextArrow={false}>
                  {[0,1,2].map(i => <Slide key={i} idx={i} />)}
                </Carousel>
              </div>
            </Space>
          </div>
          <pre className="code">{`<Carousel arrows showPrevArrow={false} showNextArrow>...</Carousel>
<Carousel arrows showPrevArrow showNextArrow={false}>...</Carousel>`}</pre>
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
            <tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>true</td></tr>
            <tr><td>autoplaySpeed</td><td>自动切换间隔(ms)</td><td>number</td><td>3000</td></tr>
            <tr><td>dots</td><td>是否显示指示点</td><td>boolean</td><td>true</td></tr>
            <tr><td>dotsType</td><td>指示器类型</td><td>'dot' | 'bar'</td><td>'dot'</td></tr>
            <tr><td>dotsPosition</td><td>指示器位置</td><td>'bottom' | 'top' | 'left' | 'right'</td><td>'bottom'</td></tr>
            <tr><td>arrows</td><td>是否显示左右箭头</td><td>boolean</td><td>true</td></tr>
            <tr><td>showPrevArrow</td><td>是否显示左箭头（需 arrows）</td><td>boolean</td><td>true</td></tr>
            <tr><td>showNextArrow</td><td>是否显示右箭头（需 arrows）</td><td>boolean</td><td>true</td></tr>
            <tr><td>infinite</td><td>是否循环</td><td>boolean</td><td>true</td></tr>
            <tr><td>initialSlide</td><td>初始索引</td><td>number</td><td>0</td></tr>
            <tr><td>effect</td><td>切换效果 'slide' | 'fade'</td><td>string</td><td>'slide'</td></tr>
            <tr><td>pauseOnHover</td><td>移入时是否暂停</td><td>boolean</td><td>true</td></tr>
            <tr><td>beforeChange</td><td>切换前回调(from, to)</td><td>function</td><td>-</td></tr>
            <tr><td>afterChange</td><td>切换后回调(current)</td><td>function</td><td>-</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CarouselDoc;


