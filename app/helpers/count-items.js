import { helper } from '@ember/component/helper';

export default helper(function countItems(param /*, named*/) {
  let element = param[0];
  if (!element) return 0;
  let total = 0;
  element.forEach((element) => {
    total++;
  });
  return total;
});
