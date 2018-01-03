import React from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class CreateEmployee extends React.Component {
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '85',
    })(
      <Select style={{ width: 70 }}>
        <Option value="85">85</Option>
        <Option value="88">88</Option>
      </Select>
    );

    return (
      <Form layout={formLayout}>
        <FormItem
          label="Nome"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Email"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="CPF"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Endereço"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Data de Admissão"
          {...formItemLayout}
        >
          <DatePicker />
        </FormItem>
        <FormItem
          label="Data de Nascimento"
          {...formItemLayout}
        >
          <DatePicker />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Telefone"
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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

const WrappedCreateEmployeeForm = Form.create()(CreateEmployee);

export default WrappedCreateEmployeeForm;
