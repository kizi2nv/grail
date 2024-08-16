import React from 'react';
import Layout from '../../../components/Layout'
import Fade from "react-reveal/Fade"
import './area.scss'
import corporate from './alt.png'
import met from './met.jpg'
import right from './human.png'
import litigation from './lit.png'
import intellectual from './intel.png'
import election from './ele.png'
import estate from './home.png'
import oil from './oil.png'
import energy from './energy.png'
import adr from './adr.png'
import mets from './mets.png'
import { Link } from 'gatsby'


const Area = () => (
	<Layout>
	<section className="area_container">
         <div className="area_head">
             <div  className="bk">
         <Fade left >
            <h2 >practice areas</h2>
        </Fade>
        </div>
        </div> 
    <div className="practices">
        <div className="human">
             <figure className="">
                        <img className="jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>
            <h4>human right and criminal justice expert</h4>
            <p>Our Human Rights and Criminal Justice department consist of some of the finest Human Rights and Criminal Justice lawyers exclusively devoted to defending and protecting the rights of our clients accused of criminal offences.
			 Whether they are charged with a misdemeanour, a felony or a serious/capital offence, we walk by them every step of the way.... <span>
             <Link className="" to="/team/area/human/human">
                 Read more
              </Link>
             </span>
		 </p>
            
        </div>
        <div className="litigation">
        <figure className="">
                      
                        <img className="jpg" alt="Attorney Tobi Igho" src={adr }/>
                   
         </figure>
            <h4>litigation and alterntive dispute resolution(adr)  expert</h4>
            <p>Over the years, we have been acknowledged and renowned as a litigation law firm across all practice areas. Our litigation department has enjoyed enviable reputation as seasoned advocate dedicated to the cause of our clients in contentious trial and appellate matters. Regardless, the interest of our client remains our priority. Thus, the option of out- of-court settlement that gives real value to our
			 client is always open in other to save our clients time and resources alongside preserving valuable business relationship.... <span>
             <Link className="" to="/team/area/litigation/litigation">
                 Read more
              </Link>
             </span>
		</p>
        </div>
        <div className="corperate">
        <figure className="">
                
                        <source media="(min-width: 992px)" srcSet={corporate}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={corporate}/>
                
                </figure>
            <h4>corperate and commercial law practice</h4>
            <p>Grail Attorney’s corporate and commercial law department has over the years offered real 
			time practical corporate and commercial advice to both 
			multinational corporations and start-up 
			businesses in various sectors on legal issues which has massively impacted their businesses..... <span>
             <Link className="" to="/team/area/corporate/corporate">
                 Read more
              </Link>
             </span>
		 </p>
            
        
        </div>
        <div>
        <figure className="estate">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={estate}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
            <h4>real estate and property management law</h4>
            <p>Our diligent team of lawyers in this department provides
			 top notch advisory services to both our local and international clients on all aspects of real estate and property management..... <span>
             <Link className="" to="/team/area/estate/estate">
                 Read more
              </Link>
             </span>
		 </p>
        
        </div>
        <div>
        <figure className="intellectual">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={intellectual}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={intellectual}/>
                    </picture>
                </figure>
            <h4>intellectual property law</h4>
            <p>Our intellectual property law department is fully engaged in diverse areas of intellectual property.  .... <span>
             <Link className="" to="/team/area/intellectual/intellectual">
                 Read more
              </Link>
             </span> 
		 </p>
        
        </div>
        <div>
        <figure className="election">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={election}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={election}/>
                    </picture>
                </figure>
            <h4>election petition expert</h4>
            <p>Election petition is sui generis.
			 Our capacity building programme has helped our 
			 attorneys carve a niche for themselves in this unique area of law. .... <span>
             <Link className="" to="/team/area/election/election">
                 Read more
              </Link>
             </span>
		 </p>
         
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={mets}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={mets}/>
                    </picture>
        </figure>
            <h4>media entertainment technology and sports law(mets)</h4>
            <p>This is an emerging area of law and due to our attention to details and quest for growth we delved into it as this industry is in dire need of innovative and brilliant solicitors and litigators. We have over the years brought our collective
			 experience and solution driven mindset towards solving complex legal issues in the creative, technology and sport industry..... <span>
             <Link className="" to="/team/area/met/met">
                 Read more
              </Link>
             </span>
		 </p>
         
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={energy}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={energy}/>
                    </picture>
        </figure>
            <h4>Energy law</h4>
            <p>Climate change has expanded the scope of the energy/power industry, with renewable energy the new normal. This without an iota of doubt has led to rapid development in the energy landscape which is a critical sector in the development of any economy. With growth comes opportunities and challenges, thus, 
			the need for the advisory service of an expert energy law solicitor to help harness the opportunities of this ever growing industry..... <span>
             <Link className="" to="/team/area/energy/energy">
                 Read more
              </Link>
             </span> 
		 </p>
        </div>

        <div>
        <figure className="met">
                    <picture> 
                        <img className="jpg" alt="Attorney Tobi Igho" src={oil}/>
                    </picture>
        </figure>
            <h4>Oil and Gas law</h4>
            <p>GThe fulcrum of the Nigeria economy is oil and gas. The 
			important and complex nature of this industry has brought about so many legal issues that demands expert legal services..... <span>
             <Link className="" to="/team/area/oil/oil">
                 Read more
              </Link>
             </span>
		 </p>
            
        </div>
        </div>

    </section>
	</Layout>
)

export default Area