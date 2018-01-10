import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import './IconCard.css';

const CardGrid = Card.Grid;
const PLACEHOLDER_PATH = 'https://goo.gl/fr3HCz';

export const IconCard = props => {
  const icons = props.content.map(icon => (
    <CardGrid key={icon.id}>
      <div className="icon-card-item">
        <img src={icon.src || PLACEHOLDER_PATH} alt="" />
        <p className="icon-card-text">{icon.text.toUpperCase()} </p>
      </div>
    </CardGrid>
  ));

  return (
    <Card title={props.title} className="card" hoverable>
      {icons}
    </Card>
  );
};

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
};
