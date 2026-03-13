import { Form, Input, Button } from "antd";

function ProductForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="ten sp"
        name="name"
        rules={[{ required: true, message: "nhap ten sp" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="gia" name="price">
        <Input />
      </Form.Item>

      <Form.Item label="sl" name="quantity">
        <Input />
      </Form.Item>

      <Form.Item label="mt" name="description">
        <Input.TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductForm;