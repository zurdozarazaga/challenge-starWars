import React from "react";
import{ Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { removeFromCharacter } from "../../actions/characterAction";

const Card = ({ character }) => {
  const dispatch = useDispatch();
  //delete handler
  const deleteCharacter = (name) => {
    dispatch(removeFromCharacter(name));
  };
  console.log('card')

  return (
    <>
      <Helmet>
        <title>{` Characters Star Wars | ${character.name}`}</title>
      </Helmet>

    <section className="flex justify-between border-2 rounded-lg pl-4 bg-background-card border-gray-300 shadow-md m-3">
      <div className="">
        <div>
          <h2 className="text-lg text-color-card mb-2 mt-2">{character.name}</h2>
          <h3 className="text-sm text-color-card mb-2">{character.height}</h3>
          <h3 className="text-sm text-color-card mb-2">{character.birth_year}</h3>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            deleteCharacter(character.name);
          }}
          className="border rounded-lg  p-1 m-2 mr-6 bg-gray-800 text-color-card"
        >
          Eliminar
        </button>
      </div>
    </section>
    </>
  );
};

export default Card;
