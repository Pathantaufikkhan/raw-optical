import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email, message, formType } = await req.json();

    if (!email || !message || !formType) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
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

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("contacts");

    // Save to DB
    await collection.insertOne({
      email,
      message,
      formType,
      date: new Date(),
    });

    let mailOptions;

    if (formType === "contact") {
      mailOptions = {
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
    } else if (formType === "notify") {
      mailOptions = {
        from: `"Qwality Optical Notify" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `📬 New Notify Message from ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 16px;">
            <h2 style="color: #007bff;">New Notify Request</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 12px; border-radius: 8px;">${message}</p>
            <hr />
            <p style="font-size: 12px; color: gray;">Submitted via Qwality Optical website notify form.</p>
          </div>
        `,
      };
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid form type." },
        { status: 400 }
      );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}

