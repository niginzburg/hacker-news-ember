import EmberRouter from '@ember/routing/router';
import config from 'hacker-news-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('post-items', { path: '/post' });
  this.route('post-items', { path: '/' });
  this.route('login');
  this.route('user');
  this.route('item');
});
