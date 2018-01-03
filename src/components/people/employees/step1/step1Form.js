import React, { Component } from 'react';
import { Form } from 'antd';

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
import { FORM_ITEM_LAYOUT, HORIZONTAL_FORM_LAYOUT } from '../stepFormConstants';

const FormItem = Form.Item;

class NewEmployeeStep1Form extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    return this;
  }

  render() {
    const { getFieldDecorator: fieldDecorator } = this.props.form; //eslint-disable-line
    const decoratorManager = getDecoratorManager(fieldDecorator);

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.FULL_NAME} hasFeedback>
          {decoratorManager.fullNameDecorator(getFullNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NICK_NAME} hasFeedback>
          {decoratorManager.nickNameDecorator(getNickNameInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.GENDER} hasFeedback>
          {decoratorManager.genderDecorator(getGenderSelector())}
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

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.BIRTH_DATE} hasFeedback>
          {decoratorManager.birthDateDecorator(getBirthDatePicker())}
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
      </Form>
    );
  }
}

export default Form.create()(NewEmployeeStep1Form);
