import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { Email } from '../../components/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing parameters' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'landing@patrickjusic.com',
      to: 'patrick.jusic@protonmail.com',
      subject: `New message from ${name} - ${email}`,
      react: Email({ name, email, message }) as React.ReactElement,
    });

    return new Response(
      JSON.stringify({ message: 'Message received' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Error sending email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
