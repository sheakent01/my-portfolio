export default function Skills() {
  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat p-10 flex flex-col max-w-6xl mx-auto animate-fadeIn">
      
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-electricblue pb-2 w-max">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Real World Project Management Skills */}
        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_#00bfff] transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-electricblue">Project Management & Field Skills</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li>Project Management</li>
            <li>Logistics Management</li>
            <li>Construction Scheduling</li>
            <li>Material Procurement & Laydown</li>
            <li>Clean Room Protocols</li>
            <li>Team Leadership & Communication</li>
            <li>Safety & Compliance Oversight</li>
          </ul>
        </div>

        {/* Software & Coding Skills */}
        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_#00bfff] transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-electricblue">Software & Coding Skills</h3>
          
          <div className="flex flex-wrap items-center gap-6 justify-center">
            
            {[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", label: ".NET" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", label: "Blazor" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "SQL" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg", label: "Tailwind CSS" },  // Updated URL here
            ].map((tech, index) => (
              <div
                key={index}
                tabIndex={0}
                className="flex flex-col items-center p-2 rounded-lg transition duration-300
                  hover:scale-110 hover:shadow-[0_0_15px_#00bfff]
                  focus-visible:scale-110 focus-visible:shadow-[0_0_15px_#00bfff]"
                aria-label={`Logo of ${tech.label}`}
              >
                <img src={tech.src} className="w-12 h-12" alt={`Logo of ${tech.label}`} />
                <p className="text-sm mt-1">{tech.label}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
