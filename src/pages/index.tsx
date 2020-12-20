import React from "react"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  ReactGA.initialize("UA-131083321-1")
  ReactGA.pageview("home")

  return (
    <Layout>
      <SEO title="eliconnelly.com" />
    </Layout>
  )
}

export default IndexPage
