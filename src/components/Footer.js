import React from "react";
import { v4 as uuidv4 } from 'uuid';
import '@fortawesome/free-brands-svg-icons'

const EmailLink = (props) => {
  const subject = 'Contact from website';
  const body = '<ENTER YOUR MESSAGE>';

  const mailtoUrl = `mailto:${props.data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <a href={mailtoUrl}>Pierrick Rauby 2023</a>
  );
};

function Footer(props) {
  return (
    <footer>
      <div className="col-md-12 py-4">
        {props.data.socialMedia.map((social) => (
          <span key={uuidv4()} className="m-3">
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`footer-icon ${social.icon}`}></i>
            </a>
          </span>
        ))}
        <div className="copyright text-center py-2">
          <div className="container">
            <small>
              Copyright &copy; <EmailLink data={props.data.contact} />
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;