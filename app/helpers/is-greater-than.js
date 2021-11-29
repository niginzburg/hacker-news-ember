import { helper } from '@ember/component/helper';

export default helper(function isGreaterThan(params /*, named*/) {
  let v1 = parseInt(params[0]);
  let v2 = parseInt(params[1]);
  return v1 > v2;
});
