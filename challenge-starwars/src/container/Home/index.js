import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import SET_CHARACTER from '../../actions/types';
import {getCharacter} from '../../api/getCharacter';
import setCharacter  from '../../actions/characterAction';
import CardList from "../../components/CardList";

import SearchForm from "../../components/SearchForm";



const Home = () => {
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  
  const characters = useSelector(state => state.characters);
  

  useEffect(() => {
    getCharacter(1)
      .then(res => {
        console.log('res',res.results);
        dispatch(setCharacter(res.results));
      
      })
  
    
  }, [ ]);



  return (
    <div className="block ml-6 mr-6 mb-2 bg-gray-100 h-auto ">
      <div>
        <SearchForm />
      </div>
      <div>
        <CardList characters={characters} />
      </div>
      
    </div>
  );
};

export default Home;