// src/components/RcsCarouselForm.jsx
import { useState } from 'react';
import { Form, Input, Button, Space, Card, Divider, Typography, Collapse } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

const RcsCarouselForm = ({ onPreview }) => {
  const [form] = Form.useForm();
  const [includeReschedule, setIncludeReschedule] = useState(false);
  
  const handlePreview = (values) => {
    const actions = ['Confirm', 'Cancel'];
    if (includeReschedule) {
        actions.push('Reschedule');
    }
    if (!values.cards) {
        onPreview({ ...values, cards: [] });
        return;
    }
    const transformedCards = values.cards.map(card => ({
        ...card,
        actions: actions 
    }));
    onPreview({ ...values, cards: transformedCards });
  };

  const handleSend = () => {
    const values = form.getFieldsValue();
    const actions = ['Confirm', 'Cancel'];
    if (includeReschedule) {
        actions.push('Reschedule');
    }
    if (!values.cards) {
        console.log("SENDING CAROUSEL:", { ...values, cards: [] });
        return;
    }
    const transformedCards = values.cards.map(card => ({ ...card, actions: actions }));
    console.log("SENDING CAROUSEL:", { ...values, cards: transformedCards });
  };

  return (
    <Card title="Carousel Message Details">
        <Form form={form} layout="vertical" onFinish={handlePreview} autoComplete="off">
            <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
                <Input placeholder="+1 (555) 123-4567" />
            </Form.Item>

            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="Step 1: Configure Actions for All Cards" key="1">
                    <Card type="inner">
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Text>Confirm (Always included)</Text>
                            <Text>Cancel (Always included)</Text>
                            <Space align="center">
                                <Text>Reschedule</Text>
                                <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={() => setIncludeReschedule(true)} disabled={includeReschedule} />
                                <Button shape="circle" icon={<MinusOutlined />} size="small" onClick={() => setIncludeReschedule(false)} disabled={!includeReschedule} />
                                <Text type="secondary">{includeReschedule ? '(Included)' : '(Not included)'}</Text>
                            </Space>
                        </Space>
                    </Card>
                </Panel>
                <Panel header="Step 2: Add and Edit Cards" key="2">
                    <Form.List name="cards">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name }) => (
                            <div key={key} style={{ background: '#fafafa', padding: 16, borderRadius: 8, marginBottom: 16, border: '1px solid #f0f0f0', position: 'relative' }}>
                                <Typography.Title level={5} style={{ marginTop: 0, marginBottom: 16 }}>Card {name + 1}</Typography.Title>
                                <Button icon={<DeleteOutlined />} onClick={() => remove(name)} type="text" danger style={{ position: 'absolute', top: 16, right: 16 }} />
                                <Form.Item name={[name, 'title']} label="Title" rules={[{ required: true }]}>
                                    <Input maxLength={200} />
                                </Form.Item>
                                <Form.Item name={[name, 'body']} label="Body" rules={[{ required: true }]}>
                                    <Input.TextArea maxLength={2000} />
                                </Form.Item>
                                <Form.Item name={[name, 'mediaUrl']} label="Media URL" rules={[{ required: true, type: 'url' }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        ))}
                        {fields.length < 5 && (
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>Add Carousel Card</Button>
                        )}
                        </>
                    )}
                    </Form.List>
                </Panel>
            </Collapse>
            
            <Form.Item style={{ marginTop: 24 }}>
                <Space>
                    <Button type="primary" htmlType="submit">Preview</Button>
                    <Button onClick={handleSend}>Send</Button>
                </Space>
            </Form.Item>
        </Form>
    </Card>
  );
};

export default RcsCarouselForm;