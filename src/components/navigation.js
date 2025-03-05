import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Joshua Kakinuki
        </div>
        <div className="hidden md:flex space-x-10">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              className={`text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 capitalize ${
                activeSection === item ? 'font-bold text-indigo-600 dark:text-indigo-400' : ''
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;