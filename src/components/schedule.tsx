import React from "react"
import { scheduleSection } from "../js/navids"
import {Helmet} from "react-helmet";

const ScheduleMeeting = () => {

  return (
    <section id={scheduleSection}>
      <Helmet>
        <script src={"https://assets.calendly.com/assets/external/widget.js"}/>
      </Helmet>
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
