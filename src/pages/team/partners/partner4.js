import React from 'react';
import {Link} from 'gatsby'
import Layout from '../../../components/Layout'
import Header4 from '../partners/partner4_component/header4'
import Details4 from '../partners/partner4_component/details4'
import Credentials4 from '../partners/partner4_component/credentials4'
import Bloglinks from '../tobi/tobi_components/blog_links';





const Partner4 = () => (
	<Layout>
    <section className="content-block  ">
     <div id="content" className="site_co">
		<Header4/>
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
                <Link to="/team/partners/partner4">Partner: </Link>  
                <span className="breadcrumb_last " aria-current="page">
                  PARTNER1 NAME
                  </span>
                  </span>
                  </span>
           			 </div>
  					</div>
		  	
					  <Details4/>

			<Credentials4/>
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

export default Partner4