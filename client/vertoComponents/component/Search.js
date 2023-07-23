import { Searchs } from '../Data'
import React, { useState } from 'react'

const Search = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };  return (
    <div className='m-2 p-2 color_black'>
   <select value={selectedOption} style={{backgroundColor: "#101924"}} onChange={handleOptionChange} className='color_black p-2 rounded-md color_white focus:outline-none'>
  {Searchs?.map((item) => {
    const { id, title } = item;
    return (
      <option key={id} value={title} className='color_white hover:bg-gray-400 rounded-md p-3'>
        {title}
      </option>
    );
  })}
</select>


    </div>
  )
}

export default Search
