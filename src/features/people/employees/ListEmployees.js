import React, { Component } from 'react';
import { Divider } from 'antd';

import EmployeeListTable from './components/employeeListTable';
import EmployeeListGrid from './components/employeeListGrid';
import EmployeeListHeader from './components/employeeListHeader';

import USERS_DATA from '../../../mock/user_list';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAsTable: true };
    this.content = <EmployeeListGrid data={USERS_DATA} />;

    this.toggleVisualization = this.toggleVisualization.bind(this);
  }

  toggleVisualization() {
    this.setState({
      showAsTable: !this.state.showAsTable,
    });

    if (this.state.showAsTable) {
      this.content = <EmployeeListTable data={USERS_DATA} />;
    } else {
      this.content = <EmployeeListGrid data={USERS_DATA} />;
    }
  }

  render() {
    const headerProps = {
      showAsTable: this.state.showAsTable,
      toggleVisualization: this.toggleVisualization,
      history: this.props.history, //eslint-disable-line
    };

    return (
      <div>
        <div>
          <EmployeeListHeader {...headerProps} />
        </div>
        <Divider />
        <div>{this.content}</div>
      </div>
    );
  }
}

export default EmployeeList;
