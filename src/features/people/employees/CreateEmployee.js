import React from 'react';
import { Steps, Button, message } from 'antd'; //eslint-disable-line

import { Step1Form, Step2Form, Step3Form, Step4Form } from './components/index';

import '../../../styles/createEmployee.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Informações Pessoais',
    content: Step1Form,
  },
  {
    title: 'Endereço',
    content: Step2Form,
  },
  {
    title: 'Contatos',
    content: Step3Form,
  },
  {
    title: 'Documentação',
    content: Step4Form,
  },
];

class CreateEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formLayout: 'horizontal',
      currentStep: 0,
    };

    this.renderItem = this.renderItem.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    const currentStep = this.state.currentStep + 1;
    this.setState({ currentStep });
  }

  previous() {
    const currentStep = this.state.currentStep - 1;
    this.setState({ currentStep });
  }

  renderItem() {
    const { content: StepForm } = steps[this.state.currentStep];
    const { currentStep } = this.state;

    const stepProps = {
      currentStep,
      maxStep: steps.length - 1,
      nextCallback: this.next.bind(this),
      previousCallback: this.previous.bind(this),
    };

    return <StepForm {...stepProps} />;
  }

  render() {
    const { currentStep } = this.state;

    return (
      <div>
        <Steps current={currentStep}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>

        <div className="steps-content">{this.renderItem()}</div>
      </div>
    );
  }
}

export default CreateEmployee;
