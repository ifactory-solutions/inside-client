import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import '../cards.css';

export const TextCard = props => (
  <Card title={props.title} className="card" hoverable>
    <p align="justify">{props.content}</p>
  </Card>
);

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
