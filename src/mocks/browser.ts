import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

export const handlers = [
  // Example of a mocked login endpoint
  http.post('/api/v1/login', async ({ request }) => {
    const info = (await request.json()) as { username: string; password: string }
    // Only for demo purpose, the only valid credientials are username: admin, password: admin
    if (info.username === 'admin' && info.password === 'admin') {
      return HttpResponse.json(
        {
          id: 1,
          name: 'admin',
          email: 'admin@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=2',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        { status: 200 },
      )
    } else {
      return HttpResponse.json({ message: 'Invalid username or password' }, { status: 401 })
    }
  }),
]

export const worker = setupWorker(...handlers)
