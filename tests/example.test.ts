import {describe, expect, test } from '@jest/globals';

const sum = (n1: number, n2: number): number => {
  return n1 + n2;
};

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


});
