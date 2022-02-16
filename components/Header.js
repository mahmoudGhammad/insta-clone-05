import React from 'react';

import Image from 'next/image'
import { SearchIcon , HomeIcon} from '@heroicons/react/solid'
import {MenuIcon, 
    PlusCircleIcon ,
     UserGroupIcon , 
     HeartIcon , 
     PaperAirplaneIcon ,


    } from '@heroicons/react/outline'
import { useSession , signIn , signOut} from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
    const {data:session }= useSession();
    const [open , setOpen] = useRecoilState(modalState)
    console.log(session);
  return (
      <div className=' shadow-sm border-b bg-white sticky top-0 z-50'>
          <div className=' flex justify-between max-w-6xl mx-5 xl:mx-auto'>
      {/* left  */}
          <div className='relative w-24  hidden lg:inline-grid cursor-pointer'>

          <Image
                
                src='https://links.papareact.com/ocw'
                layout='fill' 
                objectFit='contain'
          />

         </div>

         <div className='relative w-10  lg:hidden cursor-pointer '>

          <Image
                src='https://links.papareact.com/jjm'
                layout='fill' 
                objectFit='contain'
          />
      </div>

      {/* middle  */}

      <div className=' max-w-xs'>

      <div className=' relative mt-1 p-3 rounded-md '>
          <div className=' absolute inset-y-0 pl-3 flex items-center
           pointer-events-none'>
              <SearchIcon className=' h-5 w-5 text-gray-500'/>

          </div>
          <input type='text' placeholder='Search' 
          className='bg-gray-50 block w-full pl-10 sm:text-sm 
          border-gray-300'  ></input>
      </div>

      </div>

      

      {/* right  */}

      {session? (
          <div className=' flex items-center justify-end space-x-4'>
          <HomeIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <MenuIcon className=' h-6 md:hidden cursor-pointer '/> 
          <div className='relative hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'>
                <PaperAirplaneIcon className=' rotate-45 hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
                <div className=' absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 items-center justify-center
                 animate-pulse rounded-full flex'>3</div>
          </div>
          <PlusCircleIcon onClick={()=> setOpen(true)}
           className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <UserGroupIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <HeartIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>

          <img 
          onClick={signOut}
          src={session?.user?.image}
          alt='profile pic' className=' h-10 rounded-full cursor-pointer'>
          </img>

      </div>
      ):(
          <button onClick={signIn}> signIn</button>
      )}

      
  </div>


      </div>
)}
  
export default Header;
