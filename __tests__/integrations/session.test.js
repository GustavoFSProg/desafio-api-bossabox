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
        tags: ['owner'],
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmNzNhZjIwNDk1NTg3MmRmNDc4MzQzNiIsIm5hbWUiOiJHdXN0YXZvIiwiZW1haWwiOiJndXN0YXZvc29obmUzOEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjgxNzQzOWM5YzY1MzI5ODhlYTlhMTMyZDExYjY2ZjNlIiwiX192IjowfSwiaWF0IjoxNjAxNTAxMTEzLCJleHAiOjE2MDE1ODc1MTN9.FPOqvLuo76ZanvRAZJJbxNhnaalYY7f7aDEKhT4Yzkw',
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
