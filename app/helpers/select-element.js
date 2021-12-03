import { helper } from '@ember/component/helper';

export default helper(function selectElement(params /*, named*/) {
  const id = params[0];
  const classQuery = params[1];
  const linkTo = document.getElementById(id);
  linkTo.classList.add(classQuery);
});
