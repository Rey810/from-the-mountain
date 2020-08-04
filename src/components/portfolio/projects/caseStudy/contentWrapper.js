import React from "react"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const contentWrapper = children => {
  return (
    <section className="min-h-9/10 max-h-9/10 mx-4 grid grid-rows-12 grid-cols-4 sm:mx-0 sm:w-11/12 xl:w-5/6 sm:mx-auto sm:grid-cols-12 sm:grid-rows-4">
      <div className="back-button flex flex-col justify-center bg-blue-400 text-xs font-semibold col-start-1 col-end-3 sm:col-end-4 sm:mt-12 w-4/5 sm:w-full lg:col-end-3 xl:w-3/4">
        <Link to="/projects" className="pr-4 py-4">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-4" /> Back to
          Projects
        </Link>
      </div>
      <div className="case-specs-container h-full row-start-2 row-end-8 col-start-1 col-end-4 flex flex-col justify-center sm:block sm:pt-24  sm:col-end-5 md:col-end-4 bg-red-400">
        <div className="case-specs-info grid grid-cols-3 bg-red-500 ">
          <div className="case-year col-span-1">
            <h3 className="text-sm mb-4">Year</h3>
            <time>2018</time>
          </div>
          <div className="case-techs-toolsets col-span-2">
            <div className="case-tech mb-12">
              <h3 className="text-sm mb-4">Technologies</h3>
              <ul className="text-base">
                <li>Sample Text</li>
                <li>Sample Text</li>
                <li>Sample Text</li>
                <li>Sample Text</li>
                <li>Sample Text</li>
              </ul>
            </div>
            <div className="case-toolset mb-12 lg:mb-0">
              <h3 className="text-sm mb-4">Toolset</h3>
              <ul className="text-base">
                <li>Sampe Tool</li>
                <li>Sampe Tool</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="case-summary-container h-full row-start-9 row-end-13 col-start-1 col-end-5 sm:row-start-2 sm:col-start-6 sm:col-end-13 sm:row-end-6 sm:pt-24  bg-green-400">
        <div className="case-header-container bg-green-500">
          <h1 className="text-2xl lg:text-5xl font-semibold mb-6 lg:mb-12">
            Classic Battleship
          </h1>
          <p className="case-description mb-4 text-xs lg:text-base">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue.
          </p>
          <a href="/" className="case-launch-button text-xs font-semibold">
            Launch Project
          </a>
        </div>
      </div>
      {/* Use bg coloured divs to visulaize grid. Rememeber mobile. */}
    </section>
  )
}

export default contentWrapper
