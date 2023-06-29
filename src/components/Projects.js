import React from "react"
import Card from './Card'

function Projects() {
  return (
      <div className="ProjectSection">
        <div className="Project-content display-table">
            <div className="card-container">
            <h1 id="ProjectSection">Projects</h1>
            <div className="card-row">
              <Card Title="Ph.D Thesis" Date="05/20/23" PhotoSrc="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"/>
              <Card Title="Master Thesis" Date="05/20/23"PhotoSrc="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"/>
              <Card Title="Sailing" Date="05/20/23"PhotoSrc="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286" />
            </div>
            </div>
          </div>
      </div>
      );
   }

      export default Projects;

