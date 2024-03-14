import React from 'react'
import img from '../../assets/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustración-de-alta-calidad.jpg'
import './styles/Projects.css'

const Projects = () => {
  return (
    <div id='Project-container'>
      <div id='Project-list'>
        <img src={img} alt="" />
        <div id='P-description'>
          <h2>Whatever!</h2>
          <ul>
            <li>Tech1</li>
            <li>Tech2</li>
            <li>Tech3</li>
          </ul>
          <span>Desciption</span>
        </div>
      </div>
    </div>
  )
}

export default Projects
