import React from "react"
import './meet.scss'
import logo from '../../../static/img/3.png'
import Fade from "react-reveal/Fade"


const Meet = () => (
    		
    <section >
        <div className="meet_bg">
            <div className="flexy">
                <Fade left>
                <div className="push">
                    <figure >
                        <picture>
                            <source media="(min-width: 992px)" srcSet={logo}/>
                            <img className="./b.jpg" alt="Attorney Tobi Igho" src={logo}/>
                        </picture>
                    </figure>
                </div>
                </Fade>
            <div >
        <div className="middle">
         <Fade top>     
        <div className="  text-center">
            <span className="f6 home-caption">Experienced Criminal Lawyer</span><br/>
               <span className='f7'> Tobi E. IGHO</span>
                
        </div>  
        </Fade> 

         <Fade right>               
            <p>
            After over 8 years of litigation experience in
            multiple areas of the law, Tobi decided to narrow his 
            practice to focus exclusively on criminal defense.&nbsp;his commitment
             to his clients and his passion about righting the wrongs of a 
            flawed legal system, are only a few of the reasons why you will want him in your corner.
            With a soft voice and a kind demeanor, Tobi is the perfect example that you don’t need to 
            be loud to be heard.

            <a href="/team/ambar-maceo/">Learn more about him here</a>.
            </p>
            </Fade>  
         </div>
         </div>
        </div>
    </div>
</section>
)

export default Meet