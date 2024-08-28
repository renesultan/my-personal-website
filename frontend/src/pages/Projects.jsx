import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import LazyImage from '../components/LazyImage';

const ProjectCard = ({ title, description, technologies, image, link, date }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4 h-40 overflow-hidden rounded-lg">
      <LazyImage 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain bg-gray-700"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-2">{date}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="mb-4 flex flex-wrap">
      {technologies.map((tech, index) => (
        <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
        View Project →
      </a>
    ) : (
      <span className="text-gray-500 italic">Research Project</span>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Content Moderation ML Pipelines",
      date: "June 2024 - August 2024",
      description: "Developed end-to-end machine learning pipelines for content moderation at Spotify, leveraging state-of-the-art multimodal ML techniques with OpenAI's CLIP model. Created data preprocessing workflows, fine-tuned models, and built evaluation dashboards, enhancing content quality and safety across the platform.",
      technologies: ["Python", "PyTorch", "CLIP", "GCP", "BigQuery", "Jupyter", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      image: "/spotify-logo2.png",
      link: null
    },
    {
      title: "LLM Performance Analysis Dashboard",
      date: "January 2024 - May 2024",
      description: "Led the design and implementation of advanced, filterable dashboards for in-depth LLM performance analysis at HoneyHive. Enabled users to benchmark models, compare hyperparameters, and select optimal LLM providers efficiently. Enhanced the platform's dataset management features to support multiple file types (JSON, JSONL, CSV), improving error handling and scalability for large datasets.",
      technologies: ["React", "JavaScript", "Node.js", "LLM", "Data Visualization", "JSON", "CSV"],
      image: "/honeyhive-logo.png",
      link: null
    },
    {
      title: "Infrastructure Crack Detection ML Pipeline",
      date: "June 2022 - September 2022",
      description: "Engineered a deep learning pipeline for crack detection in infrastructure imagery using PyTorch at Aren. Facilitated comprehensive damage reports for clients across multiple structure types. Evaluated 25 semantic segmentation models, comparing IoU, accuracy, precision, recall, and F1 scores. Built and deployed a data preprocessing pipeline with augmentation using the Albumentations library.",
      technologies: ["Python", "PyTorch", "Deep Learning", "Semantic Segmentation", "Albumentations", "Data Preprocessing"],
      image: "/aren-logo.png",
      link: null
    },
    {
      title: "AI/ML Research at Peking University",
      date: "June 2023 - July 2023",
      description: "Conducted AI/ML research at the Center on Frontiers of Computing Studies, Peking University. Shadowed leading researchers on projects integrating LLMs with RLHF for robot learning and multi-modal intelligence. Engaged in workshops and conferences on LLM applications, RLHF, and Federated Learning. Attended tech demos at major Chinese AI institutions including Huawei, Baidu, and ByteDance, gaining insights into cutting-edge AI applications.",
      technologies: ["LLMs", "RLHF", "Robot Learning", "Multi-modal AI", "Federated Learning"],
      image: "/peking-cfcs.png", // You'll need to add this image to your public folder
      link: null
    }
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