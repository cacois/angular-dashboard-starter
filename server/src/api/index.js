const Router = require('koa-router');
const todoRouter = require('./todos');

const router = new Router({ prefix: '/api' });
router.use(todoRouter.routes(), todoRouter.allowedMethods());

module.exports = router;
