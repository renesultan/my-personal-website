import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import ProfilePhoto from '../components/ProfilePhoto';
import Introduction from '../components/Introduction';
import PersonalityTraits from '../components/PersonalityTraits';
import TechInterests from '../components/TechInterests';

const SocialButton = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-700 p-2 rounded-full"
    aria-label={label}
  >
    <Icon size={24} />
  </motion.a>
);

const InterestTag = ({ children }) => (
  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold m-1 inline-block">
    {children}
  </span>
);

const Home = () => {
  const interests = [
    "Machine Learning", "LLMs", "Computer Vision", "Natural Language Processing",
    "AI Ethics", "Quantum Computing", "Robotics", "Data Science"
  ];

  return (
    <AnimatedPage>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <motion.div 
          className="col-span-1 md:col-span-2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfilePhoto />
          <Introduction />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">🚀 What I'm Up To</h2>
            <p className="text-gray-300">
              Currently, I'm geeking out on advanced ML algorithms and teaching computers to understand human gibberish (aka NLP). 
              Also, I'm on the hunt for a summer gig where I can flex my AI muscles and maybe save the world... or at least make some cool apps! 💻✨
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">🤔 Who Am I</h2>
            <PersonalityTraits />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">💭 What Keeps Me Up At Night</h2>
            <TechInterests />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">📫 Get in Touch</h2>
            <div className="flex space-x-4">
              <SocialButton Icon={Github} href="https://github.com/renesultan" label="GitHub" />
              <SocialButton Icon={Twitter} href="https://twitter.com/rene_sultan" label="Twitter" />
              <SocialButton Icon={Linkedin} href="https://linkedin.com/in/renesultan" label="LinkedIn" />
              <SocialButton Icon={Instagram} href="https://instagram.com/renesultan" label="Instagram" />
              <SocialButton Icon={Mail} href="mailto:rs4240@columbia.edu" label="Email" />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Home;