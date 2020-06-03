import React from "react"

const toolboxCard = props => {
  const { tools, title } = props
  return (
    <>
      <div className="toolbox-card">
        <h6 className="toolbox-header">{title}</h6>
        <div className="tools-container">
          {tools.map(tool => (
            <li className="tool">{tool}</li>
          ))}
        </div>
      </div>
    </>
  )
}

export default toolboxCard
