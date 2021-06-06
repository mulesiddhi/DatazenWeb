import './cfooter.css'

import React from 'react'

const Cfooter = () => (
  <div className="cfooter">
    <p className="cfooter-copyright">
      DataZen - {new Date().getFullYear()}
    </p>
  </div>
)

export default Cfooter