import React from 'react'
import Card from '../components/Card';
import CardList from '../components/CardList';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

const Main = () => {
  return (
    <>
      <SearchForm />
      <Card />
      <CardList />
    </>
  );
};

export default Main;