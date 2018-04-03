import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Table, Button } from 'antd';

import { getUserRole } from '../../actions';
import { getRoles } from '../../../roles/actions';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT,
} from '../../../../../components/ui/Forms';

import { columns } from '../PermissionsHelper';

const { Item: FormItem } = Form;
class EditUserRoles extends React.Component {
  constructor(props) {
    super(props);
    this.selectedRoleIds = [];
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getUserRole(id);
    this.props.getRoles();
  }

  handleOnRowChange(selectedRowsKeys) {
    this.selectedRows = selectedRowsKeys;
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.props.userRoleIds,
      onChange: this.handleOnRowChange,
    };

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.props.companyRoles}
            rowKey={record => record.id}
          />
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

EditUserRoles.propTypes = {
  companyRoles: PropTypes.instanceOf(Array).isRequired,
  userRoleIds: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  getUserRole: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
};

EditUserRoles.defaultProps = {
  companyRoles: [],
  userRoles: [],
};

const mapStateToProps = state => {
  const { roles: companyRoles } = state.roles;
  const { roles: userRoles } = state.userRoles.user;

  const userRoleIds = _.chain(userRoles)
    .values()
    .map(role => role.id)
    .value();

  return {
    userRoleIds,
    companyRoles: _.values(companyRoles),
  };
};

const routedComponent = withRouter(EditUserRoles);
export default connect(mapStateToProps, { getUserRole, getRoles })(
  routedComponent
);
