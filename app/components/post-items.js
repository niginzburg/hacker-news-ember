import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostItemsComponent extends Component {
  @action
  goToNextPage(controller) {
    controller.page = controller.page + 1;
    return controller.page;
  }

  @action
  goToPrevPage(controller) {
    controller.page = controller.page - 1;
    return controller.page;
  }
}
