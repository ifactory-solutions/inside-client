import React, { Component } from 'react';
import { Divider } from 'antd';

import EmployeeListTable from './components/employeeListTable';
import EmployeeListGrid from './components/employeeListGrid';
import EmployeeListHeader from './components/employeeListHeader';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAsTable: false };
    this.content = <EmployeeListTable />;

    this.toggleVisualization = this.toggleVisualization.bind(this);
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
