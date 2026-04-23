// Install: npm install resend
// Add RESEND_API_KEY to .env.local — get key from resend.com/api-keys

import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      schoolName,
      role,
      schoolType,
      cityState,
      kitsRequested,
      usagePlan,
      hearAboutUs,
    } = body;

    if (!fullName || !email || !schoolName || !role || !schoolType || !cityState || !kitsRequested || !usagePlan) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Tumor Tactics <onboarding@resend.dev>",
      to: "tumortactics@gmail.com",
      subject: `New Free Kit Request — ${schoolName}`,
      html: `
        <h2>New Free Kit Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School/Org:</strong> ${schoolName}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>School Type:</strong> ${schoolType}</p>
        <p><strong>City/State:</strong> ${cityState}</p>
        <p><strong>Kits Requested:</strong> ${kitsRequested}</p>
        <p><strong>Usage Plan:</strong> ${usagePlan}</p>
        <p><strong>How they heard about us:</strong> ${hearAboutUs || "Not specified"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Kit request error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
