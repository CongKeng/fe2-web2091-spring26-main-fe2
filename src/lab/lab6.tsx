import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);

     
      await axios.patch(`http://localhost:3000/books/1`, values);

      
      message.success("Cập nhật thành công!");

      
      navigate("/");

    } catch (error) {
      message.error("Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      disabled={loading} 
    >
      {}
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Không được bỏ trống title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Không được bỏ trống author" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        {}
        <Button type="primary" htmlType="submit" loading={loading}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateBook;