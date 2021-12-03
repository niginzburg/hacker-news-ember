import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ItemController extends Controller {
  queryParams = ['itemType', 'id'];

  @tracked itemType = 'story';
  @tracked id = 0;
  itemTypes = ['story', 'comment', 'poll', 'pollopt', 'job'];

  get itemType() {
    return this.itemType;
  }

  get id() {
    return this.id;
  }
}
