import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import {
  ROW_GUTTER,
  PICTURE_LAYOUT,
  DETAILS_LAYOUT,
  PLACEHOLDER_PATH,
} from './EmployeeCardConstants';

import './EmployeeCard.css';

const EmployeeCard = props => {
  const { user } = props;

  return (
    <div className="employee-card">
      <Row
        type="flex"
        align="middle"
        justify="space-around"
        gutter={ROW_GUTTER}
        className="container"
      >
        <Col {...PICTURE_LAYOUT}>
          <img
            className="avatar"
            src={user.imgSrc || PLACEHOLDER_PATH}
            alt="user"
          />
        </Col>

        <Col {...DETAILS_LAYOUT} className="details">
          <div className="top">
            <h3>{user.nickname.toUpperCase()}</h3>
            <h5>{user.jobTitle.toUpperCase()}</h5>
          </div>

          <div className="middle">
            <h5>{user.email}</h5>
            <h5>{user.phone}</h5>
            <h5>{user.city}</h5>
          </div>

          <div className="bottom">
            <h5>Time: {user.project}</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

EmployeeCard.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default EmployeeCard;
