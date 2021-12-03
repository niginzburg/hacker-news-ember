import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-item-by', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PostItemBy />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <PostItemBy>
        template block text
      </PostItemBy>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
