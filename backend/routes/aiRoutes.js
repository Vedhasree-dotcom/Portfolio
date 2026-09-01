import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prompt = (message) => `
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

If someone asks something unrelated to Vedhasree, politely explain that you are her portfolio assistant and can answer questions about her professional background.

Visitor's question:
${message}
`;

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    let response;

    try {
      console.log("Trying Gemini 3.6 Flash...");

      response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt(message),
      });

    } catch (error) {
      console.error("Primary Gemini model error:", error.message);

      if (error.status === 503) {
        console.log("Gemini 3.6 Flash unavailable. Trying fallback model...");

        response = await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",
          contents: prompt(message),
        });

      } else {
        throw error;
      }
    }

    const reply = response?.text?.trim();

    if (!reply) {
      throw new Error("Gemini returned an empty response.");
    }

    res.status(200).json({
      reply,
    });

  } catch (error) {
    console.error("========== AI ERROR ==========");
    console.error("Message:", error.message);
    console.error("Status:", error.status);
    console.error("Name:", error.name);
    console.error("================================");

    res.status(500).json({
      reply: "Sorry, I'm having trouble responding right now. Please try again.",
    });
  }
});

export default router;

