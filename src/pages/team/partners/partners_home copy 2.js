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





import './area.scss'
import corporate from './3.jpg'
import met from './met.jpg'
import right from './3.png'
import litigation from './2.jpg'
import intellectual from './5.jpg'
import election from './6.jpg'
import estate from './4.jpg'
import { Link } from 'gatsby'




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

    
    <div className="practices">
        <div className="human">
             <figure className="">
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>
           
            <h4>human right and criminal justice expert</h4>
            <p> bccjfc fgctrdfxfgxtxuteux fgxjxftuxfgx itxitsetxxezuxdfxd</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div className="litigation">
        <figure className="">
                   
                      
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={litigation }/>
                   
                </figure>
            <h4>litigation expert</h4>
            <p>vhjvljvjhj cfuypuyfuydgc ghclhgvhgv urdwzklhj ;kkkkjfdtrerr</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div className="corperate">
        <figure className="">
                
                        <source media="(min-width: 992px)" srcSet={corporate}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={corporate}/>
                
                </figure>
            <h4>corperate and commercial law practice</h4>
            <p> ghkvjlv jguotdrsdrt sfxfg xgtrdrdiytdytfoytdty doytdoydtdgh</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="estate">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={estate}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
            <h4>real estate and property management</h4>
            <p>ugpuygup fyufy fhvbvbcvvcx zdsaaeweryi himkklpi joihhjb jhvvyitft</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="intellectual">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={intellectual}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={intellectual}/>
                    </picture>
                </figure>
            <h4>intellectual property law</h4>
            <p>ugpuygup fyufy fhvbvbcvvcx zdsaaeweryi himkklpi joihhjb jhvvyitfto </p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        <div>
        <figure className="election">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={election}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={election}/>
                    </picture>
                </figure>
            <h4>election petition expert</h4>
            <p>vknbvkvb vckhvckghcfxc fixidyxfxkfgcg</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={met}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={met}/>
                    </picture>
        </figure>
            <h4>media entertainment technology and sports law</h4>
            <p>gjhfh jhgjfgjf dytdt</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>

        </div>



	</div>
	</Layout>
)

export default Partners