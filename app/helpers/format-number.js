import { helper } from '@ember/component/helper';

export default helper(function formatNumber(param /*, named*/) {
  let num = param[0];
  if(!num) 
    return 0;
  let numInt = 0;
  let numDec = 0;
  let res = '';
  const mil = 1000000;
  const thou = 1000;
  if (num >= mil) res = Math.floor((num / mil) * 10) / 10 + 'm';
  else if (num >= thou) {
    res = Math.floor((num / thou) * 10) / 10 + 'k';
  } else res = num;
  return res;
});
