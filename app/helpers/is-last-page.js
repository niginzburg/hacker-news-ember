import { helper } from '@ember/component/helper';

export default helper(function isLastPage(params /*, named*/) {
  let modelLength = params[0];
  let controller = params[1];

  let postsNum = controller.page * controller.postsPerPage;
  return (
    postsNum >= modelLength || postsNum + controller.postsPerPage >= modelLength
  );
});
