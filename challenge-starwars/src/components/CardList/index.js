import React from 'react'
import {  useSelector } from 'react-redux';

import Card from './Card';

const CardList = () => {
  const characters = useSelector(state => state.characters);
  console.log('characte.name in cardlist',characters);
  console.log('charactes in cardlist',characters)
  
  return (
    <>
    {characters.length === 0 ? <div className='ml-4'>No se encontró ningún resultado</div> 
    : characters.map(character => (
      <Card key={character.name } character={character} />
    ))
    }
    </>  
  );
};

export default CardList;