import React, { Component } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step3Entries';
import { getDecoratorManager } from './step3Decorators';
import { LABELS } from './step3Constants';
import {
  FORM_ITEM_LAYOUT,
  HORIZONTAL_FORM_LAYOUT,
} from '../../components/stepFormHelper';
import StepNavigator from '../../components/stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep3Form extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const { form, employee } = this.props;
    form.setFieldsValue(employee.contacts);

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
          currentStep,
          maxStep,
          finishCallback,
        } = this.props;

        const editedEmployee = {
          ...employee,
          contacts: form.getFieldsValue(),
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
    const { getFieldDecorator: fieldDecorator } = this.props.form; //eslint-disable-line
    const decoratorManager = getDecoratorManager(fieldDecorator);

    return (
      <Form
        id="form-step-3"
        layout={HORIZONTAL_FORM_LAYOUT}
        onSubmit={this.handleOnSubmit}
      >
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PHONE_1} hasFeedback>
          {decoratorManager.phone1Decorator(entries.getPhone1Input())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PHONE_2} hasFeedback>
          {decoratorManager.phone2Decorator(entries.getPhone2Input())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.PERSONAL_EMAIL}
          hasFeedback
        >
          {decoratorManager.personalEmailDecorator(
            entries.getPersonalEmailInput()
          )}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.OFFICE_EMAIL} hasFeedback>
          {decoratorManager.officeEmailDecorator(entries.getOfficeEmailInput())}
        </FormItem>

        <StepNavigator {...this.props} submit={this.handleOnSubmit} />
      </Form>
    );
  }
}

NewEmployeeStep3Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  finishCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default Form.create()(NewEmployeeStep3Form);
