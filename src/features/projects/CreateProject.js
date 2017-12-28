import React from 'react';
import { Form, Input, DatePicker, Button, Tag } from 'antd';

const { TextArea } = Input;

const FormItem = Form.Item;

class CreateProject extends React.Component {
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
          label="Data de Início"
          {...formItemLayout}
        >
          <DatePicker />
        </FormItem>
        <FormItem
          label="Data de Término"
          {...formItemLayout}
        >
          <DatePicker />
        </FormItem>
        <FormItem
          label="Tecnologias"
          {...formItemLayout}
        >
          <Tag>Javascript</Tag>
          <Tag>Java</Tag>
          <Tag closable>Angular</Tag>
          <Tag closable>Html</Tag>
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

const WrappedCreateProjectForm = Form.create()(CreateProject);

export default WrappedCreateProjectForm;
