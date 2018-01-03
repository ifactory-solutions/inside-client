import React from 'react';
import { Form, Button } from 'antd';
import { mount } from 'enzyme';
import CreateProject from './CreateProject';

const getFormItemLabel = (wrapper, label) => (
  wrapper.filterWhere(x => x.prop('label') === label)
);

describe('feature(CreateProject)', () => {
  const wrapper = mount(<CreateProject />);

  it('contains a form', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('check form fields', () => {
    const form = wrapper.find(Form).first();
    const formItems = form.find(Form.Item);
    expect(formItems.length).toBe(6);
    expect(getFormItemLabel(formItems, 'Nome').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Descrição').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Data de Início').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Data de Término').length).toBe(1);
    expect(getFormItemLabel(formItems, 'Tecnologias').length).toBe(1);
  });
  it('contains a submit button', () => {
    const submitButton = wrapper.find(Button).first();
    expect(submitButton.prop('htmlType')).toBe('submit');
    expect(submitButton.prop('children')).toBe('Cadastrar');
  });
});
