import React, { Component } from 'react';
import { Form } from 'antd';
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

const FormItem = Form.Item;

class NewEmployeeStep2Form extends Component {
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
    );
  }
}

export default Form.create()(NewEmployeeStep2Form);
