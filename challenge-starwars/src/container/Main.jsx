import React from "react";
import Card from "../components/CardList/Card";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";

const Main = () => {
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

export default Main;
