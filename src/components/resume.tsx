import React from "react"
import "../css/default.css"
import "../css/layout.css"
import { graphql, useStaticQuery } from "gatsby"

export const Resume = () => {
  const data = useStaticQuery(graphql`
    query ResumeQuery {
      allSkillsJson(filter: { level: { ne: null } }) {
        edges {
          node {
            name
            level
          }
        }
      }
      allEducationJson(sort: {order: DESC, fields: graduated}) {
        edges {
          node {
            degree
            description
            graduated
            school
          }
        }
      }
      allWorkJson(sort: {order: ASC, fields: order}) {
        edges {
          node {
            years
            title
            company
            description
            employment {
              start
              end
            }
          }
        }
      }
      skillsJson {
        message
      }
    }
  `)

  const skillmessage = data.skillsJson.message
  const education = data.allEducationJson.edges.map(function (education: any) {
    return (
      <div key={education.node.school}>
        <h3>{education.node.school}</h3>
        <p className="info">
          {education.node.degree} <span>&bull;</span>
          <em className="date">{education.node.graduated}</em>
        </p>
        <p>{education.node.description}</p>
      </div>
    )
  })
  const work = data.allWorkJson.edges.map(function (work: any) {
    return (
      <div key={work.node.company}>
        <h3>{work.node.company}</h3>
        <p className="info">
          {work.node.title}
          <span>&bull;</span> <em className="date">{work.node.employment.start}  -  {work.node.employment.end}</em>
        </p>
        <p>{work.node.description}</p>
      </div>
    )
  })
  const skills = data.allSkillsJson.edges.map(function (skills: any) {
    const className = "bar-expand " + skills.node.name.toLowerCase()
    return (
      <li key={skills.node.name}>
        <span style={{ width: skills.node.level }} className={className}/>
        <em>{skills.node.name}</em>
      </li>
    )
  })

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
