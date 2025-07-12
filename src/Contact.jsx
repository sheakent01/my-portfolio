import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/contact", formData);

      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat p-10 flex flex-col max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-electricblue pb-2 w-max">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gunmetal p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-electricblue text-slateblack font-bold py-2 px-4 rounded hover:bg-blue-500 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
      </form>
    </section>
  );
}
