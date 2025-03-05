import React from 'react';
import img1 from '../assets/images/ArtSonix.jpg';
import img2 from '../assets/images/Weather-App.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spotify and MET API Web App',
      description: 'A web application that integrates Spotify and MET API to display artwork based on user’s moods and taste',
      image: img1,
      tags: ['Python', 'Node.js', 'Flask', 'Spotify Web API', 'MET API', 'Tailwind CSS'],
      link: 'https://github.com/lawrence-ivan-reyes/acs-2930-artsonix'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeather API and HTML/CSS',
      image: img2,
      tags: ['Python', 'Flask', 'OpenWeather API', 'HTML', 'CSS'],
      link: 'https://github.com/Joshkaki00/Homework-4-Assignment'
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;