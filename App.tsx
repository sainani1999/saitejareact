import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Coffee,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Terminal,
  Send
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack Developer specializing in enterprise Java solutions";

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Enterprise Resource Planning System",
      description: "Developed a comprehensive ERP system using Spring Boot and React, handling complex business logic and data management for large-scale organizations.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      role: "Lead Developer"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented a scalable microservices architecture using Spring Cloud, handling service discovery, load balancing, and fault tolerance.",
      tech: ["Java", "Spring Cloud", "Kubernetes", "MongoDB", "RabbitMQ"],
      role: "Backend Developer"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a real-time analytics platform processing millions of events daily using Apache Kafka and Spring WebFlux.",
      tech: ["Java", "Spring WebFlux", "Kafka", "Elasticsearch", "Redis"],
      role: "Full Stack Developer"
    }
  ];

  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring Cloud", "Hibernate", "JUnit"] },
    { category: "Frontend", items: ["React", "TypeScript", "HTML/CSS", "Redux", "Jest"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "AWS", "Git"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div id="about" className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute top-0 right-0 p-6 flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
              alt="Sai Teja Suryadevara" 
              className="rounded-full w-32 h-32 mx-auto border-4 border-blue-400 shadow-lg"
            />
          </div>
          <h2 className="text-2xl text-blue-400 mb-4">Sai Teja Suryadevara</h2>
          <div className="flex items-center justify-center mb-4">
            <Coffee className="text-blue-400 mr-2" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold">Java Developer</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4 h-20">
            {displayedText}
            <span className={`inline-block ${isTyping ? 'animate-pulse' : ''}`}>|</span>
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button onClick={() => scrollToSection('about')} 
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeSection === 'about' 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-transparent border border-blue-500 hover:bg-blue-500/10'
                    }`}>
              About Me
            </button>
            <button onClick={() => scrollToSection('projects')}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeSection === 'projects' 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-transparent border border-blue-500 hover:bg-blue-500/10'
                    }`}>
              View Projects
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={() => scrollToSection('skills')}>
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <Code2 size={16} className="mr-2 text-gray-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-4 md:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800/50 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 flex items-center">
                  <Briefcase size={16} className="mr-2" />
                  {project.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Server className="text-blue-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Senior Java Developer</h3>
                <p className="text-gray-400">Tech Corp • 2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-300">
              Leading development of enterprise applications using Spring Boot and microservices architecture.
              Mentoring junior developers and architecting scalable solutions.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Database className="text-blue-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-gray-400">Innovation Labs • 2018 - 2020</p>
              </div>
            </div>
            <p className="text-gray-300">
              Developed and maintained multiple web applications using Spring Framework and React.
              Implemented CI/CD pipelines and automated testing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="py-20 px-4 md:px-8 bg-gray-800/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-gray-400">© 2024 Sai Teja Suryadevara. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;