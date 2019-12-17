import React, { Component } from 'react';

import General from './General';
import Info from '../Info';

import { Tabs, Typography, Button, Form  } from 'antd';

const { TabPane } = Tabs;
const { Title } = Typography;

class RestrictionEditor extends Component {
  pmpClose() {
    document.getElementById("restriction-editing").style.display = "none";
    return false;
  }
  render() {
    return (
      <Form className="pmp__r-tab__main">
        <Info />
        {/* <Title level={4} className="pmp__child-tab__title">Restriction Editor</Title> */}
        <Tabs tabPosition={'left'}>
          <TabPane tab="General" className="pmp__g-tab" key="1">
            <General />
          </TabPane>
          <TabPane tab="Protection" className="pmp__p-tab" key="2">
            Content of Protection
          </TabPane>
          <TabPane tab="Content" className="pmp__c-tab" key="3">
            Content of Content
          </TabPane>
        </Tabs>
        <Form.Item className="pmp__footer">
          <Button className="pmp__footer__cancel-btn" type="link" onClick={ () => this.pmpClose()}>
            Cancel
          </Button>
          <Button className="pmp__footer__update-btn" type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default RestrictionEditor;
