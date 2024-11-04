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
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          John Bennette
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Proficiency
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <skill.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {skill.description}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
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
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
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
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:jbennette.tech@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;