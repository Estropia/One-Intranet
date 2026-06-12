import { describe, it, expect } from 'vitest'
import { validateContact } from '../validateContact.js'

describe('validateContact', () => {
  const valid = { name: 'Ana Cruz', email: 'ana@example.com', message: 'I would like a solar quote for our barangay hall.' }

  it('passes for valid input', () => {
    const r = validateContact(valid)
    expect(r.valid).toBe(true)
    expect(r.errors).toEqual({})
  })

  it('requires a name', () => {
    const r = validateContact({ ...valid, name: '  ' })
    expect(r.valid).toBe(false)
    expect(r.errors.name).toBeTruthy()
  })

  it('rejects an invalid email', () => {
    const r = validateContact({ ...valid, email: 'not-an-email' })
    expect(r.valid).toBe(false)
    expect(r.errors.email).toBeTruthy()
  })

  it('requires a message of at least 10 characters', () => {
    const r = validateContact({ ...valid, message: 'too short' })
    expect(r.valid).toBe(false)
    expect(r.errors.message).toBeTruthy()
  })

  it('handles missing fields without throwing', () => {
    const r = validateContact({})
    expect(r.valid).toBe(false)
    expect(Object.keys(r.errors)).toEqual(expect.arrayContaining(['name', 'email', 'message']))
  })
})
