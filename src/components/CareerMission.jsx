import React from 'react';
import { Brain, Lightbulb, Bot, Laptop } from 'lucide-react';

const CareerMission = () => {
  const goals = [
    {
      title: "AI-Driven Automation",
      icon: Bot,
      description: "Developing solutions to automate routine tasks, allowing people to focus on creative and meaningful work.",
      objectives: [
        "Implement AI solutions for process automation",
        "Reduce manual workload through smart automation",
        "Enhance productivity with AI-assisted workflows"
      ]
    },
    {
      title: "Ethical AI Development",
      icon: Brain,
      description: "Promoting responsible AI development with a focus on human-centric solutions and ethical considerations.",
      objectives: [
        "Ensure AI solutions benefit society",
        "Maintain transparency in AI systems",
        "Protect user privacy and data security"
      ]
    },
    {
      title: "Digital Transformation",
      icon: Laptop,
      description: "Leading digital transformation initiatives to modernize business operations and enhance efficiency.",
      objectives: [
        "Streamline business processes",
        "Implement modern technology solutions",
        "Improve user experience through technology"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] py-12">
      {/* Mission Statement */}
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Career Mission
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Dedicated to harnessing the power of AI and automation to create positive impact 
          while maintaining a strong focus on ethical considerations and human-centric solutions.
        </p>
      </section>

      {/* Goals Section */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800/50 backdrop-blur rounded-lg p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <goal.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {goal.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {goal.description}
              </p>
              <ul className="space-y-3">
                {goal.objectives.map((objective, i) => (
                  <li 
                    key={i}
                    className="flex items-start space-x-2"
                  >
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Future Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Working towards a future where technology enhances human potential, 
            enabling people to focus on creativity, innovation, and meaningful connections 
            while AI handles routine tasks efficiently and ethically.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerMission;