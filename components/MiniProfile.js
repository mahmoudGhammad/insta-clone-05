import React from 'react';

function MiniProfile() {
  return(
       <div className='flex items-center justify-between
        mt-14 ml-10'>
           <img className=' rounded-full border w-16 h-16 p-[2px]'
           src='https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0'
            alt=''></img>

            <div className=' flex-1 mx-4'>
                <h2 className=' font-bold'>Mahmoud</h2>
                <h3 className=' text-sm text-gray-400'>Welcome to the area </h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold'>
                Sign out
            </button>
       </div>
       
    );
}

export default MiniProfile;
