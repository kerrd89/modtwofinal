import React from 'react';
const expect = require('chai').expect;

import { assert } from 'chai';

import scoreWord from '../lib/index';


describe('Application', () => {

  it('should have a function called showWord', () => {
    assert.isFunction(scoreWord, true);
  });

  it('should take a word as an argument', () => {
    assert.equal(scoreWord('hello', 1), 8)
  });

  it('should take a second arugment which is a multiplier', () => {
    assert.equal(scoreWord('hello', 2), 16)
  });

  it('should return 0 for an empty string or null', () => {
    assert.equal(scoreWord(''), 0);
    assert.equal(scoreWord(null), 0);
  });

  it('shoudl stri away any whitespace', () => {
    assert.equal(scoreWord(' hello ', 1), 8);
  });
});
