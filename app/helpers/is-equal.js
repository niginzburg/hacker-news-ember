import { helper } from '@ember/component/helper';

export default helper(function isEqual(params /*, named*/) {
  let var1 = params[0];
  let var2 = params[1];
  return var1 === var2;
});
