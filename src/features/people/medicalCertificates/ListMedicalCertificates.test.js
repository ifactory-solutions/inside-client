import React from 'react';
import { shallow } from 'enzyme';
import { Row, Button, Table } from 'antd';
import ListMedicalCertificates from './ListMedicalCertificates';

describe('feature(ListMedicalCertificates)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };
  const { WrappedComponent } = ListMedicalCertificates;
  const wrapper = shallow(<WrappedComponent {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a "new medical certificate" button', () => {
    const row = wrapper.first(Row);
    const button = row.find(Button);
    expect(row.length).toBe(1);
    expect(button.length).toBe(1);
    expect(button.prop('children')).toBe('Novo Atestado');
  });
  it('update prop "history', () => {
    expect(pathHistory.length).toBe(0);
    const row = wrapper.first(Row);
    const button = row.find(Button);
    button.simulate('click');
    expect(pathHistory.length).toBe(1);
    expect(pathHistory[0]).toBe('/medical-certificate/new');
  });
  it('has a "medical certificate" table', () => {
    const table = wrapper.first(Table);
    expect(table.length).toBe(1);
  });
});
