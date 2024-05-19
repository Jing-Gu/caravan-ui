# Caravan UI 2.0.3

[![npm](https://badgen.net/npm/v/@caravancoop/ui-kit)](https://www.npmjs.com/package/@caravancoop/ui-kit)
![license](https://badgen.net/static/license/MIT/green)
### 🚀 UPDATES:
- Fully integrated with Tailwind!
- Dark Theme Now Supported! 🌃
- Angular 17 Support Now Available! 🎉

### 📢 Important Note:

Please note that with the update to Angular 17, there might be some breaking changes or dependency conflicts from the previous versions. It is thus recommended to update your projects to Angular 17.

### Installation
```
npm install @caravancoop/ui-kit
```
👉 Full documentation [Getting started](https://caravancoop.github.io/caravan-ui-docs/getting-started)


### Install peer dependencies
Caravan UI uses Tailwind CSS, please install Tailwind CSS by following the [official setup](https://tailwindcss.com/docs/guides/angular).
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
Caravan UI uses the open source Feather icons. Please install `angular-feather` if any icon is needed in your project. Feel free to browse the [FeatherIcons](https://feathericons.com/) and check its [repo](https://github.com/michaelbazos/angular-feather) for the usage.
```
npm install angular-feather
```

### Theme configuration
- After the `tailwind.config.js` file is generated, add the paths to all of your template files in the content array. Remember to add `./node_modules/@caravancoop/ui-kit/fesm2022/*.mjs` as this will help Tailwind to find all the styles used in Caravan UI.
- If you wish to use the same Caravan palettes, copy all the colors variables below to your config file. You can also define your own theme by providing hex codes from `100` to `900`, but you will have to keep the exactly same formats and color attribute names such as `car-primary`.
- Caravan UI comes with the dark mode, simply define darkMode as class in the config.
```
module.exports = {
  content: [
    './node_modules/@caravancoop/ui-kit/fesm2022/*.mjs',
    './src/app/*.html'
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
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
      'car-light': '#fff'
    },
    extend: {},
  },
  plugins: [],
}
```
