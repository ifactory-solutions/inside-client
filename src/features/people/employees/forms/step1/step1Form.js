import React, { Component } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step1Entries';

import { getDecoratorManager } from './step1Decorators';
import { LABELS } from './step1Constants';
import {
  FORM_ITEM_LAYOUT,
  FORM_ITEM_LAYOUT_2,
  HORIZONTAL_FORM_LAYOUT,
} from '../../components/stepFormHelper';

import StepFormNavigator from '../../components/stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep1Form extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const { employee, form } = this.props;
    form.setFieldsValue(employee.personalInfo);

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
          personalInfo: form.getFieldsValue(),
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
    const decoratorManager = getDecoratorManager(
      fieldDecorator,
      this.props.employee
    );

    return (
      <Form
        id="form-step-1"
        layout={HORIZONTAL_FORM_LAYOUT}
        onSubmit={this.handleOnSubmit}
      >
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.FULL_NAME} hasFeedback>
          {decoratorManager.fullNameDecorator(entries.getFullNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NICK_NAME} hasFeedback>
          {decoratorManager.nickNameDecorator(entries.getNickNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT_2} label={LABELS.GENDER} hasFeedback>
          {decoratorManager.genderDecorator(entries.getGenderSelector())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT_2} label={LABELS.BIRTH_DATE}>
          {decoratorManager.birthDateDecorator(entries.getBirthDatePicker())}
        </FormItem>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.FILIATION_FATHER}
          hasFeedback
        >
          {decoratorManager.fatherNameDecorator(entries.getFatherNameInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.FILIATION_MOTHER}
          hasFeedback
        >
          {decoratorManager.motherNameDecorator(entries.getMotherNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NATIONALITY} hasFeedback>
          {decoratorManager.nationalityDecorator(entries.getNationalityInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.MARITAL_STATUS}
          hasFeedback
        >
          {decoratorManager.maritalStatusDecorator(
            entries.getMaritalStatusInput()
          )}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.SPOUSE_NAME} hasFeedback>
          {decoratorManager.spouseNameDecorator(entries.getSpouseNameInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.CHILDREN_AMOUNT}
          hasFeedback
        >
          {decoratorManager.childAmountDecorator(
            entries.getChildrenAmountInput()
          )}
        </FormItem>

        <StepFormNavigator {...this.props} submit={this.handleOnSubmit} />
      </Form>
    );
  }
}

NewEmployeeStep1Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
  finishCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default Form.create()(NewEmployeeStep1Form);
