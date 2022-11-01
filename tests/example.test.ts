import {describe, expect, test } from '@jest/globals';
import request from 'supertest'
import app from '../src/app'

const sum = (n1: number, n2: number): number => {
  return n1 + n2;
};

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


});

describe('test endpoind api',() => {

  test('/api', async () => {
    const resp = await request(app).get('/api').expect(200).expect('Content-Type',  /application\/json/)
    const data = resp.body
  
    expect(data).toEqual({ ok: true, msg: 'Todo esta bien, no se ha caído el backend' })
  })
})
