import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Resume = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <div className="aspect-w-8 aspect-h-11 bg-gray-200">
          <iframe
            src="/rene-resume.pdf"
            title="René Sultan's Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Resume;
