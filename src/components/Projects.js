import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spotify and MET API Web App',
      description: 'A web application that integrates Spotify and MET API to display artwork based on user’s moods and taste',
      image: '/api/placeholder/600/400',
      tags: ['Python', 'Node.js', 'Flask', 'Spotify API', 'MET API', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeather API and HTML/CSS',
      image: '/api/placeholder/600/400',
      tags: ['Python', 'Flask', 'OpenWeather API', 'HTML', 'CSS']
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Productivity tool for teams with drag-and-drop functionality',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Redux', 'Firebase', 'Material UI']
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;