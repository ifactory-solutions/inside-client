import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const CreateEmployee = () => {
  return (
    <Form >
      <FormItem
        label="Nome"
      >
        <Input />
      </FormItem>
    </Form>
  );
};

export default CreateEmployee;
