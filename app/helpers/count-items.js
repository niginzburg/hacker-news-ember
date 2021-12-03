import { helper } from '@ember/component/helper';

export default helper(function countItems(param /*, named*/) {
  let element = param[0];
  return element?.length || 0;
});
