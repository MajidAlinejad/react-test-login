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
  state = {
    resultNumber: 0,
  };

  logout = () => {
    //call logout func
    this.props.userLogout();
  };
  //listen to new search result number to update the header
  componentDidUpdate(prevProps) {
    if (prevProps.resultNumber !== this.props.resultNumber) {
      this.setState({
        resultNumber: this.props.resultNumber,
      });
    }
  }

  render() {
    const userInfo = (
      <Menu className="user-info">
        {/* avatar and user info */}
        <Menu.Item key="0" className="user-title">
          <Avatar size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}>
            User
          </Avatar>
          <br />
          <strong>نام و نام خانوادگی کاربر</strong>
          <br />
          <em>سمت کاربر</em>
        </Menu.Item>
        {/* avatar and user info */}
        <Menu.Divider />
        {/* just a couple of buttons */}
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
        {/* just a couple of buttons */}
        {/* logout button */}
        <Menu.Item key="3">
          <Button type="dashed" block danger onClick={this.logout}>
            خروج <PoweroffOutlined />{" "}
          </Button>
        </Menu.Item>
        {/* logout button */}
      </Menu>
    );

    return (
      <div>
        <Layout.Header className="header ovr-header">
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            {/* header avatar */}
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
            {/* header avatar */}
            <Menu.Item key="2">
              {" "}
              <SearchOutlined />
              جستجو
            </Menu.Item>
            {/* search result print :) */}
            <Menu.Item className="end-item" key="4">
              تعداد نتایج در این صفحه : {this.state.resultNumber}
            </Menu.Item>
            {/* search result print :) */}
          </Menu>
        </Layout.Header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    resultNumber: state.search.number,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => {
      dispatch(userLogout());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
