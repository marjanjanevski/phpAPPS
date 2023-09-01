const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#00196C",
      pinkprimary: "#EE4C7D",
      info: "#A3B9B7",
      turquoise: "#4EDEE4",
      cobaltblue: "#2F5CFF",
      punchpink: "#F33C6E",
      lemonyellow: "#FFE588",
      ringyellow: "#F8BC5B",
      lightgray: "#F0F2F2",
      white: "#FFFFFF",
      black: "#000000",
      limegreen: "#4CEB77",
      gray: "#333333",
      darkgray: "#191B1D",
      transparent: "rgba(0,0,0,0)",
    },
    fontSize: {
      xs: ['12px', '1'],
      sm: ['14px', '1.5'],
      base: ['16px', '1.3'],
      lg: ['18px', '1.4'],
      xl: ['20px', '1.4'],
      '2xl': ['21px', '1.3'],
      '3xl': ['24px', '1.3'],
      '3.5xl': ['28px', '1.1'],
      '4xl': ['30px', '1'],
      '5xl': ['32px', '1'],
      '6xl': ['39px', '1.2'],
      '7xl': ['40px', '1.2'],
      '7.5xl': ['44px', '1.1'],
      '8xl': ['48px', '1.2'],
      '9xl': ['65px', '1.2'],
      '9.5xl': ['80px', '1.2'],
      '10xl': ['128px', '1'],
    },
    letterSpacing: {
      '075': '-0.75px',
      'n1': '-1px',
      '2': '2px',
    },
    extend: {
      fontFamily: {
        primary: ['Nunito'],
        secondary: ['NunitoBold'],
        tertiary: ['NunitoExtraBold'],
      },
      dropShadow:{
        'header-shadow': '0 3px 5px rgba(57, 63, 72, 0.3)'
      },
      transitionProperty: {
        'height-width': 'width, height',
      },
      height: {
        '108': '29rem',
        '128': '32.5rem',
        '180': '180px',
        '200': '200px',
        '215': '215px',
        '260': '260px',
        'home-hero-lg': '847px',
        'home-hero-md': '482px',
        'home-hero-sm': '207px'
      },
      spacing: {
        'n1': '-1px',
      },
      width: {
        '88': '22rem',
        '50vw': '50vw',
        '108': '27rem',
        '128': '32.5rem',
        'home-hero-lg': '827px',
        'home-hero-md': '471px',
        'home-hero-sm': '260px'
      },
      zIndex: {
        '100': '100',
        '110': '110',
        '120': '120',
      },
      rotate: {
        '30': '30deg',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#F33C6E',
              '&:hover': {
                'text-decoration': 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
