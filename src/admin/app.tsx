import type { StrapiApp } from '@strapi/strapi/admin';
import logo_with_text from './extensions/LogoWithText.png';
import logo from './extensions/Logo.png';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    auth: {
      logo,
    },
    head: {
      favicon: logo,
    },
    menu: {
      logo,
    },
    theme: {
      // Force light mode
      mode: 'light',
      // overwrite light theme properties
      light: {
        colors: {
          // primary100: "#dfe8e2",
          // primary200: "#bfd0c5",
          // primary500: "#567663",
          // primary600: "#445d4f",
          // primary700: "#3a4e43",
          // danger700: "#b72b1a",
          primary50: "#f5f8f6",
          primary100: "#dfe8e2",
          primary200: "#bfd0c5", 
          primary300: "#97b1a1",
          primary400: "#71907d",
          primary500: "#567663",
          primary600: "#445d4f",
          primary700: "#3a4e43",
          primary800: "#303f37",
          primary900: "#2b3630",
          primary950: "#151e19",

          buttonPrimary500: "#567663",
          buttonPrimary600: "#445d4f",
          buttonPrimary700: "#3a4e43",
          buttonPrimary800: "#303f37",
          buttonPrimary900: "#2b3630",
          buttonPrimary950: "#151e19",

        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
