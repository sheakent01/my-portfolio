export default function Contact() {
  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat p-10 flex flex-col max-w-3xl mx-auto animate-fadeIn">
      
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-electricblue pb-2 w-max">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-8">
        Have a project, opportunity, or just want to connect? Reach out below.
      </p>

      {/* Contact Form */}
      <form className="bg-gunmetal p-6 rounded-lg shadow-lg space-y-6">
        
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
          <input
            id="name"
            type="text"
            aria-label="Name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none focus:ring-2 focus:ring-electricblue transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            id="email"
            type="email"
            aria-label="Email"
            placeholder="you@example.com"
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none focus:ring-2 focus:ring-electricblue transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            aria-label="Message"
            placeholder="Your message..."
            required
            className="w-full p-2 rounded bg-slateblack text-white border border-gray-600 focus:border-electricblue focus:outline-none focus:ring-2 focus:ring-electricblue transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-electricblue text-slateblack font-bold py-2 px-6 rounded hover:bg-blue-500 transition shadow-md"
        >
          Send Message
        </button>

      </form>

      {/* Direct Links */}
      <div className="mt-10 space-y-3 text-gray-300 text-center">
        <p>Email: <a href="mailto:sheakent@outlook.com" className="text-electricblue hover:underline" aria-label="Email Shea Kent">sheakent@outlook.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/shea-kent/" target="_blank" rel="noopener noreferrer" className="text-electricblue hover:underline" aria-label="LinkedIn Profile">linkedin.com/in/shea-kent/</a></p>
        <p>GitHub: <a href="https://github.com/sheakent01" target="_blank" rel="noopener noreferrer" className="text-electricblue hover:underline" aria-label="GitHub Profile">github.com/sheakent01</a></p>
      </div>

    </section>
  );
}

