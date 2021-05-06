import React, { useState, useEffect, useContext } from "react";
import { Pagination, Menu, Dropdown, Breadcrumb } from "antd";
import { DownOutlined } from "@ant-design/icons";
//
import LayoutCustom from "./LayoutCustom";
import { SpinnerContext } from "../App";

const Home = () => {
  const spinnerConsumerContext = useContext(SpinnerContext);
  //
  const [totalLength, setTotalLength] = useState(0);
  const [ajaxData, setAjaxData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [pageStart, setPageStart] = useState(0);
  //
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        setTotalLength(json.length);
        setAjaxData(json);
        spinnerConsumerContext.setLoading(false);
      });
  }, []);
  const pageSizeHandler = (num) => {
    setPageSize(num);
    setPage(1);
    setPageStart(0);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#!" onClick={() => pageSizeHandler(10)}>
          10
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#!" onClick={() => pageSizeHandler(20)}>
          20
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#!" onClick={() => pageSizeHandler(30)}>
          30
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <LayoutCustom>
      <Breadcrumb style={{ marginBottom: "16px" }}>
        <Breadcrumb.Item>
          <a href="#!">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#!">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>{" "}
      {/*  */}
      {/*  */}
      {/*  */}
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          style={{ marginBottom: "16px", display: "inline-block" }}
          onClick={(e) => e.preventDefault()}
        >
          Items Per Page <DownOutlined />
        </a>
      </Dropdown>
      <div style={{ minHeight: "calc(100vh - 230px)" }}>
        <ul>
          {ajaxData.slice(pageStart, pageSize * page).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <Pagination
        showSizeChanger={false}
        current={page}
        pageSize={pageSize}
        total={totalLength}
        style={{ display: "flex", justifyContent: "center" }}
        onChange={(pagePara, pageSizePara) => {
          setPage(pagePara);
          if (pagePara === 1) {
            setPageStart(0);
          } else {
            setPageStart((pagePara - 1) * pageSize);
          }
        }}
      />
    </LayoutCustom>
  );
};

export default Home;
