// src/components/RcsBasicForm.jsx
import { Form, Input, Button, Space, Card } from 'antd';

const RcsBasicForm = ({ onPreview }) => {
  const [form] = Form.useForm();

  const handleSend = () => {
    const values = form.getFieldsValue();
    console.log("SENDING BASIC TEXT:", values);
  };

  return (
    <Card title="Basic Text Message Details">
      <Form form={form} layout="vertical" onFinish={onPreview}>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input a phone number!' }]}
        >
          <Input placeholder="+1 (555) 123-4567" />
        </Form.Item>
        <Form.Item
          name="body"
          label="Message Body"
          rules={[{ required: true, message: 'Please input the message body!' }]}
        >
          <Input.TextArea rows={4} maxLength={1024} placeholder="Enter your message here..." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Preview</Button>
            <Button type="default" onClick={handleSend}>Send</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RcsBasicForm;