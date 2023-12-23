import React from 'react';
// import Location from './location/index';
import Location from './location/index';
import { useState } from 'react';


const InputGroup = () => {

const [locationOpen, setLocationOpen] = useState(false);

const handleClick = () => {
    setLocationOpen(true);
 };
 return (
    <div className="w-full flex">
      <button onClick={handleClick} className="appearance-none block text-gray-700 py-1 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-location">Herhangi bir yer</button>  
      <button className="appearance-none block  text-gray-700 py-1 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-location">Herhangi hafta</button>
      <button className="appearance-none block text-gray-700 py-1 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-location">Misafir ekleyin</button>
      {locationOpen && <Location/>} {/* Location componenti, locationOpen durumu true ise gösterilir */}

    </div>
 );
};

export default InputGroup;