import React from "react";
import { Space, Spin } from "antd";

const Spinner = () => {
  return (
    <Space
      size="middle"
      style={{
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        position: "fixed",
        backgroundColor: "rgba(255,255,255,0.6)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </Space>
  );
};

export default Spinner;
