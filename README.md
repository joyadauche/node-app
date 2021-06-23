# USERS APP
## An express web app that consumes the node-server api

## Run App Locally
- Ensure the rest api server is running
- `npm start`
- Go to `http://localhost:3001/`

## Run App Using Docker:
- `docker build -t user--express-node-client   .`     
- `docker run -it -p 3001:3001 user--express-node-client`