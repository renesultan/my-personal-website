import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const BookCard = ({ title, author, description, link, image, tags }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img 
      src={image} 
      alt={`${title} cover`} 
      className="h-80 object-contain mb-4 rounded-md mx-auto" 
      style={{ objectFit: 'cover', height: '300px', width: 'auto' }}
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">by {author}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{tag}</span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
      Learn More →
    </a>
  </div>
);


const Bookshelf = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const books = [
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      description: "A transformative book on the power of mindset in achieving success.",
      link: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
      image: "/mindset.png", // Updated image path
      tags: ["Psychology", "Self-Improvement"]
    },
    {
      title: "How to Make Friends & Influence People",
      author: "Dale Carnegie",
      description: "A timeless guide to building relationships and influencing others.",
      link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      image: "/how-to-win-friends.png", // Updated image path
      tags: ["Communication", "Personal Development"]
    },
    {
      title: "Zero to One: Notes on Startups, or How to Build the Future",
      author: "Peter Thiel",
      description: "Insights on startups, innovation, and creating the future.",
      link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
      image: "/zero-to-one.png", // Updated image path
      tags: ["Business", "Innovation"]
    },
    {
      title: "Small Journey into the World of Quanta (French)",
      author: "Etienne Klein",
      description: "An exploration of the quantum world through the lens of physics.",
      link: "https://www.amazon.fr/Petit-voyage-dans-monde-quanta/dp/2081227010",
      image: "/petit-voyage.png", // Updated image path
      tags: ["Science", "Quantum Physics"]
    },
    {
      title: "Meditations",
      author: "René Descartes",
      description: "Philosophical meditations on the nature of existence and reality.",
      link: "https://www.amazon.com/Descartes-Meditations-Philosophy-Selections-Objections/dp/0521558182",
      image: "/meditations.png", // Updated image path
      tags: ["Philosophy", "Classics"]
    },
    {
      title: "The Spatial Web",
      author: "Gabriel René & Dan Mapes",
      description: "A visionary book on the future of the internet and digital spaces.",
      link: "https://www.amazon.com/Spatial-Web-connect-machines-transform/dp/0578562960",
      image: "/spatial-web.png", // Updated image path
      tags: ["Technology", "Future Trends"]
    },
    // Add more books as needed
  ];

  const allTags = [...new Set(books.flatMap(book => book.tags))];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredBooks = selectedTags.length === 0 
    ? books 
    : books.filter(book => selectedTags.some(tag => book.tags.includes(tag)));

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Bookshelf</h1>
        <div className="mb-4">
          {allTags.map(tag => (
            <button 
              key={tag} 
              onClick={() => toggleTag(tag)} 
              className={`mr-2 mb-2 px-3 py-1 rounded-full ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="text-gray-400 mb-4">Displaying {filteredBooks.length} of {books.length} books</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Bookshelf;
