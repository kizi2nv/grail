import React from 'react';
import Layout from '../../../components/Layout'
import Fade from "react-reveal/Fade"
import './area.scss'
import corporate from './alt.png'
import met from './met.jpg'
import right from './human.png'
import litigation from './lit.png'
import intellectual from './intel.png'
import election from './ele.png'
import estate from './home.png'
import oil from './oil.png'
import energy from './energy.png'
import adr from './adr.png'
import mets from './mets.png'
import { Link } from 'gatsby'


const Area = () => (
	<Layout>
	<section className="area_container">
         <div className="area_head">
             <div  className="bk">
         <Fade left >
            <h2 >practice areas</h2>
        </Fade>
        </div>
        </div> 
    <div className="practices">
        <div className="human">
             <figure className="">
                        <img className="jpg" alt="Attorney Tobi Igho" src={right}/>
            </figure>
            <h4>human right and criminal justice expert</h4>
            <p> bccjfc fgctrdfxfgxtxuteux fgxjxftuxfgx itxitsetxxezuxdfxd</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div className="litigation">
        <figure className="">
                      
                        <img className="jpg" alt="Attorney Tobi Igho" src={adr }/>
                   
         </figure>
            <h4>litigation and alterntive dispute resolution(adr)  expert</h4>
            <p>vhjvljvjhj cfuypuyfuydgc ghclhgvhgv urdwzklhj ;kkkkjfdtrerr</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div className="corperate">
        <figure className="">
                
                        <source media="(min-width: 992px)" srcSet={corporate}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={corporate}/>
                
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
                        <img className="jpg" alt="Attorney Tobi Igho" src={estate}/>
                    </picture>
                </figure>
            <h4>real estate and property management law</h4>
            <p>ugpuygup fyufy fhvbvbcvvcx zdsaaeweryi himkklpi joihhjb jhvvyitft</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
        <div>
        <figure className="intellectual">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={intellectual}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={intellectual}/>
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
                        <img className="jpg" alt="Attorney Tobi Igho" src={election}/>
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
                        <source media="(min-width: 992px)" srcSet={mets}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={mets}/>
                    </picture>
        </figure>
            <h4>media entertainment technology and sports law(mets)</h4>
            <p>gjhfh jhgjfgjf dytdt</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        <div>
        <figure className="met">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={energy}/>
                        <img className="jpg" alt="Attorney Tobi Igho" src={energy}/>
                    </picture>
        </figure>
            <h4>Energy law</h4>
            <p>gjhfh jhgjfgjf dytdt</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>

        <div>
        <figure className="met">
                    <picture> 
                        <img className="jpg" alt="Attorney Tobi Igho" src={oil}/>
                    </picture>
        </figure>
            <h4>Oil and Gas law</h4>
            <p>gjhfh jhgjfgjf dytdt</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more...
              </Link>
        </div>
        </div>

    </section>
	</Layout>
)

export default Area