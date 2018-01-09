import { shallow, mount } from 'enzyme';
import * as entries from './step4Entries';

describe('feature(StepEntries => STEP 4)', () => {
  it('should create a RG number input', () => {
    const wrapper = shallow(entries.getNumeroRGInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create an emission date picker', () => {
    const wrapper = mount(entries.getDataEmissaoRGDatePicker());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('className')).toEqual(
      'ant-calendar-picker-input ant-input'
    );
  });

  it('should create an emissor input', () => {
    const wrapper = shallow(entries.getOrgaoEmissorRGInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a CPF input field', () => {
    const wrapper = shallow(entries.getCPFInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a CTPS input', () => {
    const wrapper = shallow(entries.getNumeroCTPSInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a PIS input', () => {
    const wrapper = shallow(entries.getNumeroPisInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create "Titulo de Eleitor [Número]" input', () => {
    const wrapper = shallow(entries.getNumeroTituloEleitorInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create "Titulo de Eleitor [Emissão]" date picker', () => {
    const wrapper = mount(entries.getDataEmissaoTituloDatePicker());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('className')).toEqual(
      'ant-calendar-picker-input ant-input'
    );
  });

  it('should create "Titulo de Eleitor [Zona]" input', () => {
    const wrapper = shallow(entries.getNumeroZonaEleitoralInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('number');
  });

  it('should create "Titulo de Eleitor [Seção]" input', () => {
    const wrapper = shallow(entries.getNumeroSecaoEleitoralInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('number');
  });

  it('should create a bank name input', () => {
    const wrapper = shallow(entries.getNomeBancoInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank branch input', () => {
    const wrapper = shallow(entries.getNumeroAgenciaInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank account number input', () => {
    const wrapper = shallow(entries.getNumeroContaInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank account type selector', () => {
    const wrapper = mount(entries.getTipoContaSelector());
    const selectors = wrapper.find('.ant-select');
    const selector = selectors.first();

    expect(selectors.length).toBe(1);
    expect(selector.type()).toEqual('div');
  });
});
