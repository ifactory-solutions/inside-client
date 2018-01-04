import React, { Component } from 'react';
import { Form } from 'antd';

import {
  getPhone1Input,
  getPhone2Input,
  getPersonalEmailInput,
  getOfficeEmailInput,
} from './step3Entries';
import { getDecoratorManager } from './step3Decorators';
import { LABELS } from './step3Constants';
import { FORM_ITEM_LAYOUT, HORIZONTAL_FORM_LAYOUT } from '../stepFormHelper';

const FormItem = Form.Item;

class NewEmployeeStep3Form extends Component {
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
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PHONE_1} hasFeedback>
          {decoratorManager.phone1Decorator(getPhone1Input())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PHONE_2} hasFeedback>
          {decoratorManager.phone2Decorator(getPhone2Input())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.PERSONAL_EMAIL}
          hasFeedback
        >
          {decoratorManager.personalEmailDecorator(getPersonalEmailInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.OFFICE_EMAIL} hasFeedback>
          {decoratorManager.officeEmailDecorator(getOfficeEmailInput())}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NewEmployeeStep3Form);
