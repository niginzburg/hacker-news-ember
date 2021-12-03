import { helper } from '@ember/component/helper';

export default helper(function updateController(params /*, named*/) {
  let controller = params[0];
  let id = params[1];
  controller.id = id;
  return controller;
});
