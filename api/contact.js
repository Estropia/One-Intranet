import { Resend } from 'resend'
import { validateContact } from '../src/lib/validateContact.js'

export async function handleContact(body, { sendEmail }) {
  const { valid, errors, data } = validateContact(body)
  if (!valid) return { status: 400, json: { ok: false, errors } }

  try {
    await sendEmail({
      from: 'One Intranet Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'ad.oneintranet@gmail.com',
      replyTo: data.email,
      subject: `New website inquiry from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    })
    return { status: 200, json: { ok: true } }
  } catch (err) {
    return { status: 500, json: { ok: false, error: 'Failed to send message.' } }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }
  const resend = new Resend(process.env.RESEND_API_KEY)
  const sendEmail = (payload) => resend.emails.send(payload)
  const result = await handleContact(req.body, { sendEmail })
  res.status(result.status).json(result.json)
}
