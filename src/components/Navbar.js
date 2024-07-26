import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/app.png'
import './mine.css'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className=" marg is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="cont">
          <div className=" cont_1">
            <Link to="/" className="ai" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '75px' }} />
              <h3 className="grill"> GRAIL<span className="att"> ATTORNEY</span> <br /><p className="free">Guiding Your Path To <span className="black"> Freedom </span> and<span className="black"> Justice </span></p></h3>
              
            </Link>
            </div>
            <div className="conti_2">
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()} 
              onKeyDown={() => this.toggleHamburger()}   
            >
              <span />
              <span />
              <span />
            </button>
          
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} mine `}
            
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/team/about_us/about_us">
               About us
              </Link>
             
             {/* <Link className="navbar-item" to="/team/tobi/tobi">
               Meet Tobi
    </Link>*/}
              <Link className="navbar-item" to="/products">
                Practice Area
              </Link>
              <Link className="navbar-item" to="/team/partners/partners_home">
                Partners
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
            
          </div>
        </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
