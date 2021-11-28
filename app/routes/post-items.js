import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostItemsRoute extends Route {
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  // Retrieve the item from Hacker News API with the provided id
  async getStory(id) {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json'
    );
    return await response.json();
  }

  // Retrieves the IDs of the posts from Hacker News API
  async model(params) {
    let startIndex = params.page * params.postsPerPage;

    // Container for the postItemsModel
    let postItemsModel = {
      posts: [],
      length: 0,
      startIndexForList: startIndex + 1,
    };

    this.startIndexForList = startIndex + 1;
    let concatLink =
      'https://hacker-news.firebaseio.com/v0/' +
      params.postType +
      'stories.json';

    // Fetch the items from Hacker News API
    const response = await fetch(concatLink);
    const responseJson = await response.json();
    this.length = responseJson.length;

    // Populate stories[]
    for (let i = startIndex; i < startIndex + params.postsPerPage; i++) {
      const item = await this.getStory(responseJson[i]);
      postItemsModel.posts.push(item);
    }

    return postItemsModel;
  }
}
