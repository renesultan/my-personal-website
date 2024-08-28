import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const BookCard = ({ title, author, description, link }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">by {author}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
      Learn More →
    </a>
  </div>
);

const Bookshelf = () => {
  const books = [
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      description: "World-renowned Stanford University psychologist Carol Dweck explains how success in school, work, sports, the arts, and almost every area of human endeavor can be dramatically influenced by how we think about our talents and abilities.",
      link: "https://www.goodreads.com/book/show/40745.Mindset"
    },
    {
      title: "Zero to One: Notes on Startups, or How to Build the Future",
      author: "Peter Thiel",
      description: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. Zero to One presents at once an optimistic view of the future of progress in America and a new way of thinking about innovation.",
      link: "https://www.goodreads.com/book/show/18050143-zero-to-one"
    },
    // Add more books as needed
  ];

  return (
    <AnimatedPage>
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Bookshelf</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
            <BookCard key={index} {...book} />
            ))}
        </div>
        </div>
    </AnimatedPage>
  );
};

export default Bookshelf;