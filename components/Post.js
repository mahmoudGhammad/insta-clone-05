import React from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline'

function Post({img , username , userImg , caption , }) {
  return (
  <div className=' bg-white my-7 '>
      <div className=' flex items-center p-5'>
        <img src={userImg}   alt='this is user image ' 
            className=' rounded-full h-12 w-12 object-contain
            p-1 mr-3'
        />
        <p className=' flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>

      
      
      
      <img src={img} alt='this is post image '
      className=' object-cover w-full'
      />

      <div className=' flex justify-between pt-4 px-4'>
      <div className='flex space-x-4 '>
          <HeartIcon className='h-7 hover:scale-125  
          cursor-pointer 
          transition-all duration-150 ease-out'/>
          <ChatIcon className='h-7 hover:scale-125 
          cursor-pointer 
          transition-all duration-150 ease-out'/>

          <PaperAirplaneIcon className='h-7 hover:scale-125 
          cursor-pointer 
          transition-all duration-150 ease-out'/>
      </div>

      <div>
      <BookmarkIcon className='h-7 hover:scale-125  
          cursor-pointer 
          transition-all duration-150 ease-out'/>
      </div>

      </div>

      <p className=' p-5 truncate '>
          <span className=' font-bold'>{username}</span> {caption}</p>
    
       <form className='flex items-center p-4'>
           <EmojiHappyIcon  className='h-7 hover:scale-125  
          cursor-pointer 
          transition-all duration-150 ease-out'/>
           <input type='text' placeholder='Add a comment '
            className=' border-none flex-1 focus:ring-0 outline-none '/>
           <button className=' font-semibold text-blue-400'>Post</button>
       </form>

     

  </div>
  );
}

export default Post;
