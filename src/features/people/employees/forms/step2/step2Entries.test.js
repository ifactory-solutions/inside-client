import { shallow } from 'enzyme';
import * as entries from './step2Entries';

describe('feature(StepEntries => STEP 2)', () => {
  it('should create a line 1 input', () => {
    const wrapper = shallow(entries.getLine1Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a line 2 input', () => {
    const wrapper = shallow(entries.getLine2Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('number');
  });

  it('should create a line 3 input', () => {
    const wrapper = shallow(entries.getLine3Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a line 4 input', () => {
    const wrapper = shallow(entries.getLine4Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a zipcode input', () => {
    const wrapper = shallow(entries.getZipCodeInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('number');
  });

  it('should create a city input', () => {
    const wrapper = shallow(entries.getCityInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a state input', () => {
    const wrapper = shallow(entries.getStateInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a country input', () => {
    const wrapper = shallow(entries.getCountryInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });
});
