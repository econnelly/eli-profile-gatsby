import React, { useEffect, useState } from "react"

import "../css/default.css"
import "../css/layout.css"
import { graphql, useStaticQuery } from "gatsby"
import {
  aboutSection,
  contactSection,
  homeSection,
  portfolioSection,
  resumeSection,
  scheduleSection,
  testimonialsSection,
} from "../js/navids"

const Header = () => {
  const [navClassHome, setNavClassHome] = useState("current")
  const [navClassAbout, setNavClassAbout] = useState("")
  const [navClassResume, setNavClassResume] = useState("")
  const [navClassPortfolio, setNavClassPortfolio] = useState("")
  const [navClassSchedule, setNavClassSchedule] = useState("")
  // @ts-ignore
  const [navClassTestimonials, setNavClassTestimonials] = useState("")
  // @ts-ignore
  const [navClassContact, setNavClassContact] = useState("")

  const [navBarClass, setNavBarClass] = useState("")

  const setNav = (anchor: string) => {
    switch (anchor) {
      case homeSection:
        setNavClassHome("current")
        setNavClassAbout("")
        setNavClassResume("")
        setNavClassPortfolio("")
        setNavClassTestimonials("")
        setNavClassContact("")
        setNavClassSchedule("")
        setNavBarClass("")
        break
      case aboutSection:
        setNavClassHome("")
        setNavClassAbout("current")
        setNavClassResume("")
        setNavClassPortfolio("")
        setNavClassTestimonials("")
        setNavClassContact("")
        setNavClassSchedule("")
        setNavBarClass("opaque")
        break
      case resumeSection:
        setNavClassHome("")
        setNavClassAbout("")
        setNavClassResume("current")
        setNavClassPortfolio("")
        setNavClassTestimonials("")
        setNavClassContact("")
        setNavClassSchedule("")
        setNavBarClass("opaque")
        break
      case portfolioSection:
        setNavClassHome("")
        setNavClassAbout("")
        setNavClassResume("")
        setNavClassPortfolio("current")
        setNavClassTestimonials("")
        setNavClassContact("")
        setNavClassSchedule("")
        setNavBarClass("opaque")
        break
      case scheduleSection:
        setNavClassHome("")
        setNavClassAbout("")
        setNavClassResume("")
        setNavClassPortfolio("")
        setNavClassTestimonials("")
        setNavClassContact("")
        setNavClassSchedule("current")
        setNavBarClass("opaque")
        break
      case testimonialsSection:
        setNavClassHome("")
        setNavClassAbout("")
        setNavClassResume("")
        setNavClassPortfolio("")
        setNavClassTestimonials("current")
        setNavClassContact("")
        setNavClassSchedule("")
        setNavBarClass("opaque")
        break
      case contactSection:
        setNavClassHome("")
        setNavClassAbout("")
        setNavClassResume("")
        setNavClassPortfolio("")
        setNavClassTestimonials("")
        setNavClassContact("current")
        setNavClassSchedule("")
        setNavBarClass("opaque")
        break
    }
  }

  let sections: (HTMLElement | null)[] = []
  useEffect(() => {
    sections[6] = document.getElementById(homeSection)
    sections[5] = document.getElementById(aboutSection)
    sections[4] = document.getElementById(resumeSection)
    sections[3] = document.getElementById(portfolioSection)
    sections[2] = document.getElementById(scheduleSection)
    sections[1] = document.getElementById(testimonialsSection)
    sections[0] = document.getElementById(contactSection)

    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    const top =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0)

    sections.forEach(section => {
      if (section && section.offsetTop >= top) {
        setNav(section.id)
        return
      } else if (section && top == 0) {
        setNav(homeSection)
      }
    })
  }

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
    <header id="home">
      <nav id="nav-wrap" className={navBarClass}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={navClassHome}>
            <a className="smoothscroll" href={`#${homeSection}`}>
              Home
            </a>
          </li>
          <li className={navClassAbout}>
            <a className="smoothscroll" href={`#${aboutSection}`}>
              About
            </a>
          </li>
          <li className={navClassResume}>
            <a className="smoothscroll" href={`#${resumeSection}`}>
              Resume
            </a>
          </li>
          <li className={navClassPortfolio}>
            <a className="smoothscroll" href={`#${portfolioSection}`}>
              Projects
            </a>
          </li>
          <li className={navClassSchedule}>
            <a className="smoothscroll" href={`#${scheduleSection}`}>
              Schedule Meeting
            </a>
          </li>
          {/*<li>*/}
          {/*  <a*/}
          {/*    className="smoothscroll"*/}
          {/*    href={`#${testimonialsAnchor}`}*/}
          {/*    onClick={() => setNav("testimonials")}*/}
          {/*  >*/}
          {/*    Testimonials*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a*/}
          {/*    className="smoothscroll"*/}
          {/*    href={`#${contactAnchor}`}*/}
          {/*    onClick={() => setNav("contact")}*/}
          {/*  >*/}
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
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  )
}

export default Header
