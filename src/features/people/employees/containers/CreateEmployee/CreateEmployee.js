import React from 'react';
import { Steps, message } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { formSteps as steps } from './CreateEmployeeHelper';

import {
  toggleListMode,
  goToPreviousStep,
  goToNextStep,
  moveToStep,
} from '../../actions';

import './createEmployee.css';

const { Step } = Steps;
class CreateEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.formChildren = {};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  next(employee) {
    this.props.goToNextStep(employee);
  }

  previous(employee) {
    this.props.goToPreviousStep(employee);
  }

  finish(employee) {
    this.setState({ employee });
    message.success('Dados salvos com sucesso!');
  }

  validateAndMove(form, currentStep, nextStep) {
    form.validateFields(error => {
      if (!error) {
        this.moveToStep(form, currentStep, nextStep);
      } else {
        const { title: nextStepTitle } = steps[nextStep];
        message.warn(`Ainda não é possível ir para ${nextStepTitle}.`);
      }
    });
  }

  moveToStep(form, currentStep, nextStep) {
    const { formSection } = steps[currentStep];
    const employee = {
      ...this.props.employee,
      [formSection]: form.getFieldsValue(),
    };

    this.props.moveToStep({ employee, currentStep: nextStep });
  }

  changeStep(event, nextStep) {
    const { currentStep } = this.props;
    const { props: { form } } = this.formChildren[currentStep];

    switch (true) {
    case nextStep <= currentStep: {
      this.moveToStep(form, currentStep, nextStep);
      break;
    }

    case nextStep === currentStep + 1: {
      this.validateAndMove(form, currentStep, nextStep);
      break;
    }

    case nextStep > currentStep + 1: {
      const { title: nextStepTitle } = steps[nextStep];
      message.warn(`Ainda não é possível ir para ${nextStepTitle}.`);
      break;
    }

    default:
    }
  }

  renderItem() {
    const { content: StepForm } = steps[this.props.currentStep];
    const { currentStep } = this.props;

    const stepProps = {
      currentStep,
      maxStep: steps.length - 1,
      employee: this.props.employee,
      nextCallback: this.next.bind(this),
      previousCallback: this.previous.bind(this),
      finishCallback: this.finish.bind(this),
    };

    return (
      <StepForm
        {...stepProps}
        onRef={ref => {
          this.formChildren[currentStep] = ref;
        }}
      />
    );
  }

  render() {
    const { currentStep } = this.props;
    return (
      <div>
        <Steps current={currentStep}>
          {steps.map((item, index) => (
            <Step
              onClick={event => this.changeStep(event, index)}
              style={{ cursor: 'pointer' }}
              key={item.title}
              title={item.title}
            />
          ))}
        </Steps>

        <div className="steps-content">{this.renderItem()}</div>
      </div>
    );
  }
}

CreateEmployee.propTypes = {
  goToPreviousStep: PropTypes.instanceOf(Object).isRequired,
  goToNextStep: PropTypes.instanceOf(Object).isRequired,
  moveToStep: PropTypes.instanceOf(Object).isRequired,
  currentStep: PropTypes.number.isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ employees, locations }) => ({
  showAsTable: employees.showAsTable,
  currentStep: employees.currentStep,
  employee: employees.employee,
  countries: locations.countries,
  states: locations.states,
  cities: locations.cities,
});

export default connect(mapStateToProps, {
  toggleListMode,
  goToPreviousStep,
  goToNextStep,
  moveToStep,
})(CreateEmployee);
