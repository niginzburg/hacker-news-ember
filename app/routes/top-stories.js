// Code referenced from: https://guides.emberjs.com/release/routing/specifying-a-routes-model/#toc_fetch-example
import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TopStoriesRoute extends Route {

	// Retrieve the item from Hacker News API with the provided id
	async getStory(id) {
		const response = await fetch('https://hacker-news.firebaseio.com/v0/item/'+id+'.json');
		return await response.json();
	};

	// Retrieves the IDs of the top stories from Hacker News API
	async model() {

		// Container for the top stories 
		let storiesModel = {
			stories:[]
		};

		// Fetch the top stories from Hacker News API
		const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
		const topStoriesResponse = await response.json();

		// TODO(niginzburg): Make the loop dynamic (based on page number or )
		for(let i = 0; i < 10; i++){
			const story = await this.getStory(topStoriesResponse[i]);
			storiesModel.stories.push(story);
		}

		return storiesModel;
	};
}
