import React from 'react'
import {  useSelector } from 'react-redux';

import Card from './Card';

const CardList = () => {
  const characters = useSelector(state => state.characters);
  
  
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