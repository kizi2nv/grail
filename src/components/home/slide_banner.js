import React from 'react';
import  './carousel.scss';
import './banner.scss';
import './slide_banner.scss';
import Carousel from 'react-bootstrap/Carousel';
import Fade from "react-reveal/Fade"



class  SlideBanner extends React.Component{ 
    
 

    render(){

  return(


<section className="text-center gen">
   <Carousel style={{"padding": "inherit"}} >
       
   <Carousel.Item className="sldone_bg" style={{"height":"350px"}} interval={5200}>
     <div className="word" >
     <Fade right>
       <h3> human right and criminal justtice</h3> 
      </Fade>
      <Fade left>
      <p> Unparalleled advocacy is assured in guiding your path to freedom and justice</p>
      </Fade>
      </div> 
   </Carousel.Item>

   <Carousel.Item style={{"height":"350px"}} interval={5200} className="sldtwo_bg">
                  
   <div className="word" >
     <Fade right>
       <h3> litigation and alternative dispute resolution (ADR)</h3> 
      </Fade>
      <Fade left>
      <p> We are a distinguished leader in the realm of litigation and ADR</p>
      </Fade>
      </div>   
     </Carousel.Item>   
     <Carousel.Item className="sldfour_bg" style={{"height":"350px"}} interval={5200}>
                  <div className="word">
     <Fade right>
       <h3> corporate solution and commercial law practice</h3> 
      </Fade>
      <Fade left>
      <p> Innovative solution driven mindset in all corporate/commercial transaction is assured. </p>
      </Fade>
      </div>                                                     
     </Carousel.Item>   
                           
    <Carousel.Item className="sldthree_bg" style={{"height":"350px"}} interval={5200}>
                 <div className="word" >
     <Fade right>
       <h3> real estate and property management</h3> 
      </Fade>
      <Fade left>
      <p> Due diligence in ensuring the non-purchase of defective or encumbered title</p>
      </Fade>
      </div>  
    </Carousel.Item>
   
   </Carousel>
 
   </section>

);
}
}

export default SlideBanner






