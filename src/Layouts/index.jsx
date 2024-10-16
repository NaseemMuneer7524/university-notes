import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  ContactsOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Logo from "../Assets/logo/logo.png";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content, Footer } = Layout;

function index({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsed={collapsed}>
          {/* Logo here  */}
          <div className="demo-logo-vertical" />
          <div className="mt-3 mb-3 m-auto">
            <img src={Logo} alt="Logo" width={70} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <ContactsOutlined />,
                label: "About Us",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Contact Us",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Services",
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "NTS papers",
              },
              {
                key: "6",
                icon: <UploadOutlined />,
                label: "HEC papers",
              },
              {
                key: "7",
                icon: <LogoutOutlined />,
                label: "Logout",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          {children}
        </Layout>
      </Layout>
    </>
  );
}

export default index;
