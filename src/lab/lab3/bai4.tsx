import { Form, Input, Button, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

function PostForm() {
  const [post, setPost] = useState<any>(null);

  const onFinish = (values: any) => {
    setPost(values);
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Nhập title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Nhập slug" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Chọn category" }]}
        >
          <Select placeholder="Chọn category">
            <Option value="news">News</Option>
            <Option value="technology">Technology</Option>
            <Option value="sport">Sport</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {/* Hiển thị dữ liệu */}
      {post && (
        <div style={{ marginTop: 20 }}>
          <h3>Dữ liệu đã nhập</h3>
          <p><b>Title:</b> {post.title}</p>
          <p><b>Slug:</b> {post.slug}</p>
          <p><b>Category:</b> {post.category}</p>
          <p><b>Content:</b> {post.content}</p>
          {post.image && <img src={post.image} width="200" />}
        </div>
      )}
    </>
  );
}

export default PostForm;