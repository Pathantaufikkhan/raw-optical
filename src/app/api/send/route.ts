import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      connectionTimeout: 2000,
    });

    const mailOptions = {
      from: `"Qwality Optical" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: "New Contact Message from Qwality Optical",
      html: `
        <h3>Contact Request</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ✅ Save to MongoDB
    const client = await clientPromise;
    const db = client.db(); // uses DB name from URI (recommended)
    const collection = db.collection("contacts");

    await collection.insertOne({
      email,
      message,
      date: new Date(),
    });

    // 🔔 Optional: send notification again (optional since already mailed above)
    const notify = {
      from: `"Qwality Optical Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 New notify message ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2 style="color: #007bff;">New Contact Request from Qwality Optical</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 12px; border-radius: 8px;">${message}</p>
          <hr />
          <p style="font-size: 12px; color: gray;">This message was submitted via your Qwality Optical website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(notify);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
