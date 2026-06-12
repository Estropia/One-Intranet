import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ContactForm from '../ContactForm.jsx'

describe('ContactForm', () => {
  beforeEach(() => { vi.restoreAllMocks() })

  it('shows validation errors and does not call fetch when empty', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch')
    render(<MemoryRouter><ContactForm /></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(await screen.findByText(/enter your name/i)).toBeInTheDocument()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('submits valid data and shows success', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    })
    render(<MemoryRouter><ContactForm /></MemoryRouter>)
    await userEvent.type(screen.getByLabelText(/name/i), 'Ana Cruz')
    await userEvent.type(screen.getByLabelText(/email/i), 'ana@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'Please send a solar quote for our barangay hall.')
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: 'POST' })))
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument()
  })
})
