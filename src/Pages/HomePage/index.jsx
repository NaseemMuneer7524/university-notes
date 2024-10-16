import React, { useState } from "react";
import Layouts from "../../Layouts/index";
import {
  Layout,
  Menu,
  theme,
  Card,
  Col,
  Row,
  Divider,
  Select,
  Button,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
import SearchSelect from "../../Components/FormFields/searchSelect";

function index() {
  const universityOptions = [
    {
      value: "1",
      label: "Comsats University Islamabad",
    },
    {
      value: "2",
      label: "Nust University Islamabad",
    },
    {
      value: "3",
      label: "National Defence University Islamabad",
    },
    {
      value: "4",
      label: "Karachi University",
    },
  ];
  return (
    <>
      <Layouts>
        <Content>
          <div className="p-3">
            <div>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Total Universities" bordered={false}>
                    3256
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Total Past Papers" bordered={false}>
                    1315546
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Total Notes" bordered={false}>
                    54313164
                  </Card>
                </Col>
                <Divider />
              </Row>

              <h6>Search University past papers and notes</h6>
              {/* Select search here  */}
              <Row
                gutter={6}
                style={{
                  background: "black",
                  padding: "10px",
                }}
              >
                <Col span={8}>
                  <SearchSelect
                    placeholder="Choose University"
                    options={universityOptions}
                  />
                </Col>
                <Col span={5}>
                  <SearchSelect
                    placeholder="Choose Department"
                    options={universityOptions}
                  />
                </Col>
                <Col span={5}>
                  <SearchSelect
                    placeholder="Choose Semester"
                    options={universityOptions}
                  />
                </Col>
                <Col span={4}>
                  <SearchSelect
                    placeholder="Choose Papers/Notes"
                    options={universityOptions}
                  />
                </Col>
                <Col span ={1}>
                  <Button type="primary">Search</Button>
                </Col>
              </Row>
              <Divider />
            </div>
          </div>
        </Content>
      </Layouts>
    </>
  );
}

export default index;
