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
    <PaddingContainer type="projects-container pattern-bg" id="Projects" X Y>
      <h2
        className="font-black
leading-none
text-center
text-4xl md:text-6xl
mb-4 md:mb-16"
      >
        Projects
      </h2>
      <ToggleSwitch
        toggleProjects={toggleSwitchHandler}
        showSites={showSites}
      />
      <div className="projects-container pattern-bg mx-auto sm:w-72 lg:w-76 xl:w-2/3 xl:grid xl:grid-cols-2 xl:gap-x-16">
        {displayedProjects}
      </div>
    </PaddingContainer>
  )
}

export default Projects
