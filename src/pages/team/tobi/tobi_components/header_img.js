import React from 'react'
import logo from '../../../../../static/img/3.png'
import Fade from "react-reveal/Fade"

const HEADER_IMG_TOBI = () =>(
    <Fade left>
    <div className="meet_bg">
        <div className="flexy">
            <div className="push">
                <figure className="">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={logo}/>
                        <img className="./b.jpg" alt="Attorney Tobi Igho" src={logo}/>
                    </picture>
                </figure>
            </div>
            </div>
            </div>
</Fade>
)

export default HEADER_IMG_TOBI