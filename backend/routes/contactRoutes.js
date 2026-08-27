import express from "express";
import "dotenv/config";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER?.trim(),
    pass: process.env.EMAIL_PASS?.trim(),
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

    // Save message to MongoDB
    await Message.create({
      name,
      email,
      message,
    });

    // Send email notification
    await transporter.sendMail({
      from: `"Vedashree Portfolio" <${process.env.EMAIL_USER.trim()}>`,
      to: process.env.EMAIL_USER.trim(),
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
