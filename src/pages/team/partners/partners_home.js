import React from 'react';
import Layout from '../../../components/Layout'

import PartnerPreview1 from '../partners/partner_components/partner1_preview'
import PartnerPreview2 from './partner_components/partner2_preview';
import PartnerPreview3 from './partner_components/partner3_preview';
import PartnerPreview4 from './partner_components/partner4_preview';
import PartnerPreview5 from './partner_components/partner5_preview';
import PartnerPreview6 from './partner_components/partner6_preview';
import PartnerPreview7 from './partner_components/partner7_preview';
import PartnerPreview8 from './partner_components/partner8_preview';

import './partner.scss'





const Partners = () => (
	<Layout>
    <div className="partner_container">
	<PartnerPreview1/>
	<PartnerPreview2/>
	<PartnerPreview3/>
	<PartnerPreview4/>
	<PartnerPreview5/>
	<PartnerPreview6/>
	<PartnerPreview7/>
	<PartnerPreview8/>
	</div>
	</Layout>
)

export default Partners