import { helper } from '@ember/component/helper';

export default helper(function isLastPage(params /*, named*/) {
  const modelLength = params[0];
  const controller = params[1];

  const postsNum = controller.page * controller.postsPerPage;
  return (
    postsNum >= modelLength || postsNum + controller.postsPerPage >= modelLength
  );
});
