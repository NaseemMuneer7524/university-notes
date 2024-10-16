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
} from "@ant-design/icons";
import Logo from '../Assets/logo/logo.png';
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
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
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function index({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <div className="demo-logo-vertical" />
          <div className="mt-3 mb-3 ">
            <img src={Logo} alt="" width={130}/>
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
              padding: 0,
              background: colorBgContainer,
            }}
          />



          {/* Content Here  */}
          {children}


          {/* Footer Start here  */}
          <Footer
            style={{
              textAlign: "center",
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
