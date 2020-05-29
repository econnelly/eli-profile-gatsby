import React from "react"
import "../css/default.css"
import "../css/layout.css"
import ProfileImage from "./profileimage"
import { graphql, useStaticQuery } from "gatsby"
import { aboutSection } from "../js/navids"

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutPage {
      profileJson {
        name
        bio
        city
        email
        resume
        state
      }
    }
  `)

  const name = data.profileJson.name
  const bio = data.profileJson.bio
  const city = data.profileJson.city
  const state = data.profileJson.state
  const email = data.profileJson.email
  const resumeDownload = data.profileJson.resume

  return (
    <section id={aboutSection}>
      <div className="row">
        <div className="three columns">
          <ProfileImage alt={name} className={"profile-pic"} />
          {/*<img*/}
          {/*  className="profile-pic"*/}
          {/*  src={profilepic}*/}
          {/*  alt={`${name} profile picture`}*/}
          {/*/>*/}
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
