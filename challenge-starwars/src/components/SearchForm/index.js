import React from "react";
import { useDispatch } from "react-redux";
import { searchCharacterAction } from "../../actions/characterAction";

const SearchForm = () => {
  const dispatch = useDispatch();
  //handle Search characters
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const { target } = e;
    const valueSearch = target.search.value;
    dispatch(searchCharacterAction(valueSearch));
    target.search.value = "";
  };

  return (
    <div>
      <form className="block p-4 md:flex " onSubmit={handleSubmitSearch}>
        <div>
          <input
            className=" w-full p-2 bg-background-card border rounded-lg md:p-1 md:pl-2 md:pr-2 md:m-2 md:ml-3 border-gray-200"
            type="text"
            placeholder="Search"
            name="search"
          ></input>
        </div>
        <div>
          <button className=" w-full p-2 mt-2  md:m-2 md:ml-3 border rounded-lg md:p-1 md:pl-2 md:pr-2 bg-gray-800 border rounded-lg border-gray-300 text-color-card">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
