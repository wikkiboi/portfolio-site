import { Resend } from "resend";
import { NextResponse } from "next/server";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.flatten },
        { status: 400 }
      );
    }

    const { name, email, message, subject } = result.data;

    // if (!recaptchaData) {
    //   return NextResponse.json(
    //     { error: "Failed reCAPTCHA verification" },
    //     { status: 400 }
    //   );
    // }

    const data = await resend.emails.send({
      from: `${name} <${process.env.RESEND_FROM!}>`,
      to: process.env.RESEND_TO!,
      subject: subject ?? `Contact Form Submission from ${name}`,
      replyTo: String(email),
      text: String(message),
    });

    console.log(data);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
