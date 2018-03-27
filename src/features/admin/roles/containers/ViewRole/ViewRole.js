import React from 'react';
import PropTypes from 'prop-types';
import { Table, Divider } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getRole } from '../../actions';
import { columns } from './ViewConstants';

class ViewRole extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getRole(id);
  }

  render() {
    return (
      <div>
        <h2>{this.props.role.name}</h2>
        <Divider />
        <Table columns={columns} dataSource={this.props.role.permissions} />
      </div>
    );
  }
}

ViewRole.propTypes = {
  role: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  getRole: PropTypes.func.isRequired,
};

const mapStateToProps = ({ roles }) => ({
  role: roles.role,
});

const routedComponent = withRouter(ViewRole);
export default connect(mapStateToProps, { getRole })(routedComponent);
