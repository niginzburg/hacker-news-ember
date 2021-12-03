import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class UserController extends Controller {
  queryParams = ['id'];

  @tracked id = null;

  get userId() {
    return this.id;
  }
}
