import { helper } from '@ember/component/helper';

export default helper(function formatDate(param /*, named*/) {
  let unixTime = param[0];
  let unixMilliseconds = unixTime * 1000;
  const dateObject = new Date(unixMilliseconds);
  let result = dateObject.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return result;
});
