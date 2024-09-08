import { NextRequest } from "next/server";
import { Resend } from "resend";
import { Email } from "@/components/email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method not allowed",
      { status: 405 }
    )
  }

  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return new Response("Missing parameters",
      { status: 400 }
    )
  }

  try {
    await resend.emails.send({
      from: "landing@patrickjusic.com",
      to: "patrick.jusic@protonmail.com",
      subject: `New message from ${name} - ${email}`,
      react: Email({ name, email, message }) as React.ReactElement,
    });
    return new Response("Message received",
      { status: 200 }
    )
  } catch (error) {
    console.error(error);
    return new Response("Error sending email",
      { status: 500 }
    )
  }
};
