import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const App = () => (
  <Breadcrumb
    style={{
      color: "#fff",
    }}
    items={[
      {
        title: (
          <Link
            style={{
              color: "#fff",
            }}
            to="/home"
          >
            Home
          </Link>
        ),
      },
      {
        title: (
          <Link
            style={{
              color: "#fff",
            }}
            to="/pastpapers"
          >
            past papers
          </Link>
        ),
      },
    ]}
  />
);
export default App;
