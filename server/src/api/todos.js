const Router = require('koa-router');

const router = new Router({ prefix: '/todos' });

router.get('/', async (ctx, next) => {
  ctx.body = [
    {'title': 'My First Todo'},
    {'title':'Another Todo'}
  ];

  await next();
});

module.exports = router;
