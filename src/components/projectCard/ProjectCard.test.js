import React from 'react';
import { Card, Meta } from 'antd';
import { shallow } from 'enzyme';
import Project from './ProjectCard';

describe('Project Card', () => {
  const wrapper = shallow(<Project />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders card component properly', () => {
    expect(wrapper.find(Card).length).toBe(1);
  });
  it('renders card actions properly', () => {
    expect(wrapper.getElement().props.actions.length).toBe(3);
  });
  it('renders card component children properly', () => {
    const cardWrapper = wrapper.find(Card);
    expect(cardWrapper.children(Meta).length).toBe(1);
  });
});
