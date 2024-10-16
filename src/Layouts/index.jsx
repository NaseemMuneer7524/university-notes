import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Logo from "../Assets/logo/logo.png";
import { Layout, Menu, theme, FloatButton } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import LoginButton from "../Components/Button/PrimaryButon";
import { Link } from "react-router-dom";
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};
const items = [
  { key: "1", icon: <UserOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/login">Login</Link>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: <Link to="/register">Register</Link>,
  },
];

function index({ children }) {
  return (
    <>
      {/* Float Button For whatsapp  */}
      <FloatButton
        icon={<WhatsAppOutlined />}
        tooltip={<div>WhatsApp</div>}
        style={{
          backgroundColor: "#25D366", // WhatsApp green color
          color: "white", // Set the icon color to white
        }}
      />

      {/* Layout starts here  */}
      <Layout hasSider>
        <Sider style={siderStyle}>
          <div className="demo-logo-vertical" />
          <div className="mt-3 mb-3 ">
            <img src={Logo} alt="" width={130} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            marginInlineStart: 200,
          }}
        >
          <Header
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="d-flex justify-content-end w-100 gap-3 ">
              <LoginButton title="Login" />
              <LoginButton className="float-right" title="Create an account" />
            </div>
          </Header>

          {/* Content Here  */}
          {children}

          {/* Footer Start here  */}
          <Footer
            style={{
              textAlign: "center",
              color: "#fff",
              background: "#212529",
            }}
          >
            ALL RIGHTS RESERVED ©{new Date().getFullYear()} <b>NASEEM MUNEER</b>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default index;
