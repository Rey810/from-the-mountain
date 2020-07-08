import React from "react"

const toolboxCard = props => {
  const { tools, title } = props
  return (
    <>
      <div
        className="toolbox-card card-color ml-2 mr-6 mb-8 py-8 pl-8 pr-2
rounded-md shadow-md sm:w-3/4 md:w-2/3 lg:w-64 lg:py-10 lg:pl-10 lg:pr-4 lg:shadow-lg lg:w-full"
      >
        <h6 className="toolbox-card-header pb-8 font-bold">{title}</h6>
        <div className="tools-container">
          <ul className="flex flex-row flex-wrap">
            {tools.map(tool => (
              <li
                key={tool}
                className="tool rounded-lg w-mc py-2 px-4 mr-2 mb-2 shadow-sm"
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
