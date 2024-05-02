import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import portfolio from '../screenshots/Portfolio.png';
import one from '../screenshots/portfolio-one.png';
import two from '../screenshots/portfolio-two.png';
import three from '../screenshots/portfolio-three.png';

export default function Mock () {

    return (
        <div className="mock-website">
            <div className="navs">
                <Link to ="/weather">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/contact">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="mock">
                 < div className="m-titles">
        <h1>Overview</h1>
        <h2>Project Name: Shecodes Responsive Portfolio</h2>
        <h3>Sally's Practice Portfolio Project</h3>
        <h4>Category: <span>Responsive Web Design</span></h4>
                <hr/>
</div>
 <div className="m-description">
                    <h3>Description</h3>
                    <p>This is a simple website showcasing various aspects of front-end web development which include:
                        <ul>
                            <li>Html + Css(Css Grid and Flexbox)</li>
                            <li>Bootstrap</li>
                            <li>UI/UX Design</li>
                            <li>Responsive web Design</li>
                        </ul>
                    </p>

                   
            </div>
            <div className="portfolio-screenshot">
                <img src={portfolio} alt="portfolio-homepage" />
            </div>
            <div className="case">
                <h5>Mobile Screenshots </h5>
                        <div className="responsive-screenshots">
                <img src={one} alt="one" />
                 <img src={two} alt="two"/>
                  <img src={three} alt="three" />

            </div>
            </div>


             <div className="link">
                <h1>Project Link: </h1>
                    <a href="https://mugisha-s-website-git-master-mugishaa77.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg> https://mugisha-s-website-git-master-mugishaa77.vercel.app/
                    </a>
                

            </div>

            
            </div>
            </div>
    )
}