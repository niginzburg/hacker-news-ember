import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service store;

  // Retrieves the user (via username) from Hacker News API
  async model(params) {
    const concatLink =
      'https://hacker-news.firebaseio.com/v0/user/' + params.id + '.json';

    // Fetch the items from Hacker News API
    const response = await fetch(concatLink);
    return await response.json();
  }
}
