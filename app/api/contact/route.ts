import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Message received." });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
