import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // 1. Add Contact
      const audienceResponse = await resend.contacts.create({
        email: email,
        firstName: firstName,
        unsubscribed: false
      });

      if (audienceResponse.error) throw new Error(audienceResponse.error.message);

      // 2. Send Simple HTML Email (No React)
      const emailResponse = await resend.emails.send({
        from: 'Sensi Club <hello@sensi-properties.com>', 
        to: email,
        subject: 'Welcome to Sensi Club',
        html: `<p>Welcome to Sensi Club, ${firstName}!</p>`
      });

      if (emailResponse.error) throw new Error(emailResponse.error.message);

      return res.status(200).json({ success: true });
      
    } catch (err) {
      console.error("VERCEL ERROR:", err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
