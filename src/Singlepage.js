import React from 'react'
import './Singlepage.css'
import ClothingLogo from '../src/Images/RenergiiLogo_Blue.png'
import urbantiller from '../src/Images/ut.png'
import Ayatana from '../src/Images/Ayatana_logo_final 2.png'

import mycovation from '../src/Images/cr=w_365,h_365.png'
import feedworkz from '../src/Images/rs=w_365,h_183,cg_true (1).png'
import untact from '../src/Images/unta.png'
import styletribute from '../src/Images/STYLE.png'


import facebook from '../src/Images/facebook-round-color-2021-icon.png'
import instagram from '../src/Images/linkedin-app-icon (1).png'

import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Email from '../images/Emails.png';
// import Phone from '../images/phone.png';

function Singlepage() {

  function handleFeedworkz(){
    window.open('https://www.feedwerkz.com/', '_blank');

  }

  function handleAyatana(){
    window.open('http://ayatana.world/', '_blank');
  }

 
  function handlemycovation(){
    window.open('https://www.mycovation.asia/', '_blank');
  }

  function handleurbantiller(){
    window.open('https://urbantiller.sg/', '_blank');
  }

  function handlefacebook(){
    window.open('https://www.facebook.com/renergii/', '_blank');
  }


  function handleinstagram(){
    window.open('https://www.linkedin.com/company/renergii', '_blank');
  }

  // function handlestyletribute(){
  //   window.open('https://www.linkedin.com/company/renergii', '_blank');
  // }


  return (
    <>
      <div className='full-page-containers' >
       
        <div className="Aboutus-first-header-section" style={{textAlign:"center"}} >
                 <img src={ClothingLogo} alt="logo" className='Aboutuslogo-icon'  />
        </div>

        

             <div className='flexbox-container'>
          <div className='card-container-section-top' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={urbantiller} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>Urban Tiller</b> is a full-stack AgTech company building a direct-to-consumer platform to deliver #Fresh, #Safe and #SustainablyGrown produce.</p> 
             </div>



          </div>


          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={mycovation} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>Mycovation</b> is an alternative food products company transforming mycelium (the root system of mushrooms) into exciting food products.</p>  
             </div>



          </div>



          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={feedworkz} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>FeedWerkz</b> is a sustainable nutrients startup delivering custom-blended proteins and other additives to the pet food, aquafeed, pharma and human wellness industries.</p>  
             </div>



          </div>



          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={styletribute} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>StyleTribute </b>StyleTribute is an online luxury resale platform where individuals can buy and sell pre-owned designer fashion items.</p>  
             </div>



          </div>



          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={Ayatana} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>Ayatana</b> A retail experience company which is aimed at redefining the way retail is experienced. Ayatana focuses around Phygital at retail stores giving some interesting immersive product experience for the consumers</p> 
             </div>



          </div>



          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
          <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}>
              <img src={untact} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   />
             </div>

             <div>
             <p style={{paddingLeft:"25px",paddingRight:"25px"}}><b>Untact</b> With a powerful technology infrastructure, artificial intelligence, and readily available telecallers, our outsourcing platform effortlessly handles your outbound calling operations.</p> 
             </div>



          </div>



          

          <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>

            <div style={{display:"flex",flexDirection:"row",gap:"25px"}}>
                  
          <div>
              <img src={facebook} alt="Avatar" width={20} height={20}   />
             </div>


             <div >
              <img src={instagram} alt="Avatar"  width={20} height={20}   />
             </div>

             </div>
 </div>





 <div className='card-container-section' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                  
                  {/* <div style={{width:"40%",height:"40%",textAlign:"center",marginLeft:"30%"}}> */}
                      {/* <img src={untact} alt="Avatar" style={{width:"100%",height:"100%",objectFit:"cover"}}   /> */}
                     {/* </div> */}
        
                     {/* <div> */}
                     <div className='copyright-text'> COPYRIGHT © 2021 RENERGII VENTURES - ALL RIGHTS RESERVED.</div> 
                     {/* </div> */}
        
        
        
                  </div>




         

          </div>



              </div>
             
   
      
    </>
  )
}

export default Singlepage