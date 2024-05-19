/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/caravan/ui-kit/**/*.{html,ts}",
  "./projects/demo/src/app/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    fill: {
      current: 'currentColor',
    },
    colors: {
      'car-primary': {
        100: '#CAFDFA',
        300: '#62E9F5',
        500: '#00ACDE',
        700: '#00649F',
        900: '#00336A'
      },
      'car-secondary': {
        100: '#FFF8CC',
        300: '#FFE566',
        500: '#FFC900',
        700: '#B78800',
        900: '#936A00'
      },
      'car-success': {
        100: '#CAFCDB',
        300: '#60F1AE',
        500: '#00D199',
        700: '#00968B',
        900: '#005864'
      },
      'car-error': {
        100: '#FDCED4',
        300: '#F86E99',
        500: '#E8117F',
        700: '#A70879',
        900: '#6F0365'
      },
      'car-neutral': {
        50: '#F4F6F7',
        100: '#DAE1E7',
        300: '#B8C2CC',
        500: '#8795A1',
        700: '#606F7B',
        900: '#3D4852'
      },
      'car-dark': {
        100: '#22303C',
        200: '#192734',
        300: '#15202B'
      },
      'car-light': '#fff',
      'transparent': 'transparent'
    },
    extend: {},
  },
  plugins: [],
}

