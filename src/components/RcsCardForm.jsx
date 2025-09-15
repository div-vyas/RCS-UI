// src/components/RcsCardForm.jsx
import { useState } from 'react';
import { Form, Input, Button, Space, Card, Typography } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Text } = Typography;

const RcsCardForm = ({ onPreview }) => {
  const [form] = Form.useForm();
  const [includeReschedule, setIncludeReschedule] = useState(false);

  const handlePreview = (values) => {
    const actions = ['Confirm', 'Cancel'];
    if (includeReschedule) {
      actions.push('Reschedule');
    }
    onPreview({ ...values, actions });
  };

  const handleSend = () => {
    const values = form.getFieldsValue();
    const actions = ['Confirm', 'Cancel'];
    if (includeReschedule) {
      actions.push('Reschedule');
    }
    console.log("SENDING CARD:", { ...values, actions });
  };

  return (
    <Card title="Rich Card Details">
      <Form form={form} layout="vertical" onFinish={handlePreview}>
        <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
          <Input placeholder="+1 (555) 123-4567" />
        </Form.Item>
        <Form.Item name="title" label="Card Title" rules={[{ required: true }]}>
          <Input placeholder="e.g., Appointment Reminder" maxLength={200} />
        </Form.Item>
        <Form.Item name="body" label="Body" rules={[{ required: true }]}>
          <Input.TextArea rows={4} maxLength={2000} placeholder="Your appointment is scheduled for..." />
        </Form.Item>
        <Form.Item name="mediaUrl" label="Media URL" rules={[{ required: true, type: 'url' }]}>
          <Input placeholder="https://example.com/image.png" />
        </Form.Item>

        <Card type="inner" title="Action Buttons" size="small">
          <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Confirm (Always included)</Text>
              <Text>Cancel (Always included)</Text>
              <Space align="center">
                  <Text>Reschedule</Text>
                  <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={() => setIncludeReschedule(true)} disabled={includeReschedule} />
                  <Button shape="circle" icon={<MinusOutlined />} size="small" onClick={() => setIncludeReschedule(false)} disabled={!includeReschedule} />
                  <Text type="secondary">{includeReschedule ? '(Included)' : '(Not Included)'}</Text>
              </Space>
          </Space>
        </Card>
        
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

export default RcsCardForm;