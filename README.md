# KoaJS 2, AngularJS 5+ Starter Project

A starter project for a web application powered by KoaJS 2.5 (server) and AngularJS 7 (client). Dockerized and designed for full separation of client and server codebases, served by Nginx. 

## Development Quick Start 

Clone the repository:

    $ git clone https://github.com/cacois/angular7-koa2-starter

Start the server:

    $ cd server
    $ yarn start

The server will start on port 3000. Then start the client:

    $ cd client
    $ yarn start

or for hot module reload:

    $ cd client
    $ yarn start:hmr

The client will start on port 4200, and will internally proxy all requests to /api to the server on port 3000 to avoid CORS errors. Note: this will not be a problem in production, since we will be serving both client and server through Nginx.

Develop!

## Design

I prefer to keep client and server code completely decoupled, even if both sides use Javascript. I also prefer a model where the client and server can be deployed independently. This leads us to the architecture of this project: client and server (REST API) as separate apps, each served by a webserver (Nginx). 

Note that this means the server app is _not_ serving the client app itself, nor is it serving static files. Nginx is responsible for both of these things directly. The server application has one and only one function: to serve the REST API that is the backend for the client. This clean separation makes independent development of frontend and backend logic easier, and is also more efficient in production, as a webserver will serve the the client and static files with better performance.

