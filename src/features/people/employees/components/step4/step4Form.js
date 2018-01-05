import React, { Component } from 'react';
import { Form, message } from 'antd';
import PropTypes from 'prop-types';

import * as Step4Inputs from './step4Entries';
import { getDecoratorManager } from './step4Decorators';
import { LABELS } from './step4Constants';
import { FORM_ITEM_LAYOUT, HORIZONTAL_FORM_LAYOUT } from '../stepFormHelper';
import StepNavigator from '../stepFormNavigator';

const FormItem = Form.Item;

class NewEmployeeStep4Form extends Component {
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
    const { getFieldDecorator: fieldDecorator } = this.props.form; //eslint-disable-line
    const decoratorManager = getDecoratorManager(fieldDecorator);

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.CPF} hasFeedback>
          {decoratorManager.CPFDecorator(Step4Inputs.getCPFInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.RG.NUMERO} hasFeedback>
          {decoratorManager.numeroRGDecorator(Step4Inputs.getNumeroRGInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.RG.DATA_EMISSAO}
          hasFeedback
        >
          {decoratorManager.dataEmissaoRGDecorator(
            Step4Inputs.getDataEmissaoRGDatePicker()
          )}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.RG.EMISSOR} hasFeedback>
          {decoratorManager.orgaoEmissorRGDecorator(
            Step4Inputs.getOrgaoEmissorRGInput()
          )}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NUMERO_CTPS} hasFeedback>
          {decoratorManager.numeroCTPSDecorator(
            Step4Inputs.getNumeroCTPSInput()
          )}
        </FormItem>

        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NUMERO_PIS} hasFeedback>
          {decoratorManager.numeroPisDecorator(Step4Inputs.getNumeroPisInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.TITULO_ELEITOR.NUMERO}
          hasFeedback
        >
          {decoratorManager.numeroTituloEleitorDecorator(
            Step4Inputs.getNumeroTituloEleitorInput()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.TITULO_ELEITOR.ZONA}
          hasFeedback
        >
          {decoratorManager.numeroZonaEleitoralDecorator(
            Step4Inputs.getNumeroZonaEleitoralInput()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.TITULO_ELEITOR.SECAO}
          hasFeedback
        >
          {decoratorManager.numeroSecaoEleitoralDecorator(
            Step4Inputs.getNumeroSecaoEleitoralInput()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.TITULO_ELEITOR.DATA_EMISSAO}
          hasFeedback
        >
          {decoratorManager.dataEmissaoTituloDecorator(
            Step4Inputs.getDataEmissaoTituloDatePicker()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.NOME_BANCO}
          hasFeedback
        >
          {decoratorManager.nomeBancoDecorator(Step4Inputs.getNomeBancoInput())}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.AGENCIA}
          hasFeedback
        >
          {decoratorManager.numeroAgenciaDecorator(
            Step4Inputs.getNumeroAgenciaInput()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.TIPO_CONTA}
          hasFeedback
        >
          {decoratorManager.tipoContaDecorator(
            Step4Inputs.getTipoContaSelector()
          )}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.DADOS_BANCARIOS.CONTA}
          hasFeedback
        >
          {decoratorManager.numeroContaDecorator(
            Step4Inputs.getNumeroContaInput()
          )}
        </FormItem>

        <StepNavigator {...this.props} submit={this.handleOnSubmit} />
      </Form>
    );
  }
}

NewEmployeeStep4Form.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
  nextCallback: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
};

export default Form.create()(NewEmployeeStep4Form);
