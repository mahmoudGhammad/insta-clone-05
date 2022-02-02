import React from 'react';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import MiniProfile from './MiniProfile';

function Feed() {
  return (
      <main className=' grid grid-cols-1  md:grid-cols-2
       md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
           <section className=' col-span-2'>
             {/* stories  */}
             <Stories/>
             {/* posts  */}
             <Posts/>

           </section>

           <section className='hidden xl:inline-grid  '>
             <div className=' fixed top-20'>
             <MiniProfile/>
             <Suggestions/>
             </div>

              {/* mini profile  */}
              {/* suggestions  */}
           </section>
      </main>

  )
}

export default Feed;
