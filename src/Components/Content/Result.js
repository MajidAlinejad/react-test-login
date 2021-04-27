import {
  Table,
  Modal,
  Space,
  Pagination,
  Row,
  Input,
  Spin,
  Button,
} from "antd";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecords } from "../../Redux/Action/Record";
import { searchResult, sendKeyword } from "../../Redux/Action/Search";

class Result extends Component {
  state = {
    isModalVisible: false,
    setIsModalVisible: false,
    current: 1,
    id: 0,
    name: "",
    lastname: "",
    pageSize: 0, //perpage data
    total: 0, //total data
    loading: true,
    dataSource: [],
    data: [],
  };

  // filter data by user keyword
  filter = (keyword) => {
    this.setState(
      {
        data: this.state.dataSource.filter((res) =>
          res.email.toLowerCase().includes(keyword.toLowerCase())
        ),
      },
      () => {
        this.props.searchResult(this.state.data.length); //update number of search result
      }
    );
  };

  showModal = (user) => {
    this.setState({
      isModalVisible: true,
      name: user.first_name,
      lastname: user.last_name,
      id: user.id,
    });
  };

  handleOk = () => {
    //handle func if ok pressed in modal
    this.setState({ setIsModalVisible: false });
  };

  handleCancel = () => {
    // close and cancel modal
    this.setState({ isModalVisible: false, name: "", lastname: "", id: 0 });
  };

  onNamechange = (e) => {
    //set user input name in state from modal
    const { value } = e.target;
    this.setState({ name: value });
  };

  onLastNamechange = (e) => {
    //set user input last name in state from modal
    const { value } = e.target;
    this.setState({ lastname: value });
  };

  onPageChange = (page) => {
    //paginate functionality
    this.setState(
      {
        current: page,
        loading: true,
      },
      () => this.props.getRecords(page) //get next or prev page data
    );
  };

  componentDidMount() {
    this.props.getRecords(); //get first page data
  }

  componentDidUpdate(prevProps) {
    //listen if change variables
    if (prevProps.record !== this.props.record) {
      this.setState({
        data: this.props.data,
        dataSource: this.props.data,
        loading: this.props.loading,
        current: this.props.record.data.page,
        total: this.props.record.data.total,
        pageSize: this.props.record.data.per_page,
      });
    }

    // if new keyword search requested then filter
    if (prevProps.keyword !== this.props.keyword) {
      this.filter(this.props.keyword);
    }

    // if new keyword search requested then erase last result
    if (prevProps.data !== this.props.data) {
      this.props.sendKeyword("");
    }
  }

  render() {
    const { data, total, current, pageSize } = this.state;
    return (
      <div className="result">
        <hr />
        {/* loading */}
        <Spin className="spin" spinning={this.state.loading} />
        {/* table */}
        <Table rowKey="id" dataSource={data} size="small" pagination={false}>
          <Table.Column title="شناسه" dataIndex="id" key="id" />
          <Table.Column title="نام" dataIndex="first_name" key="first_name" />
          <Table.Column
            title="نام خانوادگی"
            dataIndex="last_name"
            key="last_name"
          />
          <Table.Column
            title="تنظیمات"
            key="action"
            render={(user) => (
              <Space size="middle">
                <Button type="link" onClick={() => this.showModal(user)}>
                  ویرایش
                </Button>
              </Space>
            )}
          />
        </Table>
        {/* table */}

        {/* pagination */}
        <Row>
          <Pagination
            onChange={this.onPageChange}
            className="paginate"
            total={total}
            current={current}
            pageSize={pageSize}
          />
        </Row>
        {/* pagination */}

        {/* basic modal */}
        <Modal
          title={"ویرایش کاربر با شماره " + this.state.id}
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="modal-input">
            <strong>نام :</strong>
            <Input
              name="name"
              value={this.state.name}
              onChange={this.onNamechange}
            />
          </div>
          <div className="modal-input">
            <strong>نام خانوادگی:</strong>
            <Input
              name="lastname"
              value={this.state.lastname}
              onChange={this.onLastNamechange}
            />
          </div>
        </Modal>
        {/* basic modal */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    record: state.record,
    loading: state.record.loading,
    data: state.record.data.data,
    keyword: state.search.keyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: (page) => {
      dispatch(getRecords(page));
    },
    sendKeyword: (keyword) => {
      dispatch(sendKeyword(keyword));
    },
    searchResult: (number) => {
      dispatch(searchResult(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
