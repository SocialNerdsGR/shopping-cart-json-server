const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;
const key = process.env.API_KEY;

function isAuthorized(request) {
  const api_key = request.query.api_key;
  if (!api_key) {
    console.log("Missing API key");
    return false;
  }
  if (api_key !== key) {
    console.log("Wrong API key");
    return false;
  }

  return true;
}

server.use((req, res, next) => {
  if (!isAuthorized(req)) {
    res.sendStatus(401);
  }

  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
