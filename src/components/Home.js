import React from 'react';

const Home = ({ setActiveSection }) => (
  <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
    <img
      src="/api/placeholder/200/200"
      alt="Profile"
      className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 mb-8"
    />
    <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-4">
      Joshua Kakinuki
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 text-center mb-6">
      Full Stack Developer
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 text-left max-w-2xl mb-8">
      Passionate web developer and software with expertise in creating responsive, user-friendly applications.
      Specialized in Python, JavaScript, C++ and other programming languages and full-stack development.
    </p>
    <div className="flex space-x-4">
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        onClick={() => setActiveSection('projects')}
      >
        View Projects
      </button>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        onClick={() => setActiveSection('contact')}
      >
        Contact Me
      </button>
    </div>
  </section>
);

export default Home;