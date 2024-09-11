import React from 'react';
import Layout from '../../../components/Layout'
import intellectual from './5.jpg'


const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="Attorney LUCKY JAMES" src={intellectual}/>
				<h4>  LUCKY JAMES</h4>
			<p  className="senior"> Associate</p>
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email: luckyjamesochuko@gmail.com
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8085741081">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8085741081.">
                                       (+234) 8085741081
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">
	Lucky James is an associate at Grail Attorneys.
	</p>
		
	<p className="details"> Lucky is a very diligent, vibrant and goal 
	driven attorney, who is very proficient in criminal litigation, corporate practice and intellectual property law.</p>
	<p className="details"> His immense advocacy and ADR skills have also enabled him carve a niche for
	 himself in representing clients effectively both in litigation matters and out of court dispute resolution.</p> 
	<p className="details"></p>
	<p className="details"></p>
	</div> 
	</div>
    </section>
	</Layout>

)

export default Partner1