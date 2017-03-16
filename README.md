# FreezedryDemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2 and upgraded to Angular version 4.0.0-rc.3.

## What is freezedry
Freezedry is a tool to generate ('freezedry') server-side rendered pages at buildtime, so your server can be a dumb static server again.

> *Freeze-drying* — technically known as lyophilisation, lyophilization, or cryodesiccation—is a dehydration process typically used to preserve a perishable material or make the material more convenient for transport. 
## Running freezedry
Make a freezedryable build with

    bash-3.2$ npm run build:freezedry

and then in the dist-folder, run the generated freezedryer:

    bash-3.2$ cd dist/
    bash-3.2$ node freezedryer.js
    freezedrying ./index.html with url '/' into ./dry/index.html
    bash-3.2$

this outputs a new "freezedried" index.html in the `dist/dry` directory, which you can ship instead of the original vanilla index.html.

## How it works

Freezedry uses the power of Angular Universal to run the app at buildtime, and then renders the application DOM into the original `index.html` location, generating a new HTML file that runs without Angular loaded.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
