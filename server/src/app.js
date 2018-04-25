const logger = require('koa-logger');
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

const apiRouter = require('./api');

// middleware
app.use(logger());
app.use(koaBody());

// define routes from api module
app.use(apiRouter.routes());

if (!module.parent) app.listen(3000);
