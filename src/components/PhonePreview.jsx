// src/components/PhonePreview.jsx
import { useState, useEffect } from 'react';
import { Card, Typography, Flex, Button, Image as AntImage } from 'antd';
import { CheckCircleFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import HealthAsystLogo from '../assets/healthasyst-logo.png';

const { Text, Title } = Typography;

const PhonePreview = ({ data }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => { setCarouselIndex(0); }, [data]);

  const renderContent = () => {
    // ... (This function remains the same as before)
    if (!data) {
      return (
        <Flex justify="center" align="center" style={{ height: '100%' }}>
          <Text type="secondary">Preview will appear here</Text>
        </Flex>
      );
    }
    switch (data.type) {
      case 'text':
        return <TextBubble text={data.body} />;
      case 'card':
        return <RichCard card={data} />;
      case 'carousel':
        if (!data.cards || data.cards.length === 0) return null;
        return (
          <Flex align="center" justify="center" style={{ width: '100%' }}>
            <Button shape="circle" icon={<LeftOutlined />} size="small" onClick={() => setCarouselIndex(i => Math.max(0, i - 1))} disabled={carouselIndex === 0}/>
            <div style={{ flex: 1, margin: '0 8px', width: '250px' }}>
                <RichCard card={data.cards[carouselIndex]} />
            </div>
            <Button shape="circle" icon={<RightOutlined />} size="small" onClick={() => setCarouselIndex(i => Math.min(data.cards.length - 1, i + 1))} disabled={carouselIndex === data.cards.length - 1} />
          </Flex>
        );
      default:
        return null;
    }
  };

  return (
    // Sleeker phone design
    <div style={{ 
        width: 340, 
        height: 700, 
        background: '#34495e', // Dark slate blue
        borderRadius: 40, 
        padding: 10, 
        boxShadow: '0 20px 40px -10px rgba(0, 82, 204, 0.4)', // Themed shadow
        border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: 30, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Flex align="center" style={{ padding: '20px 12px 8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <img src={HealthAsystLogo} alt="logo" style={{ width: 30, height: 30 }} />
          <Flex vertical align="flex-start" style={{ marginLeft: 8 }}>
            <Text strong>HealthAsyst</Text>
            <Text type="secondary" style={{ fontSize: 12 }}><CheckCircleFilled style={{ color: '#52c41a', marginRight: 4 }} />Verified</Text>
          </Flex>
        </Flex>
        <Flex vertical style={{ flex: 1, padding: 12, background: '#f7f9fc', overflowY: 'auto' }}>
          {renderContent()}
        </Flex>
      </div>
    </div>
  );
};

// Sub-components can remain the same, they will inherit styles
const TextBubble = ({ text }) => (
    <div style={{ background: '#e6f4ff', padding: '8px 12px', borderRadius: 12, maxWidth: '80%', alignSelf: 'flex-start' }}>
        <Text>{text}</Text>
    </div>
);

const RichCard = ({ card }) => (
    <Card
        style={{ width: '100%', borderRadius: 12 }} // softer radius
        cover={<AntImage alt={card.title} src={card.mediaUrl} fallback='https://via.placeholder.com/300x150?text=Media+Preview' preview={false} style={{ maxHeight: 130, objectFit: 'cover' }} />}
        bodyStyle={{ padding: 12 }}
        actions={card.actions?.map((action, index) => <Button type="link" key={index}>{action}</Button>)}
    >
        <Card.Meta
            title={<Title level={5}>{card.title}</Title>}
            description={card.body}
        />
    </Card>
);

export default PhonePreview;