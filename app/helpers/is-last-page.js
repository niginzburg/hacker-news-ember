import { helper } from '@ember/component/helper';

export default helper(function isLastPage(param /*, named*/) {
  let modelLength = param[0];
  let controller = param[1];

  let postsNum = controller.page * controller.postsPerPage;
  return (
    postsNum >= modelLength || postsNum + controller.postsPerPage >= modelLength
  );
});
