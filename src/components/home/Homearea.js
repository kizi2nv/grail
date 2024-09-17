import React from 'react';
import Fade from "react-reveal/Fade"
import './area.scss'
import corporate from './alt.png'
import right from './human.png'
import estate from './home.png'
import adr from './adr.png'
import { Link } from 'gatsby'


const Homearea = () => (
	<section className="hh">
         <div className="">
             <div  className="h2bkg">
         <Fade left >
            <h2 className="h2bkg">practice areas</h2>
        </Fade>
        </div>
        </div> 
    
    <div className="practices">
        <div className="human">
             <figure className="">
                        <img className="jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>        
            <h4>human right and criminal justice experts</h4>
            <p> Have you been arrested, charged with a crime or have your rights been infringed upon? 
                
                Our team is here to help guide your path to freedom and justice if you seek Unparalleled advocacy and proven results.   </p>
              <Link className="navbar-item" to="/team/area/human/human">
                 Read more
              </Link>
        </div>
        <div className="litigation">
        <figure className="">
                   
                      
                        <img className="jpg" alt="Attorney Tobi Igho" src={adr }/>
                   
                </figure>
            <h4>litigation and alternative dispute resolution (adr) </h4>
            <p>we have established ourselves as a distinguished leader in the realms of 
                litigation and ADR, setting 
                benchmarks through our unwavering dedication and client satisfaction. </p>
                <Link className="navbar-item" to="/team/area/litigation/litigation">
                 Read more
              </Link>
        </div>
        <div className="corperate">
        <figure className="">
                
                        <source media="(min-width: 992px)" srcSet={corporate}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={corporate}/>
                
                </figure>
            <h4>corporate and commercial law practice</h4>
            <p>We take pride in our innovative solution driven mindset aimed
                 at protecting 
                the best interest of our clients in all Corporate/Commercial transaction.</p>
                <Link className="navbar-item" to="/team/area/corporate/corporate">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="estate">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={estate}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
            <h4>real estate and property management</h4>
            <p>Due diligence is our watchword. We  are equiped with modern and international best practice
                 methodologies to ensure our esteemed client do not purchase defective or encumbered title.
            </p>
            <Link className="navbar-item" to="/team/area/estate/estate">
                 Read more
              </Link>
        </div>
       
        </div>

    </section>
)

export default Homearea