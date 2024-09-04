import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import TechInterests from '../components/TechInterests';
const About = () => {
  return (
    <AnimatedPage>
        <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me 🙋‍♂️</h1>
        <p className="mb-4">
            Hello! I'm René Sultan, a senior Computer Science student at Columbia Engineering with a passion for AI/ML and innovation.
        </p>
        <p className="mb-4">
            My journey in tech has led me to exciting opportunities. I'm constantly seeking new challenges and innovative ways to apply my skills to solve real-world problems.
        </p>
        <p className="mb-4">
            When I'm not coding or learning about the latest tech trends, you can find me playing writing philosophical reflections, reading all sorts of books, playing the piano, engaging in different sports, trying out new restaurants and coffee shops in nyc, or clubbing.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Technical Skills 👨‍💻</h2>
        <TechInterests />
        </div>
    </AnimatedPage>
  );
};

export default About;