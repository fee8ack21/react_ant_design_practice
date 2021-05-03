import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import LayoutCustom from "../LayoutCustom";

const Home = () => {
  const [totalLength, setTotalLength] = useState(0);
  const [ajaxData, setAjaxData] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const [pageStart, setPageStart] = useState(0);
  //   get total number
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        setTotalLength(json.length);
        //
        setAjaxData(json);
      });
  }, []);
  // call while changing the page
  //   useEffect(() => {
  //     fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setAjaxData(json);
  //       });
  //   }, [page]);
  return (
    <LayoutCustom>
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
        onChange={async (pagePara, pageSizePara) => {
          await setPage(pagePara);
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
