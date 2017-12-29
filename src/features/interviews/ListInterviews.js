import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../mock/interviews';

const columns = [{
  title: 'Candidato',
  dataIndex: 'candidate',
  key: 'candidate',
}, {
  title: 'Tipo',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Data',
  dataIndex: 'date',
  key: 'date',
}, {
  title: 'Entrevistador',
  dataIndex: 'interviewer',
  key: 'interviewer',
}, {
  title: 'Nota final',
  dataIndex: 'finalScore',
  key: 'finalScore',
}, {
  title: 'Criador',
  dataIndex: 'creator',
  key: 'creator',
}, {
  title: 'Última atualização',
  dataIndex: 'lastUpdate',
  key: 'lastUpdate',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListInterviews = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/interviews/new'); }}>
            Nova Entrevista
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
};

ListInterviews.propTypes = {
  history: PropTypes.object, // eslint-disable-line
};

export default withRouter(ListInterviews);
