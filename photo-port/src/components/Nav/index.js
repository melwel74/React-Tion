import { useState } from 'react';
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
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#Contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#Resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


    );
}

export default Nav;