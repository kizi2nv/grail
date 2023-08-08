import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'


import Header1 from '../partners/partner1_components/header1'
import Details1 from '../partners/partner1_components/details1'
import Credentials1 from '../partners/partner1_components/credentials1'
import Bloglinks from '../tobi/tobi_components/blog_links';





const Partner1 = () => (
	<Layout>
    <section className="content-block  ">
     <div id="content" className="site_co">
		<Header1/>
		<section id="primary" className="content-area--single-team">
		<main id="main" className="site-main site-main--single-team" role="main">
      	<article id="post-1891" className="post-1891 team type-team status-publish has-post-thumbnail hentry alpha-m">
		   <div className="container">
			  <div className="row">
				 <Bloglinks/>
				<div className="col-12 col-lg-7 offset-lg-1 content-area">
				<div className="bio-page__entry-content entry-content">
				<div className="breadcrumbs">
				<div id="breadcrumbs">
            	<span>
             	 <span className="oiy">
                <Link to="/team/partners/partner1">Partner: </Link>  
                <span className="breadcrumb_last " aria-current="page">
                  PARTNER1 NAME
                  </span>
                  </span>
                  </span>
           			 </div>
  					</div>
		  	<Details1/>


			<Credentials1/>
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

export default Partner1