import React from 'react'
import Areas from '../components/home/areas'
import Carousel from '../components/home/carousel'
import Crime from '../components/home/crime'
import Describe from '../components/home/describe'
import Meet from '../components/home/meet'
import '../components/home/home.css'
import Banner from '../components/home/banner'


 const IndexBody = () => (
<div>
  <div id="content" className="site-content">
    <section id="primary" className="content-area">
	    <main id="main" className="site-main" role="main">
		    <article id="post-2" className="post-2 page type-page status-publish hentry">
			    <div className="entry-content">            
            <div className='header__bg-container'>     
            <Banner/>
            </div>
            <Crime/> 
            <Describe/> 
            <Areas/>
            <Meet/>
            <Carousel/>
			    </div>
		    </article>
	    </main>
    </section>
  </div>
</div>

)
            

export default IndexBody