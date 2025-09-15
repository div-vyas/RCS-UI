// src/App.jsx
import { useState } from 'react';
import { Col, Row, Select, Typography, Layout, Space, Button, ConfigProvider } from 'antd';
import { DeleteOutlined, MessageFilled } from '@ant-design/icons';
import RcsBasicForm from './components/RcsBasicForm';
import RcsCardForm from './components/RcsCardForm';
import RcsCarouselForm from './components/RcsCarouselForm';
import PhonePreview from './components/PhonePreview';

const { Header, Content } = Layout;
const { Title } = Typography;

// 1. Define our custom theme object
const customTheme = {
  token: {
    colorPrimary: '#0052cc', // A deep, professional blue
    colorInfo: '#0052cc',
    borderRadius: 8,
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    colorBgLayout: '#f7f9fc',
  },
  components: {
    Card: {
      headerBg: '#fafafa',
    },
  },
};

function App() {
  const [rcsType, setRcsType] = useState('text');
  const [previewData, setPreviewData] = useState(null);

  const handlePreview = (data) => {
    setPreviewData({ type: rcsType, ...data, timestamp: new Date() });
  };

  const handleClearPreview = () => {
    setPreviewData(null);
  };

  const renderForm = () => {
    switch (rcsType) {
      case 'card':
        return <RcsCardForm onPreview={handlePreview} />;
      case 'carousel':
        return <RcsCarouselForm onPreview={handlePreview} />;
      case 'text':
      default:
        return <RcsBasicForm onPreview={handlePreview} />;
    }
  };

  return (
    // 2. Wrap everything in the ConfigProvider to apply the theme
    <ConfigProvider theme={customTheme}>
      <Layout>
        {/* 3. Add a professional header */}
        <Header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 24px' }}>
          <Space align="center">
            <MessageFilled style={{ color: customTheme.token.colorPrimary, fontSize: '24px' }}/>
            <Title level={3} style={{ marginBottom: 10 }}>RCS Appointment Reminder</Title>
          </Space>
        </Header>
        <Content style={{ padding: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={14} lg={12}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Title level={4}>Message Configuration</Title>
                <Select
                  value={rcsType}
                  onChange={(value) => {
                    setRcsType(value);
                    setPreviewData(null);
                  }}
                  style={{ width: '100%' }}
                  options={[
                    { value: 'text', label: 'RCS Basic Text' },
                    { value: 'card', label: 'RCS Card' },
                    { value: 'carousel', label: 'RCS Carousel' },
                  ]}
                />
                {renderForm()}
              </Space>
            </Col>
            <Col xs={24} md={10} lg={12}>
              <div style={{ position: 'sticky', top: 24 }}>
                <Space direction="vertical" align="center" style={{ width: '100%' }}>
                  <PhonePreview data={previewData} />
                  <Button icon={<DeleteOutlined />} onClick={handleClearPreview} disabled={!previewData}>
                    Clear Preview
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;