// app/api/send-pdf-link/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend"; // Or your chosen email service SDK

// IMPORTANT: Store your API key securely in environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// The public URL to your PDF document
const PDF_URL =
  "https://docs.google.com/document/d/1-XBj4eqzcoPTTpFU9MkA_x1QWqLfhMpFN0eDRoHIl38/edit?usp=sharing";
const SENDER_EMAIL = "admin@send.reslotai.com"; // Your verified sender email

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // --- Optional: Save lead to your database/CRM here ---
    // Example: await db.collection('leads').add({ email, timestamp: new Date() });
    // This is where you'd integrate with your database or a CRM like Salesforce, Zoho CRM, etc.
    // For simplicity, we're skipping database integration in this basic example.
    // -----------------------------------------------------

    // Send the email with the PDF link
    const { data, error } = await resend.emails.send({
      from: `ReslotAI <${SENDER_EMAIL}>`,
      to: [email],
      subject: "Your Free Exclusive Guide from ReslotAI!",
      html: `
        <h1>Thank you for your interest!</h1>
        <p>Here is your exclusive guide:</p>
        <p><a href="${PDF_URL}">Download Your Free Guide Here</a></p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Kind regards,</p>
        <p>The Your Company Team</p>
      `,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
