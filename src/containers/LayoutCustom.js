import React from "react";
import { Layout, Menu, Breadcrumb, Space, Spin } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AreaChartOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
//
class LayoutCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      loading: this.props.loading || false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //
  render() {
    return (
      <Layout style={{ minheight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div
            className="logo"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 0 8px 0",
            }}
          >
            <h1>
              <a href="#!">
                <img
                  src="./images/logo/logo192.png"
                  alt=""
                  style={{ width: "36px" }}
                />
              </a>
            </h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Member">
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<BarcodeOutlined />}>
              Product
            </Menu.Item>
            <Menu.Item key="6" icon={<AreaChartOutlined />}>
              Chart
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: "0px 16px 0px 16px" }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "calc(100vh - 112px)",
            }}
          >
            <div>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutCustom;
