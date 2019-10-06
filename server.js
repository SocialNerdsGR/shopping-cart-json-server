const jsonServer = require("json-server");
const url = require("url");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;
const key = process.env.API_KEY;
const protectedRoutes = ["/products", "/categories"];

function isAuthorized(request) {
  const apiKey = request.query.api_key;
  if (!apiKey) {
    return false;
  }
  if (apiKey !== key) {
    return false;
  }

  return true;
}

function isProtected(request) {
  const path = url.parse(request.url).pathname;

  return protectedRoutes.includes(path);
}

server.use((req, res, next) => {
  if (!isProtected(req)) {
    return next();
  }

  if (!isAuthorized(req)) {
    return res.sendStatus(401);
  }

  return next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
