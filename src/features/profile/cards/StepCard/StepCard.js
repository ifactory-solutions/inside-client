import React from 'react';
import { Card, Steps } from 'antd';
import PropTypes from 'prop-types';

import './StepCard.css';

const { Step } = Steps;

export const StepCard = props => {
  const { content: stepData } = props;

  const steps = stepData.map(step => (
    <Step
      key={step.id}
      title={step.title.toUpperCase()}
      description={step.content}
    />
  ));

  return (
    <Card title={props.title.toUpperCase()} hoverable className="card">
      <Steps progressDot direction="vertical" current={0}>
        {steps}
      </Steps>
    </Card>
  );
};

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
};
