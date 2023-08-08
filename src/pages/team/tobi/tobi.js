import React from 'react';
import Layout from '../../../components/Layout'

import Bloglinks from './tobi_components/blog_links'
import HeaderTobi from './tobi_components/header'
import TobiDetails from './tobi_components/tobi_details'
import TobiCredentials from './tobi_components/tobi_credentials'
import './tobi.scss'





const Tobi = () => (
	<Layout>
    <section className="content-block  ">
     <div id="content" className="site_co">
		<HeaderTobi/>
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
            	<span>
             	 <span className="oiy">
                <a href="https:///team/">Partner: </a>  
                <span className="breadcrumb_last " aria-current="page">
                  Tobi Emmanuel Igho
                  </span>
                  </span>
                  </span>
           			 </div>
  					</div>
		  	<TobiDetails/>


			<TobiCredentials/>
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

export default Tobi