import React, { Component } from 'react';
import { Icon } from 'antd';

import EmployeeListTable from '../../../components/employeeListTable';
import EmployeeListGrid from '../../../components/employeeListGrid';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAsTable: true };
    this.content = <EmployeeListTable />;
  }

  toggleVisualization() {
    this.setState({
      showAsTable: !this.state.showAsTable,
    });

    if (this.state.showAsTable) {
      this.content = <EmployeeListTable />;
    } else {
      this.content = <EmployeeListGrid />;
    }
  }

  render() {
    return (
      <div>
        <Icon
          type={this.state.showAsTable ? 'bars' : 'appstore-o'}
          style={{ cursor: 'pointer', fontSize: 25 }}
          onClick={() => { this.toggleVisualization(); }}
        />

        <div>{this.content}</div>
      </div>
    );
  }
}

export default EmployeeList;
