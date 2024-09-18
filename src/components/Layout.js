import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="description" content="grailattorneys" />
        <meta name="description" content="grailattorneys.com" />
        <meta name="description" content="grailattorneys igho tobi" />
        <meta name="description" content="grailattorneys umuahia law firm" />
        <meta name="description" content="grailattorneys abia state" />

        <link
          rel="canonical"
          sizes="180x180"
          href="https://grailattorneys.com"
        />

<link
          rel="canonical"
          sizes="180x180"
          href="http://grailattorneys.com"
        />

<link
          rel="canonical"
          sizes="180x180"
          href="https://www.grailattorneys.com"
        />
         <link
          rel="canonical"
          sizes="180x180"
          href="http://www.grailattorneys.com"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

<meta name="google-site-verification" content="bMJrUz17rlS7KxupVU711qqQ89AzsCcL9oU91iZGdQE" />
        <meta name="theme-color" content="#fff" />
        <meta name="twitter:card" content="grailattorneys.com igho tobi law firm umuahia" />

        <meta property="og:type" content="grailattorneys.com abia law firm umuahia" />
        <meta property="og:title" content={title} />
        <meta property="og:title"  content="grailattorneys.com" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div id="page" className="site">
      <div className="header-container "> 
      <Navbar />
      
      </div>
      <div>{children}</div>
      <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
