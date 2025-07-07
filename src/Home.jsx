export default function Home({ onNavigate }) {
  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat animate-fadeIn">
      
      {/* Hero Banner */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heroimage.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slateblack bg-opacity-70"></div>

        <div className="relative z-10 text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold text-electricblue mb-4">
            Shea Kent
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            20+ Years of High-Tech Construction | Semiconductor Expertise | Innovating web applications for high-tech construction and manufacturing
          </p>
          <button
            onClick={() => onNavigate("projects")}
            className="mt-6 bg-electricblue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition shadow-electricblue/50 hover:shadow-[0_0_20px_#00bfff]"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-electricblue mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-gray-300">
          Explore my experience in cleanroom construction, microchip manufacturing, and my journey into software development.
        </p>
      </div>
    </section>
  );
}