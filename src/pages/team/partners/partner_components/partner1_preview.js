import React from 'react'
import { Link } from 'gatsby'
import './partner_preview.scss'
import logo from '../../../../../static/img/1.png'

const  PartnerPreview1 = () => (
    <div className="partner_main">
        <div className="partner_div">
            <figure className="partner_fig">
            <img src={logo} alt="partners"  data-aos="fade"/>
            </figure>
        </div>
        <div className="partner_descrpt">
            <h2>Partner name</h2>
            <p>He brings over 10 years of litigation experience to his practice.
		 His commitment to his clients and his passion about righting the wrongs of a flawed legal system, are only a few of the reasons why you will want him in your corner.
		 </p>
        <blockquote className="wp-block-quote">
		<p>He might not always tell you what you want to hear, 
			but he will work tirelessly to protect your rights 
			and to secure the best possible outcome for your case.
		</p>
		</blockquote>
        <p className="has-regular-font-size">Prior to dedicating his practice exclusively to 
			criminal defense. In his native, his practice ranged from civil litigation, 
			employment
            
                <Link  to="/team/partners/partner1"> Full Resume<span>.....</span></Link>
            </p>
        </div>

    </div>
)

export default PartnerPreview1