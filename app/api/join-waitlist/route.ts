// app/api/join-waitlist/route.ts
import { sanityClient } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Optional: Basic email validation (Sanity schema also validates)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists (optional, but good practice for waitlists)
    const existingLead = await sanityClient.fetch(
      `*[_type == "waitlistLead" && email == $email][0]`,
      { email }
    );

    if (existingLead) {
      return NextResponse.json(
        { message: "You are already on the waitlist!" },
        { status: 200 }
      );
    }

    // Create a new document in Sanity
    const doc = {
      _type: "waitlistLead",
      email: email,
      timestamp: new Date().toISOString(), // Store current time
    };

    const result = await sanityClient.create(doc);

    return NextResponse.json(
      { message: "Successfully joined the waitlist!", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving waitlist lead to Sanity:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
