import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';

import { tableColumns } from './ListCompaniesHelper';
import { getCompanies } from '../actions';

class ListCompanies extends React.Component {
  componentWillMount() {
    this.props.getCompanies();
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => {
              history.push('/companies/new');
            }}
          >
            Nova Empresa
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={tableColumns}
            rowKey="id"
            dataSource={this.props.companies}
            pagination={{ pageSize: 10 }}
          />
        </Row>
      </div>
    );
  }
}

ListCompanies.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  getCompanies: PropTypes.func.isRequired,
  companies: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ companies }) => ({
  companies: _.values(companies.companies),
});

const routedComponent = withRouter(ListCompanies);
export default connect(mapStateToProps, { getCompanies })(routedComponent);
