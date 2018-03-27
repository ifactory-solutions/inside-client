import React from 'react';
import { Card, Steps } from 'antd';
import PropTypes from 'prop-types';

import './StepCard.scss';

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
    <div className="profile-card">
      <Card title={props.title.toUpperCase()} hoverable>
        <Steps
          progressDot
          direction="vertical"
          current={0}
          className="card-steps"
        >
          {steps}
        </Steps>
      </Card>
    </div>
  );
};

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
};
