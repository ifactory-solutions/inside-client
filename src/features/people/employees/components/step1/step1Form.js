import React, { Component } from 'react';
import { Form, message } from 'antd';
import PropTypes from 'prop-types';

import {
  getNickNameInput,
  getFullNameInput,
  getGenderSelector,
  getMotherNameInput,
  getFatherNameInput,
  getNationalityInput,
  getBirthDatePicker,
  getMaritalStatusInput,
  getSpouseNameInput,
  getChildrenAmountInput,
} from './step1Entries';

import { getDecoratorManager } from './step1Decorators';
import { LABELS } from './step1Constants';
import {
  FORM_ITEM_LAYOUT,
  FORM_ITEM_LAYOUT_2,
  HORIZONTAL_FORM_LAYOUT,
} from '../stepFormHelper';

import StepFormNavigator from '../stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep1Form extends Component {
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
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.FULL_NAME} hasFeedback>
          {decoratorManager.fullNameDecorator(getFullNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NICK_NAME} hasFeedback>
          {decoratorManager.nickNameDecorator(getNickNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT_2} label={LABELS.GENDER} hasFeedback>
          {decoratorManager.genderDecorator(getGenderSelector())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT_2} label={LABELS.BIRTH_DATE}>
          {decoratorManager.birthDateDecorator(getBirthDatePicker())}
        </FormItem>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.FILIATION_FATHER}
          hasFeedback
        >
          {decoratorManager.fatherNameDecorator(getFatherNameInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.FILIATION_MOTHER}
          hasFeedback
        >
          {decoratorManager.motherNameDecorator(getMotherNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NATIONALITY} hasFeedback>
          {decoratorManager.nationalityDecorator(getNationalityInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.MARITAL_STATUS}
          hasFeedback
        >
          {decoratorManager.maritalStatusDecorator(getMaritalStatusInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.SPOUSE_NAME} hasFeedback>
          {getSpouseNameInput()}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.CHILDREN_AMOUNT}
          hasFeedback
        >
          {getChildrenAmountInput()}
        </FormItem>

        <StepFormNavigator {...this.props} submit={this.handleOnSubmit} />
      </Form>
    );
  }
}

NewEmployeeStep1Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
};

export default Form.create()(NewEmployeeStep1Form);
