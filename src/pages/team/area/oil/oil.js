import React from 'react';
import Layout from '../../../../components/Layout'
import HumanDetails from './Human_components/Human_details'
import Bloglinks from './Human_components/blog_links'

import Fade from "react-reveal/Fade"

import './oil.scss'


const AboutUs = () => (
	<Layout>
		<Fade right>
			<h1 className=" oil_head"> OIL AND GAS LAW</h1>
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
				OIL AND GAS LAW
                  </span>
                  </span>
           		 </div>
  					</div>
		  	<HumanDetails/>
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