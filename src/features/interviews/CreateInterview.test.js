import React from 'react';
import { Form, Button } from 'antd';
import { mount } from 'enzyme';
import CreateInterview from './CreateInterview';

describe('feature(CreateInterview)', () => {
  const wrapper = mount(<CreateInterview />);

  it('contains a form', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('check form fields', () => {
    const form = wrapper.find(Form).first();
    const formItems = form.find(Form.Item);
    expect(formItems.length).toBe(2);
    expect(formItems
      .filterWhere(x => x.prop('label') === 'Nome do Candidato').length
    ).toBe(1);
  });
  it('contains a submit button', () => {
    const submitButton = wrapper.find(Button).first();
    expect(submitButton.prop('htmlType')).toBe('submit');
    expect(submitButton.prop('children')).toBe('Cadastrar');
  });
});
