import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post(`${API_URL}/contact`, form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.message || "Could not send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's build something <span>great.</span></h2>
        <p>Have a project, opportunity or just want to connect? Send me a message.</p>

                <div className="contact-email">
                  <span>📧</span>
                  <a href="mailto:vedhasree1110@gmail.com" >
                    vedhasree1110@gmail.com
                  </a>
                  <a
                    className="email-btn"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vedhasree1110@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email Me ↗
                  </a>
                </div>
      </div>
     

      <form className="contact-form" onSubmit={submit}>
        <div className="form-row">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your message..." rows="7" required />
        <button className="btn primary" type="submit">Send Message ↗</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
