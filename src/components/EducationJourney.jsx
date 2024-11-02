import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Brain } from 'lucide-react';

const EducationJourney = () => {
  const education = [
    {
      degree: "Bachelor of Science in Liberal Studies",
      institution: "Eastern Oregon University",
      location: "La Grande, Oregon",
      date: "December 2016",
      focus: [
        "Media Arts-Communication Minor",
        "Business Minor",
        "Information Systems Focus"
      ],
      description: "Interdisciplinary program combining technical expertise with business and communication skills"
    },
    {
      degree: "Associate of Arts Oregon Transfer",
      institution: "Chemeketa Community College",
      location: "Salem, Oregon",
      date: "August 2011",
      focus: ["Computer Science", "Business Administration", "Media Arts"],
      description: "Foundation in computer science and business principles"
    },
    {
      degree: "Associate of General Studies",
      institution: "Chemeketa Community College",
      location: "Salem, Oregon",
      date: "August 2011",
      focus: ["Information Technology", "Digital Media", "Business Technology"],
      description: "Comprehensive study in technology and digital media"
    }
  ];

  const certifications = [
    {
      name: "CompTIA A+",
      date: "2023",
      description: "Hardware and software technology certification",
      skills: ["Hardware Troubleshooting", "Software Installation", "System Configuration"]
    },
    {
      name: "CompTIA Network+",
      date: "2023",
      description: "Networking technology certification",
      skills: ["Network Configuration", "Security Infrastructure", "Troubleshooting"]
    },
    {
      name: "CompTIA Security+",
      date: "2023",
      description: "Information security certification",
      skills: ["Security Protocols", "Risk Management", "Cryptography"]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Educational Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A foundation of technical expertise combined with business acumen and communication skills
        </p>
      </div>

      {/* Narrative Section */}
      <section className="prose prose-lg dark:prose-invert max-w-4xl mx-auto my-12">
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-center mb-8">My Learning Journey</h2>
          
          <div className="space-y-6">
            <p>
              My educational journey reflects a deliberate pursuit of interdisciplinary excellence. 
              Starting with a strong foundation in computer science at Chemeketa Community College, 
              where I dove into programming fundamentals and cybersecurity, I quickly realized that 
              technology alone wasn't enough to create meaningful solutions for today's complex challenges.
            </p>

            <p>
              This realization led me to explore diverse areas: from digital photography and media arts, 
              which taught me the importance of user experience and visual communication, to business 
              courses that helped me understand how technology solutions fit into larger organizational 
              goals. My coursework in psychology and human relations provided invaluable insights into 
              how people interact with technology, while communication studies enhanced my ability to 
              bridge the gap between technical solutions and user needs.
            </p>

            <p>
              The culmination of this journey at Eastern Oregon University, where I earned my BS in 
              Liberal Studies with minors in Media Arts-Communication and Business, represents more 
              than just academic achievement. It demonstrates my commitment to understanding problems 
              from multiple angles and crafting solutions that consider both technical efficiency and 
              human impact.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4">Key Areas of Development:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Technical Foundation:</strong> Computer Science, Information Systems, 
                  Cybersecurity (3.8 GPA in core tech courses)
                </li>
                <li>
                  <strong>Creative Problem-Solving:</strong> Media Arts, Digital Photography, 
                  Visual Communication
                </li>
                <li>
                  <strong>Business Acumen:</strong> Project Management, Marketing Research, 
                  E-Marketing
                </li>
                <li>
                  <strong>Human Understanding:</strong> Psychology, Communication Studies, 
                  Group Dynamics
                </li>
              </ul>
            </div>

            <p>
              Today, as I focus on AI and automation, this diverse background proves invaluable. 
              I approach technology not just as a tool, but as part of a larger ecosystem that 
              includes human needs, business requirements, and social impact. My liberal arts 
              education has equipped me with the critical thinking skills to ask not just "How?" 
              but "Why?" and "What if?" - essential questions in the rapidly evolving field of AI.
            </p>

            <div className="flex justify-center my-8">
              <blockquote className="text-xl italic text-center max-w-2xl">
                "My diverse educational background isn't about collecting degrees - it's about 
                building a unique perspective that combines technical expertise with human 
                understanding."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Education Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Academic Background
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Professional Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {cert.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              <div className="space-y-2">
                {cert.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <Brain className="w-4 h-4 mr-2 text-blue-600" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationJourney;