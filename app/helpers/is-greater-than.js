import { helper } from '@ember/component/helper';

export default helper(function isGreaterThan(params /*, named*/) {
  return parseInt(params[0]) > parseInt(params[1]);
});
