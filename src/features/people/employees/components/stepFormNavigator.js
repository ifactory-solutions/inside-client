import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';

import { FORM_ITEM_LAYOUT } from './stepFormHelper';

const FormItem = Form.Item;
const nextButtonLayout = {
  ...FORM_ITEM_LAYOUT,
  label: ' ',
  colon: false,
};

class StepFormNavigator extends Component {
  render() {
    return (
      <FormItem {...nextButtonLayout} className="steps-action">
        {this.props.currentStep > 0 && (
          <Button
            id="previous"
            style={{ marginRight: 8 }}
            onClick={() => this.props.previousCallback(this.props.employee)}
          >
            Anterior
          </Button>
        )}
        {this.props.currentStep < this.props.maxStep && (
          <Button
            id="next"
            type="primary"
            htmlType="submit"
            onClick={event => this.props.submit(event)}
          >
            Próximo
          </Button>
        )}
        {this.props.currentStep === this.props.maxStep && (
          <Button
            id="done"
            type="primary"
            htmlType="submit"
            onClick={event => this.props.submit(event)}
          >
            Finalizar
          </Button>
        )}
      </FormItem>
    );
  }
}

StepFormNavigator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  previousCallback: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  employee: PropTypes.instanceOf(Object).isRequired,
};

export default StepFormNavigator;
