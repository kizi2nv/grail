import React from 'react';
import Layout from '../../../components/Layout'
import met from './7.jpg'




const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt=" DIVINE CHIDIEBERE CHIMEREMEZE" src={met}/>
				<h4> DIVINE CHIDIEBERE CHIMEREMEZE</h4>
				<p  className="senior"> Associate</p>
		
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8115416519">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8115416519.">
                                       (+234) 8115416519
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">	Divine is an associate at Grail Attorneys.</p>
	<p className="details">	Divine is a purpose driven attorney, diligent 
	and proficient in communication and strategy, a team player who strives for excellence and integrity.</p>
		
	<p className="details">	Divine is proficient in litigation and ADR,
	 skilled in negotiation and management, 
	with experience in criminal practice, cooperate practice, METs, and property law.</p>
	</div> 
	
	</div>
	
    </section>
	</Layout>

)

export default Partner1