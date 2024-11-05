import React from 'react';
import { 
  Code, 
  Brain, 
  Server, 
  Shield, 
  Bot,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin
} from 'lucide-react';

const Portfolio = () => {
  const skills = [
    { 
      name: 'Technical Support',
      description: 'Expert in providing comprehensive technical solutions and support',
      icon: Server,
      level: 95
    },
    {
      name: 'AI & Automation',
      description: 'Implementing AI solutions for process automation and efficiency',
      icon: Bot,
      level: 85
    },
    {
      name: 'Network Security',
      description: 'Ensuring robust network security and system protection',
      icon: Shield,
      level: 90
    },
    {
      name: 'System Administration',
      description: 'Managing and optimizing system infrastructure',
      icon: Database,
      level: 92
    }
  ];

  const projects = [
    {
      title: 'AI-Driven Automation',
      description: 'Developing solutions to automate routine tasks and enhance productivity',
      tech: ['Python', 'Machine Learning', 'Process Automation']
    },
    {
      title: 'Network Security Implementation',
      description: 'Implementing comprehensive security measures for enterprise networks',
      tech: ['Security Protocols', 'Network Infrastructure', 'Monitoring Tools']
    },
    {
      title: 'Digital Transformation',
      description: 'Leading digital transformation initiatives for improved efficiency',
      tech: ['Change Management', 'Process Optimization', 'Technology Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12">
        <h1 className="text-5xl font-bold">
          John Bennette
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          IT Professional specializing in innovative technical solutions, AI automation, 
          and digital transformation
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a 
            href="/resume.pdf" 
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Proficiency
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur shadow-lg hover:shadow-xl transition-shadow"
            >
              <skill.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {skill.description}
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-900/50 text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:jbennette.tech@gmail.com" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-300">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;