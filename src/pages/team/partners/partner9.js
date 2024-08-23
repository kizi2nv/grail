import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import met from './7.jpg'




const Partner1 = () => (
<Layout>
    <section className="part  ">
	


     <div className="first">
	 <figure className="k">
                <img className="jp" alt="Attorney Tobi Igho" src={met}/>
				<h4> DIVINE CHIDIEBERE CHIMEREMEZE</h4>
				<p> Associate</p>
				<div>
				<a className="bio-page__link" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="bio-page__link" href="tel:(+234) 8115416519">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8115416519.">
                                       (+234) 8115416519
							  </span>
				       </a>
        </figure>
	<p className="details">	Divine is an associate at Grail Attorneys.</p>
	<p className="details">	Divine is a purpose driven attorney, diligent 
	and proficient in communication and strategy, a team player who strives for excellence and integrity.</p>
		
	<p className="details">	Divine is proficient in litigation and ADR,
	 skilled in negotiation and management, 
	with experience in criminal practice, cooperate practice, METs, and property law.</p>
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1