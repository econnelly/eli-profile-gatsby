import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { portfolioSection } from '../js/navids'

export const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectsJson {
        edges {
          node {
            url
            title
            image
            fields {
              portfolioImage {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.projects.edges.map(function (project: any) {
    return (
      <div key={project.node.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={project.node.url} title={project.node.title}>
            {/* See gatsby-node.js for why this image loading works */}
            <Image
              fluid={project.node.fields.portfolioImage.childImageSharp.fluid}
            />

            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.node.title}</h5>
                <p>{project.node.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link" />
            </div>
          </a>
        </div>
      </div>
    )
  })

  return (
    <section id={portfolioSection}>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
