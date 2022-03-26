import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('v2 addon tests', function (hooks) {
  setupRenderingTest(hooks);

  test('<Demo />', async function (assert) {
    await render(hbs`<Demo />`);

    assert.dom('out').containsText('false');

    await click('button');

    assert.dom('out').containsText('true');
  });

  test('<FlatDemo />', async function (assert) {
    await render(hbs`<FlatDemo />`);

    assert.dom('out').containsText('false');

    await click('button');

    assert.dom('out').containsText('true');
  });
});
