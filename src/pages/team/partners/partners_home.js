import React from 'react';
import Layout from '../../../components/Layout'

import PartnerPreview1 from '../partners/partner_components/partner1_preview'
import PartnerPreview2 from './partner_components/partner2_preview';
import PartnerPreview3 from './partner_components/partner3_preview';
import PartnerPreview4 from './partner_components/partner4_preview';
import PartnerPreview5 from './partner_components/partner5_preview';
import PartnerPreview6 from './partner_components/partner6_preview';
import PartnerPreview7 from './partner_components/partner7_preview';
import PartnerPreview8 from './partner_components/partner8_preview';

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
	{/*<PartnerPreview1/>
	<PartnerPreview2/>
	<PartnerPreview3/>
	<PartnerPreview4/>
	<PartnerPreview5/>
	<PartnerPreview6/>
	<PartnerPreview7/>
	<PartnerPreview8/>*/}

    
    <div className="practices ">
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>
           
            <h4>igho</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/about_us/about_us">
                 Read more
              </Link>
        </div>
      
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={dad}/>
            </figure>
           
            <h4>dad</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/about_us/about_us">
                 Read more
              </Link>
        </div>
        <div className="litigation">
        <figure className="">
                   
                      
                        <img className="jpg" alt="Attorney Tobi Igho" src={litigation }/>
                   
                </figure>
				<h4>White beards</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div className="human">
             <figure className="0k">
                        <img className="jpg" alt="Attorney Tobi Igho" src={nd}/>
            </figure>
           
            <h4>New guy</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/about_us/about_us">
                 Read more
              </Link>
        </div>
        <div className="corperate">
        <figure className="0k">    
                        <img className="jpg" alt="Attorney Tobi Igho" src={corporate}/>
                </figure>
				<h4>wifee</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="0k">
                    <picture>      
                        <img className="jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
				<h4>boss</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
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
				<h4>Name</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        <div>
        <figure className="election">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={election}/>
                    </picture>
                </figure>
				<h4>Name</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={met}/>
                    </picture>
        </figure>
		<h4>Name</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
		<div>
        <figure className="met">
                    <picture>
                        <img className="jpg" alt="Attorney Tobi Igho" src={last}/>
                    </picture>
        </figure>
		<h4>Name</h4>
            <p>portfolio</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
            </Link>
        </div>

        </div>

	</div>
	</Layout>
)

export default Partners