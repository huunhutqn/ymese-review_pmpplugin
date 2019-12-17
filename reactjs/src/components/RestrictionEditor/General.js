import React, { Component, Fragment } from 'react';

import { Typography, Form, Input, Select } from 'antd';

const { Title } = Typography;
const { Option } = Select;

class General extends Component {
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form.Item label="Restriction Title">
          <Input placeholder="Restriction Title" />
        </Form.Item>
        <Form.Item label="Who can see this content?">
          <Select defaultValue="logged" style={{ width: 220 }}>
            <Option value="logged">Logged In Users</Option>
            <Option value="editor">Editor Users</Option>
            <Option value="admin">Admin Users</Option>
          </Select>
        </Form.Item>
      </Fragment>
    );
  }
}

export default General;