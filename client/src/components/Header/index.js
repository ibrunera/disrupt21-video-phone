import React from 'react'
import './styles.css'

import jetsonsLogoImg from '../../assets/jetsons-logo.png'
import hannaLogoImg from '../../assets/hanna-barbera-logo.png'

const Header = (props) =>{
  return (
    <header className="page-header">
      <div className="container">
        <img src={jetsonsLogoImg} alt="Jetsons" />
        <strong>{props.title}</strong>
        <img src={hannaLogoImg} alt="Jetsons" />
      </div>
    </header>
  )
}

export default Header