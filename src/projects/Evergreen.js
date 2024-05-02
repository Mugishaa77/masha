import farmer from '../screenshots/farmer-one.png';
import setup from '../screenshots/set-up.png';
import summary from '../screenshots/grocer-summary.png';
import create from '../screenshots/create.png';
import basket from '../screenshots/basket.png';
import bbasket from '../screenshots/basket-two.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



export default function Evergreen () {
    return (
        <div className="evergreeen">
            <div className="navs">
                <Link to ="/atlas">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/weather">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
        <div className="evergreen">
           < div className="titles">
        <h1>Overview</h1>
        <h2>Project Name:<span> M-Garden project (the Mobile Garden) project</span></h2>
        <h3><span>(Evergreen Farms Ltd E-commerce App Prototype)</span></h3>
        <h4>Category: <span>Web Development</span></h4>
        <h5>Technology: <span>MERN Stack + React Redux Toolkit</span></h5>
        <hr/>
</div>
<div className="description">
        <h1>Description</h1>
        <p>Evergreen is a multivendor e-commerce app that has three categories of users:</p>
            <ul>
                <li>Farmers (food producers) - Primary Seller</li>
                <li>Grocers (food producers and/or food vendors) - Can choose to be a buyer or a seller</li>
                <li>Consumers (buyers) - Clients who are the majority of the users/targer audience of the app.</li>
            </ul>

            <div className="users" >
                <ul>
                    <li>
                        <h4>Primary seller(Farmer)</h4>

                <p>Here, the farmers are able to set up an online market stall, where they can display and sell their farm produce 
                    at a <span>wholesale</span> or <span>retail</span> basis to <span>either</span> a <span>grocer </span>
                    or <span>consumer</span>.
                    The farmer is allowed to sell their goods at their preferred price. </p>
                    <div className="farmer-dashboard">
                        <img src={farmer} alt="farmer dashboard" className="one"/>
                        <img src={setup} alt="farmer setup" className="two" />           
                    </div>
                    <p>The dashboard also allows the farmer to see a summary of their sales and to edit their store information
                        as often as they wish.
                    </p>
    
                    </li>
                    <li>
                        <h4>Grocers - Secondary buyers and/or sellers</h4>
                        <p>The grocers fit into both the buyers and sellers categories as they can buy produce from the
                             <span>farmers</span> and sell to the <span>consumers</span> at their desired prices.
                             The grocer can set up a stall with which he can add products for sale.
                             The UI of the grocer and the farmer are similar, however, they are not the same.</p>
                             <div className="grocer-dashboard">
                                <img src={summary} className="summary" alt="grocer summary"/>
                                    <img src={create} className="create" alt="grocer-create"/>
                            </div>

                            
                    </li>

                    
                    <li>
                        <h4>The Buyer/Consumer</h4>
                        <p>The consumer is able to see all the products available on the app
                            as they are displayed in the market section. One is then able to select an item, view it, add it to basket and checkout, resulting in a complete transaction.
                        </p>
                        <div className="buyers">
                            <img className="basket" src={basket} alt="basket" />
                            <img className="basket-one" src={bbasket} alt="basket-one" />
                        </div>
                         <p > It is worth noting that the products that are input by the farmers and grocers are the ones on display 
                        on the market page for purchase by buyers.
                    </p>
                    </li>
                </ul>
               
                   
            </div>
            <div className="goals">
                <h1>Project Goals</h1>
                <p>Evergreen was created to:</p> 
                <ul>
                  <li>Enable direct communication between food producers and buyers to eliminate the need for middlemen in the trade.
                  </li>
                  <li>Improve food security within the region</li>
                </ul>
                <p className="note">Currently, middlemen are the link between the buyers and the producers, and they dictate food prices. As a result, the farmers do not always get the rightful gains of their hardwork and the consumer ends up paying more. With evergreen in place, the farmer is able to sell their produce at optimum prices, while still reducing the cost to the consumer, hence both parties are satisfied. This in turns results in an improvement of food security. Another benefit is that a wider demographic is reached as it is an online platform that can be accessed remotely. Orders can be made and deliveries can be organized online.</p>
            </div>
            <div className="link">
                <h1>Project Link: </h1>
                    <a href="https://evergreen-farms-limited-git-master-mugishaa77.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg> https://evergreen-farms-limited-git-master-mugishaa77.vercel.app
                    </a>
                

            </div>
        

        
        </div>
        </div>
        </div>

    )
}