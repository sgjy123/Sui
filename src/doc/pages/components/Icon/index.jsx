import React from 'react';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';

const IconDoc = () => {
    return (
        <div className="icon-doc">
            <h1>Icon 图标</h1>

            <section>
                <h2>介绍</h2>
                <p>放置一个图标。</p>
                <p>图标引入第三方图标库：https://iconpark.oceanengine.com/</p>
                <p>Icon中的name:属性来源于这个网站中的名称</p>
            </section>

            <section>
                <h2>引入</h2>
                <pre className="code">
                    {`import Icon from 'Sui';`}
                </pre>
            </section>

            <section>
                <h2>代码演示</h2>
                <h3>基本使用</h3>
                <Icon name='Aiming'/>&nbsp;
                <Icon name='AcceptEmail'/>&nbsp;
                <Icon name='Home'/>&nbsp;
                <Icon name='System'/>&nbsp;
                <pre className="code">
                  {
                      `
                        <Icon name='Aiming'/>
                        <Icon name='AcceptEmail'/>
                        <Icon name='Home'/>
                        <Icon name='System'/>
                      `
                  }
                </pre>
            </section>
            <section>
                <h3>设置特殊属性</h3>
                <Icon name='Aiming' theme='filled'/>&nbsp;
                <Icon name='AllApplication' theme='filled' fill='#1890ff'/>&nbsp;
                <Icon name='Home' size={30}/>&nbsp;
                <Icon name='System' fill='#f00'/>&nbsp;
                <pre className="code">
                  {
                      `
                        <Icon name='Aiming' theme='filled'/>
                        <Icon name='AllApplication' theme='filled' fill='#1890ff'/>
                        <Icon name='Home' size={30}/>
                        <Icon name='System' fill='#f00'/>
                      `
                  }
                </pre>
            </section>
            <section>
                <h3>按钮中使用</h3>
                <Button icon='Aiming' />
                <Button icon='AllApplication' theme='filled' />
                <Button icon='Aiming'>定位</Button>
                <pre className="code">
                  {
                      `
                        <Button icon='Aiming' />
                        <Button icon='AllApplication' theme='filled' />
                        <Button icon='Aiming'>定位</Button>
                      `
                  }
                </pre>
            </section>
        </div>
    )
};
export default IconDoc;
