import { app } from '../../main/app';

import { describe, test } from '@jest/globals';
import { expect } from 'chai';
import request from 'supertest';

/* eslint-disable jest/expect-expect */
describe('Index page', () => {
  describe('on GET', () => {
    test('should return task index', async () => {
      await request(app)
        .get('/')
        .expect(res => expect(res.status).to.equal(200))
        .expect(res => expect(res.body).to.deep.equal({}))
        .expect(res => expect(res.headers['content-type']).to.equal('text/html; charset=utf-8'));
    });
  });
});

describe('Create page', () => {
  describe('on GET', () => {
    test('should return task details', async () => {
      await request(app)
        .get('/create')
        .expect(res => expect(res.status).to.equal(200))
        .expect(res => expect(res.body).to.deep.equal({}))
        .expect(res => expect(res.headers['content-type']).to.equal('text/html; charset=utf-8'));
    });
  });
});

describe('Details page', () => {
  describe('on GET with valid id', () => {
    test('should return task creation form', async () => {
      await request(app)
        .get('/details?id=0')
        .expect(res => expect(res.status).to.equal(200))
        .expect(res => expect(res.body).to.deep.equal({}))
        .expect(res => expect(res.headers['content-type']).to.equal('text/html; charset=utf-8'));
    });
  });
  describe('on GET without id', () => {
    test('should return failure 404', async () => {
      await request(app)
        .get('/details')
        .expect(res => expect(res.status).to.equal(404))
        .expect(res => expect(res.body).to.deep.equal({}))
        .expect(res => expect(res.headers['content-type']).to.equal('text/html; charset=utf-8'));
    });
  });
});
