import { helper } from '@ember/component/helper';

export default helper(function displayPageNum(param /*, named*/) {
  let currPage = param[0];
  return currPage + 1;
});
