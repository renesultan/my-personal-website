import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import Introduction from './Introduction';
import PersonalityTraits from './PersonalityTraits';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <ProfilePhoto />
      <Introduction />
      <PersonalityTraits />
      <Navigation />
    </div>
  );
};

export default Home;