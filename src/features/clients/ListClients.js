import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';

import { getClients } from './actions';
// import data from '../../mock/projects';

const columns = [{
  title: 'Nome',
  dataIndex: 'name',
  key: 'name',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
class ListClients extends Component {
  static propTypes = {
    history: PropTypes.object, // eslint-disable-line
    clients: PropTypes.array, // eslint-disable-line
    companyId: PropTypes.number, // eslint-disable-line
    getClients: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getClients(this.props.companyId);
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => { history.push('/clients/new'); }}>
            Novo Cliente
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={columns}
            pagination={{ pageSize: 2 }}
            dataSource={this.props.clients}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ clients: { clients }, users }) => {
  let companyId;

  if (users && users.currentCompany) {
    companyId = users.currentCompany.id;
  }

  return { clients, companyId };
};

export default withRouter(
  connect(mapStateToProps, {
    getClients,
  })(ListClients)
);
