import { Table, Modal, Space, Pagination, Row, Input, Spin } from "antd";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecords } from "../../Redux/Action/Record";

class Result extends Component {
  state = {
    isModalVisible: false,
    setIsModalVisible: false,
    current: 1,
    id: 0,
    name: "",
    lastname: "",
    pageSize: 0, //perpage
    total: 0, //total
    loading: true,
    data: [],
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
    this.setState({ setIsModalVisible: false });
 
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false, name: "", lastname: "", id: 0 });
  };

  onNamechange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  onLastNamechange = (e) => {
    const { value } = e.target;
    this.setState({ lastname: value });
  };

  onPageChange = (page) => {
    this.setState(
      {
        current: page,
        loading: true,
      },
      () => this.props.getRecords(page)
    );
  };

  componentDidMount() {
    this.props.getRecords();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.record !== this.props.record) {
      this.setState({
        data: this.props.data,
        loading: this.props.loading,
        current: this.props.record.data.page,
        total: this.props.record.data.total,
        pageSize: this.props.record.data.per_page,
      });
    }
  }

  render() {
    const { data, total, current, pageSize } = this.state;
    return (
      <div className="result">
        <hr />

        <Spin className="spin" spinning={this.state.loading} />

        {/* table */}
        <Table dataSource={data} size="middle" pagination={false}>
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
                <a onClick={() => this.showModal(user)}>ویرایش</a>
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
          title="ویرایش کاربر با شماره"
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: (page) => {
      dispatch(getRecords(page)); 
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
