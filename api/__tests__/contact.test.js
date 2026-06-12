import { describe, it, expect, vi } from 'vitest'
import { handleContact } from '../contact.js'

describe('handleContact', () => {
  it('returns 400 and does not send when invalid', async () => {
    const sendEmail = vi.fn()
    const res = await handleContact({ name: '', email: 'bad', message: 'x' }, { sendEmail })
    expect(res.status).toBe(400)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('sends email and returns 200 when valid', async () => {
    const sendEmail = vi.fn().mockResolvedValue({ id: 'abc' })
    const body = { name: 'Ana Cruz', email: 'ana@example.com', message: 'Please send a solar quote for our barangay hall.' }
    const res = await handleContact(body, { sendEmail })
    expect(res.status).toBe(200)
    expect(sendEmail).toHaveBeenCalledTimes(1)
    const arg = sendEmail.mock.calls[0][0]
    expect(arg.replyTo).toBe('ana@example.com')
    expect(arg.text).toContain('Ana Cruz')
  })

  it('returns 500 when sending throws', async () => {
    const sendEmail = vi.fn().mockRejectedValue(new Error('smtp down'))
    const body = { name: 'Ana Cruz', email: 'ana@example.com', message: 'Please send a solar quote for our barangay hall.' }
    const res = await handleContact(body, { sendEmail })
    expect(res.status).toBe(500)
  })
})
