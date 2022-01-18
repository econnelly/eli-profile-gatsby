import React from "react"
import ReactGA from "react-ga"

import MainLayout from "../components/main_layout";
import SEO from "../components/seo"

const IndexPage = () => {
  ReactGA.initialize("UA-131083321-1")
  ReactGA.pageview("home")

  return (
    <MainLayout>
      <SEO title="eliconnelly.com" />
    </MainLayout>
  )
}

export default IndexPage
