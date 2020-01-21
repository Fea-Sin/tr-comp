import React from 'react'; // eslint-disable-line
import Comp from '../src';

describe('tr-comp', () => {
  it('base test tr-comp', () => {
    expect(Comp).toBe('hello world');
  });
});
