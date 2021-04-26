import "./App.css";
import { ConfigProvider } from "antd";
import faIR from "antd/lib/locale/fa_IR";
import { Component } from "react";

import Login from "./Components/Login/Login";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import { connect } from "react-redux";
class App extends Component {
  state = {
    user: false,
  };

  componentDidMount() {
    if (this.state.user) {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/");
    }

    if (localStorage.getItem("user") === "true") {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      if (this.props.user.user) {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/");
      }
      this.setState({
        user: this.props.user.user,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <ConfigProvider locale={faIR} direction="rtl">
          <Switch>
            <Route exact path="/" render={()=> <Login />}  />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*">404 not found</Route>
          </Switch>
        </ConfigProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.user.error,
  };
};

export default withRouter(connect(mapStateToProps)(App));


