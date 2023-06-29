import React from "react"
import Card from './Card'
function Projects() {
  return (
      <div className="ProjectSection">
        <div className="Project-content display-table">
            <div className="card-container">
            <h1 id="HomeProjectSection">Projects</h1>
            <div className="card-row">
              {/* <div className="row"> */}
              <Card Title="Ph.D Thesis" Date="2018-2021" PhotoSrc="/images/MFS.jpg" Caption="Detecting Bearing defects at the Edge using realtime Vibration Data acquisition, Wavelet Transforms, Neural Network and Federated Learning" />
              <Card Title="Master Thesis" Date="2017-2018"PhotoSrc="/images/BBB.jpg" Caption="Identification of machine condition using vibration data on the BeagleBone Back"/>
              <Card Title="Sailing" Date="2011-2017"PhotoSrc="/images/Longtze.png" Caption="Competitive Sailling and French and European level, in a Club and the with Arts Et Metiers Sailling Association" />
              </div>
            {/* </div> */}
            </div>
          </div>
      </div>
      );
   }

      export default Projects;

