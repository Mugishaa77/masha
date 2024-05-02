import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import atlas from '../screenshots/atlas.png';


export default function Atlas () {
    return (
        <div className="atlas">
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
                <Link to="/evergreen">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="atlas-description">
                 < div className="titles">
        <h1>Overview</h1>
        <h2>Name:<span> Atlas Tea Brokers Ltd</span></h2>
        <h3><span>(Corporate Website)</span></h3>
        <h4>Category: <span>Web Development</span></h4>
        <h5>Technology: <span>MongoDB, Express.js, React.js, Node.js</span></h5>
        <hr/>
</div>
<div className="description">
        <h1>Description</h1>
        <p>Atlas is a website I am building and maintaining while consulting with the company to allow them establish an online presence on the internet.
        <br/>
        The purpose of the website is to:</p>
        <ul>
            <li>Showcase their profile</li>
            <li>Display auction performance</li>
            <li>Allow customer feedback through the contact page and contact form</li>
            <li>Diseminate News pertaining to tea and tea market</li>
            <li>Marketing strategy</li>
        </ul>

        <p>Features of the website include:</p>
        <ul>
            <li>Responsive Web Design</li>
            <li>Regular News updates </li>
            <li>Organized and upto date auction results and market reports</li>
        </ul>
        </div>

        <div className="scope">
            <h2>Scope of Project</h2>
            <p>September 2023 - Date</p>
            
        </div>

        <div className="ui">
            <h2>Atlas Homepage</h2>
            <img src={atlas} alt="atlas" />
            

        </div>

         <div className="link">
                <h2>Website Link: </h2>
                    <a href="https://atlas-omega.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>https://atlas-omega.vercel.app/
                    </a>
                

            </div>
            </div>

        </div>
    );
}