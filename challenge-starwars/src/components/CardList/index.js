import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import Card from "./Card";

const CardList = () => {
   
   // array of characters from state
  const characters = useSelector((state) => state.characters);
  console.log('characters', characters)
  return (
    <>
     
      {characters[0] === 'no se encontro resultado' ? (
          <div className="ml-4 text-color-card">No se encontró ningún resultado</div>
      ) : (
        characters.map((character) => (
          <Card key={character.name} character={character} />
        ))
      )}
    </>
  );
};

export default CardList;
