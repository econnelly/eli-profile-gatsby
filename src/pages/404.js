import React from "react"

import Main_layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Main_layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Main_layout>
)

export default NotFoundPage
