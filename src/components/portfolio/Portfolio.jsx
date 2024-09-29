import React from 'react';
import portfolioimg from '../../../public/portfolio.jpeg'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Layout',
      description: 'A state-of-the-art kitchen layout for a five-star restaurant.',
      image: portfolioimg, // Replace with actual image path
      link: '#', // Replace with actual project link
    },
    {
      id: 2,
      title: 'Efficient Workflow Design',
      description: 'Designed an efficient kitchen workflow for a catering service.',
      image: portfolioimg,
      link: '#',
    },
    {
      id: 3,
      title: 'Custom Equipment Solutions',
      description: 'Created custom commercial kitchen equipment for a local bakery.',
      image: portfolioimg,
      link: '#',
    },
    {
      id: 4,
      title: 'Corporate Kitchen Revamp',
      description: 'Revamped a kitchen for a corporate cafeteria with modern amenities.',
      image: portfolioimg,
      link: '#',
    },
  ];

  return (
    <section id='portfolio'>
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-yellow-500 mb-12">Our Portfolio</h2>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m-4 4l4-4-4-4m0 16l4-4-4-4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
