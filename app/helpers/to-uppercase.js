import { helper } from '@ember/component/helper';

export default helper(function toUppercase(param /*, named*/) {
  let str = param[0];
  return str[0].toUpperCase() + str.substring(1, str.length);
});
