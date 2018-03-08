import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step3Entries';
import {
  getEmailDecorator,
  getPhoneDecorator,
} from './step3Decorators';

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

  renderTelephones(fieldDecorator) {
    const { telephones } = this.props.employee.contacts;
    return telephones.map(tel => {
      const phoneDecorator = getPhoneDecorator(
        `tel-${tel.hash}`,
        fieldDecorator,
      );

      return (
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.PHONE}
          key={tel.hash}>
          <Row gutter={8}>
            <Col span={12}>
              {phoneDecorator(entries.getPhoneInput())}
            </Col>
            <Col span={8}>
              {entries.getPhoneSelector()}
            </Col>
          </Row>
        </FormItem>);
    });
  }

  renderEmails(fieldDecorator) {
    const { emails } = this.props.employee.contacts;
    return emails.map(email => {
      const emailDecorator = getEmailDecorator(
        `tel-${email.hash}`,
        fieldDecorator,
      );

      return (
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.PHONE}
          key={email.hash}>
          <Row gutter={8}>
            <Col span={12}>
              {emailDecorator(entries.getEmailInput())}
            </Col>
            <Col span={8}>
              {entries.getEmailSelector()}
            </Col>
          </Row>
        </FormItem>);
    });
  }

  render() {
    const { getFieldDecorator: fieldDecorator } = this.props.form; //eslint-disable-line

    return (
      <Form
        id="form-step-3"
        layout={HORIZONTAL_FORM_LAYOUT}
        onSubmit={this.handleOnSubmit}
      >
        {this.renderTelephones(fieldDecorator)}
        {this.renderEmails(fieldDecorator)}

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
