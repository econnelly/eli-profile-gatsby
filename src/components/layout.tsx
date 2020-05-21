/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import About from './about'
import Resume from './resume'

import Portfolio from './portfolio'
import Footer from './footer'

import '../css/default.css'
import '../css/layout.css'


interface Props {
  text?: string
  children: React.ReactNode
}

const Layout = (props: Props) => {


  return (
    <>
      {props.children}
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      {/*<Testimonials/>*/}
      {/*<Contact/>*/}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
