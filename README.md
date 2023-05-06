# Web Application Searcher

This is a simple application searcher. With a simple service to serve the app and simmulate a proxy server and an API.

## Development

To start development follow these steps:

- Run ```npm i``` to install dependencies.
- Run ```npm start``` to run the dev server and the API mock.

To prepare production-ready artifact without docker:

- Run ```npm run build``` to prepare the dist folder.
- Run ```npm run server:up``` to run the proxy-server.

To prepare production-ready artifact with docker:

- Run ```sudo docker build .``` to create the image.
- Push the docker image to any docker repository and use it to deploy the service, taking into consideration that the exposed port is 5000 in the docker image.
