import express from "express";
import "dotenv/config";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER?.trim(),
    pass: process.env.BREVO_SMTP_KEY?.trim(),
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email.",
      });
    }
    
    await Message.create({
      name,
      email,
      message,
    });

    await transporter.sendMail({
      from: `"Vedhashree Portfolio" <vedhasree1110@gmail.com>`,
      to: "vedhasree1110@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(201).json({
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      message: "Could not send message. Please try again later.",
    });
  }
});

export default router;