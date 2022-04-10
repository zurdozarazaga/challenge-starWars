import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import  { getCharacterAction }  from '../../actions/characterAction';
import CardList from "../../components/CardList";
import NewCharacterForm from '../../components/NewCharacterForm';

import SearchForm from "../../components/SearchForm";



const Home = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCharacterAction());
  
    
  }, [ dispatch ]);



  return (
    <div className="block ml-6 mr-6 mb-2 bg-gray-100 h-auto ">
      <div className='block md:flex md:justify-between'>
        <div>
        <SearchForm />
        </div>
        <div className='w-full md:p-2 md:w-32 md:mr-4 mt-3'>
        <NewCharacterForm />
        </div>
      </div>
      <div>
        <CardList />
      </div>
      
    </div>
  );
};

export default Home;