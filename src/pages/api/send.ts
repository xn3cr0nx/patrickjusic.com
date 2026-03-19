import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { Email } from '@/components/email';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return new Response('Missing parameters', { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'landing@patrickjusic.com',
      to: 'patrick.jusic@protonmail.com',
      subject: `New message from ${name} - ${email}`,
      react: Email({ name, email, message }) as React.ReactElement,
    });
    return new Response('Message received', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
};
