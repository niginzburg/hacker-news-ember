import { helper } from '@ember/component/helper';

export default helper(function isOutOfBoundsPage(params /*, named*/) {
  const model = params[0];
  const controller = params[1];
  const startingPostNum = controller.page * controller.postsPerPage + 1;

  return controller.page < 0 || startingPostNum > model.length;
});
