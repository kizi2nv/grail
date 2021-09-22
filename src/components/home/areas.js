import React from 'react'
import Fade from "react-reveal/Fade"

const Areas = () => (


    
<section >
	<map title="Featured Pages" id="feat-pages_links">
    <Fade right>
        <div className="arean-main">
            <h3>
                Practice Areas
            </h3>
        </div>
        </Fade>
        
        <Fade left>
            <div className=" area_bg">
             <div className="violent a" >
                 <div className="">
                     <div className="">
                         Violent<br/>
                          Crimes          
                    </div>
							
                    <a className="read" href="/practice-areas/drug-crimes/">
                            Read More...
                    </a>
                </div>
            </div>
            <div className="drug a">
                            <div className="">
                                <div className="">
                                   Drug<br/>
                                   Crimes              
                                </div>
				                <a className="read" href="/practice-areas/drug-crimes/">
                                   Read More...
                                </a>
                             </div>
                        </div>
            <div className="theft a" >
                        <div className="-container">
                            <div className="">
                                 Theft / Property<br/>
                                    Crimes              
                            </div>
						    <a className="read" href="/practice-areas/drug-crimes/">
                                Read More...
                                </a>
                         </div>
                        </div>
            <div className="oui a" >
                        <div className="-container">
                       <div className="">
                                 OUI / Motor<br/>
                                 Vehicle Offenses        
                        </div>
						<a className="read" href="/practice-areas/drug-crimes/">Read More...</a>
                    </div>
                    </div>
                    
                    <div className="public a" >
                        <div className="">
                            <div className="">
                                Public Order<br/>
                                Offenses           
                            </div>
							<a className="read" href="/practice-areas/drug-crimes/">Read More...</a>
                         </div>
                    </div>
                    
    </div>
    </Fade>
    </map>
</section>

)
 export default Areas