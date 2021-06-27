import './intro.css'

import React from 'react'

const Intro = (props) => (
  <div className="intro-container">
    <h2 className="intro-h2 "> {props.intro}</h2>

    {/* <p className="intro-p">
      Every single person who understands the impact of the web should be an
      advocate and strive for a better, more inclusive web for all.
    </p> */}
  </div>
)

export default Intro