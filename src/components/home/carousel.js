import React from 'react'
import  './carousel.scss';
import Carousel from 'react-bootstrap/Carousel';




class  Carousels extends React.Component{ 
    
 

    render(){

  return(

  

<section className="bgr text-center">
<div className="headline f1 color-white">What Clients Say</div>
   <Carousel >
     <Carousel.Item style={{"height":"350px"}} interval={5200}>
                   <div className="carousel-item active" >
                     <div className="t pd">
                      <div itemProp="review"  className="review-car__slide ">
                         <span className="sr-only" itemProp="itemReviewed" >
                           <span itemProp="name">GrailAttorneys</span>
                           <span itemProp="telephone">(+234) 814-775-8121</span>
                           <span itemProp="address">225 address St., Suite 2B Unuahia,Abia StateP.O Box</span>
                         </span>
                         </div>
                         <div className="review-car__title" itemProp="name">
                         </div>
  
                         <div itemProp="reviewBody" className="review-car__desc">
                           <p className="m-0 color-white">
                            GrailAttorneys represented me in a case .
                  
                            I found them to be courteous, 
                            responsive and very professional. 
                            I would highly GrailAttorneys, 
                            if the situation arises in the future when I need legal representation -<br/>
                               </p>
                         </div>
  
                                              
                         <div className="review-car__autor clr text-uppercase mt-3 f6">
                           <strong>
                             — 
                            
                           <span itemProp="author" itemScope="" >
                             <span itemProp="name">
                               P.K. | Former Client
                               </span>
                           </span>
                           </strong>
                         </div>
                        
  
                       </div>
                     </div>
                          
  
      </Carousel.Item>

       <Carousel.Item style={{"height":"350px"}} interval={5200}>
       <div className="row">
              <div className=" col t" >
                  <p>
                      The Staff were always helpful and 
                      deligent in the delivary of the job keep it Mr. Syl
                  </p>
              </div>
      </div>
      <div className="review-car__autor clr text-uppercase mt-3 f6">
                           <strong>
                             — 
                            
                           <span itemProp="author"  itemType="https://schema.org/Person">
                             <span itemProp="name">
                               J.G. | Former Client
                               </span>
                           </span>
                           </strong>
                         </div>
       </Carousel.Item>
       


      
   </Carousel>

   </section>

);
}
}

export default Carousels


