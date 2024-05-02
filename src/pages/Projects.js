import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



export default function Projects () {
    return (
        <div className="project">
            <div className="navs">
                <Link to ="/">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/evergreen">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="projects-body">               
                <h1>My Projects</h1>
                <ul>
                     <Link to="/atlas">
                <li>Atlas</li>
            </Link>
                    
            <Link to="/evergreen">
                <li>Evergreen</li>
            </Link>
            <Link to="/weather">
                <li>Weather App</li>
            </Link>
            
            
           </ul>

          

            </div>
          
        </div>
    );
}