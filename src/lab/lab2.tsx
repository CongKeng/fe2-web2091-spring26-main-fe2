import { Table, Tag, Button, Space, Popconfirm } from "antd";

// ==============================
// BÀI 1: Bảng Sinh viên
// ==============================
const columns1 = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Major", dataIndex: "major", key: "major" },
];

const data1 = [
  { key: 1, id: 1, name: "Tu", age: 19, major: "IT" },
  { key: 2, id: 2, name: "Hoang", age: 19, major: "Designer" },
  { key: 3, id: 3, name: "Thu", age: 19, major: "Business" },
  { key: 4, id: 4, name: "Tuan", age: 19, major: "Travel" },
  { key: 5, id: 5, name: "Hiep", age: 19, major: "IT" },
];

// ==============================
// BÀI 2: Danh sách sản phẩm
// ==============================
const columns2 = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Product Name", dataIndex: "productName", key: "productName" },
  { title: "Price", dataIndex: "price", key: "price" },
  { title: "Category", dataIndex: "category", key: "category" },
];

// Dữ liệu 5 sản phẩm
const data2 = [
  { key: 1, id: 1, productName: "Laptop Dell Inspiron", price: "15.000.000đ", category: "Laptop" },
  { key: 2, id: 2, productName: "iPhone 15 Pro", price: "25.000.000đ", category: "Điện thoại" },
  { key: 3, id: 3, productName: "Chuột Logitech G102", price: "400.000đ", category: "Phụ kiện" },
  { key: 4, id: 4, productName: "Bàn phím cơ AKKO", price: "1.200.000đ", category: "Phụ kiện" },
  { key: 5, id: 5, productName: "Màn hình LG 24inch", price: "3.500.000đ", category: "Màn hình" },
];

// ==============================
// BÀI 3: User Management
// ==============================
const columns3 = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "active" ? "green" : "red"}>
        {status}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Popconfirm
          title="Xác nhận xóa"
          description="Bạn có chắc chắn muốn xóa không?"
          okText="Có"
          cancelText="Không"
        >
          <Button type="link" danger>Delete</Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const data3 = [
  { key: 1, id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", status: "active" },
  { key: 2, id: 2, name: "Trần Thị B", email: "ttb@gmail.com", status: "inactive" },
  { key: 3, id: 3, name: "Lê Văn C", email: "lvc@gmail.com", status: "active" },
];

// ==============================
// COMPONENT CHÍNH
// ==============================
function Lab2() {
  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* HIỂN THỊ BÀI 1 */}
      <h2>Bài 1: Bảng Sinh viên</h2>
      <Table 
        columns={columns1} 
        dataSource={data1} 
        pagination={false} 
      />

      <div style={{ margin: "40px 0" }}></div>

      {/* HIỂN THỊ BÀI 2 */}
      <h2>Bài 2: Danh sách sản phẩm</h2>
      {/* Thêm pagination={pageSize: 3} theo yêu cầu */}
      <Table 
        columns={columns2} 
        dataSource={data2} 
        pagination={{ pageSize: 3 }} 
      />

      <div style={{ margin: "40px 0" }}></div>

      {/* HIỂN THỊ BÀI 3 */}
      <h2>Bài 3: User Management</h2>
      <Table 
        columns={columns3} 
        dataSource={data3} 
        pagination={false} 
      />

    </div>
  );
}

export default Lab2;