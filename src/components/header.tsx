// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"
//
// interface Props {
//   title: string
//   children?: React.ReactNode
// }
//
// const Header = ( props: Props ) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {props.title}
//         </Link>
//       </h1>
//       {props.children}
//     </div>
//   </header>
// )
//
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }
//
// export default Header

import React from 'react'

import '../css/default.css'
import '../css/layout.css'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      profileJson {
        name
        city
        occupation
        description
      }
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

  const name = data.profileJson.name
  const occupation = data.profileJson.occupation
  const description = data.profileJson.description
  const city = data.profileJson.city
  const networks = data.allSocialJson.edges.map(function(network: any) {
    return (
      <li key={network.node.name}>
        <a href={network.node.url}>
          <i className={network.node.className}/>
        </a>
      </li>
    )
  })

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          {/*<li>*/}
          {/*  <a className="smoothscroll" href="#testimonials">*/}
          {/*    Testimonials*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a className="smoothscroll" href="#contact">*/}
          {/*    Contact*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr/>
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"/>
        </a>
      </p>
    </header>
  )
}

export default Header
