import React from 'react';
import { Row, Col } from 'antd';
import EmployeeCard from '../../../../../components/employeeCard/EmployeeCard';

import USER_LIST from '../../../../../mock/user_list';
import { ROW_GUTTER, CARD_LAYOUT } from './EmployeeListConstants';

const EmployeeListGrid = () => (
  <Row type="flex" justify="start" gutter={ROW_GUTTER}>
    {USER_LIST.map(user => (
      <Col {...CARD_LAYOUT} key={user.id} style={{ paddingBottom: '12px' }}>
        <EmployeeCard user={user} />
      </Col>
    ))}
  </Row>
);

export default EmployeeListGrid;
