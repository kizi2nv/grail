import React from 'react'
import Fade from "react-reveal/Fade"

const TOBI_BIO = () =>(
    <Fade right>
    <div className="container ol">
                <div className="row">
                  <div className="col-lg-7 offset-lg-1 text-center text-lg-left">
                      <header className="bio-page__entry-header">
                      <div className="bio-page__title ">
                                       <h3> Managing Partner</h3>
                      </div>
                          <h1 className="bio-page__name ">
                             
                                         Tobi Igho							
                            </h1>
                      </header>
                    <div className="bio-page__contact-info">
                         <div className="bio-page__contact-row">
                            <div className="bio-page__contact-item bio-page__contact-item bio-page__tel">
                                <a className="bio-page__link" href="tel:(+234) 814-775-8121">
                                    <span itemProp="telephone" content="(+234) 814-775-8121">
                                        (+234) 814-775-8121
                                    </span>
                                 </a>
                            </div>
                        </div>
                    <div className="bio-page__contact-row">
                         <div className="bio-page__contact-item bio-page__email">
                            <a className="bio-page__link" href="mailto:info@grailattorneys.com">
                                 Email: info@grailattorneys.com
                             </a>
                     </div>							
                </div>
            </div>
            </div>
        </div>
    </div>
</Fade>
)

export default TOBI_BIO