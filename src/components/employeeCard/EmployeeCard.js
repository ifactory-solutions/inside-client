import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import {
  ROW_GUTTER,
  PICTURE_LAYOUT,
  DETAILS_LAYOUT,
  PLACEHOLDER_PATH,
} from './EmployeeCardConstants';

import './EmployeeCard.scss';

const EmployeeCard = props => {
  const { user } = props;
  const { personalInfo } = user;
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
            <h3>{personalInfo.nickname.toUpperCase()}</h3>
            <h5>{user.jobTitle || 'CARGO INDISPONÍVEL'}</h5>
          </div>

          <div className="middle">
            <h5>{user.email || 'Email indisponível'}</h5>
            <h5>{user.phone || 'Telefone indisponível'}</h5>
            <h5>{user.city || 'Cidade indisponível' }</h5>
          </div>

          <div className="bottom">
            <h5>Time: {user.project || 'Projeto indisponível'}</h5>
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
