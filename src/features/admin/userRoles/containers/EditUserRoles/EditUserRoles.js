import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Table, Button, List, Divider } from 'antd';
import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT,
} from 'components/ui/Forms';

import { getUserRole, putUserRoles } from '../../actions';
import { getRoles } from '../../../roles/actions';

import { columns, LABELS } from '../UserRolesHelper';

const { Item: FormItem } = Form;
const { Item: ListItem } = List;
const { Meta: MetaItem } = ListItem;
class EditUserRoles extends React.Component {
  constructor(props) {
    super(props);
    this.selectedRowKeys = [];
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getUserRole(id);
    this.props.getRoles();
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { id } = this.props.selectedUser;
    const editedUserRoles = {
      userId: id,
      roles: this.selectedRowKeys,
    };

    this.props.putUserRoles(editedUserRoles);
  }

  handleOnRowChange(selectedRowsKeys) {
    this.selectedRowKeys = selectedRowsKeys;
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.props.userRoleIds,
      onChange: this.handleOnRowChange,
    };

    const { selectedUser } = this.props;

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <Divider>Informações de Usuário</Divider>
        <List>
          <ListItem>
            <MetaItem title={LABELS.NAME} description={selectedUser.name} />
          </ListItem>
          <ListItem>
            <MetaItem title={LABELS.EMAIL} description={selectedUser.email} />
          </ListItem>
        </List>

        <Divider>Perfis de Usuário</Divider>

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
  selectedUser: PropTypes.instanceOf(Object).isRequired,
  getUserRole: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
  putUserRoles: PropTypes.func.isRequired,
};

EditUserRoles.defaultProps = {
  companyRoles: [],
  userRoles: [],
};

const mapStateToProps = state => {
  const { roles: companyRoles } = state.roles;
  const { user } = state.userRoles;
  const { roles: userRoles } = user;

  const userRoleIds = _.chain(userRoles)
    .values()
    .map(role => role.id)
    .value();

  return {
    userRoleIds,
    companyRoles: _.values(companyRoles),
    selectedUser: user,
  };
};

const routedComponent = withRouter(EditUserRoles);
export default connect(mapStateToProps, {
  getUserRole,
  getRoles,
  putUserRoles,
})(routedComponent);
