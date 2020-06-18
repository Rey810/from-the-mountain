import React from "react"

const toolboxCard = props => {
  const { tools, title } = props
  return (
    <>
      <div
        className="toolbox-card card-color ml-2 mr-6 mb-8 py-8 pl-8 pr-2
rounded-md shadow-md md:w-64 md:py-10 md:pl-10 md:pr-4 md:shadow-lg lg:w-full"
      >
        <h6 className="toolbox-card-header pb-8 font-bold">{title}</h6>
        <div className="tools-container">
          <ul className="flex flex-row flex-wrap">
            {tools.map(tool => (
              <li
                key={tool}
                className="tool text-xs rounded-lg w-mc py-2 px-4 mr-2 mb-2 shadow-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default toolboxCard
