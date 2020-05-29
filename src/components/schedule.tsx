import React from "react"
import { scheduleSection } from "../js/navids"

const ScheduleMeeting = () => {
  const head = document.querySelector("head")
  const script = document.createElement("script")
  script.setAttribute(
    "src",
    "https://assets.calendly.com/assets/external/widget.js"
  )

  if (head) {
    head.appendChild(script)
  }

  return (
    <section id={scheduleSection}>
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/econnelly"
          style={{ minWidth: "320px", height: "580px" }}
        />
      </div>
    </section>
  )
}

export default ScheduleMeeting
