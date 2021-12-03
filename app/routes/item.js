import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;

  async getChild(id) {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json'
    );
    return await response.json();
  }

  // Retrieves the user (via username) from Hacker News API
  async model(params) {
    let concatLink =
      'https://hacker-news.firebaseio.com/v0/item/' + params.id + '.json';

    let parts = [];

    // Fetch the items from Hacker News API
    const response = await fetch(concatLink);
    const responseJson = await response.json();

    // If there are poll options
    if (responseJson.parts) {
      for (let i = 0; i < responseJson.parts.length; i++) {
        const item = await this.getChild(responseJson.parts[i]);
        parts.push(item);
      }

      responseJson.parts = parts;
    }
    
    return responseJson;
  }
}
