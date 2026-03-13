/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "antd";

function LoginForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "email ko de chong" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="mk"
        name="password"
        rules={[{ required: true, message: "mk ko de chong" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form>

    
  );
}

export default LoginForm;