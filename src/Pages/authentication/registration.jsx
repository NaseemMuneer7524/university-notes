import React from "react";
import Layouts from "../../Layouts/index";
import { Layout, Menu, theme, Checkbox, Form, Input, Button } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function registration() {
  return (
    <>
      <Layouts>
        <Content style={{padding: "25px", maxWidth:"600px" }}>
          <h4>Create an account</h4>

          <Form
          wrapperCol={{
            span: 24,
          }}
          labelCol={{
            span: 8,
          }}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
            span ={12
            
            }
              layout="vertical"
              label="Email Address"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              layout="vertical"
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layouts>
    </>
  );
}

export default registration;
