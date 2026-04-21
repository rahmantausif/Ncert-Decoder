import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_e2Jz31NQ_M5gcUTQyVkhgp3JR2KYf1Rwf";
const MY_GMAIL = process.env.MY_GMAIL || "alisirbook@gmail.com";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8792848293:AAGsftlZnYtOKouyDv_MZPcpWUn5Guneka0";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "1591043415";

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const contactText = `
New Contact Form Submission (Website)

Name: ${name}
Email: ${email}

Message:
${message}
`;

    // 1. Send Email via Resend
    const { error: resendError } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [MY_GMAIL],
      replyTo: email,
      subject: `New Inquiry from ${name} (Website Contact Form)`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (resendError) {
      console.error("Resend Error:", JSON.stringify(resendError));
    } else {
      console.log("Contact email sent successfully to", MY_GMAIL);
    }

    // 2. Send Telegram Notification
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: contactText,
      }),
    });

    if (!telegramRes.ok) {
      console.error("Telegram Error:", await telegramRes.text());
    } else {
      console.log("Contact Telegram notification sent successfully");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
