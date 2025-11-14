const BASE_API_URL = import.meta.env.VITE_API_URL

async function handle(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json()
}

export async function shortenURL(payload) {
  const res = await fetch(`${BASE_API_URL}/api/shortlink/create`, {
      method: 'POST',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )
  return handle(res)
}

export async function login(payload) {
  const res = await fetch(`${BASE_API_URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  return handle(res)
}