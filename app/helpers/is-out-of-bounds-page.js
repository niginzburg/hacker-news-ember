import { helper } from '@ember/component/helper';

export default helper(function isOutOfBoundsPage(param /*, named*/) {
  let model = param[0];
  let controller = param[1];
  let startingPostNum = (controller.page * controller.postsPerPage) + controller.postsPerPage;

  if(controller.page < 0 || startingPostNum > model.length)
    return true;
});
