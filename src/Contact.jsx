import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/contact", formData);
      if (res.data.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat p-10 flex flex-col max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-electricblue pb-2 w-max">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="bg-gunmetal p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
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
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-electricblue text-slateblack font-bold py-2 px-4 rounded hover:bg-blue-500 transition"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
      </form>

      {/* Contact Info */}
      <div className="mt-8 space-y-2 text-gray-300">
        <p>
          Email:{" "}
          <a
            href="mailto:sheakent@outlook.com"
            className="text-electricblue hover:underline"
          >
            sheakent@outlook.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/shea-kent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electricblue hover:underline"
          >
            linkedin.com/in/shea-kent/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sheakent01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electricblue hover:underline"
          >
            github.com/sheakent01
          </a>
        </p>
      </div>
    </section>
  );
}
