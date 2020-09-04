import React from "react"
import ContentWrapper from "../components/containers/contentWrapper"
import FullWidthImageWrapper from "../components/containers/fullWidthImageContainer"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ServiceCard from "../components/landing/services/serviceCard"

const CaseStudy = props => {
  return (
    <>
      <ContentWrapper height="9/10">
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
              <time>{props.year}</time>
            </div>
            <div className="case-techs-toolsets col-span-2">
              <div className="case-tech mb-12">
                <h3 className="text-sm mb-4">Technologies</h3>
                <ul className="text-base">
                  {props.techStack.map((tech, index) => (
                    <li key={index}>{tech.name}</li>
                  ))}
                </ul>
              </div>
              <div className="case-toolset mb-12 lg:mb-0">
                <h3 className="text-sm mb-4">Toolset</h3>
                <ul className="text-base">
                  {props.toolSet.map((tool, index) => (
                    <li key={index}>{tool.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="case-summary-container h-full row-start-9 row-end-13 col-start-1 col-end-5 sm:row-start-2 sm:col-start-6 sm:col-end-13 sm:row-end-6 sm:pt-24  bg-green-400">
          <div className="case-header-container bg-green-500">
            <h1 className="text-2xl lg:text-5xl font-semibold mb-6 lg:mb-12">
              {props.title}
            </h1>
            <p className="case-description mb-4 text-xs lg:text-base">
              {props.caseDescription}
            </p>
            <a
              href={props.siteURL}
              className="case-launch-button text-xs font-semibold"
            >
              Launch Project
            </a>
          </div>
        </div>
      </ContentWrapper>
      <FullWidthImageWrapper image={props.image} />
      <ContentWrapper height="6/10">
        <div className="first-block h-full row-start-2 row-end-8 col-start-1 col-end-5 flex flex-col justify-center sm:block sm:pt-24   bg-red-400">
          <div className="quote bg-red-500 ">
            <blockquote class="text-xl lg:text-4xl text-center font-semibold">
              Yo yo yo!!
            </blockquote>
          </div>
        </div>
        <div className="second-block h-full row-start-9 row-end-13 col-start-1 col-end-5 sm:row-start-2 sm:col-start-6 sm:col-end-13 sm:row-end-6 sm:pt-24  bg-green-400">
          <p className="quote-explained mb-4 text-xs lg:text-base">
            Longer description fitting for the case. A weather app built to
            deliver only the most important weather information. It can run in
            any browser, works on mobile and desktop, and uses the latest web
            technology for fast results.
          </p>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <h2 className="text-2xl lg:text-5xl flex items-center justify-center col-start-1 col-end-5 sm:col-end-13">
          Skills Utilized
        </h2>
        <div className="serviceCards-container col-start-1 col-end-5 row-start-2 row-end-12 flex flex-col px-2 items-center scrolling-touch md:grid md:grid-cols-2 md:gap-4 md:pl-0 lg:w-3/4 lg:gap-8 xl:w-5/6 xl:gap-12 xl:mr-auto">
          <div className="project-square-wrapper relative w-2/3 pb-2/3 my-12">
            <ServiceCard
              title="React"
              description="something cool goes here but not too long I don't think"
              centerHeader
              headerSize="text-lg"
              padding="4"
              perfectSquare
            />
          </div>
          <div className="project-square-wrapper relative w-2/3 pb-2/3 my-12">
            <ServiceCard
              title="Adobe"
              description="something cool goes here but not too long I don't think"
              centerHeader
              headerSize="text-lg"
              padding="4"
              perfectSquare
            />
          </div>
          <div className="project-square-wrapper relative w-2/3 pb-2/3 my-12">
            <ServiceCard
              title="Adobe"
              description="something cool goes here but not too long I don't think"
              centerHeader
              headerSize="text-lg"
              padding="4"
              perfectSquare
            />
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}

export default CaseStudy
