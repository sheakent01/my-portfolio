export default function About() {
  return (
    <section
      className="min-h-screen text-white font-montserrat p-10 flex items-center justify-center bg-cover bg-center animate-fadeIn"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage: "url('/images/chipvector.jpg')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-slateblack bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-3xl text-center">
        
        {/* Profile Image */}
        <img
          src="/images/Image.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-electricblue object-cover transition duration-300 hover:shadow-[0_0_15px_#00bfff]"
        />

        {/* Title */}
        <h2 className="text-4xl font-bold text-electricblue mb-6">About Me</h2>

        {/* Paragraphs */}
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          With 20 years in cleanroom construction and semiconductor manufacturing, I understand the demands of high-precision, high-tech environments.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Now blending that expertise with modern coding and software development to create efficient, reliable digital tools for project management.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Passionate about building seamless projects that connect infrastructure with innovation.
        </p>
      </div>
    </section>
  );
}
