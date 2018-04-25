# This script builds both client and server in production mode, then
# serves both via nginx
(cd server && yarn build:prod)
(cd client && yarn build:prod)
docker-compose up