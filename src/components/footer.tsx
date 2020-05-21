import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../css/default.css"
import "../css/layout.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allSocialJson {
        edges {
          node {
            className
            name
            url
          }
        }
      }
    }
  `)

  const networks = data.allSocialJson.edges.map(function (network: any) {
    return (
      <li key={network.node.name}>
        <a href={network.node.url}>
          <i className={network.node.className} />
        </a>
      </li>
    )
  })

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Based off of{" "}
              <a href={"https://github.com/tbakerx/react-resume-template"}>
                React Resume Template
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
