import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Select } from 'antd';

import { getUserRole } from '../../actions';
import { getRoles } from '../../../roles/actions';

const { Option } = Select;
class EditUserRoles extends React.Component {
  constructor(props) {
    super(props);

    this.selectedRoleIds = [];
    this.renderUserRolesOptions = this.renderUserRolesOptions.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getUserRole(id);
    this.props.getRoles();
  }

  renderUserRolesOptions() {
    const { roles } = this.props;
    return _.map(roles, it => <Option key={it.key}>{it.label}</Option>);
  }

  render() {
    const { userRoleIds } = this.props;
    console.log(userRoleIds);

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        labelInValue
        defaultValue={userRoleIds}
        onChange={value => console.log(value)}
      >
        {this.renderUserRolesOptions()}
      </Select>
    );
  }
}

EditUserRoles.propTypes = {
  roles: PropTypes.instanceOf(Array).isRequired,
  userRoleIds: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  getUserRole: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
};

EditUserRoles.defaultProps = {
  roles: [],
  userRoles: [],
};

const mapStateToProps = ({ userRoles, roles }) => ({
  userRoleIds: _.map(userRoles.user.roles, it => ({
    key: it.id.toString(),
    label: it.name,
  })),
  roles: _.map(roles.roles, it => ({ key: it.id, label: it.name })),
});

const routedComponent = withRouter(EditUserRoles);
export default connect(mapStateToProps, { getUserRole, getRoles })(
  routedComponent
);
