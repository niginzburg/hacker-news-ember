import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostItemsController extends Controller {
  queryParams = ['page', 'postsPerPage', 'postType'];

  @tracked page = 0;
  postsPerPage = 10;
  postType = 'top';	// top, best, new, ask, show, job
  totalPosts;
  startIndexForList;

  get pageNum() {
    return page;
  }

  get postsPerPageNum() {
    return postsPerPage;
  }
}
