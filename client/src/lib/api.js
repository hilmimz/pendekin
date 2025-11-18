const BASE_API_URL = import.meta.env.VITE_API_URL

async function handle(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json()
}

async function request(url, { method = "GET", payload } = {}) {
  const option = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (payload) {
    option.body = JSON.stringify(payload)
  }

  const res = await fetch(`${BASE_API_URL}${url}`, option)

  return handle(res)
}

export async function shortenURL(payload) {
  return request('/api/shortlink/create', {method: 'POST', payload})
}

export async function login(payload) {
  return request('/api/auth/login', {method: 'POST', payload})
}

export async function register(payload) {
  return request('/api/auth/register', {method: 'POST', payload})
}