import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Row, Divider, Input } from 'antd';

import { columns } from './ListPermissionHelper';
import { getUserRoles } from '../../actions';

class ListPermissions extends React.Component {
  componentWillMount() {
    this.props.getUserRoles();
  }

  render() {
    const { userRoles } = this.props;
    return (
      <div>
        <Row type="flex" justify="end">
          <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
        </Row>

        <Divider />

        <Row>
          <Table
            size="middle"
            columns={columns}
            dataSource={userRoles}
            rowKey={it => it.id}
            pagination={{ pageSize: 8 }}
          />
        </Row>
      </div>
    );
  }
}

ListPermissions.propTypes = {
  getUserRoles: PropTypes.func.isRequired,
  userRoles: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ userRoles }) => ({
  userRoles: _.values(userRoles.users),
});

const routedComponent = withRouter(ListPermissions);
export default connect(mapStateToProps, { getUserRoles })(routedComponent);
