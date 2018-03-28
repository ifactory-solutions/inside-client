import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import EmployeeCard from '../../../../../components/employeeCard/EmployeeCard';
import { ROW_GUTTER, CARD_LAYOUT } from './EmployeeListConstants';
import EmployeeEmptyListMsg from '../employeeEmptyListMsg/EmployeeEmptyListMsg';

const EmployeeListGrid = props => (
  <Row type="flex" justify="center" gutter={ROW_GUTTER}>
    {props.data.length ?
      props.data.map(user => (
        <Col {...CARD_LAYOUT} key={user.id} style={{ paddingBottom: '12px' }}>
          <EmployeeCard user={user} />
        </Col>
      ))
      :
      <EmployeeEmptyListMsg />
    }
  </Row>
);

EmployeeListGrid.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default EmployeeListGrid;
