import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import estate from './4.jpg'




const Partner1 = () => (
<Layout>
    <section className="part  ">
     <div className="first">
	
<figure className="k">
                <img className="jp" alt="Attorney Tobi Igho" src={estate}/>
				<h4>  EFFA PAULINUS, OFEM</h4>
				<p> Senior Associate</p>
				<div>
				<a className="bio-page__link" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="bio-page__link" href="tel:(+234) 8162874331 ">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8162874331.">
                                       (+234) 8162874331
							  </span>
				       </a>
        </figure>
	<p className="details">	Paulinus is a Senior Associate at Grail Attorneys.</p>
		
	<p className="details">Paulinus is a goal oriented attorney, discreet and proficient in litigation with great interest and expert skills in Police, EFCC and DSS negotiation. </p>
	<p className="details">Paulinus promotes unity and charge colleagues to dare the impossible with the intent of surmounting every challenge.</p>     
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1