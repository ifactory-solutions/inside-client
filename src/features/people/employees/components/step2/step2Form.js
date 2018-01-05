import React, { Component } from 'react';
import { Form, message } from 'antd';
import PropTypes from 'prop-types';

import {
  getLine1Input,
  getLine2Input,
  getLine3Input,
  getLine4Input,
  getZipCodeInput,
  getCityInput,
  getStateInput,
  getCountryInput,
} from './step2Entries';

import { getDecoratorManager } from './step2Decorators';
import { LABELS } from './step2Constants';
import { FORM_ITEM_LAYOUT, HORIZONTAL_FORM_LAYOUT } from '../stepFormHelper';

import StepNavigator from '../stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep2Form extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(error => {
      if (!error) {
        const { currentStep, maxStep } = this.props;

        if (currentStep === maxStep) {
          message.success('Dados salvos com sucesso!');
        } else {
          this.props.nextCallback();
        }
      }
    });
  }

  render() {
    const { getFieldDecorator: fieldDecorator } = this.props.form;
    const decoratorManager = getDecoratorManager(fieldDecorator);
    return (
      <div>
        <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.LINE_1} hasFeedback>
            {decoratorManager.line1Decorator(getLine1Input())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.LINE_2} hasFeedback>
            {decoratorManager.line2Decorator(getLine2Input())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.LINE_3} hasFeedback>
            {getLine3Input()}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.LINE_4} hasFeedback>
            {decoratorManager.line4Decorator(getLine4Input())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.ZIP_CODE} hasFeedback>
            {decoratorManager.zipCodeDecorator(getZipCodeInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.CITY} hasFeedback>
            {decoratorManager.cityDecorator(getCityInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.STATE} hasFeedback>
            {decoratorManager.stateDecorator(getStateInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.COUNTRY} hasFeedback>
            {decoratorManager.countryDecorator(getCountryInput())}
          </FormItem>
        </Form>
        <StepNavigator {...this.props} submit={this.handleOnSubmit} />
      </div>
    );
  }
}

NewEmployeeStep2Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
};

export default Form.create()(NewEmployeeStep2Form);
