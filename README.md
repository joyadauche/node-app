# USERS APP
## An express web app that consumes the node-server api

## Run App
- Ensure the [node rest api server](https://github.com/joyadauche/node-server) is running.
- `git clone https://github.com/joyadauche/node-app.git`
- `cd node-app`
- To run with [Docker](https://docs.docker.com/get-docker/):
    - `docker build -t user--express-node-client   .`
    - `docker run -it -p 3001:3001 user--express-node-client`
- To run without Docker:
    - `npm start`
    - visit `http://localhost:3001/`