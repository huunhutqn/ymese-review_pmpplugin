import React, { Component } from 'react';

import EditPost from './components/EditPost';
import RestrictionEditor from './components/RestrictionEditor';
import DraftList from './components/DraftList';

import { Tabs, Typography, Icon } from 'antd';

import './main.css';

const { TabPane } = Tabs;
const { Title } = Typography;

class App extends Component {
  pmpClose() {
    document.getElementById("restriction-editing").style.display = "none";
    return false;
  }
  render() {
    return (
      <div className="pmp__main">
        <a className="pmp__close" onClick={ () => this.pmpClose()}><Icon type="close" /></a>
        <Tabs defaultActiveKey="01" className="pmp__parent-tab">
          <TabPane tab="Content Protection" className="pmp__child-tab pmp__r-tab" key="01">
            <RestrictionEditor />
          </TabPane>
          <TabPane tab="Edit Post" className="pmp__child-tab pmp__e-tab" key="02">
            <EditPost />
          </TabPane>
          <TabPane tab="Draft List" className="pmp__child-tab pmp__d-tab" key="03">
            <DraftList />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
