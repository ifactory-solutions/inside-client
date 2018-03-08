import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';

import PropTypes from 'prop-types';
import { getProjects } from './actions';

const columns = [
  {
    key: 'name',
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    key: 'description',
    title: 'Descrição',
    dataIndex: 'description',
  },
  {
    key: 'startDate',
    dataIndex: 'startDate',
    title: 'Data de Início',
  },
  {
    key: 'endDate',
    dataIndex: 'endDate',
    title: 'Data de Finalização',
  },
  {
    key: 'stack',
    title: 'Stack',
    dataIndex: 'technologies',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
  },
];

class ListProjects extends Component {
  static propTypes = {
    history: PropTypes.object, // eslint-disable-line
    projects: PropTypes.array, // eslint-disable-line
    getProjects: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProjects();
  }

  _keyExtractor = project => project.id.toString();

  render() {
    const { history, projects } = this.props;
    return (
      <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => {
              history.push('/projects/new');
            }}
          >
            Novo Projeto
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={columns}
            dataSource={projects}
            rowKey={this._keyExtractor}
            pagination={{ pageSize: 2 }}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => projects;

export default withRouter(
  connect(mapStateToProps, {
    getProjects,
  })(ListProjects)
);
