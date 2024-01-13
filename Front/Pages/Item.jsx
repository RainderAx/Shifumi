import React from 'react';
import luffy from '../src/assets/luffy.png';
import naruto from '../src/assets/naruto.png';
import goku from '../src/assets/goku.png';

const renderGameButton = (imageSrc, altText, choice) => (
  <button onClick={() => handleItemClick(choice)}>
    <img src={imageSrc} alt={altText} style={{ width: '100px' }} />
  </button>
);

const renderTopImage = (imageSrc, altText) => {
  return <img src={imageSrc} alt={altText} style={{ width: '100px' }} />;
};

export default function GameItem({ onChoice }) {
  const handleItemClick = (choice) => {
    try {
      onChoice(choice);
    } catch (error) {
      console.error('Error handling choice:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
      {renderTopImage(luffy, 'rock')}
      {renderTopImage(naruto, 'paper')}
      {renderTopImage(goku, 'scissor')}
    </div>
  );
}
