import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import  { getCharacterAction }  from '../../actions/characterAction';
import CardList from "../../components/CardList";

import SearchForm from "../../components/SearchForm";



const Home = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCharacterAction());
  
    
  }, [ dispatch ]);



  return (
    <div className="block ml-6 mr-6 mb-2 bg-gray-100 h-auto ">
      <div>
        <SearchForm />
      </div>
      <div>
        <CardList />
      </div>
      
    </div>
  );
};

export default Home;