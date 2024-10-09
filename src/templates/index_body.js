import React from 'react'

// import Carousel from '../components/home/carousel'
import Crime from '../components/home/crime'
import Describe from '../components/home/describe'
import '../components/home/home.css'

import SlideBanner from '../components/home/slide_banner'
import Homearea from '../components/home/Homearea'
import Welcome from '../components/home/welcome'


 const IndexBody = () => (
<div>
  <div id="content" className="site-content">
    <section id="primary" className="content-area">
	    <main id="main" className="site-main" role="main">
		    <article id="post-2" className="post-2 page type-page status-publish hentry">
			    <div className="entry-content">            
            <SlideBanner/>  
            <Welcome/>  
            <Homearea/>
            <Crime/> 
            <Describe/> 
           {/*<Carousel/>*/}
			    </div>
		    </article>
	    </main>
    </section>
  </div>
</div>

)
            

export default IndexBody