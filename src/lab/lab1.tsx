import { Toaster } from "react-hot-toast";
import {  Link } from "react-router-dom";
import { Button, Layout, Form , Input, Modal } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
 import { Table } from "antd";
import { useState } from "react";
const onFinish = (values: any) => {
    console.log(values);
  };
 

const columns = [
  { title: "email", dataIndex: "email" },
  { title: "username", dataIndex: "username" },
  { title: "role", dataIndex: "role" }
];

const data = [
  { key: 1, email: "admin@gmail.com", username: 'hao1' , role:'admin'},
  { key: 2, email: "admin1@gmail.com", username: 'hao2' , role: 'user'},
  { key: 3, email: "admin2@gmail.com", username: 'hao3' , role: 'customer'},
];


function Lab1() {
  const [open, setOpen] = useState(false);
  return (
    
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 Lab1</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>
        <Button type="text">Click me</Button>
        <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content
        <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input type= "email"placeholder="Email" />
        
      </Form.Item>

      <Form.Item label= "username" name="username">
        <Input type= "text"placeholder="username" />
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
    <Table columns={columns} dataSource={data} />;
     <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
       <Input type= "email"placeholder="Email" />  
       <Input type= "password"placeholder="password" />  
       <Input type= "text"placeholder="role" />  
      </Modal>
    </>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
      </div>
      
     

      <Toaster />
    </>
  );
}

export default Lab1;
