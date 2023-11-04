import React from 'react'
import projects from '../static/projectData'
import ProjectPreview from '../components/projectPreview'

export default function Portfolio() {
  return (
    <main>
        <h1 className="page-title">Shawn's Portfolio</h1>
        {projects.map(
          (project) => (
            <ProjectPreview {...project} />
          )
        )}  
    </main>
  )
}