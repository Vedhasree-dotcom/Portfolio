import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! 👋 I'm Vedhasree's AI Assistant. Ask me about her skills, projects, education or experience.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/ai`, {
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error("AI Assistant error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I'm having trouble responding right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={`ai-button ${open ? "ai-button-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open AI Assistant"
      >
        {open ? "×" : "✦"}
      </button>

      {open && (
        <div className="ai-chat">
          <div className="ai-header">
            <div>
              <strong>Vedhasree AI</strong>
              <span>Ask me anything</span>
            </div>

            <button
              className="ai-close"
              onClick={() => setOpen(false)}
              aria-label="Close AI Assistant"
            >
              ×
            </button>
          </div>

          <div className="ai-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${
                  message.role === "user"
                    ? "ai-user"
                    : "ai-response"
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}

            {loading && (
              <div className="ai-message ai-response ai-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <form className="ai-input-area" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Vedhasree..."
              disabled={loading}
            />

            <button type="submit" disabled={loading || !input.trim()}>
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}