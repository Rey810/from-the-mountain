import React from "react"

const personal = () => {
  return (
    <section className="personal-container pb-20">
      <div className="personal-title-container px-4 pb-8 text-4xl font-bold flex flex-col sm:flex-row">
        <h1 className="personal-title ">Working Remotely, &nbsp;</h1>
        <h1> Based in Cape Town</h1>
      </div>
      <p className="personal-description px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>
    </section>
  )
}

export default personal
