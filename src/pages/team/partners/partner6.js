import React from 'react';

import Layout from '../../../components/Layout'

import estate from './4.jpg'




const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="Attorney EFFA PAULINUS, OFEM" src={estate}/>
				<h4>  EFFA PAULINUS, OFEM</h4>
				<p className="senior"> Senior Associate</p>
				<div  className="mail">
				<a className="ii" href="gmail.com">
									Email:effapaulinus@gmail.com
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8162874331 ">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8162874331.">
                                       (+234) 8162874331
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">	Paulinus is a Senior Associate at Grail Attorneys.</p>
		
	<p className="details">Paulinus is a goal oriented attorney, discreet and proficient in litigation with great interest and expert skills in Police, EFCC and DSS negotiation. </p>
	<p className="details">Paulinus promotes unity and charge colleagues to dare the impossible with the intent of surmounting every challenge.</p>     
	</div> 
	</div>
    </section>
	</Layout>

)

export default Partner1