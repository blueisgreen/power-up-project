const assert = require('assert');
const app = require('../../src/app');

describe('\'passages\' service', () => {
  it('registered the service', () => {
    const service = app.service('passages');

    assert.ok(service, 'Registered the service');
  });
});
