import React from 'react';
import { Form, Button } from 'antd';
import { mount } from 'enzyme';
import CreateEmployee from './CreateEmployee';

const getFormItemLabel = (wrapper, label) => (
  wrapper.filterWhere(x => x.prop('label') === label)
);

describe('feature(CreateEmployee)', () => {
  const wrapper = mount(<CreateEmployee />);

  it('contains a form', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('check form fields', () => {
    const form = wrapper.find(Form).first();
    const formItems = form.find(Form.Item);
    expect(formItems.length).toBe(8);
    expect(getFormItemLabel(formItems, 'Nome').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Email').length).toBe(1);
    expect(getFormItemLabel(formItems, 'CPF').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Endereço').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Data de Admissão').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Data de Nascimento').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Telefone').length).toBe(1);
  });
  it('contains a submit button', () => {
    const submitButton = wrapper.find(Button).first();
    expect(submitButton.prop('htmlType')).toBe('submit');
    expect(submitButton.prop('children')).toBe('Cadastrar');
  });
});
