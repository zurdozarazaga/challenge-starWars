import React from 'react'
import Card from './Card';

const CardList = ({characters}) => {
  return (
    <>
    {characters && characters.map(character => (
      <Card key={character.name} character={character} />
    ))
    
    }
    </>  
  );
};

export default CardList;