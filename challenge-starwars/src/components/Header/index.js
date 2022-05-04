import React from "react";
import { useDispatch } from "react-redux";
import { getCharacterAction } from "../../actions/characterAction";

const Header = () => {
  const dispatch = useDispatch();
  const handleClickHome = () => {
    dispatch(getCharacterAction(1));
  };
  return (
    <div className="block md:flex h-full justify-between  text-color-card  items-center bg-transparent rounded ">
      <div className="flex justify-center">
        <button>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-347820.appspot.com/o/logo%2F737931.svg?alt=media&token=d9411429-7d5b-400d-bc90-d863794adeb5"
            alt="logo"
            className="  flex  h-14 w-14 rounded-md mt-2 mb-2 ml-4 md:ml-12"
            onClick={handleClickHome}
          ></img>
        </button>
      </div>
      <div className="text-2xl flex justify-center items-center ml-6 mb-2 ">
        <button onClick={handleClickHome} className=" flex justify-center  ">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-347820.appspot.com/o/challengeStarWars%2FstarWarsLogo.jpg?alt=media&token=665119fd-ad3b-4088-91bc-641974e5dbb6"
            alt="logo"
            className="  flex  h-14 w-20 rounded-md mt-2 mb-2 md:mr-12 mr-2"
            onClick={handleClickHome}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
