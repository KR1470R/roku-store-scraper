'use strict';

import { assert } from 'chai';
import store from '../index.js';

const validApp = {
  appId: '53d2dd2504402eec1bc49ad74daf2e90:a13d7afc25f9a0a2db48abf783f2a46e',
  title: 'TuneIn',
};
const invalidApp = {
  appId: '1299192dki1id9o0akodklmsa',
  title: 'Invalid App',
};

describe('App method', () => {
  it('should fetch valid application data', () => {
    return store.app({appId: validApp.appId})
      .then((app) => {
        assert.equal(app.id, validApp.appId);
        assert.include(app.title, validApp.title);
        assert.isAtLeast(app.genres.length, 1);
      });
  });

  it('should return null for invalid app', () => {
    return store.app({id: invalidApp})
      .then((app) => {
        assert.isNull(app);
      });
  });
});
