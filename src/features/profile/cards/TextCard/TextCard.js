import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import '../cards.scss';

export const TextCard = props => (
  <div className="profile-card">
    <Card title={props.title} hoverable>
      <p align="justify">{props.content}</p>
    </Card>
  </div>
);

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
