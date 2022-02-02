import React from 'react';

import Image from 'next/image'
import { SearchIcon , HomeIcon} from '@heroicons/react/solid'
import {MenuIcon, 
    PlusCircleIcon ,
     UserGroupIcon , 
     HeartIcon , 
     PaperAirplaneIcon ,


    } from '@heroicons/react/outline'

function Header() {
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

      <div className=' flex items-center justify-end space-x-4'>
          <HomeIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <MenuIcon className=' h-6 md:hidden cursor-pointer '/> 
          <div className='relative hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'>
                <PaperAirplaneIcon className=' rotate-45 hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
                <div className=' absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 items-center justify-center
                 animate-pulse rounded-full flex'>3</div>
          </div>
          <PlusCircleIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <UserGroupIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>
          <HeartIcon className=' hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all ease-out duration-150'/>

          <img 
          src='https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0' 
          alt='profile pic' className=' h-10 rounded-full cursor-pointer'>
          </img>

      </div>
  </div>;


      </div>
)}
  
export default Header;
