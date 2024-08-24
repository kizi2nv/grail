import React from 'react';
import Layout from '../../../components/Layout'
import litigation from './2.jpg'



const Partner1 = () => (
<Layout>
<section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="ANDREW NWANKWO" src={litigation}/>
				<h4>ANDREW NWANKWO</h4>
				
				<p  className="senior">  Associate Partner</p>
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 7067827647">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 7067827647">
                                       (+234) 7067827647
							  </span>
				       </a>
        </figure>
		<div>
	<p className="details">	
	Andrew is an Associate Partner at Grail Attorneys.
</p>
<p className="details">	
Andrew is a highly respected legal practitioner and an expert in litigation, competition law and corporate consultancy.
</p>
<p className="details">	

With over a decade experience, he sits on the boards of various companies, bringing extensive legal and business acumen to Grail Attorneys.
</p>
<p className="details">	

Andrew heads the corporate/commercial department at Grail Attorneys.
</p>
<p className="details">	
His insights are crucial in navigating legal complexities and ensuring robust outcomes in every brief handled at Grail Attorneys.
</p>      
	</div> 
	
	</div>
	
    </section>
	</Layout>

)

export default Partner1