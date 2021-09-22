import React from 'react'

import  HEADER_IMG_TOBI from '../tobi_components/header_img'
import TOBI_BIO from '../tobi_components/tobi_bio'

const HeaderTobi = () =>(
    <header className="header-single-team">
        <div className="header-single-team__content">
        
            < HEADER_IMG_TOBI/>
            
          
            <TOBI_BIO/>
            
        </div>
    </header>
)
export default HeaderTobi;