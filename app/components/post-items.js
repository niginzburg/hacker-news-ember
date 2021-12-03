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

  @action
  goToFirstPage(controller) {
    controller.page = 0;
    return controller.page;
  }

  @action
  goToLastPage(model, controller) {
    let lastPageNum = 0;
    let leftOverPosts = 0;
    lastPageNum = Math.floor(model.length / controller.postsPerPage);
    leftOverPosts = model.length % controller.postsPerPage;
    if (leftOverPosts === 0) lastPageNum = lastPageNum - 1;
    controller.page = lastPageNum;
    return controller.page;
  }

  @action
  goToPage(model, controller, value) {
    if (value < 0) controller.page = 0;
    const lastPageNum = model.length / controller.postsPerPage;
    if (value > lastPageNum) controller.page = lastPageNum;
    return controller.page;
  }
}
