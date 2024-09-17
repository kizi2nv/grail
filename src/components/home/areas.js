import React from 'react'
import Fade from "react-reveal/Fade"
import { Link } from 'gatsby'

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
                     human right and criminal <br/> justice expert
                                
                    </div>
							
                    <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
                </div>
            </div>
            <div className="drug a">
                            <div className="">
                                <div className="">
                                real estate and property managemen              
                                </div>
                                <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
                             </div>
                        </div>
            <div className="theft a" >
                        <div className="-container">
                            <div className="">
                            corporate and <br/>commercial law practice
                                                
                            </div>
                            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
                         </div>
                        </div>
            <div className="oui a" >
                        <div className="-container">
                       <div className="">
                       litigation <br/> expert               
                        </div>
                        <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
                    </div>
                    </div>                  
                    <div className="public a" >
                        <div className="">
                            <div className="">
                            media entertainment technology and sports law<br/>
                                Offenses           
                            </div>
                          
                            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
                         </div>
                    </div>
                    
    </div>
    </Fade>
    </map>
</section>

)
 export default Areas