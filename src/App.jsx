import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slateblack text-white font-montserrat">

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slateblack bg-opacity-80 backdrop-blur-sm shadow-md z-50 flex justify-center space-x-4 p-4 flex-wrap">
        
        <button
          onClick={() => setPage("home")}
          className={`py-2 px-4 font-semibold rounded transition duration-300 ${
            page === "home"
              ? "bg-electricblue shadow-[0_0_15px_#00bfff]"
              : "bg-gunmetal hover:bg-gray-700 hover:shadow-[0_0_10px_#00bfff]"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setPage("about")}
          className={`py-2 px-4 font-semibold rounded transition duration-300 ${
            page === "about"
              ? "bg-electricblue shadow-[0_0_15px_#00bfff]"
              : "bg-gunmetal hover:bg-gray-700 hover:shadow-[0_0_10px_#00bfff]"
          }`}
        >
          About Me
        </button>

        <button
          onClick={() => setPage("skills")}
          className={`py-2 px-4 font-semibold rounded transition duration-300 ${
            page === "skills"
              ? "bg-electricblue shadow-[0_0_15px_#00bfff]"
              : "bg-gunmetal hover:bg-gray-700 hover:shadow-[0_0_10px_#00bfff]"
          }`}
        >
          My Skills
        </button>

        <button
          onClick={() => setPage("projects")}
          className={`py-2 px-4 font-semibold rounded transition duration-300 ${
            page === "projects"
              ? "bg-electricblue shadow-[0_0_15px_#00bfff]"
              : "bg-gunmetal hover:bg-gray-700 hover:shadow-[0_0_10px_#00bfff]"
          }`}
        >
          Projects
        </button>

        <button
          onClick={() => setPage("contact")}
          className={`py-2 px-4 font-semibold rounded transition duration-300 ${
            page === "contact"
              ? "bg-electricblue shadow-[0_0_15px_#00bfff]"
              : "bg-gunmetal hover:bg-gray-700 hover:shadow-[0_0_10px_#00bfff]"
          }`}
        >
          Contact
        </button>
      </nav>

      {/* Content with padding to avoid overlap */}
      <div className="pt-24 p-6">
        
        {page === "home" && <Home onNavigate={setPage} />}
        {page === "about" && <About />}
        {page === "skills" && <Skills />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}

        <Footer />

      </div>
    </div>
  );
}
