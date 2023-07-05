import React from "react";
import { Chip,Icon,Link,Linkedin} from '@mui/material'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

function Footer(props){
    return (
      <footer>
        <div className="col-md-12">
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; <Link href={props.data.contact}>Pierrick Rauby 2023</Link>
                <stack row>
              {props.data.socialMedia.map((social)=>(
              // <Chip icon={<Icon>{social.icon}</Icon>} label={social.name} component="a" href={social.url} clickable />
              <Chip icon={<Linkedin />} label={social.name} component="a" href={social.url} clickable />
              ))}
                </stack>
             </small>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;