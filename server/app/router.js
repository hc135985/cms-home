'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/create', controller.user.index.create);
  router.post('/user/login', controller.user.index.login);
};
