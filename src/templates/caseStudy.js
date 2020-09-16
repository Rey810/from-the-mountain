import React from "react"
import ContentWrapper from "../components/containers/contentWrapper"
import FullWidthImageWrapper from "../components/containers/fullWidthImageContainer"
import Launch from "../assets/icons/launch"
import Code from "../assets/icons/code"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/general/seo"
import Header from "../components/general/header"
import BackButton from "../components/general/BackButton/BackButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import SimpleCard from "../components/general/simpleCard"
import Footer from "../components/general/footer"

// destructures the nested projectDataJson from inside data and renames it to 'project'
const CaseStudy = ({ data: { projectDataJson: project }, data, location }) => {
  console.dir({ project, location })

  let launchProjectButton = null
  if (project.siteURL) {
    launchProjectButton = (
      <a
        type="button"
        href={project.siteURL}
        className="launch-project btn inline-block"
      >
        LAUNCH PROJECT
        <Launch className="ml-4 inline-block" />
      </a>
    )
  }

  if (!project.siteURL && project.codeURL) {
    launchProjectButton = (
      <a
        type="button"
        href={project.codeURL}
        className="launch-project btn inline-block"
      >
        VIEW CODE
        <Code className="ml-4 inline-block" />
      </a>
    )
  }

  // skills utilized cards inside a container
  let skillCards = null
  if (project.skillsUtilized) {
    skillCards = (
      <ContentWrapper
        laptopHeight="lg:min-h-8/10 lg:max-h-8/10"
        desktopHeight="xl:min-h-8/10 xl:max-h-8/10"
        extraClasses="md:block lg:grid"
      >
        <h2 className="font-semibold mb-8 w-4/5 mx-auto text-2xl flex items-center justify-center col-start-1 col-end-5 sm:w-1/1 sm:col-end-13 md:mb-16 lg:text-5xl lg:mb-0">
          Skills Utilized
        </h2>
        <div className="serviceCards-container col-start-1 col-end-13 row-start-2 row-end-12 flex flex-col px-6 items-center scrolling-touch md:flex-row md:flex-wrap md:px-0 lg:grid lg:grid-cols-3 lg:gap-8 xl:mx-auto xl:w-5/6 xl:gap-12 xl:mr-auto">
          {project.skillsUtilized.map((skill, index) => (
            <div
              className={`project-square-wrapper relative w-1/1 pb-9/11 sm:pb-1/1 mb-12 md:mb-16 md:w-2/5 md:pb-2/5 lg:w-9/10 lg:pb-9/10 mx-auto shadow-md ${
                index === 1 ? "lg:transform lg:scale-125" : null
              }`}
            >
              <SimpleCard
                title={skill.name}
                description={skill.description}
                centerHeader
                descriptionSize="text-sm"
                padding="p-6"
                perfectSquare
              />
            </div>
          ))}
        </div>
      </ContentWrapper>
    )
  }

  // images are either full-width or long-scrolling images with padding inside a parent div with a shadow
  let images = null
  images = project.images.map(image => {
    if (image.long) {
      return (
        <div className="display-container bg-gray-700 p-16 md:p-40 lg:px-72 lg:py-40">
          <Img
            fluid={image.src.childImageSharp.fluid}
            className="shadow-md lg:shadow-lg"
          />
        </div>
      )
    } else if (image.fullWidthLongScroll && image.srcSet) {
      // DESKTOP and MOBILE images needed
      // srcSet is defined in images array
      console.dir(image)
      let sources = [
        image.srcSet[0]["mobile"].src.childImageSharp.fluid,
        {
          ...image.srcSet[0]["desktop"].src.childImageSharp.fluid,
          media: `(min-width: 768px)`,
        },
      ]
      return <Img fluid={sources} />
    } else {
      return <FullWidthImageWrapper image={image.src} />
    }
  })

  //SEO info for projects
  let SEOinfo = {
    title: project.title,
    image: project.image.childImageSharp.resize,
    description: project.description,
    keywords: project.skillsUtilized.reduce((prev, skill, index) => {
      if (index === 0) return skill.name
      return `${prev} ${skill.name}`
    }, ""),
    imageAltDescr: project.imageURL,
    pathname: project.linkName,
  }
  return (
    <>
      <SEO {...SEOinfo} />
      <Header isCaseStudy />
      <ContentWrapper
        tabletHeight="md:min-h-6/10 md:max-h-6/10"
        laptopHeight="lg:min-h-8/10 lg:max-h-8/10"
        desktopHeight="xl:min-h-7/10 xl:max-h-7/10"
        extraClasses="mt-0"
      >
        <BackButton to="/projects">Back to Projects</BackButton>
        <div className="case-specs-container h-full w-9/10 mx-auto sm:w-1/1 sm:col-start-1 flex flex-col justify-start mt-4 md:mt-0 md:justify-center sm:block sm:pt-4 md:col-end-4">
          <div className="case-specs-info flex justify-around md:grid md:grid-cols-3">
            <div className="case-year col-span-1">
              <h3 className="font-semibold text-xs mb-2 tracking-wider">
                YEAR
              </h3>
              <time>{project.year}</time>
            </div>
            <div className="case-tech md:col-span-2 mb-12">
              <h3 className="font-semibold text-xs mb-2 tracking-wider">
                TECHNOLOGIES
              </h3>
              <ul className="text-base">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech.name}</li>
                ))}
              </ul>
            </div>
            <div className="case-toolset md:col-span-2 md:col-start-2 md:col-end-3 mb-12 lg:mb-0">
              <h3 className="font-semibold text-xs mb-2 tracking-wider">
                TOOLSET
              </h3>
              <ul className="text-base">
                {project.toolSet.map((tool, index) => (
                  <li key={index}>{tool.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="case-summary-container h-full w-9/10 mx-auto sm:w-1/1 col-start-1 col-end-5 sm:col-start-6 sm:col-end-13">
          <div className="case-header-container">
            <h1 className="font-semibold text-2xl lg:text-5xl mb-6 lg:mb-12">
              {project.title}
            </h1>
            <p className="case-description mb-4 text-sm lg:text-base sm:w-3/4 xl:w-1/2">
              {project.caseDescription}
            </p>
            {launchProjectButton}
          </div>
        </div>
      </ContentWrapper>
      <FullWidthImageWrapper image={project.image} />
      <ContentWrapper
        tabletHeight="md:min-h-5/10 md:max-h-5/10"
        laptopHeight="lg:min-h-6/10 lg:max-h-6/10"
        desktopHeight="xl:min-h-4/10 xl:max-h-4/10"
        extraClasses="w-4/5 mx-auto flex flex-col justify-center"
      >
        <div className="first-block sm:w-1/1 row-start-1 row-end-13 col-start-1 col-end-5 flex flex-col justify-center ">
          <div className="quote">
            <blockquote class="text-xl font-semibold text-left mb-8 md:mb-0 md:my-0 md:text-center lg:text-4xl ">
              {project.secondDescriptionQuote}
            </blockquote>
          </div>
        </div>
        <div className="second-block h-full row-start-1 row-end-13 col-start-1 col-end-5 sm:col-start-6 sm:col-end-13 md:flex md:items-center">
          <p className="quote-explained text-sm md:w-4/5 lg:w-3/4 lg:text-base">
            {project.secondDescription}
          </p>
        </div>
      </ContentWrapper>
      {images}

      {skillCards}

      <div className="get-in-touch-container flex flex-col items-center py-4 -mb-1 sm:py-8 lg:py-24">
        <h3 className="font-semibold text-lg mt-4 md:mt-0 md:text-xl lg:text-2xl xl:text-3xl">
          Want to Work with Me?
        </h3>
        <Link
          to="/#Connect"
          className="get-in-touch font-semibold btn flex items-center justify-around"
        >
          GET IN TOUCH
          <FontAwesomeIcon className="ml-4" icon={faPaperPlane} />
        </Link>
      </div>
      <Footer customBgColor="#171820" />
    </>
  )
}

export default CaseStudy

// $path is a variable made available by createPage in gatsby-node
export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    projectDataJson(linkName: { eq: $path }) {
      linkName
      projectType
      title
      siteURL
      codeURL
      description
      secondDescription
      secondDescriptionQuote
      imageURL
      year
      toolSet {
        name
        url
      }
      techStack {
        name
        url
      }
      caseDescription
      skillsUtilized {
        name
        description
      }
      image {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
      images {
        src {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        srcSet {
          mobile {
            src {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          desktop {
            src {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        long
        fullWidthLongScroll
      }
    }
  }
`
