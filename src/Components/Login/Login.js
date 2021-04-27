import React, { Component } from "react";

import { Form, Input, Button, Row, Col, Divider, Typography } from "antd";
import { UserOutlined, LockOutlined, GithubFilled } from "@ant-design/icons";
import { userValidator } from "../../Redux/Action/User";
import { connect } from "react-redux";
const { Title, Paragraph, Text } = Typography;

class Login extends Component {
  state = {
    error: false,
  };

  //look if username and password is right?   
  onFinish = (e) => {
    this.props.userValidator(e);
  };

  // if username & password was wrong throw a error
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({
        error: this.props.error,
      });
    }
  }



  render() {
    return (
      <div className="login">
        <Row>
          <Col xs={24} sm={12} lg={8} className="login-col">
            <div className="login-log">
              <GithubFilled />
              <Typography>
                <Title>توضیحات</Title>
                <Divider />
                <Paragraph>
                  این پروژه یک دمو برای نشان دادن مفاهیم در برگرفته از زبان{" "}
                  <Text strong>React js </Text>و کتابخانه های الحاقی این زبان می
                  باشد . برای ورود لطفا از نام کاربری
                  <Text code>majid</Text>و از رمز عبور
                  <Text code>react</Text>
                  استفاده کنید.
                </Paragraph>
              </Typography>
            </div>
            <div className="login-wrapper">
              <p className="wrong" hidden={!this.state.error}>
                نام کاربری یا رمز عبور اشتباه است
              </p>

              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "لطفا نام کاربری را وارد کنید!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="نام کاربری"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "لطفا رمز عبور را وارد کنید!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="رمز عبور"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    ورود
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="copywrite">
          <Text type="secondary">code by Majid Alinejad - 1400/02/06</Text>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userValidator: (page) => {
      dispatch(userValidator(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
