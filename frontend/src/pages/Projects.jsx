import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const ProjectCard = ({ title, description, technologies, link }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="mb-4">
      {technologies.map((tech, index) => (
        <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
      View Project →
    </a>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "ML-Powered Content Moderation",
      description: "Developed end-to-end ML pipelines for content moderation at Spotify, leveraging CLIP model.",
      technologies: ["Python", "PyTorch", "GCP", "BigQuery"],
      link: "#"
    },
    {
      title: "LLM Performance Analysis Dashboard",
      description: "Created advanced, filterable dashboards for in-depth LLM performance analysis at HoneyHive.",
      technologies: ["React", "JavaScript", "Data Visualization"],
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <AnimatedPage>
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </div>
    </AnimatedPage>
  );
};

export default Projects;