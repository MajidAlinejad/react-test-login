import React, { Component } from "react";
import { Input } from "antd";
import { connect } from "react-redux";
import { sendKeyword } from "../../Redux/Action/Search";

class Search extends Component {
  state = {
    search: "",
  };

  onInputchange = (e) => { //set search input keyword to state
    const { value } = e.target;
    this.setState({ search: value });
  };

  fireSearch = () => { //search button pressed and search is on!
    const { search } = this.state;
    this.props.sendKeyword(search);
  };

  render() {
    return (
      <div>
        <div className="search-input">
          <Input
            placeholder="واژه ای را جستجو کنید"
            allowClear
            onChange={this.onInputchange}
            name="search"
            onPressEnter={this.fireSearch}
            size="large"
          />
          <input type="button" onClick={this.fireSearch} value="جستجو" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendKeyword: (keyword) => {
      dispatch(sendKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
