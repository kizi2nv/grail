import React from 'react';
import Layout from '../../../components/Layout'
import AboutDetails from './About_components/About_details'
import Bloglinks from './About_components/blog_links'
import AboutHeader  from './About_components/About_header'
import Fade from "react-reveal/Fade"

import './About_us.scss'


const AboutUs = () => (
	<Layout>
		<Fade right>
			<h1 className=" head"> About Us</h1>
		</Fade >
		<section className="content-block  ">
     <div id="content" className="site_co">
	
		<section id="primary" className="content-area--single-team">
		<main id="main" className="site-main site-main--single-team" role="main">
      	<article id="post-1891" className="post-1891 team type-team status-publish has-post-thumbnail hentry alpha-m">
		   <div className="container">
			  <div className="row give">
				 <Bloglinks/>
				<div className="col-12 col-lg-7 offset-lg-1 content-area">
				<div className="bio-page__entry-content entry-content">
				<div className="breadcrumbs">
				<div id="breadcrumbs">
             	 <span className="oiy">
                <span className="breadcrumb_last " aria-current="page">
                  ABOUT GRAIL ATTORNEY
                  </span>
                  </span>
               
           		 </div>
  					</div>
		  	<AboutDetails/>


		
				  </div>
				  </div>
			  </div>
		  </div>

      </article>
		</main>
	</section>
</div>  
    </section>
	</Layout>
)

export default AboutUs