/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        // Display
        'display-01': ['56px', { lineHeight: '64px' }],
        'display-02': ['48px', { lineHeight: '56px' }],
        // Heading
        'heading-01': ['40px', { lineHeight: '48px' }],
        'heading-02': ['36px', { lineHeight: '44px' }],
        'heading-03': ['32px', { lineHeight: '40px' }],
        'heading-04': ['24px', { lineHeight: '32px' }],
        // Body
        'body-xl': ['20px', { lineHeight: '32px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'body-xs': ['12px', { lineHeight: '18px' }],
        // Button / Caption
        'button': ['16px', { lineHeight: '24px' }],
        'caption': ['14px', { lineHeight: '24px' }],
      },

      colors: {
        white: '#FFFFFF',
        gray: {
          50: '#F1F2F4',
          100: '#E4E5E8',
          200: '#C8CCD1',
          300: '#ADB2BA',
          400: '#9199A3',
          500: '#767F8C',
          600: '#5E6670',
          700: '#474C54',
          800: '#2F3338',
          900: '#18191C',
        },
        primary: {
          50: '#E7F0FA',
          100: '#CEE0F5',
          200: '#9DC1EB',
          300: '#6CA3E0',
          400: '#3B84D6',
          500: '#0A65CC',
          600: '#0851A3',
          700: '#063D7A',
          800: '#042852',
          900: '#021429',
        },
        success: {
          50: '#E7F6EA',
          100: '#CEECD5',
          200: '#9DD9AB',
          300: '#6DC680',
          400: '#3CB356',
          500: '#0BA02C',
          600: '#088023',
          700: '#07601A',
          800: '#044012',
          900: '#022009',
        },
        warning: {
          50: '#FFF6E5',
          100: '#FFECDC',
          200: '#FFD899',
          300: '#FFC066',
          400: '#FFB733',
          500: '#FFA500',
          600: '#CC8400',
          700: '#996300',
          800: '#664200',
          900: '#332100',
        },
        danger: {
          50: '#FCEEEE',
          100: '#FBDCDC',
          200: '#F3B9B9',
          300: '#EC9797',
          400: '#E67474',
          500: '#E05151',
          600: '#B34141',
          700: '#863131',
          800: '#5A2020',
          900: '#2D1010',
        },
      },

      boxShadow: {
        primary: '0px 12px 48px rgba(0, 44, 109, 0.1)',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          sm: '16px',
        },
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },

      spacing: {
        4.5: '18px',
        6: '24px',
      },
    },
  },
  plugins: [],
};
