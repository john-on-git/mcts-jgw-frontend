import { app } from '../../main/app';

import { describe, test } from '@jest/globals';
import { expect } from 'chai';
import request from 'supertest';

// TODO: replace this sample test with proper route tests for your application
/* eslint-disable jest/expect-expect */
describe('Index page', () => {
  describe('on GET', () => {
    test('should return task index', async () => {
      await request(app)
        .get('/')
        .expect(res => expect(res.status).to.equal(200))
        .expect(res => expect(res.body).to.contain(''));
    });
  });
});

/* eslint-disable jest/expect-expect */
describe('Home page', () => {
  describe('on GET', () => {
    test('should return task details', async () => {
      await request(app)
        .get('/')
        .expect(res => expect(res.status).to.equal(200));
    });
  });
});