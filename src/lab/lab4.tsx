import { Form, Input, Button, Checkbox, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


interface Category {
  id: number;
  title: string;
  description?: string;
  active?: boolean;
}

interface Story {
  id?: number;
  title: string;
  content: string;
  categoryId: number;
}

const Lap4 = () => {
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  const addCategory = useMutation({
    mutationFn: async (values: Category) => {
      return await axios.post("http://localhost:3000/categories", values);
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công!");
    },
  });

  const addStory = useMutation({
    mutationFn: async (values: Story) => {
      return await axios.post("http://localhost:3000/stories", values);
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công!");
    },
  });

  const onFinishCategory = (values: Category) => {
    addCategory.mutate(values);
  };

  const onFinishStory = (values: Story) => {
    addStory.mutate(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Thêm danh mục</h2>
      <Form layout="vertical" onFinish={onFinishCategory}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Không được để trống!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item name="active" valuePropName="checked">
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={addCategory.isPending}
        >
          Submit Category
        </Button>
      </Form>

      <hr style={{ margin: "30px 0" }} />

      <h2>Thêm truyện</h2>
      <Form layout="vertical" onFinish={onFinishStory}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Nhập tiêu đề!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="Content">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="categoryId"
          label="Danh mục"
          rules={[{ required: true, message: "Chọn danh mục!" }]}
        >
          <Select placeholder="Chọn danh mục">
            {categories?.map((c) => (
              <Select.Option key={c.id} value={c.id}>
                {c.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={addStory.isPending}
        >
          Submit Story
        </Button>
      </Form>
    </div>
  );
};

export default Lap4;