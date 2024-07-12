import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed'
import Spin from 'react-reveal/Spin'
import { Link } from 'gatsby'
import './banner.scss'
import logo from '../../../static/img/02.png'
 

const Banner = () => (
    <div className="banner_display">
          <LightSpeed left>
               
                <figure className="fig">
                    <img src={logo} alt="Grailattorneys" />
                    
                </figure>
          
            </LightSpeed> 
            <Spin>                     
            <div className="">  
                <div className="pull_down">  
                 
                    <div className="hear" >
                                                        WE HEAR YOU    (testing Git push)
                    </div>
                 
                    <p className="voice"  >
                                                    LET US BE YOUR VOICE   
                    </p>
                
                 
                    <Link to="/contact" className="ai" title="contact">
                    <div className="consult">
                    <a href="/contact">
                                                     REQUEST no CONSULTATION  
                    </a>
                    </div>
                    </Link>
                    
                   
                </div>
            </div>
            
            </Spin>
</div>
)

export default Banner