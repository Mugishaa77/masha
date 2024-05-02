
import before from '../screenshots/react-before.png';
import after from '../screenshots/react-after.png';

export default function ReactWeather () {
    return (
        <div className="react-weather">
            
            <div className="weather-app">
                <div className="w-titles">
                <h2>Simple Weather App Created Using React</h2>
                <h4>Category: Web Development</h4>
                <h5>Technology: React + Weather API</h5>
                <hr/>
                </div>
                <div className="w-description">
                    <h3>Description</h3>
                    <p>Below is a simple weather app created with react and makes use of APIs to fetch weather data from OpenWeather API.<br/>

                        One is able to see the wind, temperature, humidity and five day forecast of any city in the world just by entering it in the search bar.<br/>
                        My weather app demonstrates the functionality of a <span>single page application.</span>
                    </p>
                    <div className="screenshot">
                        <img src={before}
                        alt="Before Search"
                        title="Before Search"/>

                        <img src={after}
                        alt="After Search"
                        title="After Search" />

                    </div>
                    
                </div>
                <div className="w-link">
                        <h2>Project Link:</h2>
                        <a href="https://mugisha-react-final-project.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>https://mugisha-react-final-project.vercel.app/</a>
                    </div>
            </div>

        </div>
    )
}