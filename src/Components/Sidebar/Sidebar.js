import React, { Component } from 'react';
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  } from "@ant-design/icons";
  
const { SubMenu } = Menu;
const {  Sider } = Layout;
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
              
                  <SubMenu key="sub1" icon={<UserOutlined />} title="منو 1">
                    <Menu.Item key="1">زیر منو 1</Menu.Item>
                    <Menu.Item key="2">زیر منو 2</Menu.Item>
                    <Menu.Item key="3">زیر منو 3</Menu.Item>
                    <Menu.Item key="4">زیر منو 4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<LaptopOutlined />}
                    title="منو 2"
                  >
                    <Menu.Item key="5">زیر منو 5</Menu.Item>
                    <Menu.Item key="6">زیر منو 6</Menu.Item>
                    <Menu.Item key="7">زیر منو 7</Menu.Item>
                    <Menu.Item key="8">زیر منو 8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    icon={<NotificationOutlined />}
                    title="منو 3"
                  >
                    <Menu.Item key="9">زیر منو 9</Menu.Item>
                    <Menu.Item key="10">زیر منو 10</Menu.Item>
                    <Menu.Item key="11">زیر منو 11</Menu.Item>
                    <Menu.Item key="12">زیر منو 12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
            </div>
        )
    }
}
