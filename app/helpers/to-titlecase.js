import { helper } from '@ember/component/helper';

export default helper(function toTitlecase(param /*, named*/) {
  const str = param[0];
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.substring(1, str.length);
});
