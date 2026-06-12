const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(input = {}) {
  const data = {
    name: (input.name || '').trim(),
    email: (input.email || '').trim(),
    message: (input.message || '').trim(),
  }
  const errors = {}
  if (!data.name) errors.name = 'Please enter your name.'
  if (!data.email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (!data.message) errors.message = 'Please enter a message.'
  else if (data.message.length < 10) errors.message = 'Message must be at least 10 characters.'

  return { valid: Object.keys(errors).length === 0, errors, data }
}
