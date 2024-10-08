import React from 'react';
import Layout from '../../../components/Layout'
import corporate from './3.jpg'


const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="RACHEAL TOBI" src={corporate}/>
				<h4> RACHAEL TOBI (CIPM)</h4>
				<p className="senior"> Human Resource Manager</p>
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email:rachael.tobii@gmail.com
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8162809457">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8162809457">
                                       (+234) 8162809457
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">	
	Rachael Tobi is the Human Resource Manager at Grail Attorneys.
		 </p>
		 <p className="details">
		 Rachael is a certified Human Resource Practitioner with years of industry 
		 experience overseeing the Human Resource Department and working to implement programs and changes that enhance the firm. 
		 Knowledgeable about employment law and effective organizational planning. 
		 Highly competent communicator skilled in developing initiatives that improves the firm’s profitability and growth.	
		 </p>
		 <p className="details">
		 Rachael has proven track record of fostering collaborative and innovative work environment resulting in excellent work, 
		 and leading teams to work towards the firm’s goals. 
		 Experienced in leveraging technology to enhance online engagement and brand interaction which sets her apart.	
		 </p>
		 <p className="details">
		 Rachael has taken keen interest in HRCI and has taken steps to broaden her horizon.	
		 </p>
            
	</div> 
	
		</div>
	
    </section>
	</Layout>

)

export default Partner1