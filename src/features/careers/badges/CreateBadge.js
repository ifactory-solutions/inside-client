import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const FormItem = Form.Item;

class CreateBadge extends React.Component {
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
          label="Nome"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Descrição"
          {...formItemLayout}
        >
          <TextArea rows={4} />
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

const WrappedCreateBadgeForm = Form.create()(CreateBadge);

export default WrappedCreateBadgeForm;
