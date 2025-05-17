import React, { useState } from 'react';
import { useMessages } from './MessageContext';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { addMessage } = useMessages();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }

    addMessage({ ...form, date: new Date().toLocaleString() });

    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-white py-20 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 max-w-lg mx-auto mb-8">
        Fill in your details and our team will get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded-md px-4 py-3"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border rounded-md px-4 py-3"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border rounded-md px-4 py-3"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <div className="mt-6 text-green-600 font-medium">
          ✅ Your message has been sent!
        </div>
      )}
    </section>
  );
};

export default Contact;
