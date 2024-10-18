import React from "react";
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
import Ing from "../../Assets/images/hero-image.jpg";
import BreadCrumer from "../../Components/Commmon/breadcrumb";

function index() {
  return (
    <>
      <Layouts>
        <Content className="past-papers">
          <div
            className="hero-section text-center"
            style={{
              backgroundImage: `url(${Ing})`,
              height: "100%",
              width: "100%",
              paddingTop: "150px",
            }}
          >
            <div className="hero-mask">
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-white">
                  <h1 className="mb-3">Comsats University Islamabad</h1>
                  <BreadCrumer />
                  <Divider />
                </div>
              </div>
            </div>
          </div>
        </Content>
        {/* Past Papers components  */}
        <div className="container-fluid mt-5">
          <h5>Past Papers </h5>
          <Divider />

          {/* Past Papers Card  */}
          <h6></h6>
          {/* Cards for 2024  */}

          {/* Cards for 2023  */}
          <Card
            title="2023"
            style={{
              marginTop: 16,
            }}
          >
            <Card
              style={{
                marginTop: 16,
                marginBottom: 16,
              }}
              type="inner"
              title="Lorem ipsum dolor sit amet, dicit ceteros dignissim mea cu, laudem apeirian per in.Id case populo accumsan"
              extra={
                <div>
                  <Button className="bg-warning">Add to Favorite</Button>
                </div>
              }
            >
              {
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="m-0">
                      <b>By :</b>Naseem Muneer
                    </p>
                  </div>
                  <a
                    style={{
                      color: "#fff",
                      background: "#FF0000",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      float: "right",
                    }}
                    href="#"
                  >
                    Blocked
                  </a>
                </div>
              }
            </Card>
            <Card
              style={{
                marginTop: 16,
                marginBottom: 16,
              }}
              type="inner"
              title="Lorem ipsum dolor sit amet, dicit ceteros dignissim mea cu, laudem apeirian per in.Id case populo accumsan"
              extra={
                <div>
                  <Button className="bg-warning">Add to Favorite</Button>
                </div>
              }
            >
              {
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="m-0">
                      <b>By :</b>Naseem Muneer
                    </p>
                  </div>
                  <a
                    style={{
                      color: "#fff",
                      background: "#FF0000",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      float: "right",
                    }}
                    href="#"
                  >
                    Blocked
                  </a>
                </div>
              }
            </Card>
          </Card>
          <Card
            title="2023"
            style={{
              marginTop: 16,
            }}
          >
            <Card
              style={{
                marginTop: 16,
                marginBottom: 16,
              }}
              type="inner"
              title="Lorem ipsum dolor sit amet, dicit ceteros dignissim mea cu, laudem apeirian per in.Id case populo accumsan"
              extra={
                <div>
                  <Button className="bg-warning">Add to Favorite</Button>
                </div>
              }
            >
              {
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="m-0">
                      <b>By :</b>Naseem Muneer
                    </p>
                  </div>
                  <a
                    style={{
                      color: "#fff",
                      background: "#FF0000",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      float: "right",
                    }}
                    href="#"
                  >
                    Blocked
                  </a>
                </div>
              }
            </Card>
            <Card
              style={{
                marginTop: 16,
                marginBottom: 16,
              }}
              type="inner"
              title="Lorem ipsum dolor sit amet, dicit ceteros dignissim mea cu, laudem apeirian per in.Id case populo accumsan"
              extra={
                <div>
                  <Button className="bg-warning">Add to Favorite</Button>
                </div>
              }
            >
              {
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="m-0">
                      <b>By :</b>Naseem Muneer
                    </p>
                  </div>
                  <a
                    style={{
                      color: "#fff",
                      background: "#FF0000",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      float: "right",
                    }}
                    href="#"
                  >
                    Blocked
                  </a>
                </div>
              }
            </Card>
          </Card>
        </div>
      </Layouts>
    </>
  );
}

export default index;
