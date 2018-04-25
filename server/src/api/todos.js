const Router = require('koa-router');

const router = new Router({ prefix: '/todos' });

router.get('/', async (ctx, next) => {
  ctx.body = [
    {'title': 'todo1'},
    {'title':'todo2'}
  ];

  await next();
});

module.exports = router;
