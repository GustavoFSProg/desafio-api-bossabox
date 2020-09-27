import dotenv from 'dotenv'
import request from 'supertest'
import app from '../../src/index'

dotenv.config()

/* eslint-disable no-undef */
describe('Authentication', () => {
  it('should authenticate with vallid credencials', async () => {
    const response = await request(app)
      .post('/tools')
      .send({ title: 'fderser' })
    expect(response.status).toBe(201)
  })
})
