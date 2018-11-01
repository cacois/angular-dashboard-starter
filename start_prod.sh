#!/bin/bash
# This script builds both client and server in production mode, then
# serves both via nginx

# Pull dependencies for both client and server
(cd server && yarn)
(cd client && yarn)

# Builds both client and server in production mode
(cd server && yarn build:prod)
(cd client && yarn build:prod)
# Stand up daemonized docker containers to serve it all
docker-compose -f docker-compose.prod.yml up -d