import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";




export default function Contact () {
    return(
        <div className="contact">
             <div className="navs">
                <Link to ="/projects">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="contact-body">
                <h2>Contact Information</h2>
                <p>Feel free to contact to me on:</p>

           <h3 className="phone">
                <FontAwesomeIcon icon={faPhone} /> 
                <a
                href="tel:+254780402014"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
            > +254 780 402 014
              </a></h3>
           

            <h3 className="email">
            
                <FontAwesomeIcon icon={faEnvelope} /></h3>
                 <a
                href="mailto:machariamuiruri@gmail.com"
                title= "Email"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
              > Machariamuiruri@gmail.com</a>

              <hr/>

              
              <div className="socials">
            
              
 <span className="linkedin" title="linkedin">
              <a href="https://www.linkedin.com/in/swugisha/" title="" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
             </a>
</span>



              </div>
            <p className="regards">I look foward to connecting with you.
            <br/>
            <span>Regards.</span>
                
            </p>
            <hr/>
            </div>
            
           
        </div>
    )
}