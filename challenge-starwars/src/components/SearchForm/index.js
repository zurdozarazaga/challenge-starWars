import React from 'react'

const SearchForm = () => {
  return (
    <div className='block p-4 md:flex md:justify-center'>
      <div>
        <input className=' w-full p-2 border rounded-lg md:p-1 md:pl-2 md:pr-2 md:m-2 md:ml-3 border-gray-200' type="text" placeholder="Search">

        </input>
      </div>
      <div>
        <button className=' w-full p-2 mt-2  md:m-2 md:ml-3 border rounded-lg md:p-1 md:pl-2 md:pr-2 bg-green-800 text-white' >Search</button>
      </div>
    </div>
  );
};

export default SearchForm;