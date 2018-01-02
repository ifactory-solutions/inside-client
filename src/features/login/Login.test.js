import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('feature(Login)', () => {
  it('renders properly', () => {
    const wrapper = mount(<Login />);
    const inputs = wrapper.find('input');
    const buttons = wrapper.find('button');

    expect(inputs.length).toBe(2);
    expect(buttons.length).toBe(1);
  });

  it('has a field with id="username"', () => {
    const wrapper = mount(<Login />);
    const usernameFields = wrapper.find('input#username');

    expect(usernameFields.length).toBe(1);
  });

  it('has a field with id="password"', () => {
    const wrapper = mount(<Login />);
    const passwordFields = wrapper.find('input#password');

    expect(passwordFields.length).toBe(1);
  });

  it('has a button', () => {
    const wrapper = mount(<Login />);
    const buttons = wrapper.find('button');

    expect(buttons.length).toBe(1);
  });
});
