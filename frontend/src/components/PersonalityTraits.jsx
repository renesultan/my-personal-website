import React from 'react';
import { motion } from 'framer-motion';

const traits = [
  { emoji: '🧠', text: 'Inquisitive Learner' },
  { emoji: '💡', text: 'Innovation Enthusiast' },
  { emoji: '🏗️', text: 'Resilient Problem-Solver' },
  { emoji: '🌱', text: 'Growth Mindset' },
  { emoji: '🤝', text: 'Honest Collaborator' },
  { emoji: '🤜🤛', text: 'Team Player' },
  { emoji: '💬', text: 'Empathetic Communicator' },
  { emoji: '🌍', text: 'Multilingual Traveler' },
  { emoji: '😊', text: 'People Person' },
  { emoji: '🙏', text: ' Grateful Human' },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const PersonalityTraits = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {traits.map((trait, index) => (
        <motion.div 
          key={index} 
          className={`flex items-center space-x-3 ${index === 9 ? 'md:col-start-2' : ''}`} 
          variants={item}
        >
          <span className="text-3xl">{trait.emoji}</span>
          <span className="text-lg">{trait.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PersonalityTraits;