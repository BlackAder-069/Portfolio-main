import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log("Contact form submission received with data:", { name, email, subject });
  console.log("Environment variables:", {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? "[REDACTED]" : "missing",
    EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT
  });
  
  try {
    // Create a transporter using OAuth2 for Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // For development purposes
      }
    });

    console.log("Transporter created, verifying connection...");
    
    // Verify connection configuration
    await transporter.verify();
    console.log("SMTP connection verified successfully");
    
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject || 'New message from website'}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Message sent successfully with ID:', info.messageId);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Failed to send email. Detailed error:', error);
    
    let errorMessage = "Failed to send email";
    let errorDetails = error.message;
    
    // More specific error information
    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed";
      errorDetails = "Please check your Gmail credentials and make sure you're using an App Password if 2FA is enabled";
    } else if (error.code === 'ESOCKET' || error.code === 'ECONNECTION') {
      errorMessage = "Connection error";
      errorDetails = "Check your network settings and firewall";
    }

    return res.status(500).json({ 
      error: errorMessage,
      details: errorDetails
    });
  }
}
