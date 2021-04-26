import React, { Component } from "react";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import {
  PoweroffOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { userLogout } from "../../Redux/Action/User";

class Header extends Component {
  logout = () => {
    this.props.userLogout();
  };

  render() {
    const userInfo = (
      <Menu className="user-info">
        <Menu.Item key="0" className="user-title">
          <Avatar size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}>
            User
          </Avatar>
          <br />
          {/* <Menu.Divider /> */}
          <strong>نام و نام خانوادگی کاربر</strong>
          <br />
          <em>سمت کاربر</em>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <Button type="link" block>
            {" "}
            پروفایل <UserOutlined />{" "}
          </Button>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Button type="link" block>
            {" "}
            ویرایش اطلاعات <SettingOutlined />{" "}
          </Button>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Button type="dashed" block danger onClick={this.logout}>
            خروج <PoweroffOutlined />{" "}
          </Button>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Layout.Header className="header ovr-header">
          {/* <div className="logo" /> */}
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Dropdown
                overlay={userInfo}
                placement="bottomRight"
                trigger={["click"]}
                className="user-info-drop"
              >
                <span
                  className="ant-dropdown-link" 
                  onClick={(e) => e.preventDefault()}
                >
                  <Avatar className="header-avatar" size="large">
                    U
                  </Avatar>
                </span>
              </Dropdown>
            </Menu.Item>
            {/* <Menu.Item key="2">حروج</Menu.Item> */}
            <Menu.Item key="2">
              {" "}
              <SearchOutlined />
              جستجو
            </Menu.Item>
            <Menu.Item className="end-item" key="4">
              54
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => {
      dispatch(userLogout());
    },
  };
};

export default withRouter(connect(null,mapDispatchToProps)(Header));
