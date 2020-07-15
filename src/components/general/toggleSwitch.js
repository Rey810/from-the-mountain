import React from "react"
import ProjectsPage from "../../pages/projects"

const toggleSwitch = props => {
  return (
    <div className="pt-12">
      <button onClick={props.toggleProjects}>Toggle!</button>
    </div>
  )
}

export default toggleSwitch
