import React, { Component } from "react";
import { Input, Space } from "antd";

export default class Search extends Component {

  render() {
    return (
      <div>
        <div className="search-input">
          <Input
            placeholder="واژه ای را جستجو کنید"
            allowClear
            //   enterButton="Search"
            size="large"
            //   onSearch={onSearch}
          />
          <input type="button"  value="جستجو" />
        </div>
      </div>
    );
  }
}
