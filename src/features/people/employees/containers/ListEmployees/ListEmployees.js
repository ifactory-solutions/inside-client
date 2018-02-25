import React, { Component } from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';

import _ from 'lodash';
import PropTypes from 'prop-types';

import EmployeeListTable from '../../components/employeeListTable';
import EmployeeListGrid from '../../components/employeeListGrid';
import EmployeeListHeader from '../../components/employeeListHeader';

import { getEmployees, toggleListMode } from '../../actions';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.toggleVisualization = this.toggleVisualization.bind(this);
    this.content = <EmployeeListGrid data={this.props.employees} />;
  }

  componentDidMount() {
    this.props.getEmployees(1);
  }

  toggleVisualization() {
    this.props.toggleListMode();
  }

  renderContent() {
    if (!this.props.showAsTable) {
      return <EmployeeListTable data={this.props.employees} />;
    }

    return <EmployeeListGrid data={this.props.employees} />;
  }

  render() {
    const headerProps = {
      showAsTable: this.props.showAsTable,
      toggleVisualization: this.toggleVisualization,
      history: this.props.history, //eslint-disable-line
    };

    return (
      <div>
        <div>
          <EmployeeListHeader {...headerProps} />
        </div>
        <Divider />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  showAsTable: PropTypes.bool.isRequired,
  employees: PropTypes.instanceOf(Array).isRequired,
  getEmployees: PropTypes.func.isRequired,
  toggleListMode: PropTypes.func.isRequired,
};

const mapStateToProps = ({ employees }) => {
  const employeesValues = _.values(employees.employees);

  return {
    showAsTable: employees.showAsTable,
    employees: employeesValues,
  };
};

export default connect(mapStateToProps, { getEmployees, toggleListMode })(
  EmployeeList
);
