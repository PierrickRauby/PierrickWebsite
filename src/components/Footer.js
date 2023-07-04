import React from "react";

function Footer(){
    return (
      <footer>
        <div className="col-md-12">
          {/* <div className="social-links">{networks}</div> */}

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; Pierrick Rauby 2023

              <span key="github" className="m-4">
                <a href= "github.com" target="_blank" rel="noopener noreferrer">
                  <i className= "fab fa-github"></i>
                </a>
              </span>
              <span key="intagram" className="m-4">
                <a href= "instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className= "fab fa-instagram"></i>
                </a>
              </span>
              <span key="strava" className="m-4">
                <a href="strava.com" target="_blank" rel="noopener noreferrer">
                  <i className= "fab fa-instagram"></i>
                </a>
              </span>
             </small>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;