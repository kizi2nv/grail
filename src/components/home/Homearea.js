import React from 'react';

import Fade from "react-reveal/Fade"
import './area.scss'
import corporate from './alt.png'
import met from './met.jpg'
import right from './human.png'
import litigation from './lit.png'
import intellectual from './intel.png'
import election from './ele.png'
import estate from './home.png'
import adr from './adr.png'
import mets from './adr.png'
import { Link } from 'gatsby'


const Homearea = () => (
	<section className="">
         <div className="">
             <div  className="h2bkg">
         <Fade left >
            <h2 className="h2bkg">practice areas</h2>
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
            <h4>litigation and alternative dispute resolution (adr) expert</h4>
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
            <h4>real estate and property management</h4>
            <p>ugpuygup fyufy fhvbvbcvvcx zdsaaeweryi himkklpi joihhjb jhvvyitft</p>
            <Link className="navbar-item" to="/team/area/area">
                 Read more
              </Link>
        </div>
       
        </div>

    </section>
)

export default Homearea