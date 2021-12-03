import { helper } from '@ember/component/helper';

export default helper(function formatDate(param /*, named*/) {
  const unixTime = param[0];
  const unixMilliseconds = unixTime * 1000;
  const dateObject = new Date(unixMilliseconds);
  return dateObject.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
});
