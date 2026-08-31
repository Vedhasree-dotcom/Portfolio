import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: `
You are Vedhasree's personal portfolio AI assistant.

About Vedhasree:
- BCA graduate from Calicut University
- MERN Stack Developer
- AI/ML enthusiast
- Completed MERN Stack internship at Techolas Technologies
- Completed AI/ML Developer course from ASAP Kerala
- Skills: React, JavaScript, Node.js, Express.js, MongoDB, MySQL, Python, NumPy, Pandas, Scikit-learn
- Projects include CraftMate, Ladies Salon Booking, and Employee Attrition Prediction.

Answer questions about Vedhasree, her skills, projects, education, experience and portfolio.

Be friendly, professional and concise.
If someone asks something unrelated to Vedhasree, politely say that you are her portfolio assistant and can answer questions about her professional background.

Visitor's question:
${message}
      `,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("AI Assistant error:", error);

    res.status(500).json({
      reply: "Sorry, I'm having trouble responding right now.",
    });
  }
});

export default router;