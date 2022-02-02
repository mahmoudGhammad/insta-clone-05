import React from 'react';
import Post from './Post';



function Posts() {

    const posts =[
        {
            id: '123',
            username:'memo', 
            userImg:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            img:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            caption:"hello ya world "
            
        },
        {
            id: '123',
            username:'memo', 
            userImg:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            img:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            caption:"hello ya world "
            
        },
        {
            id: '123',
            username:'memo', 
            userImg:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            img:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            caption:"hello ya world "
            
        },{
            id: '123',
            username:'memo', 
            userImg:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            img:'https://lh3.googleusercontent.com/lLj6dfncgh-2AL5ZNuTPBlJNgwCEcUARvkfHF69AYBHvMqf_8_o9llpWj-vNrvZM7urmxxYiKnJZJKc8jP3zZlU3dP87ueajuha4Lk0g93oZ8lF80G50p7DT2tV0PolDPYlMXK2_zsjE1Zhg-5WvXVvy2JcEPs3oMtLfcbd5Y2OgkqHtnUntwbHynXslXbUyKT0KTJwdE8MHBNWomLh2NSlWq92TbrRGDQmBu_tcVUkwrFRw71pzn46d3RWkKTkbIEhGvqUVbHb2dIne0DHy3kQky5ltz6jCl-_IdNqoseg5caME21qkXuWAfXRuSgorIl0cN-ak1HEFobioOuPHFIoQWKybsTrX-yxooGmNk2PbQ7CBqXVHK07BOpPmT5ixZicnUsridKiAXv8ytBE35ZpwxGv_fOFvfeDhIK-cn6-EP0aL3BmJylgECPP9tB6OIRRMZpxmewXLcYJ0dCePqwqXxK3L20kboeQ_VdfZnKjnVj5I0Tz96u3Yejj0GYw-p2to0l1w1cdEeLmg0vVK5XMP3qKT0C7lU_EBoAI9M_PDkPz8_WgUkmq-reob-xg76ZN9M0PqonsBu0-mT1ta499brDMot8nbz_Ayg-wfkBkvunV_pg4R_F-8L_nv8_oRk-epUUpmPk2-WrVRGXgt1B7UFrmPKRGgiWCvn_BiB3Si2HRyNbxDPcBbfipJ_gWK_vAPczvEHG1kVSG37ztJ-sk=w708-h943-no?authuser=0',
            caption:"hello ya world "
            
        },
    ]
  return (
  <div>
     {/* post  */}

     {posts.map((post)=>(
         <Post key={post.id} img={post.img} 
         username={post.username}
          caption={post.caption}
           userImg={post.userImg}/>
     ))}
     
  </div>
  );
}

export default Posts;
