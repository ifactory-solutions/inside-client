import React, { Component } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step2Entries';

import { getDecoratorManager } from './step2Decorators';
import { LABELS } from './step2Constants';
import {
  FORM_ITEM_LAYOUT,
  HORIZONTAL_FORM_LAYOUT,
} from '../../components/stepFormHelper';

import StepNavigator from '../../components/stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep2Form extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const { form, employee } = this.props;
    form.setFieldsValue(employee.address);

    this.props.onRef(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(error => {
      if (!error) {
        const {
          employee,
          nextCallback,
          finishCallback,
          currentStep,
          maxStep,
        } = this.props;

        const editedEmployee = {
          ...employee,
          address: form.getFieldsValue(),
        };

        if (currentStep === maxStep) {
          finishCallback(editedEmployee);
        } else {
          nextCallback(editedEmployee);
        }
      }
    });
  }

  render() {
    const { getFieldDecorator: fieldDecorator } = this.props.form;
    const decoratorManager = getDecoratorManager(fieldDecorator);
    return (
      <div>
        <Form
          id="form-step-2"
          layout={HORIZONTAL_FORM_LAYOUT}
          onSubmit={this.handleOnSubmit}
        >
          <FormItem
            {...FORM_ITEM_LAYOUT}
            label={LABELS.STREET_ADDRESS}
            hasFeedback
          >
            {decoratorManager.line1Decorator(entries.getStreetAddressInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NUMBER} hasFeedback>
            {decoratorManager.line2Decorator(entries.getNumberInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.AP_NUMBER} hasFeedback>
            {decoratorManager.line3Decorator(entries.getApNumberInput())}
          </FormItem>

          <FormItem
            {...FORM_ITEM_LAYOUT}
            label={LABELS.NEIGHBOORHOOD}
            hasFeedback
          >
            {decoratorManager.line4Decorator(entries.getNeighborhoodInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.ZIP_CODE} hasFeedback>
            {decoratorManager.zipCodeDecorator(entries.getZipCodeInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.CITY} hasFeedback>
            {decoratorManager.cityDecorator(entries.getCityInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.STATE} hasFeedback>
            {decoratorManager.stateDecorator(entries.getStateInput())}
          </FormItem>

          <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.COUNTRY} hasFeedback>
            {decoratorManager.countryDecorator(entries.getCountryInput())}
          </FormItem>
        </Form>
        <StepNavigator {...this.props} submit={this.handleOnSubmit} />
      </div>
    );
  }
}

NewEmployeeStep2Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  finishCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default Form.create()(NewEmployeeStep2Form);
