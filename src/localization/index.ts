import { createI18n } from 'vue-i18n';
import { Locales } from './locales';

import en from './locales/en-US.json';
import es from './locales/es-ES.json';

const messages = {
  [Locales.EN]: en,
  [Locales.ES]: es,
};

const defaultLocale = Locales.EN;

type LocalesSchema = Locales.EN | Locales.ES;
type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], LocalesSchema>({
  locale: defaultLocale,
  messages: messages,
  fallbackWarn: false,
});

export default i18n;
