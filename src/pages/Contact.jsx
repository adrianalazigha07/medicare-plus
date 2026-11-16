import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setSuccess("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone: +234 800 123 4567</p>
      <p>Email: info@medicareplus.com</p>
      <p>Address: 123 Health Avenue, Lagos</p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}
export default Contact;