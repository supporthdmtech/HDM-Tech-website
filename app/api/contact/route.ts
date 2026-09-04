import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields" },
        { status: 400 }
      );
    }

    // In production, sync with CRM, HubSpot, Slack webhook, or send notification email
    console.log("HDM Tech Lead Captured:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      message: message || "General inquiry",
      source: source || "Website Lead Form",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
