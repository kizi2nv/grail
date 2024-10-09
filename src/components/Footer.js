import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/app.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/icons8-linkedin.svg'
import x from '../img/social/x.svg'
import './footer.scss'

const Footer = class extends React.Component {
  render() {
    return (

    <div>
      <footer className="footer  has-text-white-ter" style={{ backgroundColor: "black !important"}}>
       <div className="wdt">
         <span className='logos'>
          <img src={logo} alt="GrailAttorneys" style={{height: '8em' }} />
          <h3 className="grl"> Grail<span>Attorneys</span> </h3>
          </span>

          <div className="adi">
          <address>
              <span itemProp="address" itemScope="" itemType="">
              <span itemProp="streetAddress">1st floor Nmabuiro/Akumere Plaza Upstair line </span><br/>
              <span itemProp="addressLocality">World Bank</span>,
              <span itemProp="addressLocality">Umuahia</span>,
              <span itemProp="addressRegion">Abia State </span>
            </span>            
          </address>
          <p>
              <a className="contact__tel" href="tel: (234) 814-775-8121">
                <span itemProp="telephone" content="(+234) 814-775-8121">
                  <span className="sr-only">
                    Call our office 
                  </span>
                  (+234) 814-775-8121
                  </span>
              </a><br/>
              <a href="mailto:info@grailattorneys.com">info@grailattorneys.com</a>
              <br/>
              <a href="mailto:grailattorneys@gmail.com">grailattorneys@gmail.com</a>
                          </p>
          </div>
            </div>
            <div className="classsess">  
            <div  >
              <div className=" okii">
              <div >
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/team/about_us/about_us">
                        About
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/team/area/area">
            Practice Area
              </Link>
                    </li>
                    {/* <li>
                     <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    */}
                     {/*<li>
                      <a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
                        Admin
                      </a>
                    </li>
                     */}
                  </ul>
                </section>
              </div>
              
              <div className="">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                       Blogs
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              </div>
              <div className="social">
                <a title="facebook" href="https://facebook.com/profile.php?id=100095199010122&mibextid=JRoKGi">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                </a>
              
                <a title="twitter" href="https://x.com/grail_attorneys?s=11">
                  <img
                    className="fas fa-lg"
                    src={x}
                    alt="Twitter"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                </a>
                <a title="twitter" href="https://www.linkedin.com/company/105122253/">
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                </a>

                <a title="instagram" href="https://www.instagram.com/grail_attorneys?igsh=Y21tdGttdDhjMm5j">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                </a>
              </div>
            </div>
            </div>
       
      </footer>
      <div class="zola">
          <div >
            <p >
              ©&nbsp;2024 GrailAttorneys							| Phone: 
              <a href="tel:(+234) 814-775-8121">
                <span itemProp="telephone" content=" (+234) 814-775-8121"> (+234) 814-775-8121</span>
                <br/>
                Attorney Advertising&nbsp;|&nbsp;
               </a>
               <a href="/">						  
                 Disclaimer
                </a> 
               <span> | </span>  
                <a href="/" target="_blank" rel="noreferrer"> 						
                   Website Development
                </a>
                by  
                <span className="footer__zola-logo">
                
            
                <span className="sr-only">KizTek - View site in new window</span>
                        
                </span>
            </p>
         </div>
      
      </div>
          
</div>
      
    )
  }
}

export default Footer
