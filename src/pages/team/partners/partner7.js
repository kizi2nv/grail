import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import intellectual from './5.jpg'




const Partner1 = () => (
<Layout>
    <section className="part  ">
	



     <div className="first">
	 <figure className="k">
                <img className="jp" alt="Attorney Tobi Igho" src={intellectual}/>
				<h4>  LUCKY JAMES.</h4>
				<p> Associate</p>
				<div>
				<a className="bio-page__link" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="bio-page__link" href="tel:(+234)8085741081">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8085741081.">
                                       (+234) 8085741081
							  </span>
				       </a>
        </figure>
	<p className="details">
	Lucky James is an associate at Grail Attorneys.
	</p>
		
	<p className="details"> Lucky is a very diligent, vibrant and goal 
	driven attorney, who is very proficient in criminal litigation, corporate practice, intellectual property practice.</p>
	<p className="details"> His immense advocacy and ADR skills have also enabled him carve a niche for
	 himself in representing clients effectively both in litigation matters and out of court dispute resolution.</p> 
	<p className="details"></p>
	<p className="details"></p>
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1