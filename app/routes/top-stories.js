// Code referenced from: https://guides.emberjs.com/release/routing/specifying-a-routes-model/#toc_fetch-example
import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TopStoriesRoute extends Route {
  // Retrieve the item from Hacker News API with the provided id
  async getStory(id) {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json'
    );
    return await response.json();
  }

  // Retrieves the IDs of the top stories from Hacker News API
  async model() {
    // Container for the top stories
    let storiesModel = {
      stories: [],
    };

    // Fetch the top stories from Hacker News API
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const topStoriesResponse = await response.json();

    // Populate stories[] (Fetches all top stories)
    // for (let i = 0; i < topStoriesResponse.length; i++) {

    // Populate first 30 stories (Fetches some top stories)
    for (let i = 0; i < 30; i++) {
      const story = await this.getStory(topStoriesResponse[i]);
      storiesModel.stories.push(story);
    }

    return storiesModel;
  }
}
