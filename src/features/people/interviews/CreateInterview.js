import React from 'react';
import { Form, Button, message } from 'antd';
import PropTypes from 'prop-types';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  LABELS,
  FORM_ITEM_SUBMMIT_LAYOUT,
} from './CreateInterviewConstants';

import { getDecoratorManager } from './CreateInterviewDecorators';
import {
  getApplicantNameInput,
  getInterViewTypeSelector,
  getInterviewStatusSelector,
  getDueDatePicker,
  getInterviewerAutoComplete,
  getScoreInput,
} from './CreateInterviewEntries';

const FormItem = Form.Item;

class CreateInterview extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(error => {
      if (!error) {
        message.success('Dados salvos com sucesso!');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form; // eslint-disable-line
    const decoratorManager = getDecoratorManager(getFieldDecorator);

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem
          label={LABELS.APPLICANT_NAME}
          {...FORM_ITEM_LAYOUT}
          hasFeedback
        >
          {decoratorManager.applicantNameDecorator(getApplicantNameInput())}
        </FormItem>

        <FormItem
          label={LABELS.INTERVIEW_TYPE}
          {...FORM_ITEM_LAYOUT}
          hasFeedback
        >
          {decoratorManager.interViewTypeDecorator(getInterViewTypeSelector())}
        </FormItem>

        <FormItem label={LABELS.STATUS} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.interviewStatusDecorator(
            getInterviewStatusSelector()
          )}
        </FormItem>

        <FormItem label={LABELS.DUE_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.dueDateDecorator(getDueDatePicker())}
        </FormItem>

        <FormItem label={LABELS.INTERVIEWER} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.interviewerDecorator(getInterviewerAutoComplete())}
        </FormItem>

        <FormItem label={LABELS.SCORES} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scoreDecorator(getScoreInput())}
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMMIT_LAYOUT} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

CreateInterview.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
};

const WrappedCreateInterviewForm = Form.create()(CreateInterview);

export default WrappedCreateInterviewForm;
