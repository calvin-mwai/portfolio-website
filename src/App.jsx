import React, { useState } from 'react';
import { Menu, X, ChevronRight, Download, Mail, Linkedin, Github, Wrench, Code, Layers } from 'lucide-react';

const CADPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cargo Elevator Cabin - Modular Design",
      category: "mechanical",
      software: ["Inventor", "AutoCAD"],
      description: "Structural design of a cargo elevator cabin using a modular steel frame, optimized for on-site assembly, manufacturability and structural rigidity.",
      image: "/images/Cargo Elevator Cabin/Cargo Elevator Cabin.jpg",
      tags: ["Structural Design", "Assembly", "Manufacturing"],
      details: {
        problem: "Design a rigid cargo elevator cabin capable of being transported in sections and assembled on site, while maintaining structural integrity and dimensional stability under operational loads",
        solution: "Developed a modular, bolted steel frame and panel system that allows sectional fabrication, simplified transport, and controlled on-site assembly without compromising stiffness.",
        specifications: ["Internal cabin dimensions: 2450 × 2350 × 2100 mm", "Primary structure: Welded and bolted structural steel frame", "Panelized construction for ease of fabrication and replacement", "Bolted joints to enable modular transport and on-site assembly"],
      drawings: {
          assembly: "images/Cargo Elevator Cabin/Assembly.jpg",
          detail: "images/Cargo Elevator Cabin/Details.jpg"
        }  
      }
    },
    {
      id: 2,
      title: "WAAM Machine - Cartesian Additive Manufacturing System",
      category: "manufacturing",
      software: ["Inventor", "AutoCAD"],
      description: "Design of a Cartesian Wire Arc Additive Manufacturing (WAAM) system, focusing on modularity and integration with welding and motion components.",
      image: "images/WAAM Machine/WAAM Machine.jpg",
      tags: ["Additive Manufacturing", "Machine Design", "Robotics", "Welding"],
      details: {
        problem: "Design and develop a scalable Cartesian WAAM system capable of supporting welding loads, motion systems and thermal effects during additive manufacturing",
        solution: "Developed a modular steel frame with linear motion integration points, allowing precise tool positioning, structural stability and ease of assembly and future expansion",
        specifications: ["Machine architecture: Cartesian (X-Y-Z)", "Primary structure: Bolted structural steel frame", "Designed to integrate linear rails, drive systems, and welding torch", "Designed to integrate linear rails, drive systems, and welding torch"],
      drawings: {
          assembly: "images/WAAM Machine/Assembly.jpg",
          detail: "images/WAAM Machine/Details.jpg"
        }    
      }
    },
    {
      id: 3,
      title: "Gondola Shelving System - Modular Structural Design",
      category: "mechanical",
      software: ["Inventor", "AutoCAD"],
      description: "Design of a modular gondola shelving system for retail and storage applications optimized for structural stability, ease of assembly and manufacturing efficiency.",
      image: "images/Gondola/Full gondola assembly.png",
      tags: ["Structural Design", "Sheet Metal", "Modular Systems", "DFM"],
      details: {
        problem: "Design a modular shelving system capable of supporting distributed product loads while allowing rapid assembly, reconfiguration, and cost-effective manufacturing",
        solution: "Developed a panelized, modular shelving structure using sheet metal components and standardized connections to enable flexible configurations and efficient production",
        specifications: ["System type: Modular gondola shelving", "Primary material: Sheet metal steel components", "Bolt-on / Hook-on assembly for configurability and transport", "Designed for distributed static loading"],
      drawings: {
        assembly: "/images/Gondola/Assembly.jpg",
        detail: "/images/Gondola/Details.jpg"
      }
    }
    },
    {
      id: 4,
      title: "Conveyor Weighing Machine - Batch Scale System",
      category: "mechanical",
      software: ["Inventor", "AutoCAD"],
      description: "Mechanical design of a batch weighing machine for continuous material measurement focusing on structural stability, accuracy and integration with load cell systems.",
      image: "images/Conveyor Weighing/Conveyor Weighing.jpg",
      tags: ["Material Handling", "Machine Design", "Weighing Systems", "Automation"],
      details: {
        problem: "Design a batch weighing system capable of accurately measuring material mass during continuous transport while minimizing vibration, misalignment and measurement error.",
    solution: "Developed a structurally isolated weighing section with integrated load cell mounting, isolated control and rigid frame design to ensure repeatable and stable measurements.",
    specifications: [
      "System type: Conveyor batch weighing machine",
      "Weighing method: Load cell-based measurement",
      "Rigid structural frame to minimize vibration effects",
      "Designed for continuous operation and easy calibration"
    ],
    drawings: {
      assembly: "/images/Conveyor Weighing/Assembly.jpg",
      detail: "/images/Conveyor Weighing/Details.jpg"
      }
    }
    },
    {
      id: 5,
      title: "CNC Router Machine - Gantry System",
      category: "manufacturing",
      software: ["Inventor", "AutoCAD", "Fusion360"],
      description: "Structural and mechanical design of a CNC Router Machine focusing on gantry rigidity, motion accuracy and manufacturability for wood panel processing.",
      image: "images/Router/Router.jpg",
      tags: ["CNC Machines", "Machine Design", "Fabrication"],
      details: {
        problem: "Design a rigid CNC Router Machine structure capable of maintaining positional accuracy under dynamic motion during cutting operations.",
        solution: "Developed a gantry-style machine frame with reinforced structural members, precision linear motion interfaces and provisions for router motor and cable management.",
        specifications: ["Machine architecture: Gantry-style CNC system", "Primary structure: Welded steel frame", "Designed for integration with linear rails and drive systems", "Optimized for sheet cutting operations"],
    drawings: {
      assembly: "/images/Router/Assembly.jpg",
      detail: "/images/Router/Details.jpg"
      }
    }
    },
    {
      id: 6,
      title: "Decorative laser-Cut Panels - Architectural Metalwork",
      category: "mechanical",
      software: ["AutoCAD"],
      description: "Design of decorative laser-cut metal panels for doors, windows, and balcony applications.",
      image: "/images/Panels/Panels.jpg",
      tags: ["Laser Cutting", "Architectural Metalwork", "Sheet Metal", "DFM"],
      details: {
        problem: "Design decorative metal panels that provide visual appeal while maintaining sufficient stiffness, durability, and compatibility with laser cutting and installation requirements.",
      solution: "Developed parametric panel designs with controlled cut patterns and optimized material thickness.",
    specifications: ["Applications: Doors, windows, and balcony infill panels", "Manufacturing process: CNC laser cutting", "Material options: Mild steel or stainless steel sheet"],
    drawings: {
      assembly: "/images/Panels/Assembly.jpg",
      detail: "/images/Panels/Details.jpg"
      }
    }
  }
  ];

  const skills = [
    { name: "Autodesk Inventor", level: "Advanced", icon: Wrench },
    { name: "AutoCAD", level: "Advanced", icon: Layers },
    { name: "Fusion 360", level: "Advanced", icon: Code },
    { name: "GD&T (ASME Y14.5)", level: "Proficient", icon: Wrench },
    { name: "Sheet Metal Design", level: "Advanced", icon: Layers },
    { name: "FEA Analysis", level: "Intermediate", icon: Code },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-gray py-6 px-6 shadow-md">
          <div className="max-w-6xl mx-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span className="font-medium">Back to Projects</span>
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full max-h-[500px] object-contain bg-gray-100"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                <div className="flex gap-3 flex-wrap">
                  {project.software.map(soft => (
                    <span key={soft} className="px-4 py-1.5 bg-white/90 text-slate-800 rounded-lg text-sm font-medium">
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex gap-2 flex-wrap mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">{project.description}</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Problem</h3>
                  <p className="text-gray-700 leading-relaxed">{project.details.problem}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Key Specifications</h3>
                  <ul className="text-gray-700 space-y-2">
                    {project.details.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-sm leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-10">
                <h3 className="font-bold text-slate-800 text-2xl mb-6">Technical Drawings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Assembly Drawing */}
                  <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                    {project.details.drawings?.assembly ? (
                      <img
                        src={project.details.drawings.assembly}
                        alt="Assembly Drawing"
                        className="w-full h-72 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="h-72 flex items-center justify-center text-gray-400 font-medium">
                        Assembly Drawing
                      </div>
                    )}
                  </div>

                  {/* Detail Drawing */}
                  <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                    {project.details.drawings?.detail ? (
                      <img
                        src={project.details.drawings.detail}
                        alt="Detail Drawing"
                        className="w-full h-72 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="h-72 flex items-center justify-center text-gray-400 font-medium">
                        Detail Drawing
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                TL
              </div>
              <div>
                <div className="text-lg font-bold text-slate-800">Tavor Leslie</div>
                <div className="text-xs text-gray-500">CAD Specialist</div>
              </div>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-gray-700 hover:text-slate-800 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-200 pt-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="block w-full text-left text-gray-700 hover:text-slate-800 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Mechatronic Engineer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
            Tavor Leslie
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            CAD Specialist & Mechanical Designer
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Mechanical Design • Industrial Automation • Advanced Manufacturing
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a Mechatronic Engineer specializing in CAD design for mechanical systems, industrial automation, and advanced manufacturing. With expertise in Autodesk Inventor, AutoCAD, and Fusion 360, I deliver precision-engineered solutions from concept through fabrication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My work spans robotic welding systems, additive manufacturing equipment, custom fabrication tooling, and automated production line components. I focus on Design for Manufacturing (DFM) principles to ensure designs are both innovative and production-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional CAD work showcasing mechanical design and manufacturing expertise
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-14 flex-wrap">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'mechanical', label: 'Mechanical Design' },
              { id: 'manufacturing', label: 'Manufacturing' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-gray-200' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.software.map(soft => (
                      <span key={soft} className="text-xs px-3 py-1.5 bg-white/95 backdrop-blur-sm text-slate-800 rounded-lg font-medium shadow-sm">
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>View Details</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(skill => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{skill.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{skill.level}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* <div className="mt-14 text-center">
            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3">
              <Download size={20} />
              Download Full Portfolio (PDF)
            </button>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in discussing CAD projects, mechanical design work, or collaboration opportunities?
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <a href="mailto:tavorleslie@gmail.com" className="flex items-center gap-3 text-slate-800 hover:text-blue-600 transition-colors text-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <span className="font-medium">tavorleslie@gmail.com</span>
              </a>
            </div>
            
            {/* <div className="flex justify-center gap-4">
              <a href="#" className="w-14 h-14 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-slate-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-slate-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <Github size={24} />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 font-medium">&copy; 2026 Tavor Leslie. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Mechatronic Engineer | CAD Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default CADPortfolio;