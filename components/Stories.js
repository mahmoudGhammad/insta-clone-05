import React, { useState } from 'react';

import { useEffect } from 'react';

import faker from "@faker-js/faker"
import Story from './Story';

function Stories() {

    const [suggestions , setSuggestions] = useState([]);

  useEffect(() => {
    
    const suggestions  = [...Array(20)].map((_, i)=>({
        ...faker.helpers.contextualCard(),
        id: i 
    })
    )

    console.log(suggestions);

    setSuggestions(suggestions)
  
   
  }, []);
  
  
  return (
    <div className=' flex p-6 space-x-2 bg-white
     border-gray-300 border rounded-sm 
     overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>

        {suggestions.map((profile=>(
            <Story key={profile.id} img={profile.avatar} 
                   username={profile.username}
                     />
        )))}
    

    </div>
  )
}

export default Stories;
