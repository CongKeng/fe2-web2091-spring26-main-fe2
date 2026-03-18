import { Table, Button, Input } from "antd";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";


interface Story {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  createdAt?: string;
}


const Lap5 = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");


  const { data: stories } = useQuery<Story[]>({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

 
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xóa thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  
  const formatDate = (date?: string) => {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}/${
      (d.getMonth() + 1).toString().padStart(2, "0")
    }/${d.getFullYear()}`;
  };

 
  const filteredStories = stories?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

 
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
    },
    {
      title: "Created At",
      render: (record: Story) => formatDate(record.createdAt),
    },
    {
      title: "Action",
      render: (record: Story) => (
        <Button
          danger
          onClick={() => deleteMutation.mutate(record.id)}
        >
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <h2>Danh sách truyện</h2>

      {}
      <Input
        placeholder="Tìm theo tên truyện..."
        style={{ marginBottom: 20 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {}
      <Table
        dataSource={filteredStories}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Lap5;