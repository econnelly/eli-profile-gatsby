import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { testimonialsSection } from '../js/navids'

const Testimonials = () => {
  const data = useStaticQuery(graphql`
  query {
    testimonials: allTestimonialsJson {
      edges {
        node {
          user
          text
        }
      }
    }
  }
`)

  const testimonials = data.testimonials.edges.map(function (testimonial: any) {
    return (
      <li key={testimonial.node.user}>
        <blockquote>
          <p>{testimonial.node.text}</p>
          <cite>{testimonial.node.user}</cite>
        </blockquote>
      </li>
    )
  })

  return (
    <section id={testimonialsSection}>
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
