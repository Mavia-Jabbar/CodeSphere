import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, fullName, phone, email, course, certificate, techStack, bio } =
    req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // your inbox
      subject: `New CodeSphere Application from ${name}`,
      text: `
Name: ${name}
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Course: ${course}
Certificate: ${certificate ? "Yes" : "No"}
Tech Stack: ${techStack}
Bio: ${bio}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Email failed to send" });
  }
}
