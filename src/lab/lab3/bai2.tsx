/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "antd";

function RegisterForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "nhap ten" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[
          { required: true, message: "Nhap email" },
          { type: "email", message: "email ko dung dinh dang" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>

      <Form.Item
        label="mk"
        name="password"
        rules={[
          { required: true, message: "nhap mk" },
          { min: 6, message: "mk nhap du 6 so" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="xac nhap mk"
        name="confirm"
        dependencies={["password"]}
        rules={[
          { required: true, message: "xac nhan mk" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("mk ko khop");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;