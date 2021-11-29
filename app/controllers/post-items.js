import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PostItemsController extends Controller {
  queryParams = ['page', 'postsPerPage', 'postType'];

  @tracked page = 0;
  @tracked postsPerPage = 10;
  @tracked postType = 'top'; // top, best, new, ask, show, job

  get page() {
    return this.page;
  }

  get postsPerPage() {
    return this.postsPerPage;
  }

  get postType() {
    return this.postType;
  }
}
