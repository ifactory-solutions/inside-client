import i18next from 'i18next';
import { configI18n } from './config';
import en from './locales/en';
import pt from './locales/pt';

describe('Test i18next translate', () => {
  it('translate i18n PT', () => {
    configI18n.lng = 'pt';
    i18next.init(configI18n);
    expect(i18next.t('HOME')).toEqual(pt.HOME);
  });

  it('translate i18n EN', () => {
    configI18n.lng = 'en';
    i18next.init(configI18n);
    expect(i18next.t('HOME')).toEqual(en.HOME);
  });
});

