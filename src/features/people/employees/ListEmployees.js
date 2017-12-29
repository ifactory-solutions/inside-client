import React, { Component } from 'react';
import { Row, Col, Button, Divider, Table, Icon } from 'antd';
import EmployeeCard from '../../components/employeeCard';
import data from '../../mock/employees';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
class EmployeeList extends Component {
  static showTableStyle() {
    return (
      <Row type="flex" justify="start">
        {[1, 2, 3, 4, 5].map(i => {
          return (
            <Col
              key={i}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
              style={{ marginBottom: '20px' }}>
              <EmployeeCard />
            </Col>
          );
        })
        }
      </Row>
    );
  }

  static showGridStyle() {
    const columns = [{
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return <a href="#">{text}</a>;
      },
    }, {
      title: 'Cargo',
      dataIndex: 'level',
      key: 'level',
    }, {
      title: 'Alocação',
      dataIndex: 'alocation',
      key: 'alocation',
    }, {
      title: 'Projeto',
      dataIndex: 'project',
      key: 'project',
    }];

    return (
      <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => { history.push('/employees/new'); }}>
              Novo Colaborador
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 2 }} />
        </Row>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { showAsTable: true };
    this.content = null;
  }

  toggleVisualization() {
    this.setState({
      showAsTable: !this.state.showAsTable,
    });

    if (this.state.showAsTable) {
      const columns = [{
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: text => {
          return <a href="#">{text}</a>;
        },
      }, {
        title: 'Cargo',
        dataIndex: 'level',
        key: 'level',
      }, {
        title: 'Alocação',
        dataIndex: 'alocation',
        key: 'alocation',
      }, {
        title: 'Projeto',
        dataIndex: 'project',
        key: 'project',
      }];

      this.content = <div>
        <Row type="flex" justify="end">
          <Button
            type="primary"
            onClick={() => { history.push('/employees/new'); }}>
              Novo Colaborador
          </Button>
        </Row>
        <Divider />
        <Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 2 }} />
        </Row>
      </div>;
    } else {
      this.content = <Row type="flex" justify="start">
        {[1, 2, 3, 4, 5].map(i => {
          return (
            <Col
              key={i}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
              style={{ marginBottom: '20px' }}>
              <EmployeeCard />
            </Col>
          );
        })
        }
      </Row>;
    }
  }

  render() {
    return (
      <div>
        <Icon
          type={this.state.showAsTable ? 'bars' : 'appstore-o'}
          style={{ cursor: 'pointer', fontSize: 25 }}
          onClick={() => { this.toggleVisualization(); }}
        />

        <div>{this.content}</div>
      </div>
    );
  }
}

export default EmployeeList;
