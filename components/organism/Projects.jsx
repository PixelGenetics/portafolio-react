import React, { useState,useEffect } from 'react'
import './styles/Projects.css'
import datos from '../../config/data'


const Projects = () => {
  const [data,setData] = useState([])

  useEffect(() => {
    setData(datos);
  },[])
  
  return (
    <div id='project-main'>
      {data.map((project) => (
        <div key={project.id} id="project-body">
          <div id='project-img'>
          <img src={project.img} alt={project.title} />
          </div>
          <div id='project-information'>
            <h2>{project.title}</h2>
            <p id='project-resumen'>{project.resumen}</p>
          <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>
                <img src={tech.image} alt={tech.name} />
            </li>
          ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects
