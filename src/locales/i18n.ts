import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// parents
import { resources } from './resources'

void i18next
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18next
