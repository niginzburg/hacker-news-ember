import { helper } from '@ember/component/helper';

export default helper(function selectElement(params /*, named*/) {
  let id = params[0];
  let classQuery = params[1];
  let linkTo = document.getElementById(id);
  linkTo.classList.add(classQuery);
});
