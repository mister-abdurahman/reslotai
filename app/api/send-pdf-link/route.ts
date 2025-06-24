// app/api/send-pdf-link/route.ts

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail"; // Import SendGrid library

// Set your SendGrid API Key from environment variables
// IMPORTANT: Store this securely, NOT directly in code!
sgMail.setApiKey(process.env.SENDGRID_API_KEY || ""); // Ensure fallback for TS

export async function POST(request: Request) {
  try {
    const { recipientEmail, pdfLink } = await request.json();

    if (!recipientEmail || !pdfLink) {
      return NextResponse.json(
        { message: "Email and PDF link are required." },
        { status: 400 }
      );
    }

    const msg = {
      to: recipientEmail, // User's email
      from: "your_verified_sender_email@yourdomain.com", // Your SendGrid verified sender email
      subject: "Your Requested Brochure from [Your Client's Business Name]",
      html: `
        <p>Hello,</p>
        <p>Thank you for your interest in our services! Here is the link to download our brochure:</p>
        <p><a href="${pdfLink}">Download Your Brochure Here</a></p>
        <p>We look forward to helping your business re-engage lost leads.</p>
        <p>Best regards,<br/>The Team at [Your Client's Business Name]</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json(
      { message: "PDF link sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "SendGrid email sending error:",
      error.response ? error.response.body : error
    );
    return NextResponse.json(
      {
        message:
          error.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
