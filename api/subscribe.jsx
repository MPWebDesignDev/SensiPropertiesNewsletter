import { Resend } from 'resend';
import * as React from 'react';
// Updated path to match your folder structure:
import WelcomeEmail from '../react-email-starter/emails/SensiWelcomeEmail'; 

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. CORS Configuration
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Handle the Submission
  if (req.method === 'POST') {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Step A: Add to Resend Audience
      const audienceResponse = await resend.contacts.create({
        email: email,
        firstName: firstName,
        unsubscribed: false,
        audienceId: process.env.AUDIENCE_ID,
      });

      if (audienceResponse.error) {
        throw new Error(audienceResponse.error.message);
      }

      // Step B: Send the React Email
      // Note: The 'from' domain must be verified in your Resend account settings!
      const emailResponse = await resend.emails.send({
        from: 'Sensi Club <hello@sensiproperties.com>', 
        to: email,
        subject: 'Welcome to Sensi Club',
        react: <WelcomeEmail firstName={firstName} />
      });

      if (emailResponse.error) {
        throw new Error(emailResponse.error.message);
      }

      return res.status(200).json({ success: true });
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}