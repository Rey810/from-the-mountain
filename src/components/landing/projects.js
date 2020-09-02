import React, { useState } from "react"
import Websites from "../../components/portfolio/projects/websites"
import ToggleSwitch from "../../components/general/toggleSwitch/toggleSwitch"
import Apps from "../../components/portfolio/projects/apps"
import PaddingContainer from "../containers/paddingContainer"

const Projects = props => {
  const [showSites, setShowSites] = useState(false)

  console.log({ props })
  const toggleSwitchHandler = () => {
    setShowSites(!showSites)
  }

  const displayedProjects = showSites ? (
    <Websites location={props.location} />
  ) : (
    <Apps location={props.location} />
  )

  return (
    <PaddingContainer type="projects" X Y>
      <h2
        className="font-black
leading-none
md:text-center
text-4xl md:text-6xl
mb-8 md:mb-16"
      >
        Projects
      </h2>
      <ToggleSwitch
        toggleProjects={toggleSwitchHandler}
        showSites={showSites}
      />
      <div className="projects-container mx-auto sm:w-72 lg:w-76">
        {displayedProjects}
      </div>
    </PaddingContainer>
  )
}

export default Projects
