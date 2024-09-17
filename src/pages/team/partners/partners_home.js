import React from 'react';
import Layout from '../../../components/Layout'

import './partner.scss'

import './area.scss'
import corporate from './3.jpg'
import nd from './2nd.jpg'
import met from './7.jpg'
import right from './3.png'
import dad from './dad.png'
import litigation from './2.jpg'
import intellectual from './5.jpg'
import election from './6.jpg'
import estate from './4.jpg'
import last from './8.jpg'
import { Link } from 'gatsby'
import Fade from "react-reveal/Fade"



const Partners = () => (
	<Layout>
       

		 <div className="team_head">
             <div  className="bk0">
         <Fade left >
            <h2 > Our Team</h2>
        </Fade>
        </div>
        </div> 

    <div className="partner_container">
	
   <p>We take pride in our pragmatic, bespoke and efficient legal representation which has 
                been made possible by our indefatigable team of highly experienced, diligent and purpose-driven 
                individuals.</p>
    
    <div className="practices ">
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>
           
            <h4>IGHO EMMANUEL TOBI</h4>
            <p>Managing Partner</p>
            <Link className="navbar-item" to="/team/partners/partner1">
                 Read more
              </Link>
        </div>
      
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={dad}/>
            </figure>
           
            <h4>JOSEPH OCHUKO TOBI</h4>
            <p>Senior Partner</p>
            <Link className="navbar-item" to="/team/partners/partner2">
                 Read more
              </Link>
        </div>
        <div className="litigation">
        <figure className="">                      
                        <img className="jpg" alt="Attorney Tobi Igho" src={litigation }/>
                   
                </figure>
				<h4>ANDREW NWANKWO</h4>
				<p> Associate Partner</p>
            <Link className="navbar-item" to="/team/partners/partner3">
                 Read more
              </Link>
        </div>
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={nd}/>
            </figure>
           
            <h4> FOLMI YOHANNA, L.L.B, BL, LLM, Ph.D (in view)</h4>
				<p> Intellectual property consultant</p>
            <Link className="navbar-item" to="/team/partners/partner4">
                 Read more
              </Link>
        </div>
        <div className="corperate">
        <figure className="0k">    
                        <img className="jpg" alt="Attorney Tobi Igho" src={corporate}/>
                </figure>
                <h4> RACHAEL TOBI (CIPM)</h4>
				<p> Human Resource Manager</p>
            <Link className="navbar-item" to="/team/partners/partner5">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="0k">
                    <picture>      
                        <img className="jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
                <h4>  EFFA PAULINUS, OFEM</h4>
				<p> Senior Associate</p>
            <Link className="navbar-item" to="/team/partners/partner6">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="intellectual">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={intellectual}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={intellectual}/>
                    </picture>
                </figure>
                <h4>  LUCKY JAMES</h4>
				<p> Associate</p>
            <Link className="navbar-item" to="/team/partners/partner7">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="election">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={election}/>
                    </picture>
                </figure>
				<h4>  ELEKWACHI CHIDERA</h4>
				<p> Associate</p>
            <Link className="navbar-item" to="/team/partners/partner8">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={met}/>
                    </picture>
        </figure>
        <h4> DIVINE CHIDIEBERE CHIMEREMEZE</h4>
				<p> Associate</p>
            <Link className="navbar-item" to="/team/partners/partner9">
                 Read more
              </Link>
        </div>
		<div>
        <figure className="met">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={last}/>
                    </picture>
        </figure>
        <h4> CYNTHIA IFUNANYACHI</h4>
			<p> Chief clerical officer</p>
            <Link className="navbar-item" to="/team/partners/partner10">
                 Read more
              </Link>
        </div>

        </div>

	</div>
	</Layout>
)

export default Partners