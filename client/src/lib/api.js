const BASE_API_URL = import.meta.env.VITE_API_URL

async function handle(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json()
}

async function request(url, method, payload) {
  const res = await fetch(`${BASE_API_URL}${url}`, {
      method,
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )
  return res
}

export async function shortenURL(payload) {
  const res = await request('/api/shortlink/create', 'POST', payload)
  return handle(res)
}

export async function login(payload) {
  const res = await request('/api/auth/login', 'POST', payload)
  return handle(res)
}

export async function register(payload) {
  const res = await request('/api/auth/register', 'POST', payload)
  return handle(res)
}