import React, { Component } from 'react';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import _ from 'lodash';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT_3,
} from '../../components/stepFormHelper';
import { TelephoneItems } from './telephoneItems';
import StepNavigator from '../../components/stepFormNavigator';
import { EmailItems } from './emailItems';

const FormItem = Form.Item;

class NewEmployeeStep3Form extends Component {
  constructor(props) {
    super(props);
    const { telephones, emails } = this.props.employee.contacts;

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleAddEmail = this.handleAddEmail.bind(this);
    this.handleRemoveEmail = this.handleRemoveEmail.bind(this);
    this.handleAddTelephone = this.handleAddTelephone.bind(this);
    this.handleRemoveTelephone = this.handleRemoveTelephone.bind(this);
    this.state = { telephones, emails };
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

        const telephones = _.map(this.state.telephones, tel => {
          const field = _.values(
            form.getFieldsValue([`tel-${tel.hash}`])
          ).shift();

          return {
            ...field,
            hash: tel.hash,
          };
        });

        const emails = _.map(this.state.emails, email => {
          const field = _.values(
            form.getFieldsValue([`email-${email.hash}`])
          ).shift();

          return {
            ...field,
            hash: email.hash,
          };
        });

        const editedEmployee = {
          ...employee,
          contacts: {
            telephones,
            emails,
          },
        };

        if (currentStep === maxStep) {
          finishCallback(editedEmployee);
        } else {
          nextCallback(editedEmployee);
        }
      }
    });
  }

  handleAddTelephone() {
    const telephone = { hash: shortid.generate() };
    const telephones = [...this.state.telephones, telephone];
    this.setState({ telephones });
  }

  handleRemoveTelephone(id) {
    const telephones = _.filter(this.state.telephones, it => it.hash !== id);
    this.setState({ telephones });
  }

  handleAddEmail() {
    const email = { hash: shortid.generate() };
    const emails = [...this.state.emails, email];
    this.setState({ emails });
  }

  handleRemoveEmail(id) {
    const emails = _.filter(this.state.emails, it => it.hash !== id);
    this.setState({ emails });
  }

  render() {
    const { getFieldDecorator: fieldDecorator } = this.props.form; //eslint-disable-line
    const { telephones, emails } = this.state;

    const telProps = {
      telephones,
      fieldDecorator,
      onRemove: this.handleRemoveTelephone,
    };
    const emailProps = {
      emails,
      fieldDecorator,
      onRemove: this.handleRemoveEmail,
    };

    return (
      <Form
        id="form-step-3"
        layout={HORIZONTAL_FORM_LAYOUT}
        onSubmit={this.handleOnSubmit}
      >
        <TelephoneItems {...telProps} />
        {telephones.length < 3 && (
          <FormItem {...FORM_ITEM_LAYOUT_3}>
            <Button onClick={this.handleAddTelephone}>
              Adicionar Telefone
            </Button>
          </FormItem>
        )}

        <EmailItems {...emailProps} />
        {emails.length < 3 && (
          <FormItem {...FORM_ITEM_LAYOUT_3}>
            <Button onClick={this.handleAddEmail}>Adicionar Email</Button>
          </FormItem>
        )}

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
