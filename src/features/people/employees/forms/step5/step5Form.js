import React, { Component } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step5Entries';
import { getDecoratorManager } from './step5Decorators';
import { LABELS } from './step5Constants';
import {
  FORM_ITEM_LAYOUT,
  HORIZONTAL_FORM_LAYOUT,
} from '../../components/stepFormHelper';
import StepNavigator from '../../components/stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep5Form extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const { employee, form } = this.props;
    form.setFieldsValue(employee.bankAccount);
    this.props.onRef(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(error => {
      if (!error) {
        const {
          employee,
          currentStep,
          maxStep,
          finishCallback,
          nextCallback,
        } = this.props;

        const editedEmployee = {
          ...employee,
          bankAccount: form.getFieldsValue(),
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
        id="form-step-5"
        layout={HORIZONTAL_FORM_LAYOUT}
        onSubmit={this.handleOnSubmit}
      >
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.NOME_BANCO}
          hasFeedback
        >
          {decoratorManager.nomeBancoDecorator(entries.getNomeBancoInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.AGENCIA}
          hasFeedback
        >
          {decoratorManager.numeroAgenciaDecorator(
            entries.getNumeroAgenciaInput()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.TIPO_CONTA}
          hasFeedback
        >
          {decoratorManager.tipoContaDecorator(entries.getTipoContaSelector())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.CONTA}
          hasFeedback
        >
          {decoratorManager.numeroContaDecorator(entries.getNumeroContaInput())}
        </FormItem>

        <StepNavigator {...this.props} submit={this.handleOnSubmit} />
      </Form>
    );
  }
}

NewEmployeeStep5Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  finishCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default Form.create()(NewEmployeeStep5Form);
