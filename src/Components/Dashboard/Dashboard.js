import React, { Component } from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Content/Search";
import Result from "../Content/Result";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* main layout and component call */}
        <Layout>
          <Header />
          <Layout className="container-sider">
            <Sidebar />
            <Layout className="container-section">
              <Search />
              <Result />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
