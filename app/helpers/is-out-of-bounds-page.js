import { helper } from '@ember/component/helper';

export default helper(function isOutOfBoundsPage(params /*, named*/) {
  let model = params[0];
  let controller = params[1];
  let startingPostNum = controller.page * controller.postsPerPage + 1;

  if (controller.page < 0 || startingPostNum > model.length) return true;
});
