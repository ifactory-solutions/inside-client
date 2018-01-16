import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  const props = {
    loading: true,
    fullScreen: false,
  };

  const wrapper = shallow(<Loader {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a loading message', () => {
    const loadingDivs = wrapper.find('.loader');

    expect(loadingDivs.length).toBe(1);
    expect(loadingDivs.prop('children')).toBe('CARREGANDO...');
  });
});
