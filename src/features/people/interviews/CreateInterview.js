import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CreateInterview extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form; // eslint-disable-line
    const { formLayout } = this.state;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form layout={formLayout}>
        <FormItem
          label="Nome do Candidato"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 4 },
          }}
        >
          <Button type="primary" htmlType="submit">Cadastrar</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCreateInterviewForm = Form.create()(CreateInterview);

export default WrappedCreateInterviewForm;
