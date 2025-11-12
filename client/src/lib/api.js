const BASE_API_URL = import.meta.env.VITE_API_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkhpbG1pIE11emhhZmZhciIsImVtYWlsIjoiaGlsbWkxNUBnbWFpbC5jb20iLCJpYXQiOjE3NjI5Mzk2MzksImV4cCI6MTc2MzAyNjAzOX0.Vkqpgyv1O03xfXqecPoBrzEzl9hj28Pr6nhBczKEGyg'

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
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }
  )
  return handle(res)
}