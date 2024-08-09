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
       <h3> hello lets put this words here</h3> 
      </Fade>
      <Fade left>
      <p> The text to follow</p>
      </Fade>
      </div> 
   </Carousel.Item>

   <Carousel.Item style={{"height":"350px"}} interval={5200} className="sldtwo_bg">
                  
   <div className="word" >
     <Fade right>
       <h3> hello lets put this words here</h3> 
      </Fade>
      <Fade left>
      <p> The text to follow</p>
      </Fade>
      </div>   
     </Carousel.Item>   
     <Carousel.Item className="sldfour_bg" style={{"height":"350px"}} interval={5200}>
                  <div className="word">
     <Fade right>
       <h3> hello lets put this words here</h3> 
      </Fade>
      <Fade left>
      <p> The text to follow</p>
      </Fade>
      </div>                                                     
     </Carousel.Item>   
                           
    <Carousel.Item className="sldthree_bg" style={{"height":"350px"}} interval={5200}>
                 <div className="word" >
     <Fade right>
       <h3> hello lets put this words here</h3> 
      </Fade>
      <Fade left>
      <p> The text to followww</p>
      </Fade>
      </div>  
    </Carousel.Item>
   
   </Carousel>
 
   </section>

);
}
}

export default SlideBanner






