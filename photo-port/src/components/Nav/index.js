import React from 'react';
import './style.css';
function Nav() {
    return (

        <header>
            <nav>
                <h1 id="about">Welton</h1>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#about">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


    );
}

export default Nav;