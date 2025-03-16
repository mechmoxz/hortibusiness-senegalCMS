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
      mode: 'light',
      // overwrite light theme properties
      light: {
        colors: {
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
      // Make dark mode identical to light mode
      dark: {
        colors: {
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

          neutral0: "#ffffff",
          neutral100: "#f6f6f9",
          neutral150: "#eaeaef",
          neutral200: "#dcdce4",
          neutral300: "#c0c0cf",
          neutral400: "#a5a5ba",
          neutral500: "#8e8ea9",
          neutral600: "#666687",
          neutral700: "#4a4a6a",
          neutral800: "#32324d",
          neutral900: "#212134",
          
          alternative100: "#f6ecfc",
          alternative200: "#e0c1f4",
          alternative500: "#ac73e6",
          alternative600: "#9736e8",
          alternative700: "#8312d1",
          
          secondary100: "#eaf5ff",
          secondary200: "#b8e1ff",
          secondary500: "#66b7f1",
          secondary600: "#0c75af",
          secondary700: "#006096",
          
          success100: "#eafbe7",
          success200: "#c6f0c2",
          success500: "#5cb176",
          success600: "#328048",
          success700: "#2f6846",
          
          warning100: "#fdf4dc",
          warning200: "#fae7b9",
          warning500: "#f29d41",
          warning600: "#d02b20",
          warning700: "#b72b1a",
          
          danger100: "#fcecea",
          danger200: "#f5c0b8",
          danger500: "#ee5e52",
          danger600: "#d02b20",
          danger700: "#b72b1a",
          
          background: "#ffffff",
          buttonNeutral0: "#ffffff",
          
          shadow: "rgba(33, 33, 52, 0.1)"
        }
      }
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
