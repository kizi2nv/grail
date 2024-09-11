import React from 'react';
import Layout from '../../../components/Layout'

import election from './6.jpg'



const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="ELEKWACHI CHIDERA" src={election}/>
				<h4>  ELEKWACHI CHIDERA</h4>
				<p  className="senior"> Associate</p>
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email:chideraelekwachi@gmail.com
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8132818508">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8132818508.">
                                       (+234) 8132818508
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">	Chidera is an associate at Grail Attorneys.</p>
	<p className="details"> Chidera is a dynamic and emerging attorney with 
	a strong foundation in civil and criminal litigation, alternative dispute resolution (ADR), real estate and property management. She graduated with honors from Nigerian law school and holds a bachelor’s degree in law from the Abia State University Uturu. Her commitment to social justice and client advocacy
	 drives her approach to the law, where she combines meticulous research with passionate representation. 	</p>
	<p className="details">	Chidera is known for her pragmatic approach, strong ethical standards, and ability to navigate complex legal landscapes with confidence and integrity. She is recognized for her keen analytical skills and her ability to connect with clients, providing both legal expertise and empathetic support.</p>
	<p className="details">	</p>
		
            
	</div> 
	
	</div>
	
    </section>
	</Layout>

)

export default Partner1