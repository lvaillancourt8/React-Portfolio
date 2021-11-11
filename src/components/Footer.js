import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer style={{marginRight:40, marginLeft:40}}class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="text-muted">© 2021 Leslie Vaillancourt</span>
        </div>
    
        <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <a style={{marginRight:10}} href="https://www.linkedin.com/in/leslie-vaillancourt/"><FaLinkedin size='45px'/></a>
                    <a style={{marginRight:10}} href="https://github.com/lvaillancourt8"><FaGithub size='45px'/></a>
                    <a style={{marginRight:10}} href="https://www.facebook.com/cheqrpayapp"><FaFacebook size='45px'/></a>
        </div>
      </footer>
    );
}

export default Footer;