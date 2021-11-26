import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function displayPostsLoop([startIndex, endIndex, incr, param, ...rest]) {
  //Check for negative inputs
  incr = Math.abs(incr);
  startIndex = Math.abs(startIndex);
  endIndex = Math.abs(endIndex);

  // Swap startIndex and endIndex if the values are misplaced
  if (startIndex > endIndex) {
    let temp = startIndex;
    startIndex = endIndex;
    endIndex = temp;
  }

  let accum = '';
  accum = '<ol start="' + (startIndex + 1) + '">';
  for (let i = startIndex; i < endIndex; i += incr) {
    accum += "<li id='" + param[i].id + "''>" + param[i].title + '</li>';
  }
  accum += '</ul>';

  return htmlSafe(`${accum}`);
})
