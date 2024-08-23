import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import election from './6.jpg'



const Partner1 = () => (
<Layout>
    <section className="part  ">
     <div className="first">
	 <figure className="k">
                <img className="jp" alt="Attorney Tobi Igho" src={election}/>
				<h4>  ELEKWACHI CHIDERA</h4>
				<p> Associate</p>
				<div>
				<a className="bio-page__link" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="bio-page__link" href="tel:(+234) 8132818508">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8132818508.">
                                       (+234) 8132818508
							  </span>
				       </a>
        </figure>
	<p className="details">	Chidera is an associate at Grail Attorneys.</p>
	<p className="details"> Chidera is a dynamic and emerging attorney with 
	a strong foundation in civil and criminal litigation, alternative dispute resolution (ADR), real estate and property management. She graduated with honors from Nigerian law school and holds a bachelor’s degree in law from the Abia State University Uturu. Her commitment to social justice and client advocacy
	 drives her approach to the law, where she combines meticulous research with passionate representation. 	</p>
	<p className="details">	Chidera is known for her pragmatic approach, strong ethical standards, and ability to navigate complex legal landscapes with confidence and integrity. She is recognized for her keen analytical skills and her ability to connect with clients, providing both legal expertise and empathetic support.</p>
	<p className="details">	</p>
		
            
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1