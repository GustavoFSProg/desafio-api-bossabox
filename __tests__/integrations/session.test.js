/* eslint-disable no-undef */
import dotenv from 'dotenv'
import request from 'supertest'
import app from '../../src/index'

dotenv.config()

describe('Create Tools', () => {
  it('should create tools model', async () => {
    const string = Math.random().toString(36).substring(2, 15)
    const response = await request(app)
      .post('/tools')
      .send({
        title: string,
        description: 'Desc',
        link: 'http://localhost',
        tags: ['target'],
      })
    expect(response.status).toBe(201)
  })
})

describe('find tools', () => {
  it('should find all registered tools', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})
