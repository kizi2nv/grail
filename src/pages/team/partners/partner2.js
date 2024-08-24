import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import right from './3.png'
import dad from './dad.png'



const Partner1 = () => (
<Layout>
    <section className="parti">
     <div className="hey">
	 <figure className="">
                <img className="" alt="JOSEPH OCHUKO TOBI" src={dad}/>
				<h4>JOSEPH OCHUKO TOBI</h4>
				<p  className="senior"> Senior Partner</p>
				<div className="mail">
				<a className="ii" href="gmail.com">
									Email:
                                    <span itemProp="email" content="">
                                      
                                    </span>
                                 </a>
				</div>
                          <a className="ii" href="tel:(+234) 8052151167">
								  Phone No.:
                                <span itemProp="telephone" content="(+234) 8052151167">  (+234) 8052151167 
							  </span>
				       </a>
        </figure>
	<div>
	<p className="">	Joseph is a Senior
	 Partner at Grail Attorneys and the principal counsel of 
	 Joseph Ochuko Tobi & Co (IGRA CHAMBERS).</p>

	 <p className="">Joseph is a senior lawyer per excellence. 
	 He has over three (3) decades of core litigation/advocacy experience. He is regarded as 
	 one of the finest in the legal profession by most of the leading independent legal directories in Nigeria. </p>
		
	 <p className="">	He has been involved in numerous contentious matters in both trial and appellate
	  courts on all practice areas and have delivered favourable outcomes as a result of his expert advocacy skills.</p>

	  <p className="">	He is a full-fledged Bar man, a member
	   of the Nigeria Bar Association, African Bar Association and International Bar Association.</p>
	   </div>      
	</div> 
	
		
	
    </section>
	</Layout>

)

export default Partner1