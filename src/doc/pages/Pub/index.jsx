import React from 'react';
import { Button, Space, Card, Grid } from 'components';
import { useNavigate } from 'react-router-dom';
import './style.less';
import weChatQR from './../../../assets/weChat.jpg';

const { Row, Col } = Grid;

const PubIndex = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/doc');
  };

  const handleGuide = () => {
    navigate('/guide');
  };

  return (
    <div className="pub-index">
      {/* 头部横幅 */}
      <div className="banner">
        <div className="banner-content">
          <h1 style={{ color: '#fff', fontSize: '48px', margin: '0 0 20px' }}>
            Sui Design
          </h1>
          <p style={{ color: '#fff', fontSize: '20px', margin: '0 0 40px' }}>
            一套基于ai生成的 React 组件库，用于构建现代化的用户界面
          </p>
          <Space size="large">
            <Button type="primary" size="large" onClick={handleStart}>
              开始使用
            </Button>
            <Button 
              size="large" 
              style={{ backgroundColor: '#fff', color: '#1890ff' }}
              onClick={() => window.open('https://github.com/sgjy123/Sui', '_blank')}
              icon="Github"
            >
              组件库
            </Button>
            <Button 
              size="large" 
              style={{ backgroundColor: '#fff', color: '#1890ff' }}
              onClick={handleGuide}
            >
              使用指南
            </Button>
          </Space>
        </div>
      </div>

      {/* 特性介绍 */}
      <div className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center', margin: '40px 0' }}>特性</h2>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Card title="高质量" bordered={false} style={{ textAlign: 'center' }}>
                <div className="feature-icon">💎</div>
                <p>精心设计的组件，提供优秀的用户体验和视觉效果</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="易使用" bordered={false} style={{ textAlign: 'center' }}>
                <div className="feature-icon">🚀</div>
                <p>简洁明了的API设计，降低学习成本，提高开发效率</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="全开源" bordered={false} style={{ textAlign: 'center' }}>
                <div className="feature-icon">🎨</div>
                <p>完全开源，欢迎贡献！</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* 组件概览 */}
      <div className="components-overview">
        <div className="container">
          <h2 style={{ textAlign: 'center', margin: '40px 0' }}>组件概览</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '40px' }}>
            丰富多样的组件，满足各种业务场景需求
          </p>

          <div className="component-list">
            <Space wrap size="large">
              <Button type="primary">Button</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="text">Text</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>
        </div>
      </div>

      {/* 感谢作者 */}
      <div className="thanks-author">
        <div className="container">
          <h2 style={{ textAlign: 'center', margin: '40px 0' }}>感谢支持</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <Card title="支持作者" bordered={false} style={{ width: 300, textAlign: 'center' }}>
              <p>如果您觉得这个组件库对您有帮助，欢迎扫码支持作者</p>
              <div style={{ margin: '20px 0' }}>
                <img
                  src={weChatQR}
                  alt="微信收款码"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <p>您的支持是我持续维护的动力</p>
            </Card>

            <Card title="加入交流群" bordered={false} style={{ width: 300, textAlign: 'center' }}>
              <p>欢迎加入我们的交流群，一起讨论技术问题</p>
              <div style={{ margin: '20px 0' }}>
                <div
                  style={{
                    backgroundColor: '#f0f0f0',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                  }}
                >
                  <span>微信群二维码</span>
                </div>
              </div>
              <p>扫码添加作者，进群，共同进步</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubIndex;
