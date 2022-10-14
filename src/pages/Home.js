import React from "react";
import { ReactDOM } from "react";
import Navbar from '../components/Navbar';
import hello from '../pl.jpg';
import "./Home.css";
function Home() {
    return (
        <div>
            {/* <div className="home" style={{ backgroundImage: `url(${hello})` }}></div>
            <div className="hello">
            <br/>
            <h1>My World - Home</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br/>
            </div> */}
            <div className="main">
            <div className="home" style={{ backgroundImage: `url(${hello})` }}></div>
            {/* <div className="centered">
                <h1>
                    My World
                </h1>
                <h2>
                    Plants For Everyone
                </h2>
            </div> */}
            <div className="centered">
            <div className="d1">
                <div className="d2">
                    <center>My World</center>
                    <h2>Plants for Everyone</h2>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;