import React from 'react';
import  './carousel.scss';
import './banner.scss';
import './welcome.scss';
import Fade from "react-reveal/Fade"

import { Link } from 'gatsby'

class  Welcome extends React.Component{ 
    
 

    render(){

  return(


<section className="text-center gene">
<Fade right >
    <h2>
    welcome to the official website of grail Attorneys
    <span>
   
    </span>

    </h2>
    <p className="pp"> A full service law firm that guides....  </p>





<h3> Igho Emmanuel Tobi, esq.
  </h3>
  <p className="mp">Managing Partner</p>


<div>

</div>

<div>
<div className="lk">
<Link className="" to="/team/about_us/about_us">
                 More
              </Link>
</div>
</div>
<div>

</div>
</Fade >
 
   </section>

);
}
}

export default Welcome
