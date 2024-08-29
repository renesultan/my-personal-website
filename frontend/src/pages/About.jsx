import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage>
        <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
            Hello! I'm René Sultan, a senior Computer Science student at Columbia Engineering with a passion for AI/ML and innovation.
        </p>
        <p className="mb-4">
            My journey in tech has led me to exciting opportunities, including a Machine Learning Engineer internship at Spotify. I'm constantly seeking new challenges and ways to apply my skills to solve real-world problems.
        </p>
        <p className="mb-4">
            When I'm not coding or learning about the latest tech trends, you can find me playing the piano, engaging in different sports, reading in the park, trying restaurants and coffee shops in nyc, or wildly partying ("work hard play" hard mentality).
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
        <ul className="list-disc list-inside">
            <li>Programming Languages: Python, Java, JavaScript</li>
            <li>Machine Learning: TensorFlow, PyTorch, scikit-learn</li>
            <li>Web Development: React, Node.js</li>
            <li>Database: SQL, MongoDB</li>
            <li>Tools: Git, Docker, AWS</li>
        </ul>
        </div>
    </AnimatedPage>
  );
};

export default About;