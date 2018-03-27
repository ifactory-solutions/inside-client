import React from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';

import './IconCard.scss';

const PLACEHOLDER_PATH = 'https://goo.gl/fr3HCz';

const COL_LAYOUT = {
  xs: { span: 22 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 8 },
  xl: { span: 8 },
  xxl: { span: 8 },
};

export const IconCard = props => {
  const icons = props.content.map(icon => (
    <Col key={icon.id} {...COL_LAYOUT} className="icon-card-item">
      <img src={icon.src || PLACEHOLDER_PATH} alt="" />
      <p className="icon-card-text">{icon.text.toUpperCase()} </p>
    </Col>
  ));

  return (
    <div className="profile-card">
      <Card title={props.title} hoverable>
        <Row gutter={8}>{icons}</Row>
      </Card>
    </div>
  );
};

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
};
