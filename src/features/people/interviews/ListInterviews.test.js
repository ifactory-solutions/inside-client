import React from 'react';
import { shallow } from 'enzyme';
import { Row, Button } from 'antd';
import ListInterviews from './ListInterviews';

describe('feature(ListInterviews)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };
  const wrapper = shallow(<ListInterviews.WrappedComponent {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a "new interview" button', () => {
    const row = wrapper.first(Row);
    const button = row.find(Button);
    expect(row.length).toBe(1);
    expect(button.length).toBe(1);
    expect(button.prop('children')).toBe('Nova Entrevista');
  });

  it('update prop "history"', () => {
    expect(pathHistory.length).toBe(0);
    const row = wrapper.first(Row);
    const button = row.find(Button);
    button.simulate('click');
    expect(pathHistory.length).toBe(1);
    expect(pathHistory[0]).toBe('/interviews/new');
  });
});
