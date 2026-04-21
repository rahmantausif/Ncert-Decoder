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
    const { name, number, email, address, state, pincode, country } = data;

    if (!name || !number || !address) {
      return NextResponse.json({ error: "Missing important details" }, { status: 400 });
    }

    const orderDetails = `
New Pre-order for NCERT DECODER Book!

Name: ${name}
Phone Number: ${number}
Email: ${email}

Shipping Address:
${address}
${state}, ${pincode}
${country}
`;

    // 1. Send Email to the owner via Resend
    const { error: resendError } = await resend.emails.send({
      from: "Checkout System <onboarding@resend.dev>", // using onboarding domain if unverified
      to: [MY_GMAIL],
      subject: `New Book Order from ${name}`,
      replyTo: email,
      html: `
        <h2>New Pre-order for NCERT DECODER Book!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Shipping Address:</h3>
        <p>${address}<br/>${state}, ${pincode}<br/>${country}</p>
      `,
    });

    if (resendError) {
      console.error("Resend Error:", JSON.stringify(resendError));
    } else {
      console.log("Email sent successfully to", MY_GMAIL);
    }

    // 2. Send Telegram Notification
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: orderDetails,
      }),
    });

    if (!telegramRes.ok) {
      console.error("Telegram Error:", await telegramRes.text());
    }

    return NextResponse.json({ success: true, message: "Order processed successfully." });
  } catch (error) {
    console.error("Checkout POST Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
