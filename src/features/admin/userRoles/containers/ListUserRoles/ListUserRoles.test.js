import React from 'react';
import { shallow } from 'enzyme';
import { Row, Input } from 'antd';
import ListUserRoles from './ListUserRoles';

describe('feature(ListUserRoles)', () => {
  const pathHistory = [];

  const push = path => {
    pathHistory.push(path);
  };

  const props = {
    history: { push },
  };

  const wrapper = shallow(<ListUserRoles.WrappedComponent {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a search input', () => {
    const row = wrapper.first(Row);
    const searchInput = row.find(Input.Search);

    expect(row.length).toBe(1);
    expect(searchInput.length).toBe(1);
    expect(searchInput.prop('placeholder')).toBe('Pesquisar');
  });
});
