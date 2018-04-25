# Frontend

This is a starter project for an Angular 5 frontend. This project is designed to be completely decoupled from the application backend and its REST API. Both the frontend bundle and the backend API should be served by a webserver such as Nginx, allowing communication without CORS problems.

## Development server

To start a dev instance of the app, use:

    $ yarn start:hmr
  
Navigate to `http://localhost:4200/`. Hot module replacement will be enabled. 

## Build

To build the project, run: 

    $ yarn build
    
The build artifacts will be stored in the `dist/` directory. Use the `yarn build:prod` instead for a production build.

## Running unit tests and linting

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

    $ yarn test

To run a linter, use:

    $ yarn lint

## Running end-to-end tests

To execute [Cypress](https://www.cypress.io) e2e tests, first start an instance of the app, then run:

    $ yarn e2e

To open the Cypress UI and run individual e2e tests manually, use:

    $ yarn e2e:manual

