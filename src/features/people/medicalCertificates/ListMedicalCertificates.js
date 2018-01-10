import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Divider, Row, Table } from 'antd';
import data from '../../../mock/medicalCertificates';

const columns = [{
  title: 'Autor',
  dataIndex: 'author',
  key: 'author',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Tipo',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Início',
  dataIndex: 'startDate',
  key: 'startDate',
}, {
  title: 'Fim',
  dataIndex: 'endDate',
  key: 'endDate',
},
];
/* eslint arrow-body-style: ["error", "always"] */
const ListMedicalCertificates = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/medical-certificate/new'); }}>
            Novo Atestado
        </Button>
      </Row>
      <Divider />
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{ pageSize: 2 }} />
      </Row>
    </div>
  );
};

ListMedicalCertificates.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListMedicalCertificates);
