import React from "react"

const toolboxCard = props => {
  const { tools, title } = props
  return (
    <>
      <div
        className="toolbox-card mb-8 py-8
flex items-center flex-col sm:w-3/4 md:w-2/3 lg:w-64 lg:py-10 lg:w-full"
      >
        <h3 className="toolbox-card-header font-bold">{title}</h3>
        <div className="tools-container">
          <ul className="flex flex-row flex-wrap justify-center">
            {tools.map(tool => (
              <li
                key={tool.name}
                className="tool rounded-lg h-28 w-28 p-4 m-2 shadow-sm flex justify-end items-center flex-col"
              >
                <div
                  className="w-8 h-8"
                  dangerouslySetInnerHTML={{ __html: tool.icon }}
                />
                <span className="mt-3 mb-1 font-bold block">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default toolboxCard
