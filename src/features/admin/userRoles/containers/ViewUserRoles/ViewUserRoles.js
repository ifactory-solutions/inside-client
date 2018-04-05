import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Table, List, Divider } from 'antd';
import { HORIZONTAL_FORM_LAYOUT } from 'components/ui/Forms';

import { getUserRole } from '../../actions';

import { columns, LABELS } from '../UserRolesHelper';

const { Item: FormItem } = Form;
const { Item: ListItem } = List;
const { Meta: MetaItem } = ListItem;

class ViewUserRoles extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getUserRole(id);
  }

  render() {
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
            columns={columns}
            dataSource={this.props.userRoles}
            rowKey={record => record.id}
          />
        </FormItem>
      </Form>
    );
  }
}

ViewUserRoles.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  selectedUser: PropTypes.instanceOf(Object).isRequired,
  userRoles: PropTypes.instanceOf(Array).isRequired,
  getUserRole: PropTypes.func.isRequired,
};

ViewUserRoles.defaultProps = {
  userRoles: [],
};

const mapStateToProps = state => {
  const { user } = state.userRoles;
  const { roles: userRoles } = user;

  return {
    userRoles: _.values(userRoles),
    selectedUser: user,
  };
};

const routedComponent = withRouter(ViewUserRoles);
export default connect(mapStateToProps, { getUserRole })(routedComponent);
