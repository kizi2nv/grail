import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import last from './8.jpg'



const Partner1 = () => (
<Layout>
    <section className="part  ">
     <div className="first"> 

<figure className="k">
                <img className="jp" alt="Attorney Tobi Igho" src={last}/>
				<h4> CYNTHIA IFUNANYACHI</h4>
				<p> Chief clerical officer</p>
				<div>
				<a className="bio-page__link" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="bio-page__link" href="tel:(+234) 7066502943">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 7066502943.">
                                       (+234) 7066502943
							  </span>
				       </a>
        </figure>
	<p className="details">	Cynthia is a chief clerical officer at Grail Attorneys.</p>
	<p className="details">Cynthia is a vibrant personnel that heads the clerical department and over the years have shown her 
	ability to keep the office running smoothly, managing schedules, and organizing documents with precision.	</p>
	<p className="details">Cynthia has a keen eye for details and ability to prioritize tasks effectively.	</p>
		
            
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1