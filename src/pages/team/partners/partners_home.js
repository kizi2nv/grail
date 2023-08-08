import React from 'react';
import Layout from '../../../components/Layout'

import PartnerPreview1 from '../partners/partner_components/partner1_preview'
import PartnerPreview2 from './partner_components/partner2_preview';
import PartnerPreview3 from './partner_components/partner3_preview';
import PartnerPreview4 from './partner_components/partner4_preview';

import './partner.scss'





const Partners = () => (
	<Layout>
    <div className="partner_container">
	<PartnerPreview1/>
	<PartnerPreview2/>
	<PartnerPreview3/>
	<PartnerPreview4/>
	</div>
	</Layout>
)

export default Partners