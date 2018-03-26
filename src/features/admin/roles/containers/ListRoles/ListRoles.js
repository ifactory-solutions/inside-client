import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';

import { tableColumns } from './ListRolesHelper';
import { getRoles } from '../../actions';

class ListProfiles extends React.Component {
  componentWillMount() {
    this.props.getRoles();
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => {
              history.push('/roles/new');
            }}
          >
            Novo Perfil
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={tableColumns}
            rowKey="id"
            dataSource={this.props.roles}
            pagination={{ pageSize: 10 }}
          />
        </Row>
      </div>
    );
  }
}

ListProfiles.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  getRoles: PropTypes.func.isRequired,
  roles: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ roles }) => ({
  roles: _.values(roles.roles),
});

const routedComponent = withRouter(ListProfiles);
export default connect(mapStateToProps, { getRoles })(routedComponent);
