import mzr from "./assets/MZR.png";
import backround from "./assets/pjp.png";
import Searchicon from './assets/Searchicon'
import Shoppingbag from "./assets/Shoppingbag";
import Loginicon from "./assets/Loginicone";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
    <>
    <nav className="navbar">
            <div className="overlap">
                <img className="backround" alt="Backround" src={backround} />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <div className="fabar" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                        <a href="/search">
                            <div className="bigsize">
                                <Searchicon />
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="bigsize">
                            <a href="/">Home</a>
                        </div>
                    </li>
                    <li>
                        <div className="bigsize">
                            <a href="/allproducts">All products</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mzrlogo">
                <a href="/">
                    <img
                        className="mzr"
                        alt="MZR"
                        src={mzr} />
                </a>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="/login">
                            <div className="linkss">
                                <ul>
                                    <li>
                                        <Loginicon />
                                    </li>
                                    <li>
                                        <div className="textlistnav">
                                            LOG IN
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/basket">
                            <div className="linkss">
                                <ul>
                                    <li>
                                        <Shoppingbag />
                                    </li>
                                    <li>
                                        <div className="textlistnav">
                                            BASKET
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav className={isOpen ? "menu active" : "menu"} >
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/allproducts">NEW DROP</a>
                </li>
                <li>
                    <a href="/allproducts">All products</a>
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar