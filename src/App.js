import "./App.css";
import { Layout, Breadcrumb, ConfigProvider } from "antd";
import faIR from "antd/lib/locale/fa_IR";
import { Component } from "react";
import Header from "../src/Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Search from "./Components/Content/Search";

const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfigProvider locale={faIR} direction="rtl">
          <Layout>
            <Header/>
            <Layout className="container-sider">
            <Sidebar/>
            <Layout className="container-section">
              <Search/>
            </Layout>
            </Layout>
           
           
          </Layout>
        </ConfigProvider>
      </div>
    );
  }
}

export default App;
