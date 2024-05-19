# Caravan UI

[![npm](https://badgen.net/npm/v/@caravancoop/ui-kit)](https://www.npmjs.com/package/@caravancoop/ui-kit)
![license](https://badgen.net/static/license/MIT/green)

Following the concept of 'Atomic Design', Caravan UI provides a set of reusable UI components designed to facilitate the development of Angular web applications. Those components can be easily combined to create more complex and customized UI templates.

Caravan UI adopts standalone components and is made for Angular projects, thus the understanding of basic Angular concepts will make it easier to use this UI kit.
## Installation
```
npm install @caravancoop/ui-kit
```
👉 Full documentation [Getting started](https://caravancoop.github.io/caravan-ui-docs/getting-started)

## Contribute to library components
Following the multiple entrypoint structure, each component should have its own subentry point, therefore before generating a component, create its folder directly in caravan/ui-kit, for example button folder, then create a `src` folder inside to hold the standalone component.
```
ng g c button --flat --standalone
```
At the same level of `src` folder, create a `ng-package.json`, a `public-api.ts` and a `index.ts`.





