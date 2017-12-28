import React from 'react';
import { Row, Col } from 'antd';
import EmployeeCard from '../../components/employeeCard';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeeList = () => {
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
};

export default EmployeeList;
