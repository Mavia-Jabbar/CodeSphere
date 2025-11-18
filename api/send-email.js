// api/send-email.js   ← put this in root/api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, fullName, phone, email, course, certificate, techStack, bio } =
    req.body;

  try {
    await resend.emails.send({
      from: "Tech Orbit Form <onboarding@resend.dev>",
      to: process.env.YOUR_RECEIVING_EMAIL,
      replyTo: email,
      subject: `New Application – ${fullName || name}`,
      text: `
New student application!

• Name: ${name}
• Full Name: ${fullName}
• WhatsApp: ${phone}
• Email: ${email}
• Course: ${course}
• Wants Certificate: ${certificate ? "Yes" : "No"}
• Known Tech: ${techStack || "None yet"}
• Message: ${bio || "—"}

Reply directly to ${email} or WhatsApp ${phone}
      `.trim(),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send" });
  }
}
