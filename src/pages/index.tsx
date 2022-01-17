import React from "react"
import ReactGA from "react-ga"

import Main_layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  ReactGA.initialize("UA-131083321-1")
  ReactGA.pageview("home")

  return (
    <Main_layout>
      <SEO title="eliconnelly.com" />
    </Main_layout>
  )
}

export default IndexPage
