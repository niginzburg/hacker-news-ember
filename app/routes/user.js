import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service store;

  // Retrieves the user (via username) from Hacker News API
  async model(params) {
    let concatLink =
      'https://hacker-news.firebaseio.com/v0/user/' + params.id + '.json';

    // Fetch the items from Hacker News API
    const response = await fetch(concatLink);
    const responseJson = await response.json();

    return responseJson;
  }
}
