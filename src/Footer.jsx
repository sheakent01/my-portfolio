import { FaReact, FaVial, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 text-center text-gray-500 text-sm py-4 border-t border-gray-700 flex flex-col items-center gap-3">
      
      <div className="flex items-center gap-2">
        <span>© 2025 Coded by Shea — Built with</span>
        <FaReact className="text-electricblue w-5 h-5" title="React" />
<FaVial className="text-electricblue w-5 h-5" title="Vite" />


      </div>

      <div className="flex gap-4 mt-2">
        <a href="https://linkedin.com/in/shea-kent/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 text-electricblue hover:drop-shadow-[0_0_6px_#00bfff] transition" />
        </a>
        <a href="https://github.com/sheakent01" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 text-electricblue hover:drop-shadow-[0_0_6px_#00bfff] transition" />
        </a>
      </div>

    </footer>
  );
}


