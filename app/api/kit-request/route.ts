// Install: npm install resend
// Add RESEND_API_KEY to .env.local — get key from resend.com/api-keys

import { NextRequest } from "next/server";

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
    return Response.json({ success: true });
  } catch (error) {
    console.error("Kit request error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
