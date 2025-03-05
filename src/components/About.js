import React from 'react';
import img1 from '../assets/images/IMG_0515.jpg';
import img2 from '../assets/images/UC_Merced_Seal.png';
import img3 from '../assets/images/Dominican_University_of_California_Seal.jpg';

const About = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        About Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Hello! I am currently a third-year Applied Computer Science (ACS) student at Dominican University of California (DUC). I previously attended UC Merced and recently transferred to a university closer to my home. I currently have some experience in computer programming and front-end web development. I aim to work hard and excel in the ACS Program at DUC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img 
          src={img1}
          alt="Me" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
          loading='lazy'
        />
        <img 
          src={img2}
          alt="University of California Merced Seal" 
          className="w-full h-64 object-contain rounded-lg shadow-md"
          loading='lazy'
        />
        <img 
          src={img3}
          alt="Dominican University of California Seal" 
          className="w-full h-64 object-contain rounded-lg shadow-md"
          loading='lazy'
        />
      </div>
    </div>
  </section>
);

export default About;