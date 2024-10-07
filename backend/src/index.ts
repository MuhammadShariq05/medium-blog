import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.text('Sign up page.')
})

app.post('/api/v1/signin', (c) => {
  return c.text('Sign in page.')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Blog.')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Blog-1.')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Blog.')
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
